<?php

$faqs = [
    [
        'question' => 'Is Soft Accordion Responsive?',
        'answer'   => 'Yes, Soft Accordion is fully responsive, ensuring it looks great on all devices, from desktops to mobiles.',
    ],
    [
    	'question' => 'Is Soft Accordion Compatible with Popular Themes?',
    	'answer'   => 'Yes, Soft Accordion is fully compatible with popular themes (Divi, Astra, Kadence, Generatepress, and others), ensuring smooth integration and seamless functionality.',
    ],
    [
    	'question' => 'Can I display multiple accordions on one page?',
    	'answer'   => 'Yes, you can display multiple accordions on one page!',
    ],
    [
    	'question' => 'Does this plugin offer FAQ Schema?',
    	'answer'   => 'Yes, this plugin offers FAQ Schema support to help your FAQs appear in rich snippets on search engines.',
    ],
    [
    	'question' => 'Can I re-order my FAQ accordions?',
    	'answer'   => 'Yes, you can easily re-order your FAQ accordions using a simple drag-and-drop feature.',
    ],
    [
    	'question' => 'Can I customize accordion colors & styles?',
    	'answer'   => 'Yes, you can customize the accordion colors and styles to match your site’s design, giving you full control over its look and feel. Also, you can choose our pre-designed templates to fit your design.',
    ],
    [
    	'question' => 'Is there a Gutenberg block to display FAQs?',
    	'answer'   => 'A Gutenberg block to display FAQs is coming soon. This new feature will allow you to easily create and customize FAQ sections directly within the Gutenberg editor. You’ll be able to add, organize, and style your FAQs without any hassle, making it simpler to provide helpful information to your website visitors.',
    ],
    [
    	'question' => 'Are the accordions searchable?',
    	'answer'   => 'Yes, the accordions are searchable. They include a feature that allows users to search for any content within the accordion, making it easier to find specific information quickly.',
    ],
    [
    	'question' => 'Is Soft Accordion Translation Ready?',
    	'answer'   => 'Yes, Soft Accordion is translation-ready. This means it is designed to support multiple languages, allowing users to easily translate its content and interface to different languages for a global audience.',
    ],
    [
    	'question' => 'Can I keep the accordion items active on load?',
    	'answer'   => 'Yes, you can keep the accordion items active on load. This allows specific items to be opened by default when the page is loaded, providing a better user experience.',
    ],
    [
    	'question' => 'Can I animate the accordions?',
    	'answer'   => 'Yes, you can animate the accordions. The accordion items can be animated for smooth transitions, adding a dynamic and engaging effect when they open or close.',
    ],
    [
    	'question' => 'Can I insert custom CSS if required?',
    	'answer'   => 'Yes, you can insert custom CSS if required. This allows you to further customize the appearance of the accordion to match your site\'s design and styling preferences.',
    ],
    [
    	'question' => 'Does Soft Accordion support Shortcode?',
    	'answer'   => 'Yes, Soft Accordion supports shortcodes. This feature allows you to easily insert and display accordions anywhere on your site using simple shortcodes.',
    ],
    [
    	'question' => 'Is Soft Accordion compatible with the multisite network?',
    	'answer'   => 'Yes, Soft Accordion is compatible with multisite networks. It works smoothly across multiple sites within a network, allowing you to use the accordion functionality on all sites without issues.',
    ],
    [
    	'question' => 'Will Soft Accordion slow down my site?',
    	'answer'   => 'No, Soft Accordion will not slow down your site. The code is optimized for performance, ensuring that it runs smoothly without affecting your site’s speed.',
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