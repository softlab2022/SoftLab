<?php
/**
 * Template Name: WP Radio User Frontend
 *
 */

get_header('wp-radio');


get_template_part( 'template-parts/wp-radio/user-frontend/hero' );
get_template_part( 'template-parts/wp-radio/user-frontend/features' );
get_template_part( 'template-parts/wp-radio/home/testimonial' );

get_template_part( 'template-parts/wp-radio/user-frontend/cta' );


get_template_part( 'template-parts/wp-radio/user-frontend/pricing' );

?>



<?php
get_footer();