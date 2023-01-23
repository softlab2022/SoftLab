<?php
/**
 * The Template for displaying all single posts.
 */

get_header();

?>

<?php

if ( have_posts() ) {
	while ( have_posts() ) {
		the_post();

		get_template_part( 'template-parts/single' );
	}
}

get_footer();
