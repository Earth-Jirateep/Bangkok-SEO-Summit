<?php
function my_custom_menu_args($args) {
    // ตรวจสอบว่าไม่มีการจำกัดประเภทของรายการที่แสดงที่นี่
    return $args;
}
add_filter('wp_nav_menu_args', 'my_custom_menu_args');
?>


