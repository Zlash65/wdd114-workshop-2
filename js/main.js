let index = 0;

/* DOM ELEMENTS */
const img = document.querySelector("img");
const next = document.getElementById("next-button");
const back = document.getElementById("back-button");
const background = document.getElementById("blur-background");

const imgArray = [
    "assets/img/Deku.jpg",
    "assets/img/Goku.jpg",
    "assets/img/Luffy.jpg",
    "assets/img/Naruto.jpg",
    "assets/img/Osamu.jpg",
];

/* IMAGE CLICK EVENT */
img.addEventListener("click", imageNext);

/* BUTTON CLICK EVENT */
next.addEventListener("click", imageNext);
back.addEventListener("click", imageBack);

/* KEYBOARD BUTTON EVENT */
img.addEventListener("keydown", (event) => {
  if(event.key === " " || event.key === "Enter") {
    imageNext();
  }
});

function imageNext() {
  index += 1;
  img.src = imgArray[index % imgArray.length];
  background.style.backgroundImage = `url(${imgArray[index % imgArray.length]})`;
}

function imageBack() {
    index -= 1;
    if (index < 0) {
      index = imgArray.length - 1;
      img.src = imgArray[index % imgArray.length];
      background.style.backgroundImage = `url(${imgArray[index % imgArray.length]})`;
    } else {
      img.src = imgArray[index % imgArray.length];
      background.style.backgroundImage = `url(${imgArray[index % imgArray.length]})`;
    }
}
