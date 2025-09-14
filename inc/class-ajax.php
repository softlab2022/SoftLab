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
                'recipe'    => 'https://tastewp.com/recipe/igd',
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
            'upload-any-mime-types' => [
                'title'     => 'Upload Any MIME Types',
                'recipe'    => 'https://tastewp.com/recipe/upload-any-mime-types',
                'docs'      => 'https://softlabbd.com/docs-category/upload-any-mime-types-docs/',
                'playlist'  => 'https://www.youtube.com/playlist?list=PLaR5hjDXnXZykak-pYouYFn2prvCvuDfC',
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
        $subject = sprintf('SoftLab Demo Request for %s', esc_html($data['title']));

        $message  = <<<EOT
            <html>
                <body style="margin:0; padding:0; background:#f8f8f8; font-family:Helvetica, Arial, sans-serif;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background:#fff;">
                        <tr>
                        <td align="center" style="padding:30px 15px;">
                            
                            <!-- Container -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="background:#ffffff; border:1px solid #e5e5e5; border-radius:6px;">
                            <tr>
                                <td style="padding:30px; color:#555; font-size:15px; line-height:1.6; border-radius:6px">

                                <!-- Greeting -->
                                <p style="margin:0 0 15px;">Hello there,</p>

                                <!-- Intro -->
                                <p style="margin:0 0 20px;">
                                    Your new WordPress website created by <strong>{$data['title']} Demo</strong> is ready to use. 
                                    Please confirm your account to access the demo site.
                                </p>

                                <!-- CTA Button -->
                                <p style="text-align:center; margin:25px 0;">
                                    <a href="{$data['recipe']}" 
                                    target="_blank"
                                    style="background:#0072ff; color:#ffffff; text-decoration:none;font-size:16px; font-weight:bold; padding:12px 24px; border-radius:6px; display:inline-block;">
                                    Access Demo Site
                                    </a>
                                </p>

                                <!-- Info -->
                                <p style="margin:0 0 15px;">
                                    The demo site will be active for the next <strong>48 hours</strong>. 
                                    Feel free to explore all premium features.
                                </p>

                                <!-- Resources -->
                                <p style="margin:0 0 15px;">
                                    Learn more through our 
                                    <a href="{$data['docs']}" target="_blank" style="color:#0072ff; text-decoration:underline;">documentation</a> 
                                    and 
                                    <a href="{$data['playlist']}" target="_blank" style="color:#0072ff; text-decoration:underline;">YouTube playlist</a>.
                                </p>

                                <!-- Community -->
                                <p style="margin:0 0 20px;">
                                    Stay updated with new features and improvements 
                                    <a href="https://facebook.com/group/SoftLab" target="_blank" style="color:#0072ff; font-weight:bold; text-decoration:underline;">
                                    inside our community
                                    </a>.
                                </p>

                                <!-- Closing -->
                                <p style="margin:0 0 15px;">
                                    Join the conversation, share your feedback, and be part of what’s next!
                                </p>
                                <p style="margin:0 0 15px;">
                                    If you have any questions, simply reply to this email.
                                </p>

                                <p style="margin:0;">Best regards,<br><strong>Team SoftLab</strong></p>

                                </td>
                            </tr>
                            </table>

                            <!-- Footer -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="margin-top:20px;">
                            <tr>
                                <td align="center" style="padding:20px; font-size:12px; color:#999;">
                                © SoftLab. All rights reserved.
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
            'From: SoftLab <wordpress@softlab.local>',
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
