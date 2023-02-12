//const button = document.getElementById('bgc');
//button.addEventListener('click' , function(){
  //  const r = Math.floor(Math.random() * 255);
    //const g = Math.floor(Math.random() * 255);
    //const b = Math.floor(Math.random() * 255);

   // const newColor = `rgb(${r} , ${g} , ${b})`;
    //document.body.style.backgroundColor = newColor;

//})




////////////code starts here ////////////////////



  /////////////  carousel Effect          ////////////

  var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.querySelectorAll(".slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.left = "100%";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].style.left = "0";
  setTimeout(showSlides, 2000);
}

///////////////////// Watsapp code////////
document.querySelector('.whatsapp-button').addEventListener('click', function(e) {
    if (!navigator.onLine) {
      e.preventDefault();
      alert('Please check your internet connection and try again.');
    }
  });

  //////////////// cta /////////////

  document.getElementById("buyBut").addEventListener("click", function() {
    window.location.href = "demo.html"; });