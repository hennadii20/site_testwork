
//             First slider

let offset = 0;
const sliderLine = document.querySelector('.design__slider-line');

document.querySelector(".slider-prev").addEventListener('click', function (){
    offset = offset - 315;
    if(offset < 0){
        offset = 1260;
    } 
    sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider-next").addEventListener('click', function (){
    offset = offset + 315;
    if(offset > 1260){
        offset = 0;
    } 
    sliderLine.style.left = -offset + "px";
});

//             Second slider

$(document).ready(function () {
    $(".our__comunity-slider").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        swipeToSlide: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        focusOnSelect: true,
        infinite: true,
        speed: 1000,
        responsive: [
             	    {
             	      breakpoint: 768,
            	      settings: {
            	        slidesToShow: 1,
             	      }
                     },
        ]
    });
});

const url = `https://pixabay.com/api/?key=20707927-2d1a05c8f3ed1bf9bb924584c&q=car`;

$.getJSON(url, function (json) {
    var imgList = "";
    $.each(json.hits, function () {
    imgList += '<img  src= "' + this.previewURL + '">';
    });
    $('.our__comunity-slider').slick('slickAdd', imgList);
    console.log(imgList);
});

//              Toggle menu

const buttonToggle = document.querySelector("#dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

function toggleDropdown (){
    if (buttonToggle.classList.contains("show")){
        buttonToggle.classList.remove("show");
        
    }else{
        buttonToggle.classList.add("show");
    }

    if (dropdownMenu.classList.contains("show")){
        dropdownMenu.classList.remove("show");
        
    }else{
        dropdownMenu.classList.add("show");
    }
}

function closeMenu(){
    buttonToggle.classList.remove("show");
    dropdownMenu.classList.remove("show");
} 

dropdownMenu.addEventListener("mouseup", closeMenu);
dropdownMenu.addEventListener("mouseleave", closeMenu);
buttonToggle.addEventListener("click", toggleDropdown);

//              Modal window

const modal = document.getElementById("modalWindow");
const button = document.getElementById("submit-btn");
const crossButton = document.getElementsByClassName("close")[0];
button.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflowY = 'hidden';
}

crossButton.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflowY = 'scroll';
}

window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
  }
}
