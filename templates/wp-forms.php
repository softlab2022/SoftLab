<?php
/**
 * Template Name: WP Form Page
 *
 * Page template for WP From Plugin
 */

get_header( 'wp-forms' );


get_template_part( 'template-parts/wp-forms/home/hero' );
get_template_part( 'template-parts/wp-forms/home/feature' );
get_template_part( 'template-parts/wp-forms/home/testimonial' );
get_template_part( 'template-parts/wp-forms/home/wp-forms-cta' );

?>


<?php
get_footer();