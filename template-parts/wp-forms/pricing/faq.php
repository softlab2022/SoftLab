<?php

$faqs = [
	[
		'question' => 'Is there any upload size limit for the File Uploader module?',
		'answer'   => 'No, there is no upload size limit for the File Uploader module. You can upload any file size.',
	],
	[
		'question' => 'Can I link a Google Drive folder to a user on my site when they have been registered?',
		'answer'   => 'Yes, you can link a Google Drive folder to a user on your site when they have been registered. You can also link a Google Drive folder to a user when they are registering on your site. You can also link a Google Drive folder to a user when they are registering on your site.',
	],
	[
		'question' => 'Can I use multiple Google Drive accounts?',
		'answer'   => 'Yes, you can link to multiple Google Drive accounts to Integrate Google Drive plugin.',
	],
	
];

?>


<section id="faq">
    <div class="container">

        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="section-header text-center">
                    <h2>Frequently asked questions</h2>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="accordion" id="faq-accordion">

					<?php foreach ( $faqs as $key => $faq ) { ?>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading-<?php echo $key; ?>">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse-<?php echo $key; ?>"
                                        aria-controls="collapse-<?php echo $key; ?>" aria-expanded="false">
									<?php echo $faq['question']; ?>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </button>
                            </h2>

                            <div id="collapse-<?php echo $key; ?>" class="accordion-collapse collapse"
                                 aria-labelledby="collapse-<?php echo $key; ?>" data-bs-parent="#faq-accordion">
                                <div class="accordion-body">
									<?php echo $faq['answer']; ?>
                                </div>
                            </div>
                        </div>
					<?php } ?>

                </div>
            </div>
        </div>


    </div>
</section>