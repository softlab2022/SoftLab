<?php

/**
 * Template Name: About Us Page
 *
 */

get_header();

?>

<section class="title-header">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-lg-7 m-auto">
				<div class="header-content text-center">
					<h2>About Us</h2>
					<p>Helping businesses succeed online through simple, affordable WordPress solutions that actually work.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<?php
get_template_part('template-parts/about/about-hero');
get_template_part('template-parts/about/journey');
get_template_part('template-parts/about/global-recognition');
get_template_part('template-parts/home/fun-fact');
get_template_part('template-parts/about/team');
?>


<?php
get_footer();
