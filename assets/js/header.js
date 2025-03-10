$(document).ready(function() {
    const $backToTopButton = $('#back-to-top');
    let isScrolling;

    // Show the button when scrolling
    $(window).scroll(function() {
        $backToTopButton.addClass('show');

        // Clear previous timeout, if any
        clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function() {
            $backToTopButton.removeClass('show');
        }, 2000); // Adjust the time (1000ms = 1 second) as needed
    });

    // Scroll to top when the button is clicked
    $backToTopButton.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
        return false;
    });
});

jQuery(document).ready(function($) {
    // คลิกที่ลิงก์ Speakers เพื่อเปิด/ปิด dropdown
    $('.page-item-83 > a').on('click', function(e) {
        e.preventDefault(); // ป้องกันการทำงานของลิงก์ปกติ
        
        var $dropdown = $(this).siblings('.children'); // หาตัว dropdown
        
        $('.children').not($dropdown).slideUp(); // ซ่อน dropdown อื่น ๆ ที่เปิดอยู่
        $dropdown.slideToggle(); // เปิดหรือปิด dropdown นี้
        
        // เปลี่ยนสีของลิงก์เมื่อ dropdown เปิด
        $(this).toggleClass('active'); 
        
        // หมุน pseudo-element ::before
        $(this).parent().toggleClass('rotate-icon');
    });

    // คลิกที่ส่วนอื่นของหน้าจอเพื่อปิด dropdown
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.page-item-83').length) {
            $('.children').slideUp(); // ซ่อน dropdown ถ้าคลิกที่ส่วนอื่น
            
            // รีเซ็ตสีของลิงก์และหมุน pseudo-element กลับ
            $('.page-item-83 > a').removeClass('active');
            $('.page-item-83').removeClass('rotate-icon');
        }
    });
});


$(document).ready(function() {
    $(".hamburger-menu").click(function() {
        $(this).toggleClass("active");
        $(".nav-mobile-wrapper").toggleClass("active");
    });
});


