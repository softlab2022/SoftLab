
<!-- faq area -->
<?php

$faqs = [
    [
        'question' => 'What is included in your WordPress Theme Development service?',
        'answer'   => 'We create fully customized, responsive, and SEO-friendly WordPress themes tailored to your brand identity. Our themes are lightweight, optimized for performance, and easy to manage without coding knowledge.',
    ],
    [
        'question' => 'Can you develop custom WordPress plugins?',
        'answer'   => 'Yes, we develop custom WordPress plugins tailored to your specific needs, ensuring seamless functionality and performance for your website.',
    ],
    [
        'question' => 'Do you develop complete WordPress websites from scratch?',
        'answer'   => 'Yes, we develop complete WordPress websites from scratch, tailored to your brand and business needs. From design and development to optimization and launch, we handle every step to deliver a fully functional, responsive, and user-friendly website.',
    ],
    [
        'question' => 'What does WordPress Website Maintenance cover?',
        'answer'   => 'WordPress Website Maintenance ensures your site remains secure, fast, and up-to-date. It includes regular updates, backups, performance optimization, security monitoring, and troubleshooting, keeping your website running smoothly while you focus on your business.',
    ],
    [
        'question' => 'How long does it take to build a WordPress website?',
        'answer'   => 'The time to build a WordPress website varies depending on complexity, design requirements, and functionality. Simple websites can be ready in a few days, while custom, feature-rich sites may take several weeks. Our team ensures efficient development without compromising quality.',
    ],
    [
        'question' => 'Do you offer ongoing support after project completion?',
        'answer'   => 'Yes, we provide ongoing support even after project completion. From troubleshooting and updates to performance monitoring and guidance, we ensure your project continues to run smoothly and efficiently.',
    ],
    [
        'question' => 'Will my WordPress website be mobile-friendly?',
        'answer'   => 'Ensure your WordPress website looks and works perfectly on all devices. Our responsive design solutions guarantee a seamless mobile experience for your visitors.',
    ],
    [
        'question' => 'Can you migrate my existing website to WordPress?',
        'answer'   => 'Seamlessly migrate your existing website to WordPress with zero hassle. We ensure all your content, media, and functionality are transferred safely while optimizing for performance and responsiveness, giving your site a fresh, flexible, and easy-to-manage platform.',
    ],


];

?>


<section id="faq">
    <div class="container">

        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="section-header text-center">
                    <h2>Frequently asked questions</h2>
                    <p>All you need to know – from our services and solutions to support and beyond.</p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12 m-auto">
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