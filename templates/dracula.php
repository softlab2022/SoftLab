<?php
/**
 * Template Name: Dracula Landing Page
 *
 */

get_header('dracula');

get_template_part( 'template-parts/dracula/home/hero' );
get_template_part( 'template-parts/dracula/home/feature' );
get_template_part( 'template-parts/dracula/home/more-feature' );
get_template_part( 'template-parts/dracula/home/dark-mode-solution' );
// get_template_part( 'template-parts/dracula/home/flexible-price' );
get_template_part( 'template-parts/dracula/home/compare' );
get_template_part( 'template-parts/dracula/home/testimonial' );
get_template_part( 'template-parts/dracula/home/compatibility' );
get_template_part( 'template-parts/dracula/home/cta' );

?>


<?php
get_footer();