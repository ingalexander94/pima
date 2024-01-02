import Swal, { SweetAlertIcon } from "sweetalert2";

export default class Alerts {
  private static toast = Swal.mixin({
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  static showPopup(title: string, text: string) {
    return Swal.fire({
      title,
      text,
      showClass: {
        popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
      },
      hideClass: {
        popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
      },
    });
  }

  static showToast(icon: SweetAlertIcon, title: string) {
    return this.toast.fire({
      icon,
      title,
    });
  }
}
