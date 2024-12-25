import 'slick-carousel';

export default class Slick {
    constructor() {
        this.init();
    }

    aboutSliderInit() {
        $(document).find('.about-history').each(function () {
            const $slider = $(this);
            const $prev = $(this).closest('section').find('.slick__prev');
            const $next = $(this).closest('section').find('.slick__next');
            const $progress = $(this).closest('section').find('.slider-progress');
            $slider.slick({
                slidesToShow: 4,
                centerMode: true,
                arrows: true,
                prevArrow: $prev,
                nextArrow: $next,
                dots: true,
                appendDots: $progress,
                responsive: [
                    {
                        breakpoint: 2000,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 601,
                        settings: {
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 450,
                        settings: {
                            centerMode: false,
                            slidesToShow: 1
                        }
                    },
                ]
            });
        });
    }
    reviewsSliderInit() {
        $(document).find('.reviews-slider').each(function () {
            const $slider = $(this);
            const $prev = $(this).closest('section').find('.slick__prev');
            const $next = $(this).closest('section').find('.slick__next');
            const $progress = $(this).closest('section').find('.slider-progress');
            $slider.slick({
                slidesToShow: 4,
                centerMode: true,
                arrows: true,
                prevArrow: $prev,
                nextArrow: $next,
                dots: true,
                appendDots: $progress,
                responsive: [
                    {
                        breakpoint: 2000,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 450,
                        settings: {
                            centerMode: false,
                            slidesToShow: 1
                        }
                    },
                ]
            });
        });
    }
    gallerySliderInit() {
        $(document).find('.gallery').each(function () {
            const $slider = $(this);
            const $prev = $(this).closest('section').find('.slick__prev');
            const $next = $(this).closest('section').find('.slick__next');
            const $progress = $(this).closest('section').find('.slider-progress');
            $slider.slick({
                slidesToShow: 4,
                centerMode: true,
                arrows: true,
                prevArrow: $prev,
                nextArrow: $next,
                dots: true,
                appendDots: $progress,
                responsive: [
                    {
                        breakpoint: 2000,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 1441,
                        settings: {
                            centerMode: false,
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 901,
                        settings: {
                            centerMode: false,
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            centerMode: true,
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 361,
                        settings: {
                            centerMode: false,
                            slidesToShow: 1
                        }
                    },
                ]
            });
        });
    }


    init() {
        this.aboutSliderInit();
        this.reviewsSliderInit();
        this.gallerySliderInit();
    }
}

