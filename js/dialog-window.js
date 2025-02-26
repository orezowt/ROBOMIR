async function f(){
  const isBrowserNotSupportDialog = window.HTMLDialogElement === undefined;

  if (isBrowserNotSupportDialog) {
    const dialogElement = document.getElementById("modal-registration");

    const { default: polyfill } = require("dialog-polyfill/dialog-polyfill");

    polyfill.registerDialog(dialogElement);
  }
}

f()