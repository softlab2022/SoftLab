<?php
/**
 * Template Name: WP Radio Pricing
 *
 */

get_header('wp-radio');

get_template_part( 'template-parts/wp-radio/pricing/pricing' );
get_template_part( 'template-parts/wp-radio/pricing/industry' );
get_template_part( 'template-parts/wp-radio/pricing/feature-list' );
get_template_part( 'template-parts/wp-radio/pricing/faq' );

get_template_part( 'template-parts/wp-radio/home/testimonial' );
get_template_part( 'template-parts/wp-radio/home/cta' );
?>



<?php
get_footer();