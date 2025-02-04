<?php

$faqs = [
    [
        'question' => 'Is Soft Accordion Responsive?',
        'answer'   => 'Yes',
    ],
    // [
    // 	'question' => 'Can I link a Google Drive folder to a user on my site when they have been registered?',
    // 	'answer'   => 'Yes, you can link a Google Drive folder to a user on your site when they have been registered. You can also link a Google Drive folder to a user when they are registering on your site. You can also link a Google Drive folder to a user when they are registering on your site.',
    // ],
    // [
    // 	'question' => 'Can I use multiple Google Drive accounts?',
    // 	'answer'   => 'Yes, you can link to multiple Google Drive accounts to Integrate Google Drive plugin.',
    // ],
    // [
    // 	'question' => 'Are there any usage limits?',
    // 	'answer'   => 'If you want to stream any media files (Audio, Video), the files will be streamed directly from Google Drive. So there are no bandwidth or file size issues for your web host.But, when you download any zip files, these files will be downloaded to your site and can generate some traffic.',
    // ],
    // [
    // 	'question' => 'Documents preview not working?',
    // 	'answer'   => 'In order to preview documents, the files should have the sharing permission “Anyone with link can view”. The plugin will automatically change the sharing permission.

    //     However, in some case the plugin isn’t able to manage the sharing permissions even with those setting enabled. In that case, please try to set the sharing permissions manually via the native Google Drive interface',
    // ],
    // [
    // 	'question' => 'Why search module search results are slow?',
    // 	'answer'   => 'The search module search results may take some time to show the search results. The time depends on the number of files that are selected for the search module.
    //     If your selected folders for the search module have a lot of children files then the search module search results may take some time to show the search results.',
    // ],
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