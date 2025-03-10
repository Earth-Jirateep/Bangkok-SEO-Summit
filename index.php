<?php
// โหลดส่วนหัว (header)
get_header();
?>

<main id="main-content">
    <!-- ตรวจสอบว่ามีโพสต์หรือไม่ -->
    <?php if ( have_posts() ) : ?>
        <!-- เริ่มลูป -->
        <?php while ( have_posts() ) : the_post(); ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <!-- แสดงชื่อโพสต์ -->
                <h2><?php the_title(); ?></h2>
                <!-- แสดงเนื้อหาโพสต์ -->
                <?php the_content(); ?>
            </article>
        <?php endwhile; ?>
        <!-- ถ้าไม่มีโพสต์ -->
    <?php else : ?>
        <p>Sorry, no posts matched your criteria.</p>
    <?php endif; ?>
</main>

<?php
// โหลดส่วนท้าย (footer)
get_footer();
?>
