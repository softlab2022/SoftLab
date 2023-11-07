;(function ($) {
    "use strict";

    $(document).ready(function () {
        const banner = $('#header-sticky-banner, #halloween-offers, #black-friday-offers');

        // Close banner
        banner.on('click', '.banner-close', function () {
            $('#header-sticky-banner').remove()
        });

        // Banner countdown
        const countdown = banner.find('.banner-countdown');
        const timer = banner.find('.timer');

        if (countdown.length) {
            const updateTimer = () => {
                const now = new Date().getTime();
                let countDownDate = new Date().getTime() + 96 * 60 * 60 * 1000;

                // Check if there is a time in local storage
                if (localStorage.getItem('softlab_offers_time')) {
                    countDownDate = localStorage.getItem('softlab_offers_time');
                }

                const distance = countDownDate - now;

                if (distance < 0) {
                    // Reset the time
                    localStorage.removeItem('softlab_offers_time');
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                timer.html(`<span class="days">${days}d</span> <span class="hours">${hours}h</span> <span class="minutes">${minutes}m</span> <span class="seconds">${seconds}s</span>`);

                // Save time in local storage
                localStorage.setItem('softlab_offers_time', countDownDate);
            };

            const x = setInterval(updateTimer, 1000);
            updateTimer(); // Call immediately, don’t wait for the first interval to execute
        }
    });

})(jQuery);