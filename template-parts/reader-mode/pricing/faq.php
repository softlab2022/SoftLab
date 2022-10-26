<?php

$faqs = [
	[
		'question' => 'How Can I add Multiple Radio Stations?',
		'answer'   => 'You can add multiple radio stations for a single player in the PRO version. Users can play them by using the next/ previous buttons.',
	],
	[
		'question' => 'When I clicked play, there is no sound?',
		'answer'   => 'Most of the radio station stream links are HTTP (Unsecured) that can’t be played on HTTPS (Secured) website because of browser mixed-content restrictions.
        Modern browsers no longer accepts mixed requests.
        Please check this link:
        https://web.dev/what-is-mixed-content
        
        To play the HTTP streams in an HTTPS website, you need to upgrade to PRO.',
	],
	[
		'question' => 'How can I use the footer full-width sticky player?',
		'answer'   => 'To set the radio player fixed to the footer as a full-width sticky player, you need to check the use as sticky player checkbox in player editing screen.',
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