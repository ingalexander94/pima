import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
import { publicRoutes } from "src/models";
import { MapiResponse, ValidateInput } from "src/interfaces";
import { useFetch } from "src/hooks";
import { RecoveryValidator } from "src/validators";
import { SettingsContext } from "src/context/settings";
import { UIContext } from "src/context/ui";
import AuthService from "src/services/auth.service";
import TextInfo from "src/components/UI/TextInfo";
import styles from "../steps.module.css";

const StepOne = () => {
  const settingsContext = useContext(SettingsContext);
  const {
    settingsState: { translated_text },
  } = settingsContext;

  const uiContext = useContext(UIContext);
  const { callEndpoint } = useFetch();
  const { setStep, setEmail: setUIEmail } = uiContext;
  const [loading, setLoading] = useState<boolean>(false);

  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  const [email, setEmail] = useState<ValidateInput>({
    value: "",
    error: "",
    loading: false,
  });

  const debouncedValidateEmail = useRef(
    debounce(async (emailValue: string) => {
      setEmail((current) => ({ ...current, value: emailValue, loading: true }));
      const validateEmail: MapiResponse = await callEndpoint(
        AuthService.validateEmail(emailValue)
      );
      const isValid = validateEmail.status;
      setIsEmailValid(isValid);
      setEmail((current) => ({
        ...current,
        loading: false,
        error: !isValid ? "El correo no existe" : "",
      }));
    }, 1000)
  );

  useEffect(() => {
    return () => {
      debouncedValidateEmail.current.cancel();
    };
  }, []);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    const isValidFormat = RecoveryValidator.validateEmail(newEmail);
    let error = !newEmail
      ? "El correo es necesario"
      : !isValidFormat
      ? "No es un correo válido"
      : "";
    setIsEmailValid(false);
    setEmail((current) => ({ ...current, value: newEmail, error }));
    if (isValidFormat) debouncedValidateEmail.current(newEmail);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const sendEmailRecovery: MapiResponse = await callEndpoint(
      AuthService.recoveryPassword(email.value)
    );
    if (!sendEmailRecovery.status) alert(sendEmailRecovery.error);
    else {
      setStep(2);
      setUIEmail(email.value);
    }
    setLoading(false);
  };

  return (
    <form
      className={`animate__animated animate__fadeIn ${styles.step}`}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h3 className={styles.title_recovery}>Recuperar contraseña</h3>
      <p>{translated_text.text_recovery}</p>
      <div className={styles.authentication__input}>
        <label htmlFor="user_email">Correo electrónico</label>
        <input
          type="email"
          id="user_email"
          className={email.error ? "invalid" : ""}
          name="user_email"
          autoComplete="off"
          placeholder={translated_text.write_email}
          value={email.value}
          onChange={handleEmailChange}
          disabled={email.loading}
        />
        <TextInfo loading={email.loading} error={email.error} />
      </div>
      <button
        className={loading ? "loading" : ""}
        type="submit"
        disabled={!isEmailValid}
      >
        Enviar código de recuperación
        {loading && <i className="fas fa-spinner fa-pulse"></i>}
      </button>
      <Link className="btn_secondary" to={`/${publicRoutes.LOGIN}`}>
        Regresar
      </Link>
    </form>
  );
};

export default StepOne;
