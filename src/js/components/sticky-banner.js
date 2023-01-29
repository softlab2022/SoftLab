;(function ($) {
    "use strict";

    $(document).ready(function () {
        const banner = $('#header-sticky-banner');

        //Close banner
        $('.banner-close', banner).on('click', function () {
            banner.remove();
        });

        //Banner countdown
        const countdown = $('.banner-countdown', banner);
        const timer = $('.timer', banner);

        if (countdown.length) {
            const dateTime = new Date(new Date().getTime() + 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000).toISOString();
            let countDownDate = new Date(dateTime).getTime();

            //check if there is a time in local storage
            if (localStorage.getItem('time')) {
                countDownDate = localStorage.getItem('time');
            }


            const x = setInterval(function () {
                const now = new Date().getTime();
                const distance = countDownDate - now;

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                timer.html(`<span class="days">${days}d</span> <span class="hours">${hours}h</span> <span class="minutes">${minutes}m</span> <span class="seconds">${seconds}s</span>`);

                if (distance < 0) {
                    clearInterval(x);
                    timer.text("EXPIRED");
                }

                //save time in local storage
                localStorage.setItem('time', countDownDate);

            }, 1000);
        }

    });
})(jQuery);