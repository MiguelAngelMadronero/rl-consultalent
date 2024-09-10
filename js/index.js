const scrollRevealOption = {
    origin:"bottom",
    distance:"50px", 
    duration:1000,
};

ScrollReveal().reveal('.client__card',{
    ...scrollRevealOption,
    interval:500,
});

const swiper = new Swiper(".swiper", {
    slidesPerView:3,
    spaceBetween:20,
    loop:true,
})

