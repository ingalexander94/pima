import * as Yup from "yup";

interface InitialStateFormForgot {
  new_password: string;
  confirm_password: string;
}

export class ForgotValidatorForm {
  static initialState: InitialStateFormForgot = {
    new_password: "",
    confirm_password: "",
  };

  static validatorSchemaForgot = Yup.object({
    new_password: Yup.string()
      .min(6, "Debe tener mínimo 6 caracteres")
      .max(20, "Debe tener máximo 20 caracteres")
      .required("La nueva contraseña es necesaria"),
    confirm_password: Yup.string()
      .required("Por favor confirma la contraseña")
      .oneOf([Yup.ref("new_password")], "Las contraseñas no coinciden"),
  });
}
