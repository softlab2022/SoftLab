jQuery(document).ready(function ($) {
    const container = $('#sl-metabox-container');
    
    $('#add-new-demo').on('click', function () {
        const item = $('.sl-metabox-fields').length;
        const currentItem = parseInt(item) + 1;

        const template = `
            <div class="sl-metabox-fields">
                <h3>Demo Fields</h3>
                <label>Title: </label>
                <input type="text" name="sl_meta_fields[${currentItem}][title]">
                <br>
                <label>Description: </label>
                <input type="text" name="sl_meta_fields[${currentItem}][description]">
                <br>
                <label>Form Shortcode: </label>
                <input type="text" name="sl_meta_fields[${currentItem}][shortcode]">
                <br>
            </div>
        `;

        container.append(template);
    });

    $('#remove-new-demo').on('click', function () {
        container.children('.sl-metabox-fields').last().remove();
    });
});