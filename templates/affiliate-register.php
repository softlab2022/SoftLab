<?php

/*
Template Name: Affiliate Register
*/

get_header();

?>

    <!--affiliate banner area_--->
    <section class="page-banner">

        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1>Affiliate Register</h1>
                    <p>Register to become an affiliate and start earning money today.</p>
                </div>
            </div>
        </div>
    </section>

    <!--affiliate area_--->
    <div class="affiliate-contact-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card">

                        <div class="card-body">
                            <form action="" id="affiliate-register-form" class="needs-validation" novalidate>

                                <!-- Full Name -->
                                <div class="my-4">
                                    <label for="name">Full Name <span>*</span> </label>
                                    <input type="text" id="name" name="name" placeholder="Name" class="form-control"
                                           value="" required>
                                    <div class="invalid-feedback">Please enter your full name</div>
                                </div>

                                <!-- Email Address -->
                                <div class="my-4">
                                    <label for="email"> Email Address <span>*</span> </label>
                                    <input type="email" id="email" name='email' placeholder="Your Email"
                                           class="form-control" value="" required>
                                    <div class="invalid-feedback">Please enter your email address.</div>
                                    <p class="description">Enter your email address to access your affiliate dashboard</p>
                                </div>

                                <!-- PayPal Email Address -->
                                <div class="my-4">
                                    <label for="pemail">PayPal Email Address <span>*</span> </label>
                                    <input type="email" id="pemail" name="paypal" placeholder="Payment Email"
                                           class="form-control" value="" required>
                                    <div class="invalid-feedback">Paypal email address is required!</div>
                                    <p class="description">Enter your PayPal email address to receive payments</p>
                                </div>

                                <!-- Products -->
                                <div class="my-4 product-options">

                                    <label>Select Product(s) <span>*</span> </label>

                                    <div class="form-check">

                                        <input type="checkbox" id='google-drive' class="" name="product[]"
                                               value="integrate-google-drive" required>

                                        <label for="google-drive">
                                            <img src="<?php echo get_theme_file_uri(); ?>/assets/images/home/products/integrate-google-drive-icon.png">
                                            Integrate Google Drive
                                        </label>

                                    </div>

                                    <div class="form-check">

                                        <input type="checkbox" id='radio-player' class="mt-1" name='product[]'
                                               value="radio-player" required>

                                        <label for="radio-player">
                                            <img src="<?php echo get_theme_file_uri(); ?>/assets/images/home/products/radio-icon.png">
                                            Radio Player
                                        </label>

                                        <div class="invalid-feedback">Please select at least one product.</div>

                                    </div>

                                    <p class="description">Select the product(s) you want to promote</p>

                                </div>

                                <!-- Domain -->
                                <div class="my-4">
                                    <label for="domain">Where are you going to promote our plugin(s)? <span>*</span> </label>

                                    <input type="text" id="domain" name="domain"
                                           placeholder="Website, Social Media, or Mobile App URL(s)"
                                           class="form-control" required>

                                    <div class="invalid-feedback">Enter website, social media, or mobile app URL(s)</div>

                                    <p class="description">Enter the URL(s) of your website, social media or mobile app where you planned to promote our plugin(s)</p>
                                </div>

                                <!-- Promotional Methods -->
                                <div class="my-4">
                                    <label for="">Promotion methods <span>*</span> </label>

                                    <div class=" form-check">

                                        <input type="checkbox" id="website" name='method[]' class="me-2  mt-1 "
                                               value="website" required>

                                        <label for="website" class="">Websites</label>
                                    </div>

                                    <div class=" form-check">

                                        <input type="checkbox" id="social_media" name='method[]' class="me-2  mt-1 "
                                               value="social_media" required>

                                        <label for="social_media" class="">Social media(Facebook , Twitter etc..
                                            )</label>
                                    </div>

                                    <div class="form-check">
                                        <input type="checkbox" id="mobile_apps" name="method[]" class="me-2 mt-1 "
                                               value="mobile_apps" required>

                                        <label for="mobile_apps" class="">Mobile apps</label>
                                        <div class="invalid-feedback">Please select at least one promotion method.</div>
                                    </div>
                                </div>

                                <div class="my-4">
                                    <label for="statistics">Website, Email, Social media statistics (optional)</label>

                                    <textarea name="statistics" class="form-control" id="statistics" cols="30"
                                              rows="5"></textarea>

                                    <p class="mt-2">Please feel free to provide any relevant website or social media
                                        statistics e.g monthly unique site visits, Number of email subscriber followers
                                        (we will keep this information confidential)</p>
                                </div>

                                <!-- promotion_method_description -->
                                <div class="my-4">
                                    <label for="promotion_method_description">Describe how will you promote our
                                        product(s)? <span>*</span> </label>
                                    <textarea name="promotion_method_description" class="form-control"
                                              id="promotion_method_description" cols="30" rows="5" required></textarea>
                                    <div class="invalid-feedback">Please provide details to promote our product(s)</div>
                                    <p class="mt-2">Provide details on how you intend to promote our product(s) (be
                                        specific as much as possible)</p>
                                </div>

                                <div class="my-4">
                                    <input type="checkbox" id="agree" name="check" required>

                                    <label for="agree" class="ms-2">I agree to the <a
                                                href="https://freemius.com/plugin/9618/integrate-google-drive/legal/affiliate-program/"
                                                target="_blank">Referrer Program </a>terms & conditions</label>
                                    <div class="invalid-feedback">Please agree to the terms & conditions</div>
                                </div>

                                <div class="my-4">

                                    <button type="submit" id="submit" class="btn-button form-control">
                                        <span class="fa fa-spinner fa-spin d-none"></span>

                                        <span>Submit</span>
                                    </button>
                                </div>

                            </form>
                            <div class="message" style="display:none">
                                 Your  affiliate account is pending approval
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


<?php
get_footer();