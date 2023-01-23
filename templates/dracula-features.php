<?php
/**
 * Template Name: Dracula Features Page
 *
 */

get_header('dracula');

get_template_part( 'template-parts/dracula/dracula-features/feature-hero' );
get_template_part( 'template-parts/dracula/dracula-features/dracula-feature' );
get_template_part( 'template-parts/dracula/dracula-features/single-feature' );
get_template_part( 'template-parts/dracula/home/compare' );
get_template_part( 'template-parts/dracula/home/compatibility' );
get_template_part( 'template-parts/dracula/home/cta' );

?>


<?php
get_footer();