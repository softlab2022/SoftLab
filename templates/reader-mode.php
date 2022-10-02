<?php
/**
 * Template Name: Reader Mode Landing Page
 *
 */

get_header( 'reader-mode' );

get_template_part( 'template-parts/reader-mode/home/hero' );
get_template_part( 'template-parts/reader-mode/home/feature' );
get_template_part( 'template-parts/reader-mode/home/ex-feature' );
get_template_part( 'template-parts/reader-mode/home/compatibility' );
get_template_part( 'template-parts/reader-mode/home/testimonial' );
get_template_part( 'template-parts/reader-mode/home/cta' );

?>


<?php
get_footer();