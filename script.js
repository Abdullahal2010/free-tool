const yoututbe = document.querySelector("#youtube"),
  freeFire = document.querySelector("#freeFire"),
  facebook = document.querySelector("#facebook");

const img = document.querySelector("#image");

const youtubeDiv = document.querySelector("#youtubeDiv"),
  freeFireDiv = document.querySelector("#freeFireDiv"),
  facebookDiv = document.querySelector("#facebookDiv");

let btnArray = [yoututbe, freeFire, facebook];
let imgNameArray = ["youtube.png", "freefire.png", "facebook.png"];
let divArray = [youtubeDiv, freeFireDiv, facebookDiv];

for (let i = 0; i <= 2; i++) {
  btnArray[i].addEventListener("click", (e) => {
    removeClassName();
    img.src = `./images/${imgNameArray[i]}`;
    divArray[i].classList.add("shown");
    btnArray[i].classList.add("active");
  });
}

const removeClassName = () => {
  for (let i = 0; i <= 2; i++) {
    divArray[i].classList.remove("shown");
    btnArray[i].classList.remove("active");
  }
};
