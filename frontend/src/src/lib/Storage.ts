export class CustomStorage {
  static get language() {
    return localStorage.getItem("language") || "es";
  }

  static set language(language: string) {
    localStorage.setItem("language", language);
  }

  static get token() {
    return localStorage.getItem("x-auth-token") || "";
  }

  static set token(token: string) {
    localStorage.setItem("x-auth-token", token);
  }

  static removeToken() {
    localStorage.removeItem("x-auth-token");
  }
}
