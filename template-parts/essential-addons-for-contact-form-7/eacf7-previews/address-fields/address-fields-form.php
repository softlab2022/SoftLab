
<section class="address-fields-form-area">
    <div class="container">
        <?php
        if (is_singular('page')) {
            $sl_meta_fields = get_post_meta(get_the_ID(), 'sl_meta_fields', true) ?: [];

            if (!empty($sl_meta_fields)) {
                foreach ($sl_meta_fields as $index => $field) {
        ?>
                    <div class="row">
                        <div class="col-lg-8 m-auto">
                            <div class="form-area-head text-center">
                                <h3>
                                    <?php
                                    if (!empty($field['title'])) {
                                        echo esc_html($field['title']);
                                    } else {
                                        echo '<p>no title found.</p>';
                                    }
                                    ?>
                                </h3>
                                <p>
                                    <?php
                                    if (!empty($field['description'])) {
                                        echo esc_html($field['description']);
                                    } else {
                                        echo '<p>no description found.</p>';
                                    }
                                    ?>
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-10 m-auto">
                            <div class="form-area" data-index="<?php echo $index; ?>">
                                <div class="form-button-area">
                                    <button class="show-buttons" data-index="<?php echo $index; ?>">
                                        <i class="fa-solid fa-code"></i> Show Code
                                    </button>
                                    <button class="copy-buttons" data-index="<?php echo $index; ?>" style="display: none;">
                                        <i class="fa-solid fa-copy"></i> Copy
                                    </button>
                                </div>

                                <div class="eacf7-form" data-index="<?php echo $index; ?>">
                                    <?php
                                    if (!empty($field['shortcode'])) {
                                        echo do_shortcode($field['shortcode']);
                                    } else {
                                        echo '<p>Form not found.</p>';
                                    }
                                    ?>
                                </div>
                                <div class="form-code" data-index="<?php echo $index; ?>" style="display:none;">
                                    <?php
                                    $attributes = shortcode_parse_atts(str_replace(['[', ']'], '', $field['shortcode']));
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
                                    ?>
                                </div>

                            </div>
                        </div>
                    </div>
  
<?php
                }
            } else {
                echo '<p>No demo fields available.</p>';
            }
        }
?>
</div>
</section>
<script>
    hljs.highlightAll();
</script>