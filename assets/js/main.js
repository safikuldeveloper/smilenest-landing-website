/**
* Template Name: SmileNest - Free Bootstrap Medical & Doctor Landing Page Template
* Template URL: https://www.templaterise.com/template/smilenest-free-bootstrap-medical-doctor-landing-page-template
* Updated: February 05 2025 with Bootstrap v5.3.3
* Author: templaterise.com
*/

$(document).ready(function(){

    $( "#datepicker" ).datepicker();

  $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        responsive:{
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

});