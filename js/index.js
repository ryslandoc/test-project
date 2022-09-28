const swiperOne = new Swiper('.swiper-header', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});

const swiperTwo = new Swiper('.swiper-featured', {
    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 50,
    loop: true,

    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
});

const swiperThree = new Swiper('.swiper-editors', {
    slidesPerView: 1,
    slidesPerColumnFill: 'column',

    grid: {
        rows: 2,
        fill: "row",
    },

    spaceBetween: 50,

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});
