const modal = document.getElementById("tech");
const clickTechDeets = document.getElementById("modal1");
const overlay1 = document.getElementById("overlay1")
const overlay2 = document.getElementById("overlay2")

clickTechDeets.addEventListener("click", function(){
    modal.style.display = "block";
    overlay1.style.display ="block";
})

let modal2 = document.getElementById("travel");
let clickTravelDeets = document.getElementById("modal2");
clickTravelDeets.addEventListener("click", function(){
    modal2.style.display = "block";
    overlay2.style.display ="block";

})
overlay1.addEventListener("click", function(e) {
    if (e.target == overlay1) {
      modal.style.display = "none";
      overlay1.style.display ="none";
    }
  });
  overlay2.addEventListener("click", function(e) {
    if (e.target == overlay2) {
      modal2.style.display = "none";
      overlay2.style.display ="none";
    }
  });