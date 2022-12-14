;(function ($) {
    const app = {
        init: function () {
            //Handle pricing switcher
            $('.pricing-switcher').on('click', app.handleSwitcher);

            // Handle license switcher
            $('.license-dropdown .dropdown-item').on('click', app.handleLicenseSwitcher);
        },

        handleSwitcher: function (e) {
            $('.price-text').removeClass('annual lifetime')
                .addClass($(this).hasClass('active') ? 'annual' : 'lifetime');
            $(this).toggleClass('active');
        },

        handleLicenseSwitcher: function (e) {
            e.preventDefault();

            $('.license-dropdown .dropdown-toggle').text($(this).text());

            $('.license-dropdown .dropdown-item').removeClass('active');
            $(this).addClass('active');

            const license = $(this).data('license');
            $('.price-text').removeClass('license-1 license-5 license-100')
                .addClass(`license-${license}`);

        },


    }

    $(document).ready(app.init);

})(jQuery);