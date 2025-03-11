<section class="address-fields-form-area">
    <div class="container">
        <?php
        if (is_singular('form')) {
            // Retrieve the meta fields for the current page
            $sl_meta_field = get_post_meta(get_the_ID(), 'sl_ft_meta_fields', true) ?? [];
            
            // retrive current post slug
            global $post;
            $slug = $post->post_name;
            $json_file_path = get_template_directory() . '/template-parts/essential-addons-for-contact-form-7/eacf7-previews/eacf7-templates/json/' . $slug . '.json';

            $json_download_link = file_exists($json_file_path) 
                ? get_template_directory_uri() . '/template-parts/essential-addons-for-contact-form-7/eacf7-previews/eacf7-templates/json/' . $slug . '.json' 
                : '#';

            // Check if meta fields exist
            if (!empty($sl_meta_field)) {
        ?>
                <div class="row">
                    <div class="col-lg-10 m-auto">
                        <div class="form-area" data-index="0">
                            <div class="form-button-area-title">
                                <h3><?php echo esc_html(get_the_title()); ?></h3>

                                <div class="form-button-area">
                                    <a href="<?php echo esc_url($json_download_link); ?>" <?php echo file_exists($json_file_path) ? 'download' : ''; ?>  data-index="0" id="download-form-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                            <path fill="currentColor" d="M19.31 12.051c.381 0 .69.314.69.7v4.918c-.006.67-.127 1.2-.399 1.594c-.328.476-.908.692-1.747.737l-15.903-.002c-.646-.046-1.168-.302-1.507-.777c-.302-.423-.446-.95-.444-1.558V12.75c0-.386.309-.7.69-.7s.688.314.688.7v4.913c0 .333.065.572.182.736c.081.114.224.184.44.201l15.817.001c.42-.023.627-.1.655-.14c.084-.123.146-.393.15-.8V12.75c0-.386.308-.7.689-.7M9.99 0c.38 0 .69.313.69.7l-.001 10.869l3.062-3.079a.68.68 0 0 1 .975.004a.707.707 0 0 1-.004.99l-4.356 4.38a.68.68 0 0 1-.973-.003l-4.296-4.38a.707.707 0 0 1 .002-.99a.68.68 0 0 1 .975.002L9.3 11.794V.699C9.3.313 9.61 0 9.99 0" />
                                        </svg> Download
                                    </a>
                                </div>
                            </div>
                            <div class="form-button-area-item">
                                <div class="eacf7-form" data-index="0">
                                    <?php
                                    if (!empty($sl_meta_field['shortcode'])) {
                                        echo do_shortcode($sl_meta_field['shortcode']);
                                    } else {
                                        echo '<p>Form not found.</p>';
                                    }
                                    ?>
                                </div>
                                <div class="form-code" data-index="0" style="display:none;">
                                    <?php
                                    if (!empty($sl_meta_field['shortcode'])) {
                                        $attributes = shortcode_parse_atts(str_replace(['[', ']'], '', $sl_meta_field['shortcode']));
                                        $title = isset($attributes['title']) ? $attributes['title'] : '';
                                        $contact_form_7 = wpcf7_get_contact_form_by_title($title);

                                        if ($contact_form_7) {
                                            // Get the raw form content
                                            $form_raw = $contact_form_7->get_properties('form')['form'];

                                            // Remove additional wrapping divs or tags if any
                                            $form_cleaned = strip_tags($form_raw, '<label><text><textarea><email><submit>');

                                            // Display the cleaned form content
                                            echo '<pre><code class="code-content">' . esc_html($form_cleaned) . '</code></pre>';
                                        } else {
                                            echo 'No Code found.';
                                        }
                                    } else {
                                        echo 'No Code found.';
                                    }
                                    ?>
                                </div>
                            </div>
                        </div>
                    </div>
            <?php
            } else {
                echo '<p>No demo fields available.</p>';
            }
        }
            ?>
                </div>
</section>

<script>
    // Highlight code (if using highlight.js)
    hljs.highlightAll();
</script>