<?php
/**
 * Template Name: Reader Mode Pricing
 *
 */

get_header( 'reader-mode' );


get_template_part( 'template-parts/reader-mode/pricing/pricing' );
get_template_part( 'template-parts/reader-mode/pricing/industry' );
get_template_part( 'template-parts/reader-mode/pricing/feature-list' );
get_template_part( 'template-parts/reader-mode/pricing/faq' );

get_template_part( 'template-parts/reader-mode/home/testimonial' );
get_template_part( 'template-parts/reader-mode/home/cta' );


get_footer();