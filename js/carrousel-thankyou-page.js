$('.ui-block-06.team #team-carousal').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2,
            margin:10
        },
        1200:{
            items:3,
            margin:15
        },
        1300: {
            margin:30
        }
    }
});
