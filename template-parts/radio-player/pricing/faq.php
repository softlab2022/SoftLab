<?php

$faqs = [
    [
        'question' => __('Can I play HTTP stream URL on my HTTPS website?', 'softlab'),
        'answer'   => __('Browsers no longer accepts mixed requests. That means you can\'t play an HTTP stream to an HTTPS
                    website. But, this plugin use a proxy system to play most of the HTTP streams in your HTTPS website.', 'softlab'),
    ],
    [
        'question' => 'Can I add multiple radio stations in the same player?',
        'answer'   => 'Yes, you can add multiple radio stations in the same player. While you create a new player, you can add multiple radio stations with Title, Stream URL and Image from the stations tab. They will display as stations playlist in the player.',
    ],
    [
        'question' => 'How Can I display the full-width sticky player?',
        'answer'   => 'While you are in the player edit screen, you have to enable the Use as Full-width Sticky Player option to display the player in full-width.',
    ],
    [
        'question' => 'How Can I display the full-width sticky player only on specific pages?',
        'answer'   => 'By default the sticky player will be displayed on all pages. But, You can also display the sticky player only on the specific pages by excluding the pages from the settings page. You can find the settings page under the Radio Player > Settings menu.',
    ],
    [
        'question' => 'Can I embed a radio player on another website?',
        'answer'   => __('Yes, you can embed a radio player on another website. You can find the embed code from the player listing page. Just click on the Embed button and copy the embed code. Then paste the embed code on your website.', 'softlab'),
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

                    <?php foreach ($faqs as $key => $faq) { ?>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="faq-heading-<?php echo $key; ?>">
                                <button class="accordion-button collapsed" type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq-collapse-<?php echo $key; ?>"
                                    aria-controls="faq-collapse-<?php echo $key; ?>"
                                    aria-expanded="false">
                                    <?php echo $faq['question']; ?>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </button>
                            </h2>

                            <div id="faq-collapse-<?php echo $key; ?>" class="accordion-collapse collapse"
                                aria-labelledby="faq-heading-<?php echo $key; ?>"
                                data-bs-parent="#faq-accordion">
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