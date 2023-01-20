<?php

$faqs = [
	[
		'question' => 'Is DarkMySite compatible with my theme?',
		'answer'   => 'Reader Mode is a WordPress plugin that allows the users to read the post/ article in a reader friendly layout. The Reader Mode plugin has multiple features such as: Reader Mode Layout, Text-to-Speech, Translation, Estimated Reading Time, and Reading Progress Bar.',
	],
	[
		'question' => 'Can I customize the floating switch color?',
		'answer'   => 'Yes, you can use the Reader Mode for specific post types.
        You can select the post types where you want to display the Reader Mode button from the Reader Mode > Settings > Display Settings page.',
	],
	[
		'question' => 'Can I customize the color preset in dark mode?',
		'answer'   => 'Yes, you can customize the background color, text color, button color, input color etc.

        Even you can use custom CSS on your to make any customization in the dark mode.',
	],
	[
		'question' => 'Is DarkMySite compatible with all modern browsers?',
		'answer'   => 'Yes, you can use the Reader Mode for specific post types.
        You can select the post types where you want to display the Reader Mode button from the Reader Mode > Settings > Display Settings page.',
	],
	[
		'question' => 'Can I customize the floating switch color?',
		'answer'   => 'Yes, you can use the Reader Mode for specific post types.
        You can select the post types where you want to display the Reader Mode button from the Reader Mode > Settings > Display Settings page.',
	],
	[
		'question' => 'Will DarkMySite slow down my website?',
		'answer'   => 'Yes, you can use the Reader Mode for specific post types.
        You can select the post types where you want to display the Reader Mode button from the Reader Mode > Settings > Display Settings page.',
	],
];

?>


<section id="faq">
    <div class="container">

        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="section-header text-center">
                    <h2>Frequently asked questions</h2>
                    <p>Have more questions? Ask your question here</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="accordion" id="faq-accordion">

					<?php foreach ( $faqs as $key => $faq ) { ?>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading-<?php echo $key; ?>">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-<?php echo $key; ?>" aria-controls="collapse-<?php echo $key; ?>" aria-expanded="false">
									<?php echo $faq['question']; ?>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </button>
                            </h2>

                            <div id="collapse-<?php echo $key; ?>" class="accordion-collapse collapse" aria-labelledby="collapse-<?php echo $key; ?>" data-bs-parent="#faq-accordion">
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