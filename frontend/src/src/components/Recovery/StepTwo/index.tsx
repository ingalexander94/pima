import {
  ChangeEvent,
  ClipboardEvent,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { SettingsContext } from "src/context/settings";
import { getTypedCharacter } from "src/utilities";
import Timer from "../Timer";
import { UIContext } from "src/context/ui";
import styles from "../steps.module.css";
import { useFetch } from "src/hooks";
import { MapiResponse } from "src/interfaces";
import AuthService from "src/services/auth.service";

const StepTwo = () => {
  const settingsContext = useContext(SettingsContext);
  const {
    settingsState: { translated_text },
  } = settingsContext;

  const uiContext = useContext(UIContext);
  const { setStep, uiState, setCode } = uiContext;

  const { callEndpoint } = useFetch();

  const [inputValues, setInputValues] = useState<string[]>(
    new Array(6).fill("")
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [isValidCode, setIsValidCode] = useState<boolean | undefined>(
    undefined
  );

  const digitOne = useRef<HTMLInputElement>(null);
  const digitTwo = useRef<HTMLInputElement>(null);
  const digitThree = useRef<HTMLInputElement>(null);
  const digitFour = useRef<HTMLInputElement>(null);
  const digitFive = useRef<HTMLInputElement>(null);
  const digitSix = useRef<HTMLInputElement>(null);

  const inputRefs: RefObject<HTMLInputElement>[] = [
    digitOne,
    digitTwo,
    digitThree,
    digitFour,
    digitFive,
    digitSix,
  ];

  useEffect(() => {
    const validateCodeAsync = async () => {
      const characters = [...inputValues];
      const code = characters.join("");
      const regex = /^\d{6}$/;
      if (regex.test(code)) {
        setLoading(true);
        const validateCode: MapiResponse = await callEndpoint(
          AuthService.validateCode(uiState.email, code)
        );
        const isValid = validateCode.status;
        setIsValidCode(isValid);
        if (isValid) {
          setTimeout(() => {
            setLoading(false);
            setCode(code);
            setStep(3);
          }, 3000);
        } else {
          setLoading(false);
        }
      }
    };
    validateCodeAsync();
    return () => {};
  }, [inputValues]);

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setIsValidCode(undefined);
    if (value.length <= 2) {
      const newInputValues = [...inputValues];
      const lastCharacter = getTypedCharacter(newInputValues[index], value);
      const isDelete = newInputValues[index].length > lastCharacter.length;
      if (!isDelete) {
        if (newInputValues[index].length === 0) {
          newInputValues[index] = lastCharacter;
        } else {
          if (index + 1 <= 5) {
            newInputValues[index + 1] = lastCharacter;
          } else {
            newInputValues[index] = lastCharacter;
          }
        }
      } else {
        newInputValues[index] = lastCharacter;
      }
      setInputValues(newInputValues);
      if (isDelete) {
        index - 1 >= 0 && inputRefs[index - 1].current?.focus();
      } else {
        index + 1 <= 5 && inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && inputValues[index] === "") {
      if (index - 1 >= 0) {
        inputRefs[index - 1].current?.focus();
      }
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    const pastedText = event.clipboardData.getData("text").trim();
    if (pastedText.length > 1) {
      const codes = Array.from(pastedText.slice(0, 6));
      while (codes.length < 6) {
        codes.push("");
      }
      setInputValues(codes);
    }
  };

  const handleReset = () => {
    setInputValues(new Array(6).fill(""));
    setIsValidCode(undefined);
    inputRefs[0].current?.focus();
  };

  return (
    <form
      className={`animate__animated animate__fadeIn ${styles.step}`}
      autoComplete="off"
    >
      <p>{translated_text.text_recovery}</p>
      <div className={styles.code}>
        <h3>Código de recuperación</h3>
        <div>
          {inputValues.map((value, index) => (
            <input
              className={isValidCode === false ? styles.invalid : ""}
              ref={inputRefs[index]}
              key={index}
              type="text"
              value={value}
              onChange={(e) => handleInputChange(index, e)}
              onPaste={handlePaste}
              onKeyDown={(e) => handleKeyDown(index, e)}
              autoFocus={index === 0}
              disabled={loading || isValidCode}
            />
          ))}
        </div>
        {isValidCode === false && (
          <p>El código que ingresaste es incorrecto, intenta de nuevo</p>
        )}
      </div>
      <Timer isValidCode={isValidCode} handleReset={handleReset} />
    </form>
  );
};

export default StepTwo;
