;(function ($) {
    "use strict";

    $(document).ready(function () {
        const banner = $('#header-sticky-banner, #halloween-offers, #black-friday-offers');

        // Close banner
        banner.on('click', '.banner-close', function () {
            $('#header-sticky-banner').remove();
        });

        // Banner countdown
        const countdown = banner.find('.banner-countdown');
        const timer = banner.find('.timer');

        if (countdown.length) {
            const SECOND = 1000;
            const MINUTE = 60 * SECOND;
            const HOUR = 60 * MINUTE;
            const DAY = 24 * HOUR;

            const formatTime = (distance) => {
                const days = Math.floor(distance / DAY);
                const hours = Math.floor((distance % DAY) / HOUR);
                const minutes = Math.floor((distance % HOUR) / MINUTE);
                const seconds = Math.floor((distance % MINUTE) / SECOND);

                return `<span class="days">${days}d</span> <span class="hours">${hours}h</span> <span class="minutes">${minutes}m</span> <span class="seconds">${seconds}s</span>`;
            };

            const updateTimer = () => {
                const now = new Date().getTime();
                //let countDownDate = new Date().getTime() + 8.5 * DAY;
                let countDownDate = new Date('2023-11-27T23:59:00').getTime();


                // Check if there is a time in local storage
                if (localStorage.getItem('bf_offers_time')) {
                    countDownDate = localStorage.getItem('bf_offers_time');
                }

                const distance = countDownDate - now;

                if (distance < 0) {
                    // Reset the time
                    localStorage.removeItem('bf_offers_time');
                    return;
                }

                timer.html(formatTime(distance));

                // Save time in local storage
                localStorage.setItem('bf_offers_time', countDownDate);
            };

            const x = setInterval(updateTimer, 1000);
            updateTimer(); // Call immediately, don’t wait for the first interval to execute
        }
    });

})(jQuery);
