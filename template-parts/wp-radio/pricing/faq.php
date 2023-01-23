<?php

$faqs = [
	[
		'question' => 'When I clicked play, there is no sound?',
		'answer'   => '
        Most of the radio station stream links are HTTP (Unsecured) that can’t be played on HTTPS (Secured) website because of browser mixed-content restrictions.
        Modern browsers no longer accepts mixed requests.
        Please check this link:
        https://web.dev/what-is-mixed-content',
	],
	[
		'question' => 'How can I play the HTTP radio stream link on my HTTPS website?',
		'answer'   => 'You have to use the WP Radio Proxy Player addon to remove the browser mixed-content restrictions.
        That means you can play HTTP radio stream link on HTTPS website by using a cors-proxy system by using the WP Radio Proxy Player Addon.',
	],
	[
		'question' => 'Can I add my own or any new radio station to play?',
		'answer'   => 'Yes, You can add unlimited new radio station very easily.
        For adding a new radio station you need to click the Add New Station submenu under the Radio Stations main menu.',
	],
	[
		'question' => 'Station metadata (song title) not showing?',
		'answer'   => 'Most of the shared hosting server blocks some URL port.
        that’s why if your site loaded on the shared hosting server then the stream metadata couldn’t be loaded.
        
        But, the issue can be fixed by the WP Radio Proxy Player Addon.',
	],
	[
		'question' => 'Is this plugin is optimized to get the Google Adsense approval?',
		'answer'   => 'Yes, this plugin is strongly optimized for getting google adsense approval.
        Many WP Radio plugin users are displaying adsense ads on their website.
        Even the demo site https://webradiodirectory.com got adsense approval and displaying adsense ads.',
	],
	[
		'question' => 'Why some stations are not playing?',
		'answer'   => 'First check your site URL. Is your site loaded over http or https. If loaded over http then the radio stream link with http can not be played because of the browser mix-content issue.

        There is some station, which can’t be played for any reason. Likes: If the station has been closed.
        
        It is important to note that, all the channels might not work for you all the time. Because there are some radio channels that stop streaming after a certain time of the day. So, please if you find a channel not working; try again later. After a couple of hours, you should find that station working. The streaming URL has been changed etc. You can simply delete those stations.',
	],
	[
		'question' => 'Station metadata (song title) not showing?',
		'answer'   => 'Most of the shared hosting server blocks some URL port.
        that’s why if your site loaded on the shared hosting server then the stream metadata couldn’t be loaded.
        
        But, the issue can be fixed by the WP Radio Proxy Player Addon.',
	],
	[
		'question' => 'How Can I group stations by country and Genre?',
		'answer'   => 'Use [wp_radio_listing] shortcode. where you can pass comma separated countries and genres.
        Example: [wp_radio_listing country="us, ru, bd" genre="rock,news"]',
	],
	[
		'question' => 'How do I translate some words into my language?',
		'answer'   => 'add video',
	],
	[
		'question' => 'Can I monetize my site by playing custom mic-drops, stinger and advertisements?',
		'answer'   => 'Yes, you can monetize your site using the WP Radio Ads Player addon.
        WP Radio ads player lets you monetize your radio website by playing audio ads and you can also display any ads in the popup player.
        
        It let you play custom mic drops, stringer, and audio advertisements at the start of radio station play.
        
        You can create and play unlimited ads and set them to be played by filtering specific counties or specific stations. You can also control how often the users will listen to the ads.',
	],
	[
		'question' => 'How can I display ads in the radio player?',
		'answer'   => 'You need the WP Radio Ads Player addon to display the banner ads below the popup player.
        You have to set the player type to popup from the player settings and needs to enter the the ad codes in the ads settings.',
	],
	[
		'question' => 'How can I set the radio player fixed to the footer?',
		'answer'   => 'To set the radio player fixed to the footer you need to set the player type to Play on-page from the
        Radio Station > Settings > Player settings > Player Type > Play on page',
	],
	[
		'question' => 'How I enable comment on the station page?',
		'answer'   => 'You have to activate the WP Radio User Frontend addon to show the comment form on the station page.
        After activating the WP Radio User Frontend addon you will get the option Enable Comment in the general settings. You need to enable the Enable Comment option.',
	],
	[
		'question' => 'Do the plugin has any refund policy for the PRO version?',
		'answer'   => 'No, There is no refund policy available for the PRO version of this plugin.',
	],
	[
		'question' => 'Do the plugin has any trial period for the PRO version?',
		'answer'   => 'No, There is no trial period available for the PRO version of this plugin.',
	],
];

?>


<section id="faq">
    <div class="container">

        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="section-header text-center">
                    <h2>Frequently asked questions</h2>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-8 m-auto">
                <div class="accordion" id="faq-accordion">

					<?php foreach ( $faqs as $key => $faq ) { ?>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading-<?php echo $key; ?>">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-<?php echo $key; ?>" aria-controls="collapse-<?php echo $key; ?>" aria-expanded="false">
									<?php echo $faq['question']; ?>
                                    <i class="fa-solid fa-chevron-down"></i>
                                </button>
                            </h2>

                            <div id="collapse-<?php echo $key; ?>" class="accordion-collapse collapse" aria-labelledby="collapse-<?php echo $key; ?>" data-bs-parent="#faq-accordion">
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