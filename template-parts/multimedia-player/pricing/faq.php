<?php

$faqs = [
    [
        'question' => 'How many player types does the Multimedia Player offer?',
        'answer'   => 'The Multimedia Player offers <a href="/soft-multimedia-player-skins/">3 distinct player types</a> to suit different media formats: Audio Player for music and sound files, Video Player for visual media, and Podcast Player specifically designed for streaming podcast episodes.',
    ],
    [
    	'question' => 'Is the Multimedia Player responsive and mobile-friendly?',
    	'answer'   => 'Yes, the Multimedia Player is fully responsive and mobile-friendly. It automatically adapts to different screen sizes and devices, ensuring a smooth and consistent user experience on smartphones, tablets, and desktops.',
    ],
    [
    	'question' => 'Does the player support multiple audio source types?',
    	'answer'   => 'Yes, the Multimedia Player supports multiple audio source types. Examples include MP3, AAC, OGG, and WAV formats, allowing for broad compatibility with various audio files.',
    ],
    [
    	'question' => 'Does the player support YouTube videos as a source?',
    	'answer'   => 'Yes, the Multimedia Player supports YouTube videos as a source. You can easily embed and play YouTube content directly within the player.',
    ],
    [
    	'question' => 'Which video file formats are supported?',
    	'answer'   => 'The Multimedia Player supports a wide range of popular video file formats, including MP4, WebM, OGG, and MOV.',
    ],
    [
    	'question' => 'Does the player support podcast RSS feeds?',
    	'answer'   => 'Yes, the Multimedia Player supports podcast RSS feeds. You can easily integrate RSS feed URLs to automatically fetch and play the latest podcast episodes.',
    ],
    [
    	'question' => 'Can I customize the player controls?',
    	'answer'   => 'Yes, the Multimedia Player allows you to customize the player controls. You can choose which buttons to display—such as play, pause, skip, volume, and fullscreen to match your brand or user preferences.',
    ],
    [
    	'question' => 'Can I customize the appearance of the player?',
    	'answer'   => 'Yes, you can customize the appearance of the Multimedia Player. It supports custom colors, themes, and styling options, allowing you to match the player’s look and feel with your brand or website design.',
    ],
    [
    	'question' => 'Does the Multimedia Player offer multiple skins?',
    	'answer'   => 'Yes, the Multimedia Player offers multiple <a href="/soft-multimedia-player-skins/">pre-designed modern skins</a>  for the audio, video, and podcast players. These skins provide stylish, ready-to-use designs that enhance the user experience and can be easily applied without custom coding.',
    ],
    [
    	'question' => 'If I need support, what should I do?',
    	'answer'   => 'If you need support, simply <a href="/support/">create a support ticket</a>  describing the issue you\'re experiencing. Be sure to include any relevant details or steps to reproduce the problem to help the support team assist you more efficiently.',
    ],
    
];

?>


<section id="faq">
    <div class="container">

        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="section-header text-center">
                    <h2>Frequently asked questions</h2>
                    <p>Have questions about our Multimedia Player plugin? Get quick answers about setup, supported formats, customization options.</p>
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