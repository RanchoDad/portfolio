// Button at the bottom to scroll to the top
const scrollBtn = document.getElementById("topbutton");

scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// 2 modals that reveal info about industry related work experience, their overlays and the closing features
const modal = document.getElementById("tech");
const modal2 = document.getElementById("travel");
const clickTechDeets = document.getElementById("modal1");
const clickTravelDeets = document.getElementById("modal2");
const overlay1 = document.getElementById("overlay1");
const overlay2 = document.getElementById("overlay2");
const closeButton = document.querySelector(".closebutton");
const closeButton2 = document.querySelector(".closebutton2");

clickTechDeets.addEventListener("click", function () {
  modal.style.display = "block";
  overlay1.style.display = "block";
});

clickTravelDeets.addEventListener("click", function () {
  modal2.style.display = "block";
  overlay2.style.display = "block";
});
overlay1.addEventListener("click", function (e) {
  if (e.target === overlay1) {
    modal.style.display = "none";
    overlay1.style.display = "none";
  }
});
overlay2.addEventListener("click", function (e) {
  if (e.target === overlay2) {
    modal2.style.display = "none";
    overlay2.style.display = "none";
  }
});
closeButton.addEventListener("click", function (e) {
  if (e.target === closeButton) {
    modal.style.display = "none";
    overlay1.style.display = "none";
  }
});

closeButton2.addEventListener("click", function (e) {
  if (e.target === closeButton2) {
    modal2.style.display = "none";
    overlay2.style.display = "none";
  }
});

// toggle dark mode

const ltBtn = document.getElementById("ltcolorbtn");
const darkBtn = document.getElementById("drkcolorbtn");
const darkNav = document.getElementById("nav");
const darkMain = document.getElementById("mainsection");
const bgPicContainer = document.getElementById("bio-section");
const aboutDark = document.getElementById("aboutme");
const resumeDark = document.getElementById("resume");
const projectsDark = document.getElementById("projects");
const resLink =document.querySelector('.resumelink');

darkBtn.addEventListener("click", function () {
  aboutDark.classList.remove("about-back-img");
  aboutDark.classList.add("main-dark");
  resumeDark.classList.remove("resume-back-img");
  resumeDark.classList.add("main-dark");
  projectsDark.classList.remove("about-back-img");
  projectsDark.classList.add("main-dark");
  bgPicContainer.classList.remove("background-img-picture-container");
  bgPicContainer.classList.add("main-dark");
  darkNav.classList.add("nav-dark");
  resLink.style.color = "cornsilk";
});

ltBtn.addEventListener("click", function () {
  aboutDark.classList.add("about-back-img");
  aboutDark.classList.remove("main-dark");
  resumeDark.classList.add("resume-back-img");
  resumeDark.classList.remove("main-dark");
  projectsDark.classList.add("about-back-img");
  projectsDark.classList.remove("main-dark");
  bgPicContainer.classList.add("background-img-picture-container");
  bgPicContainer.classList.remove("main-dark");
  darkNav.classList.remove("nav-dark");
  resLink.style.color = "darkslategray";
});
