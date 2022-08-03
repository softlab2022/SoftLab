<?php
/**
 * Template Name: Home
 * Description: The template for displaying the Blog index /blog.
 *
 */

get_header();

get_template_part( 'template-parts/home/hero' );
get_template_part( 'template-parts/home/products' );
get_template_part( 'template-parts/home/business' );
get_template_part( 'template-parts/home/features' );
get_template_part( 'template-parts/home/testimonial' );
get_template_part( 'template-parts/home/fun-fact' );
get_template_part( 'template-parts/home/team' );
get_template_part( 'template-parts/home/cta' );
get_template_part( 'template-parts/home/blog' );

?>


<?php
get_footer();
