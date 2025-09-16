<?php

/**
 * Template Name: Thank You Page
 *
 */

get_header();

if (! isset($_GET['data'])) {
?>
    <div class="thank-you-header">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <div class="thank-you-header-content text-center">
                        <h1 class="t-title"> <?php _e('🛒 Please Purchase First', 'softlab'); ?> </h1>
                        <p class="t-description"> <?php _e('You can only access this page after completing your purchase', 'softlab'); ?> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php
} else {
    $json_data = base64_decode($_GET['data']);
    $response = json_decode($json_data, true);

    // product info
    $product_info = isset($response['productInfo']) ? $response['productInfo'] : [];
    $product_icon = isset($product_info['productIcon']) ? $product_info['productIcon'] : '';
    $plan_name = isset($product_info['planName']) ? $product_info['planName'] : 'Starter';
    $product_name = isset($product_info['productName']) ? $product_info['productName'] : '';
    $docs = isset($product_info['docs']) ? $product_info['docs'] : '';
    $video = isset($product_info['video']) ? $product_info['video'] : '';
    $product_description = isset($product_info['productDescription']) ? $product_info['productDescription'] : '';

    // user info
    $user = $response['user'];
    $name = $user['first'] . ' ' . $user['last'];
    $email = $user['email'];

    // purchase info
    $purchase = $response['purchase'];
    $amount = isset($purchase['amount_per_cycle']) ? $purchase['amount_per_cycle'] : 0;
    $billing_cycle = isset($purchase['billing_cycle']) ? $purchase['billing_cycle'] : 0;
    $billing_cycle = $billing_cycle == '12' ? 'Yearly' : 'Lifetime';
    $date = $purchase['created'];
    $date = date('Y-m-d', strtotime($date));


?>
    <div class="thank-you-header">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <div class="thank-you-header-content text-center">
                        <h1 class="t-title"> <?php _e('🎉 Thank You for Your Purchase!', 'softlab'); ?> </h1>
                        <p class="t-description"> We appreciate your trust in us. Your order has been successfully placed, and you're now one step closer to unlocking powerful features of <?php echo esc_html($product_name); ?> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="t-products-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="t-products-content">
                        <img class="img-fluid" src="<?php echo esc_url($product_icon) ?>">
                        <div class="t-products-description">
                            <h3 class="t-products-title"><?php echo esc_html($product_name); ?></h3>
                            <span><?php echo esc_html($product_description); ?></span>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="order-summary">
                        <h3 class="order-summary-title"> <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/order-box.png"> <?php echo esc_html__('Order Summary', 'softlab'); ?></h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 col-6">
                    <div class="order-details order-details-date">
                        <h5 class="order-details-title"><?php echo esc_html__('Date :', 'softlab'); ?></h5>
                        <span><?php echo esc_html($date); ?></span>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="order-details order-details-amount">
                        <h5 class="order-details-title"><?php echo esc_html__('Amount :', 'softlab'); ?></h5>
                        <span>$<?php echo $amount; ?></span>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="order-details order-details-plan">
                        <h5 class="order-details-title"><?php echo esc_html__('Plan :', 'softlab'); ?></h5>
                        <span><?php echo $plan_name; ?> – <?php echo $billing_cycle; ?></span>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="order-product-details">
                        <h5 class="order-product-details-title"><?php echo esc_html__('🛍️ Product Details', 'softlab'); ?></h5>
                        <table class="product-details">
                            <tr>
                                <th><?php echo esc_html__('Product', 'softlab'); ?></th>
                                <th><?php echo esc_html__('Plan', 'softlab'); ?></th>
                                <th><?php echo esc_html__('Amount', 'softlab'); ?></th>
                                <th><?php echo esc_html__('Total Paid', 'softlab'); ?></th>
                            </tr>
                            <tr>
                                <td><?php echo $product_name; ?></td>
                                <td><?php echo $plan_name; ?></td>
                                <td>$<?php echo $amount; ?></td>
                                <td>$<?php echo $amount; ?></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="order-product-details">
                        <h5 class="order-product-details-title">👤 Customer Details</h5>
                        <table class="customer-details">
                            <tr>
                                <th><?php echo esc_html__('Name :', 'softlab'); ?></th>
                                <th><?php echo esc_html__('Email :', 'softlab'); ?></th>
                            </tr>
                            <tr>
                                <td><?php echo esc_html($name); ?></td>
                                <td><?php echo esc_html($email); ?></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="other-details">
                        <h5 class="order-product-details-title"><?php echo esc_html__('Please check your email for the following details:', 'softlab'); ?></h5>
                        <ul>
                            <li>Download link for the PRO plugin</li>
                            <li>Your license key, and others</li>
                        </ul>
                        <p><?php echo esc_html__('If you don’t see the email in your inbox, be sure to check your spam or promotions folder.', 'softlab'); ?></p>
                    </div>
                </div>
            </div>
            <div class="row">
                <h5 class="order-product-details-title"><?php echo esc_html__('🚀 Get Started', 'softlab'); ?></h5>
                <div class="col-md-4">
                    <div class="order-product-get-started">
                        <div class="get-started-item">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/portal.png" />
                            <span><?php echo esc_html__('Access Your Customer Portal', 'softlab'); ?></span>
                            <p><?php echo esc_html__('Manage your license, downloads, and account settings all in one place.', 'softlab'); ?></p>
                            <a href="https://users.freemius.com/store/1760" target="_blank" rel="noopener noreferrer">Go to Portal</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="order-product-get-started">
                        <div class="get-started-item bg-doc">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/docs.png" />
                            <span><?php echo esc_html__('Read Documentation', 'softlab'); ?></span>
                            <p><?php echo esc_html__('Explore step-by-step guides to help you get the most out of the plugin.', 'softlab'); ?></p>
                            <a class="get-started-doc" href="<?php echo esc_url($docs) ?>" target="_blank" rel="noopener noreferrer">View Docs</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="order-product-get-started">
                        <div class="get-started-item bg-video">
                            <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/assets/images/video.png" />
                            <span><?php echo esc_html__('Watch Video Tutorials', 'softlab'); ?></span>
                            <p><?php echo esc_html__('Learn how to use key features quickly with our easy-to-follow video tutorials..', 'softlab'); ?></p>
                            <a class="get-started-doc" href="<?php echo esc_url($video) ?>" target="_blank" rel="noopener noreferrer">Watch Now</a>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="ned-help">
                        <h5 class="ned-help-title"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/need-help.png" alt="" srcset=""> Need Help?</h5>
                        <p>If you have any questions or run into any issues, feel free to contact our <a href="/support" target="_blank">support team</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php
}

get_footer();
