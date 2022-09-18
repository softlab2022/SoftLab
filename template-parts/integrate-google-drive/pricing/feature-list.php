<?php
$features = [
	[
		'title'       => 'Easy setup',
		'description' => 'You don’t need to create any custom Google app. You can sign-in to your Google account directly using this plugin.',
		'pro'         => true,
	],
	[
		'title'       => 'File Browser',
		'description' => 'Display your cloud files via a File Browser. The file browser can have a grid thumbnail and list view and can have a file uploader.',
		'pro'         => true,

	],
	[
		'title'       => 'Embed Document',
		'description' => 'Embed any Google Drive files to your page/ post.',
		'pro'         => true,

	],
	[
		'title'       => 'File Uploader',
		'description' => 'A standalone uploader box which allows You and also your users can upload files directly to your Google Drive account from your site. You can upload unlimited size of files.',
		'pro'         => true,

	],
	[
		'title'       => 'Classic Editor Integration',
		'description' => 'You can add any Google Drive module, embed documents and insert file view and download links using the Google Drive button on the classic editor.',
		'pro'         => true,

	],
	[
		'title'       => 'Gutenberg Integration',
		'description' => 'You can add any Google Drive module, embed documents and insert file view and download links using the Gutenberg blocks.',
		'pro'         => true,

	],
	[
		'title'       => 'Elementor Integration',
		'description' => 'You can add any Google Drive module, embed documents and insert file view and download links using Elementor widgets.',
		'pro'         => true,

	],
	[
		'title'       => 'File Search',
		'description' => 'Basically same as the file browser, But initially will show a search box. Users can search any Google Drive files from your website using this module.',
		'pro'         => true,

	],
	[
		'title'       => 'File View Links',
		'description' => 'Insert direct links to view any Google Drive file.',
		'pro'         => true,

	],
	[
		'title'       => 'File Download Links',
		'description' => 'Insert any Google Drive file download link to yor page/ post.',
		'pro'         => true,

	],
	[
		'title'       => 'Audio & Video Player',
		'description' => 'Play audio and video in a single player using this module. The audio and video playlist will be created from the selected folders that you select.',
		'pro'         => false,

	],
	[
		'title'       => 'Photo Gallery',
		'description' => 'Display your images in a lightbox grid photo gallery. The gallery will be automatically created from the selected folders.',
		'pro'         => false,

	],
	[
		'title'       => 'Media Importer',
		'description' => 'Import the cloud media files to the media library by one click.',
		'pro'         => false,

	],
	[
		'title'       => 'Private Folders',
		'description' => 'Using Private Folders you can easily and securely share your Google Drive documents with your users/clients. This allows your users/ clients to view, download and manage their documents in their own private folders.',
		'pro'         => false,

	],
	[
		'title'       => 'Shortcode Builder',
		'description' => 'You can create various types of module (File browser, Photo Gallery etc.) with different configurations with the shortcode builder and can use them anywhere using the shortcode.',
		'pro'         => false,

	],
	[
		'title'       => 'Multiple Accounts',
		'description' => 'You can add and manage multiple Google Drive cloud accounts from your site using this plugin.',
		'pro'         => false,

	],
	[
		'title'       => 'Use Own Google App',
		'description' => ' You can add your own Google app with this plugin.',
		'pro'         => false,

	],
	[
		'title'       => 'Statistics',
		'description' => ' View all the files downloads, uploads, streams and previews events logs in the statistics page.',
		'pro'         => false,

	],
	[
		'title'       => 'Email Notification',
		'description' => 'Get email notifications on various user actions like file download, upload, delete, etc.',
		'pro'         => false,

	],
	[
		'title'       => 'WooCommerce Integration',
		'description' => 'You can integrate your Google Drive files nicely into WooCommerce, and it allows you to serve your Digital Downloads directly from Google Drive.',
		'pro'         => false,

	],
	[
		'title'       => 'Easy Digital Downloads Integration',
		'description' => 'You can integrate your Google Drive files with EDD, and it allows you to serve your Digital Downloads directly from Google Drive.',
		'pro'         => false,

	],
	[
		'title'       => 'Contact Form 7 Integration',
		'description' => 'You can get more flexibility than the Upload form that is included in Contact Form 7. The plugin seamlessly integrates with Google Drive and allows you to upload your files directly from your form upload field.',
		'pro'         => false,

	],
	[
		'title'       => 'WPForms Integration',
		'description' => 'You can get more flexibility than the Upload form that is included in WPForms. The plugin seamlessly integrates with Google Drive and allows you to upload your files directly from your form upload field.',
		'pro'         => false,

	],
	[
		'title'       => 'Gravity Forms Integration',
		'description' => 'You can get more flexibility than the Upload form that is included in Gravity Forms. The plugin seamlessly integrates with Google Drive and allows you to upload your files directly from your form upload field.',
		'pro'         => false,

	],
];
?>

<section id="features">
    <div class="container">

        <div class="row">
            <div class="col-lg-5 m-auto">
                <div class="section-header text-center">
                    <h2>Choose the best plan that fits your needs</h2>
                    <p>we’ve created several packages with different features in them. These are priced according to the
                        value they deliver.</p>
                </div>
            </div>
        </div>

        <div class="row ">
            <div class="col-lg-8 m-auto">

                <div class="features-header justify-content-between">
                    <h5>Features</h5>
                    <span class="feature-type type-free">FREE</span>
                    <span class="feature-type type-pro">PRO</span>
                </div>

                <div class="accordion" id="features-accordion">
					<?php foreach ( $features as $key => $feature ) { ?>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading-<?php echo $key; ?>">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse-<?php echo $key; ?>" aria-expanded="false"
                                        aria-controls="collapse-<?php echo $key; ?>">

										<i class="fa-solid fa-chevron-down"></i>

                                    <span class="feature-title"><?php echo $feature['title']; ?></span>

                                    <i class="fas <?php echo !empty($feature['pro']) ? 'fa-check-square' : 'fa-times-square'; ?>"></i>
                                    <i class="fas fa-check-square"></i>
                                </button>
                            </h2>

                            <div id="collapse-<?php echo $key; ?>" class="accordion-collapse collapse"
                                 aria-labelledby="heading-<?php echo $key; ?>"
                                 data-bs-parent="#features-accordion">
                                <div class="accordion-body">
									<?php echo $feature['description']; ?>
                                </div>
                            </div>
                        </div>
					<?php } ?>

                </div>
            </div>
        </div>

    </div>

</section>