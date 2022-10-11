window.addEventListener("load", changeQuizImgBG);
window.addEventListener("resize", changeQuizImgBG);

function changeQuizImgBG() {
  const bgImage = document.querySelector("#quiz__container-bg");

  if (window.matchMedia("(min-width:756px)").matches) {
    console.log("Vinduet er >756px");
    bgImage.srcset = "images/ved-front1.jpg";
  } else {
    console.log("Vinduet er <756px");
    bgImage.srcset = "images/test-front.png";
  }
}
