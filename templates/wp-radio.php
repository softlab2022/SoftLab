<?php
/**
 * Template Name: WP Radio Page
 *
 * Page template for WP Radio Plugin
 */

get_header( 'wp-radio' );


get_template_part( 'template-parts/wp-radio/home/hero' );
get_template_part( 'template-parts/wp-radio/home/features' );
get_template_part( 'template-parts/wp-radio/home/extra-features' );
get_template_part( 'template-parts/wp-radio/home/testimonial' );
get_template_part( 'template-parts/wp-radio/home/fun-fact' );
get_template_part( 'template-parts/wp-radio/home/addons' );
get_template_part( 'template-parts/wp-radio/home/cta' );

?>


<?php
get_footer();