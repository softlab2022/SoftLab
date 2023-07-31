<?php
/**
 * Template Name: Dracula Pricing
 *
 */

get_header('dracula');

get_template_part( 'template-parts/dracula/pricing/pricing-hero' );
get_template_part( 'template-parts/dracula/pricing/pricing' );
// get_template_part( 'template-parts/dracula/home/compare' );
get_template_part( 'template-parts/dracula/pricing/compare-plans' );
get_template_part( 'template-parts/dracula/pricing/industry' );
get_template_part( 'template-parts/dracula/pricing/live-demo' );
get_template_part( 'template-parts/dracula/pricing/faq' );
get_template_part( 'template-parts/dracula/home/testimonial' );
get_template_part( 'template-parts/dracula/home/cta' );


?>



<?php
get_footer();