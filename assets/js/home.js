$(document).ready(function() {
    // Initially hide the third schedule wrapper
    $('.schedule-wrapper-container .schedule-wrapper:nth-of-type(2)').hide();

    // Click event for Day 1 button
    $('.day-1').click(function() {
        // Toggle classes for buttons
        $('.day-2').removeClass('switch-background');
        $('.day-2 .day-text').removeClass('switch-text');
        $('.day-1').addClass('switch-background');
        $('.day-1 .day-text').addClass('switch-text');

        // Show and hide schedule wrappers
        $('.schedule-wrapper-container .schedule-wrapper:nth-of-type(2)').hide();
        $('.schedule-wrapper-container .schedule-wrapper:nth-of-type(1)').show();
    });

    // Click event for Day 2 button
    $('.day-2').click(function() {
        // Toggle classes for buttons
        $('.day-1').removeClass('switch-background');
        $('.day-1 .day-text').removeClass('switch-text');
        $('.day-2').addClass('switch-background');
        $('.day-2 .day-text').addClass('switch-text');

        // Show and hide schedule wrappers
        $('.schedule-wrapper-container .schedule-wrapper:nth-of-type(1)').hide();
        $('.schedule-wrapper-container .schedule-wrapper:nth-of-type(2)').show();
    });
});


$(document).ready(function(){
    $('.event-numbers-slide').slick({
        infinite: false,
        arrows: true,
        draggable: false
    });
});


$(document).ready(function(){
    $('.content-blog-wrapper').slick({
        slidesToShow: 3.5,
        infinite: false,
        dots: true,
        arrows: false,
        draggable: false,
        responsive: [
            {
              breakpoint: 431,
              settings: {
                slidesToShow: 1.5,
                infinite: false,
                dots: true,
                arrows: false,
                draggable: false,
              }
            }
        ]
    });

    // เพิ่ม Animation ให้กับจุดเมื่อมีการเปลี่ยน Slide
    $('.content-blog-wrapper').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        let $dots = $(this).find('.slick-dots li');
        $dots.removeClass('slick-active'); // ลบคลาสทั้งหมดออกก่อน
        $dots.eq(nextSlide).addClass('slick-active'); // เพิ่มคลาสให้กับจุดใหม่
    });
});


$(document).ready(function(){
    $('.section-location-wrapper').slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        swipe: true,
        swipeToSlide: true,
        dots: true,
        arrows: false,
        focusOnSelect: true
    });
});

          
$(document).ready(function() {
    $('.section-faqs-box').on('click', function() {
        // ถ้ามีการคลิก element เดียวกันจะทำการลบ class active
        $(this).toggleClass('active');
        // ลบ class active ออกจาก element อื่น ๆ
        $('.section-faqs-box').not(this).removeClass('active');
    });
});


$(document).ready(function() {
    function initializeSlick() {
        if ($(window).width() < 431) {
            if (!$('.speakers-wrapper').hasClass('slick-initialized')) {
                $('.speakers-wrapper').slick({
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                });
            }
        } else {
            if ($('.speakers-wrapper').hasClass('slick-initialized')) {
                $('.speakers-wrapper').slick('unslick');
            }
        }
    }

    initializeSlick();

    $(window).on('resize', function() {
        initializeSlick();
    });
});

$(document).ready(function() {
    function initializeSlick() {
        if ($(window).width() < 431) {
            if (!$('.ticket-price-wrapper').hasClass('slick-initialized')) {
                $('.ticket-price-wrapper').slick({
                    centerMode: true,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1.5,
                });
            }
        } else {
            if ($('.ticket-price-wrapper').hasClass('slick-initialized')) {
                $('.ticket-price-wrapper').slick('unslick');
            }
        }
    }

    initializeSlick();

    $(window).on('resize', function() {
        initializeSlick();
    });
});


