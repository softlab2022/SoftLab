<?php

class SoftLab_Ajax {

    private static $instance = null;

    public function __construct() {
        add_action('wp_ajax_demo_request', [$this, 'demo_request']);
        add_action('wp_ajax_nopriv_demo_request', [$this, 'demo_request']);
    }

    public function demo_request() {
        // nonce check
        if (! check_ajax_referer('softlab', 'nonce', false)) {
            wp_send_json_error('Invalid nonce');
        }

        // check email
        if (empty($_POST['email'])) {
            wp_send_json_error('Email is empty');
        }

        // Sanitize inputs
        $product = isset($_POST['product']) ? sanitize_key($_POST['product']) : '';
        $email   = isset($_POST['email']) ? sanitize_email($_POST['email']) : '';

        $data = [
            'title' => 'SoftLab',
            'recipe' => '',
            'docs'   => '',
        ];

        $products = [
            'integrate-google-drive' => [
                'title'     => 'Integrate Google Drive',
                'recipe'    => 'https://tastewp.com/recipe/integrate-google-drive',
                'docs'      => 'https://softlabbd.com/docs-category/integrate-google-drive-docs/',
                'playlist'  => 'https://www.youtube.com/playlist?list=PLaR5hjDXnXZyQI6LU-1Ijz_x9vkXQop7I',
            ],
            'radio-player' => [
                'title'     => 'Radio Player',
                'recipe'    => 'https://tastewp.com/recipe/radio-player',
                'docs'      => 'https://softlabbd.com/docs-category/radio-player-docs/',
                'playlist'  => 'https://www.youtube.com/playlist?list=PLaR5hjDXnXZxHDAWtk7syboP6obo1uX3k',
            ],
            'dracula-dark-mode' => [
                'title'     => 'Dracula Dark Mode',
                'recipe'    => 'https://tastewp.com/recipe/drakula-dark-mode',
                'docs'      => 'https://softlabbd.com/docs-category/dracula-dark-mode-docs/',
                'playlist'  => 'https://www.youtube.com/playlist?list=PLaR5hjDXnXZzB_t1OoEGai98qfwpYqRYD',
            ],
            'essential-addons-for-contact-form-7' => [
                'title'     => 'Essential Addons for Contact Form 7',
                'recipe'    => 'https://tastewp.com/recipe/essential-addons-for-contact-form-7',
                'docs'      => 'https://softlabbd.com/docs-category/essential-addons-for-contact-form-7-docs/',
                'playlist'  => 'https://www.youtube.com/playlist?list=PLaR5hjDXnXZygCofRqBvMT0n5aVFmwXjM',
            ],
            'soft-multimedia-player' => [
                'title'     => 'Multimedia Player',
                'recipe'    => 'https://tastewp.com/recipe/soft-multimedia-player',
                'docs'      => 'https://softlabbd.com/docs-category/soft-multimedia-player-docs/',
                'playlist'  => 'https://www.youtube.com/playlist?list=PLaR5hjDXnXZz2XWNB482rgT4RiAaQEkim',
            ],
        ];

        // If product exists, overwrite defaults
        if (isset($products[$product])) {
            $data = $products[$product];
        }

        // Extract first and last name from email address
        list($first_name, $last_name) = explode('@', $email);
        $first_name = ucfirst(str_replace('.', '', $first_name));
        $last_name = ucfirst(str_replace('.', '', $last_name));

        $api_url = 'https://softlabbd.com/wp-json/fluent-crm/v2/subscribers';

        $options = array(
            'headers' => array(
                'Authorization' => 'Basic ' . base64_encode('demo_api:viOp lOGv xzq4 7nDj WfR7 vikr'),
                'Content-Type'  => 'application/json',
            ),
            'body'    => wp_json_encode(array(
                'first_name'    => $first_name,
                'last_name'     => $last_name,
                'email'         => $email,
                'status'        => 'subscribed',
                'phone'         => '',
                'tags'          => array(3),
                'lists'         => array(8),
            )),
        );

        // Send REST request to store subscriber
        wp_remote_post( $api_url, $options );

        // Send mail
        $to      = $email;
        $subject = sprintf('SoftLab demo site created for %s', esc_html($data['title']));


		$logo_url = get_template_directory_uri() . '/assets/images/logo-color-full.png';
		$demo_hero = get_template_directory_uri() . '/assets/images/demo-ready.png';

        $message  = <<<EOT
<html>
	<body style="margin:0; padding:0; background:#f4f6f8; font-family:Helvetica, Arial, sans-serif; color:#333;">
		<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
	    <tr>
	        <td align="center" style="padding:40px 15px;">
	
	            <!-- Container -->
	            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600"
	                   style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
	
	                <!-- Header / Logo -->
	                <tr>
	                    <td align="center" style="padding:12px; background:#0162E7;">
	                        <a href="https://softlabbd.com">
	                            <img src="$logo_url" alt="SoftLab" width="180" style="display:block; margin:0 auto;">
	                        </a>
	                    </td>
	                </tr>
	
	                <!-- Hero / Illustration -->
	                <tr>
	                    <td align="center" style="padding:30px 30px 10px;">
	                        <img src="$demo_hero" alt="Demo Site Ready" width="200"
	                             style="display:block; margin:0 auto;">
	                        <h2 style="margin:20px 0 10px; font-size:22px; color:#222;">Your Demo Site is Ready 🎉</h2>
	                        <p style="margin:0 0 20px; font-size:15px; line-height:1.6; color:#555;">
	                            Your new WordPress demo, <strong>{$data['title']} Demo</strong>, has been created
	                            successfully.
	                            Confirm your account below to start exploring all premium features.
	                        </p>
	                    </td>
	                </tr>
	
	                <!-- CTA -->
	                <tr>
	                    <td align="center" style="padding:20px 30px;">
	                        <a href="{$data['recipe']}" target="_blank"
	                           style="background:#0072ff; color:#fff; text-decoration:none; font-size:16px; font-weight:bold;
	                          padding:14px 32px; border-radius:6px; display:inline-block;">
	                            Access Demo Site
	                        </a>
	                    </td>
	                </tr>
	
	                <!-- Info -->
	                <tr>
	                    <td style="padding:20px 30px; font-size:14px; line-height:1.6; color:#555;">
	                        <p style="margin:0 0 15px;">
	                            ⏳ This demo will be active for <strong>48 hours</strong>. Explore freely and test all
	                            premium features.
	                        </p>
	                        <p style="margin:0 0 15px;">
	                            📖 Check our
	                            <a href="{$data['docs']}" target="_blank" style="color:#0072ff; text-decoration:underline;">documentation</a>
	                            or watch our
	                            <a href="{$data['playlist']}" target="_blank"
	                               style="color:#0072ff; text-decoration:underline;">YouTube tutorials</a>
	                            to get started quickly.
	                        </p>
	
	                        <p style="margin:0 0 15px;">
	                            👥 Join our
	                            <a href="https://facebook.com/groups/softlabcommunity/" target="_blank"
	                               style="color:#0072ff; font-weight:bold;">facebook community group</a>
	                                to connect and stay updated.
	                        </p>
	                        
							<p style="margin:0 0 15px;">
								💬 If you have any questions, simply reply to this email.
							</p>
	                        
	                    </td>

	                    
	                </tr>
	
	                <!-- Footer -->
	                <tr>
	                    <td align="center" style="padding:25px; background:#f9f9f9; font-size:12px; color:#999;">
	                        <p style="margin:0 0 6px;">Best regards, <strong><a
	                                        style="background:#f9f9f9; font-size:12px; color:#0162E7;text-decoration: none;"
	                                        href="https://softlabbd.com"> Team SoftLab</a></strong></p>
	                        <p style="margin:0;">© SoftLab. All rights reserved.</p>
	                    </td>
	                </tr>
	
	            </table>
	
	        </td>
	    </tr>
	</table>
	</body>
</html>
EOT;

        $headers  = [
            'From: SoftLab <contact@softlabbd.com>',
            'Reply-To: ' . $email,
            'Content-Type: text/html; charset=UTF-8',
        ];

        if (wp_mail($to, $subject, $message, $headers)) {
            wp_send_json_success('Demo Request Sent Successfully');
        } else {
            wp_send_json_error('Demo Request Failed, Please Try Again.');
        }

        wp_die();
    }

    /**
     * Summary of instance
     * @return SoftLab_Ajax
     */
    public static function instance() {
        if (null === self::$instance) {
            self::$instance = new self;
        }

        return self::$instance;
    }
}

SoftLab_Ajax::instance();
