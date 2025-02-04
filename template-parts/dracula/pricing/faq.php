<?php

$faqs = [
	[
		'question' => '01. Is Dracula Dark Mode compatible with all WordPress themes?',
		'answer'   => 'Yes, Dracula Dark Mode has been built to be compatible with all the popular themes like Divi, Avada, Astra, Generatepress, and almost every WordPress compatibility themes.',
	],
	[
		'question' => '02. Can I customize the dark mode settings in a real-time preview?',
		'answer'   => 'Yes, it’s the most unique feature that Dracula Dark Mode plugin has included. You can customize dark mode colors, presets, switches, and texts, and see changes in a real-time preview mode.',
	],
	[
		'question' => '03. Can I display dark mode toggle button in menu?',
		'answer'   => 'Yes, you can display the toggle switch button in any menu of your website. Even you can set the positions of the toggle button at the start or end of the menu.',
	],
	[
		'question' => '04. Can I create &amp; customize my own custom toggle button?',
		'answer'   => 'Yes, you can create your fully customized own custom toggle button using the Toggle Button builder and display it anywhere on your website using the shortcode. You can also customize the switch color, text, layout, icons and many other options.',
	],
	[
		'question' => '05. Can I replace light mode images &amp; videos in dark mode?',
		'answer'   => 'Dracula Dark Mode provides an advanced image &amp; video replacement feature where you can replace any light mode images &amp;  any self-hosted, Youtube, Vimeo, or DailyMotion videos in dark mode.',
	],
	[
		'question' => '06. Can I exclude certain sections/ elements in a  page rrom being affected by the dark mode?',
		'answer'   => 'Yes, you can exclude certain sections or elements on any page to keep them from being affected by dark mode. You have to use proper CSS selectors for the elements in the Excludes settings to exclude them from the dark mode. Even you can also exclude them by just clicking on the elements when you are in live edit dark mode.',
	],
	[
		'question' => '07. Can I use dark mode on Admin Dashboard?',
		'answer'   => 'Yes, Dracula Dark Mode allows site admins to enable and use dark mode in their admin dashboard. You can also allow the admin dashboard dark mode based on specific user roles (Administrator, Editor, Subscriber, etc).',
	],
	[
		'question' => '08. Can I exclude specific posts or pages from dark mode?',
		'answer'   => 'Yes, Dracula Dark Mode allows you to exclude certain pages, posts, or any custom post types from dark mode from the Excludes settings.',
	],
	[
		'question' => '09. Can I schedule dark mode to turn on and off automatically based on a specific time?',
		'answer'   => 'Yes, you can schedule dark mode to turn it on and off automatically based on your selected time. This setting will work based on the user&#039;s device time zone.',
	],
	[
		'question' => '10. Can I set different color schemes for different pages?',
		'answer'   => 'Yes, you can set different color schemes for different pages by using our page-wise dark mode feature. Using the page-wise dark mode you can use different color schemes for each page to improve your brand image.',
	],
	[
		'question' => '11. Does Dracula Dark Mode support custom CSS?',
		'answer'   => 'Yes, Dracula Dark Mode has support for both the normal mode and dark mode custom CSS. That means you can customize both the light mode and dark mode appearance.',
	],
	[
		'question' => '12. Will Dracula Dark Mode plugin slow my website loading speed?',
		'answer'   => 'Dracula Dark Mode may have a minimal impact on your site load speed. But we have given ‘Performance Mode’ settings which will improve your website speed loading scripts in a deferred manner to reduce the initial page load time and improve overall website performance.',
	],
];

?>


<section id="faq">
	<div class="container">

		<div class="row">
			<div class="col-lg-6 m-auto">
				<div class="section-header text-center">
					<h2>Frequently asked questions</h2>
					<p>Have more questions? Ask your question here</p>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-8 m-auto">
				<div class="accordion" id="faq-accordion">

					<?php foreach ($faqs as $key => $faq) { ?>
						<div class="accordion-item">
							<h2 class="accordion-header" id="faq-heading-<?php echo $key; ?>">
								<button class="accordion-button collapsed" type="button"
									data-bs-toggle="collapse"
									data-bs-target="#faq-collapse-<?php echo $key; ?>"
									aria-controls="faq-collapse-<?php echo $key; ?>"
									aria-expanded="false">
									<?php echo $faq['question']; ?>
									<i class="fa-solid fa-chevron-down"></i>
								</button>
							</h2>

							<div id="faq-collapse-<?php echo $key; ?>" class="accordion-collapse collapse"
								aria-labelledby="faq-heading-<?php echo $key; ?>"
								data-bs-parent="#faq-accordion">
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