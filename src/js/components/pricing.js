;(function ($) {
    const app = {
        init: function () {
            //Handle pricing switcher
            $('.pricing-switcher').on('click', app.handleSwitcher);

        },

        handleSwitcher: function (e) {
            $('.price-tables').removeClass('annual lifetime')
                .addClass($(this).hasClass('active') ? 'annual' : 'lifetime');

            $('.price-text').removeClass('annual lifetime')
                .addClass($(this).hasClass('active') ? 'annual' : 'lifetime');

            $(this).toggleClass('active');
        },


    }

    $(document).ready(app.init);

})(jQuery);