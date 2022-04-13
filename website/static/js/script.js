$(document).ready( function(){ 

  
  let slideIndex = 1;
  $(".slideshow-container").each( function(){
    let cat = $(this)[0].id
    showSlides(slideIndex, cat)
  });

  $(".prev").click(function() {
    let cat = $(this).parent()[0].id
    showSlides(slideIndex -= 1, cat)
  })
  $(".next").click(function() {
    let cat = $(this).parent()[0].id
    showSlides(slideIndex += 1, cat)
  })

  $('.dot').click(function(){
    let num = $(this).data('num')
    let cat = $(this).parents()[1].id
    showSlides(slideIndex = num, cat)
  })

  function showSlides(n, cat) {
    let i;
    let slides = document.getElementById(cat).getElementsByClassName("slide");
    let dots = document.getElementById(cat).getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }

  console.log($('.slideshow-container img' ))
})