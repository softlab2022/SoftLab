<?php
/**
 * Template Name: Not found
 * Description: Page template 404 Not found.
 *
 */

get_header();

$search_enabled = get_theme_mod( 'search_enabled', '1' ); // Get custom meta-value.
?>
	<section id="error-page">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg m-auto">
					<div class="error-head text-center">
						<h1>404</h1>
						<span>Page Not Found</span>
					</div>
							<div class="featuer-item-img documents text-center">
								<img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/error-frame.png" alt="file-browser-img">
							</div>

							<div class="error-but text-center">
								<a href="http://192.168.0.102:3000/"><i class="fa-solid fa-arrow-left"></i>Go to home</a>
							</div>
				</div>



			</div>

		</div>
	</section>
<?php
get_footer();
