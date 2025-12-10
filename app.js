let button = document.querySelector(".button");
let input = document.querySelector("#inputurl");
let year = document.querySelector(".year");
let date = new Date();
year.textContent = date.getFullYear();

class QRManager {
  constructor(elementID) {
    this.container = document.getElementById(elementID);

    this.qrLibrary = new QRCode(this.container, {
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
    });
  }

  generate(text) {
    if (!text || text.trim() === "") {
      let feedback = document.querySelector(".submitfeedback");
      feedback.textContent = "Please submit an actual URL";
      feedback.style.color = "oklch(63.7% 0.237 25.331)";
      return;
    } else {
      let feedback = document.querySelector(".submitfeedback");
      feedback.textContent = "Success! Try to submit a new URL";
      feedback.style.color = "oklch(76.8% 0.233 130.85)";
    }
    this.qrLibrary.makeCode(text);
  }
}

let qrcode = new QRManager("qrcode");

button.addEventListener("click", () => {
  let text = input.value;
  qrcode.generate(text);
});
