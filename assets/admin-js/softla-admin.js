jQuery(document).ready(function ($) {
    let fieldIndex = $('#softlab_custom_post-metabox-container .softlab_custom_post-metabox-fields').length;

    $('#add-new-demo').on('click', function () {
        const newField = `
            <div class="softlab_custom_post-metabox-fields">
                <h3>Demo Fields <span>${fieldIndex + 1}</span></h3>
                <label>Title: <input type="text" name="softlab_custom_post_meta_fields[${fieldIndex}][title]" /></label><br>
                <label>Description: <input type="text" name="softlab_custom_post_meta_fields[${fieldIndex}][description]" /></label><br>
                <label>Form Shortcode: <input type="text" name="softlab_custom_post_meta_fields[${fieldIndex}][shortcode]" /></label><br>
            </div>`;
        $('#softlab_custom_post-metabox-container').append(newField);
        fieldIndex++;
    });

    $('#remove-new-demo').on('click', function () {
        if (fieldIndex > 1) {
            $('#softlab_custom_post-metabox-container .softlab_custom_post-metabox-fields:last').remove();
            fieldIndex--;
        }
    });


    $('.softlab-upload-image').on('click', function (e) {
        e.preventDefault();
        var button = $(this),
            targetInput = $(button.data('target')),
            targetPreview = $(button.data('preview'));

        var fileFrame = wp.media.frames.file_frame = wp.media({
            title: 'Select or Upload an Image',
            button: { text: 'Use this image' },
            multiple: false
        });

        fileFrame.on('select', function () {
            var attachment = fileFrame.state().get('selection').first().toJSON();
            targetInput.val(attachment.url);
            targetPreview.attr('src', attachment.url).show();
        });

        fileFrame.open();
    });

    //softlab about uploader
    let mediaUploader;

    // Upload Image
    $('.softlab-about-upload-image').click(function(e) {
        e.preventDefault();

        const button = $(this);
        const targetInput = $(button.data('target'));
        const previewImage = $(button.data('preview'));

        // If media uploader already exists, open it
        if (mediaUploader) {
            mediaUploader.open();
            return;
        }

        // Create new media uploader
        mediaUploader = wp.media({
            title: 'Choose Image',
            button: {
                text: 'Select Image'
            },
            multiple: false
        });

        // When an image is selected
        mediaUploader.on('select', function() {
            const attachment = mediaUploader.state().get('selection').first().toJSON();
            targetInput.val(attachment.url); // Set hidden input value
            previewImage.attr('src', attachment.url).show(); // Set preview image source and display it
        });

        // Open media uploader
        mediaUploader.open();
    });

    // Remove Image
    $('.softlab-remove-image').click(function(e) {
        e.preventDefault();

        const button = $(this);
        const targetInput = $(button.data('target'));
        const previewImage = $(button.data('preview'));

        targetInput.val(''); // Clear hidden input value
        previewImage.attr('src', '').hide(); // Hide preview image
    });
    
    //remove icon
    $('.softlab-icon-remove-image').click(function(e) {
        e.preventDefault();

        const button = $(this);
        const targetInput = $(button.data('target'));
        const previewImage = $(button.data('preview'));

        targetInput.val(''); // Clear hidden input value
        previewImage.attr('src', '').hide(); // Hide preview image
    });

});
