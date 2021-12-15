const Btn = document.getElementsByTagName("button");
let color;

const green = document.querySelector(".green").addEventListener("click", () => {
  color = `green`;
});
const black = document.querySelector(".black").addEventListener("click", () => {
  color = `black`;
});

const yellow = document
  .querySelector(".yellow")
  .addEventListener("click", () => {
    color = `yellow`;
  });
const purple = document
  .querySelector(".purple")
  .addEventListener("click", () => {
    color = `purple`;
  });
const orange = document
  .querySelector(".orange")
  .addEventListener("click", () => {
    color = `orange`;
  });
const red = document.querySelector(".red").addEventListener("click", () => {
  color = `red`;
});
const blue = document.querySelector(".blue").addEventListener("click", () => {
  color = `blue`;
});
const white = document.querySelector(".white").addEventListener("click", () => {
  color = `white`;
});

const alertModal = document.querySelector(".alert");

function getColor() {
  for (let i = 0; i < Btn.length; i++) {
    Btn[i].addEventListener("click", () => {
      if ((Btn[i].style.background = color)) {
        return true;
      } else {
        alertModal.classList.add("active");
        setTimeout(() => {
          alertModal.classList.remove("active");
        }, 1050);
      }
    });
  }
}
getColor();
