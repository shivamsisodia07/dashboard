// var multipleCardCarousel = document.querySelector(
//     "#carouselExampleControls"
// );
// if (window.matchMedia("(min-width: 768px)").matches) {
//     var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//         interval: false,
//     });
//     var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//     var cardWidth = $(".carousel-item").width();
//     var scrollPosition = 0;
//     $("#carouselExampleControls .carousel-control-next").on("click", function() {
//         if (scrollPosition < carouselWidth - cardWidth * 4) {
//             scrollPosition += cardWidth;
//             $("#carouselExampleControls .carousel-inner").animate({ scrollLeft: scrollPosition },
//                 600
//             );
//         }
//     });
//     $("#carouselExampleControls .carousel-control-prev").on("click", function() {
//         if (scrollPosition > 0) {
//             scrollPosition -= cardWidth;
//             $("#carouselExampleControls .carousel-inner").animate({ scrollLeft: scrollPosition },
//                 600
//             );
//         }
//     });
// } else {
//     $(multipleCardCarousel).addClass("slide");
// }

// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//         effect: "fade",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });

// slick slider


//slick slider

// search button
const searchButton = document.getElementById('search-button');


const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
    const inputValue = searchInput.value;
    alert(inputValue);
});