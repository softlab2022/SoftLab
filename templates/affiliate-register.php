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
    <div class="affiliate-contact-area py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card">

                        <div class="card-body">
                            <form action="" id="affiliate-register-form" class="needs-validation" novalidate>

                                <!-- Full Name -->
                                <div class="my-4">
                                    <label for="name">Full Name *</label>
                                    <input type="text" id="name" name="name" placeholder="Name" class="form-control"
                                           value="" required>
                                    <div class="invalid-feedback">Please enter your full name</div>
                                </div>

                                <!-- Email Address -->
                                <div class="my-4">
                                    <label for="Aemail"> Email Address *</label>
                                    <input type="email" id="email" name='email' placeholder="Your Email"
                                           class="form-control" value="" required>
                                    <div class="invalid-feedback">Please enter your email address.</div>
                                </div>

                                <!-- PayPal Email Address -->
                                <div class="my-4">
                                    <label for="pemail">PayPal account email address *</label>
                                    <input type="email" id="pemail" name="paypal" placeholder="Payment Email"
                                           class="form-control" value="" required>
                                    <div class="invalid-feedback">Enter Paypal email address</div>
                                </div>

                                <!-- Products -->
                                <div class="my-4 select-option">

                                    <label>Select Product(s) *</label>

                                    <div class="form-check">

                                        <input type="checkbox" id='google-drive' class='me-1' name="product[]"
                                               value="integrate-google-drive" required>

                                        <label for="google-drive">
                                            <img src="<?php echo get_theme_file_uri(); ?>/assets/images/affiliat/drive.png">
                                            Integrate Google Drive
                                        </label>

                                    </div>

                                    <div class="form-check">

                                        <input type="checkbox" id='radio-player' class='p-4 mt-1' name='product[]'
                                               value="radio-player" required>

                                        <label for="radio-player">
                                            <img src="<?php echo get_theme_file_uri(); ?>/assets/images/affiliat/radio-player.png">
                                            Radio Player
                                        </label>

                                        <div class="invalid-feedback">Please select at least one product.</div>

                                    </div>


                                </div>

                                <!-- Domain -->
                                <div class="my-4">
                                    <label for="domain">Where are you going to promote our plugin(s)? *</label>

                                    <input type="text" id="domain" name="domain"
                                           placeholder="Website, Social Media, or Mobile App URL(s)"
                                           class="form-control" required>

                                    <div class="invalid-feedback">Enter website, social media, or mobile app URL(s)
                                    </div>
                                    <p>Enter the URL(s) of your website, social media or mobile app where you planned to promote our plugin(s)</p>
                                </div>

                                <!-- Promotional Methods -->
                                <div class="my-4">
                                    <label for="">Promotion methods *</label>

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
                                        product(s)? *</label>
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

    <!--ctp section-->
    <!-- <div class="cta-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="cta-banner home-cta">
						<div class="sub-cta">
							<h2>Subscribe to get product updates</h2>
							<p>Get exclusive updates on discounts, product updates, WordPress news &amp; tips</p>
						</div>

						<form action="">
							<input type="text" name="email" placeholder="Email address">
							<button type="submit"><span class="icon icon-sent">subscribe</span></button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div> -->
    <!--//ctp section-->


<?php
get_footer();