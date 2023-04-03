let modal = document.getElementById("tech");
let clickTechDeets = document.getElementById("modal1");
clickTechDeets.addEventListener("click", function(){
    modal.style.display = "block"
})

let modal2 = document.getElementById("travel");
let clickTravelDeets = document.getElementById("modal2");
clickTravelDeets.addEventListener("click", function(){
    modal2.style.display = "block"
})

window.addEventListener("click", function(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });

  window.addEventListener("click", function(e) {
    if (e.target == modal2) {
      modal2.style.display = "none";
    }
  });