<?php

$features = [
	'embed-google-drive-media-in-wordPress-content'                => [
		'title'       => 'Embed Google Drive Media in WordPress Content',
		'description' => '
		This feature allows users to seamlessly integrate and showcase their Google Drive files directly within WordPress content. This also eliminates the need for manual downloads or uploads, enabling users to embed documents, images, or any media stored on Google Drive directly into their WordPress posts or pages
		',
	],
	'create-google-drive-image-galleries'                => [
		'title'       => 'Create Google Drive Image Galleries',
		'description' => '
		This feature allow users to effortlessly curate visually stunning galleries directly from their Google Drive media and display inside website content. So there is no need of manual image uploads to create a basic looking gallery. This feature will turn Google Drive medias into an organized and visually appealing format within the WordPress environment
		',
	],
	'import-google-drive-media-to-wordpress-media-library'             => [
		'title'       => 'Import Google Drive Media to WordPress Media Library',
		'description' => '
		The feature offers a seamless solution for incorporating media stored on Google Drive directly into the WordPress Media Library. Users can effortlessly bring in images, documents, and other media files from Google Drive, eliminating the need for manual uploads. All in all this will turn into hassle less media management in the end.

		',
	],
	'export-wordpress-media-to-google-drive'               => [
		'title'       => 'Export WordPress Media to Google Drive',
		'description' => '
		This export feature allow users to effortlessly transfer their WordPress media assets to Google Drive with a simple and efficient process. This functionality simplify content management by enabling users to export images, documents, and other media files from the WordPress Media Library directly to their Google Drive storage.
		',
	],
	'move-media-from-wordpress-media-library-to-google-drive'               => [
		'title'       => 'Move Media from WordPress Media Library to Google Drive',
		'description' => '
		This moving feature provides users with a straightforward and efficient method to relocate media assets stored in the WordPress Media Library to their Google Drive. Users can shift images, documents, and other media files from WordPress to Google Drive with just a few clicks. 
		',
	],
	'google-drive-folder-management'    => [
		'title'       => 'Google Drive Folder Management',
		'description' => '
		The management feature allow users to efficiently organize and manage their Google Drive folders directly within the WordPress Media Library. This functionality provides a seamless integration between the two platforms, allowing users to create, edit, and organize Google Drive folders without leaving the WordPress environment.
		',
	],
	'google-drive-wordpress-media-library-synchronization' => [
		'title'       => 'Google Drive & WordPress Media Library Synchronization',
		'description' => '
		The Synchronization feature establishes a seamless and automatic connection between Google Drive and the WordPress Media Library. This functionality ensures that changes made to media assets in one platform are reflected in the other, offering real-time consistency.
		',
	],
];

?>


<section id="media-library-features">


	<?php

	$i = 0;
	foreach ($features as $key => $feature) {

		$is_odd = $i % 2 == 0;

	?>

		<div class="feature-item feature-<?php echo $key; ?>">
			<div class="container">
				<div class="row feature-items  flex-column-reverse <?php echo $is_odd ? 'flex-md-row' : 'flex-md-row-reverse'; ?>  align-items-center">

					<div class="col-md-6">
						<div class="feature-content">
							<h2><?php echo $feature['title']; ?></h2>
							<?php if ( wp_is_mobile() ) { ?>
							<div class="feature-img-mobile text-center">
								<img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/media-library-addon/features/<?php echo $key; ?>.png" alt="<?php echo $feature['title']; ?>">
							</div>
							<?php } ?>
							<p><?php echo $feature['description']; ?></p>
						</div>
					</div>

					<div class="col-md-6 m-auto">
						<div class="feature-img text-center">
							<img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/google-drive/media-library-addon/features/<?php echo $key; ?>.png" alt="<?php echo $feature['title']; ?>">
						</div>
					</div>

				</div>
			</div>
		</div>

	<?php
		$i++;
	} ?>

</section>