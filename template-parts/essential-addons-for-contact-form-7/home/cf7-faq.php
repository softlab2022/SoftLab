<?php

$faqs = [
	[
		'question' => 'Do I need coding knowledge to use Essential Addons for Contact Form 7?',
		'answer'   => 'No, you do not need any coding knowledge to use Essential Addons for Contact Form 7. A basic understanding of WordPress and form creation is sufficient to utilize its features.',
	],
	[
		'question' => 'Why do I need the Essential Addons for Contact Form 7 plugin?',
		'answer'   => 'The Essential Addons for Contact Form 7 plugin provides additional features and functionalities that are not available in the standard Essential Addons for Contact Form 7 plugin. It enhances form-building capabilities, including advanced field types, integrations, and conditional logic.',
	],
	[
		'question' => 'Will Essential Addons for Contact Form 7 slow down my website?',
		'answer'   => 'No, Essential Addons for Contact Form 7 is designed to be lightweight and optimized for performance. When properly configured, it should not noticeably impact your website\'s loading speed.',
	],
	[
		'question' => 'Can I use a Google Drive uploader in Essential Addons for Contact Form 7?',
		'answer'   => 'Yes, you can use drag & drop Google Drive uploader in Essential Addons for Contact Form 7 by integrating the Essential Addons for Contact Form 7 plugin. This allows users to upload files directly to your connected Google Drive account.',
	],
	[
		'question' => 'Can I build multi-column forms using Essential Addons for Contact Form 7?',
		'answer'   => 'Yes, Essential Addons for Contact Form 7 allows you to create multi-column forms. This feature helps in designing more organized and visually appealing forms by arranging fields in multiple columns.',
	],
	[
		'question' => 'Can I use conditional logic when building a contact form?',
		'answer'   => 'Yes, conditional logic is supported in Essential Addons for Contact Form 7. This means you can show or hide fields, sections, or entire forms based on user input, making your forms more dynamic and responsive.',
	],
	[
		'question' => 'Can I Store & View submission data on the database?',
		'answer'   => 'Yes, Essential Addons for Contact Form 7 allows you to store form submission data in your WordPress database. You can view and manage this data from your WordPress admin panel, providing easy access to form entries.',
	],
	[
		'question' => 'Can I redirect Essential Addons for Contact Form 7 after form submission?',
		'answer'   => 'Yes, you can set up a redirection after a form submission in Essential Addons for Contact Form 7. This feature allows you to direct users to a specific page or URL after they submit a form.',
	],
	[
		'question' => 'Can I integrate Essential Addons for Contact Form 7 with Email Marketing Services?',
		'answer'   => 'Yes, Essential Addons for Contact Form 7 can be integrated with various email marketing services such as MailChimp, and others. This integration allows you to automatically add form submissions to your email lists.',
	],
	[
		'question' => 'Can I customize the form style in Essential Addons for Contact Form 7?',
		'answer'   => 'Yes, you can customize the form style in Essential Addons for Contact Form 7 by using the “Form Styler” feature for Essential Addons for Contact Form 7.',
	],
	[
		'question' => 'How can I access all features of Essential Addons for Contact Form 7?',
		'answer'   => 'To access all features of Essential Addons for Contact Form 7, you will need the PRO version of the Essential Addons for Contact Form 7 plugin.',
	],
];

?>


<section id="cf7-faq">
    <div class="container">

        <div class="row">
            <div class="col-lg-10 m-auto">
                <div class="feature-heading text-center">
                    <h2>Frequently Asked Questions</h2>
                    <p>Creating a Frequently Asked Questions (FAQ) paragraph is a great way to address common queries in a concise and clear manner</p>
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