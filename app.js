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
