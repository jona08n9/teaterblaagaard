window.addEventListener("load", changeQuizImgBG);
window.addEventListener("load", changeTitle);
window.addEventListener("resize", changeQuizImgBG);

function changeQuizImgBG() {
  const bgImage = document.querySelector("#quiz__container-bg");

  if (window.matchMedia("(min-width:756px)").matches) {
    console.log("Vinduet er >756px");
    bgImage.srcset = "images/ved-front1.webp";
  } else {
    console.log("Vinduet er <756px");
    bgImage.srcset = "images/test-front.webp";
  }
}

titleTimeout = setTimeout(changeTitle, 650);

titleTimeout();

function changeTitle() {
  console.log("Skifter title");

  const googleTitle = document.querySelector(".WidgetTitle__Header-sc-ruy1gu-2.jfpmQZ");
  googleTitle.textContent = "Det siger tidligere besoegende";
}
