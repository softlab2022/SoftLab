<?php 

/*
Template Name: Affiliates area
*/

get_header();

?>

 <!--affiliate banner area_--->
    <section class="page-banner">
        
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1>Affiliate Area</h1>  
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p> 
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
                                <form action="/affiliate-contact/" id="datasend" class="needs-validation" novalidate >

                                    <div class="my-4">
                                        <label for="Aemail"> Email Address *</label>
                                        <input type="email" id="email" name='email' placeholder="Your Email" class="form-control"  value="" required>
                                        <span id="e-validate"></span>
                                        <div class="invalid-feedback">
                                            Please enter your email address.
                                        </div>
                                    </div>

                                    <div class="my-4">
                                        <label for="name">Full name *</label>
                                        <input type="text" id="name" name='name' placeholder="Name" class="form-control" value="" required>
                                        <div class="invalid-feedback">
                                        Please enter your full name
                                        </div>

                   
                                    </div>
                                   
                                    <div class="my-4 select-option">

                                            <label for="">Select Product *</label>

                                            <div class="my-2 d-flex align-items-center">
                                                <input type="checkbox" id='google-drive' class='p-4 mt-1'  name='google' required>
                                                <div class="img ms-2">
                                                    <img src="<?php echo get_theme_file_uri();?>/assets/images/affiliat/drive.png" alt="">
                                                    <label for="google-drive">Integrate Google Drive</label>
                                                </div>
                                                  
                                            </div>

                                            <div class="my-2 d-flex align-items-center">
                                                <input type="checkbox" id='radio-player' class='p-4 mt-1' name='google' required >
                                                <div class="img ms-2">
                                                    <img src="<?php echo get_theme_file_uri();?>/assets/images/affiliat/radio-player.png" alt="">
                                                    <label for="radio-player">Radio Player</label>
                                                </div>
                                                
                                            </div>
                                            
                                            <div class="invalid-feedback">
                                            Select Product(s)
                                             </div> 
                                    </div>
                                    <div class="my-4">
                                        <label for="pemail">PayPal account email address *</label>
                                        <input type="email" id="pemail" name='paypal' placeholder="Payment Email" class="form-control" value="" required>
                                        <div class="invalid-feedback">
                                        Enter Paypal email address
                                        </div>
                                    </div>

                                    <div class="my-4">
                                        <label for="website">Where are you going to promote our plugin(s)? *</label>
                                        <input type="text" id="website" name='website' placeholder="Website, Social Media, or Mobile App URL(s)" class="form-control" required >
                                        <div class="invalid-feedback">
                                        Enter website, social media, or mobile app URL(s)
                                        </div>
                                        <p>Enter the URL(s) of your website, social media or mobile app where you planned to promote our plugin(s)</p>
                                     </div>

                                <div class="my-4">
                                    <label for="">Promotion methods *</label>
                                <div>
                                    <div class="d-flex align-items-center checkb">

                                    <input type="checkbox" id="media" name='social-media' class="me-2  mt-1 app" value=[] required>

                                    <label for="media" class="">Social media(Facebook , Twitter etc.. )</label>

                                    </div>


                                    <div class="d-flex align-items-center mt-1">
                                        <input type="checkbox" id="app" name="mobile-app" class="me-2 mt-1 app" value="[]" required>
                                    
                                        <label for="app" class="">Mobile apps</label>
                                    </div>
                                </div>

                                <div class="invalid-feedback">
                                Describe how will you promote our product(s)?
                                        </div>
                                        
                                    </div>
                                    
                                    <div class="my-4">
                                        <label for="socialsite">Website, Email, Social media statistics (optional)</label>
                                        <textarea name="" class="form-control" id="socialsite" cols="30"  rows="5"></textarea>
                                        
                                        <p class="mt-2">Please feel free to provide any relevent website or social media statistics e.g monthly unique site visits, Number of email subscriber followers (we will keep this information confidential) </p>
                                    </div>

                                    <div class="my-4">
                                        <label for="site">Describe how will you promote our product(s)?  *</label>
                                        <textarea name="" class="form-control" id="site" cols="30" name='site' rows="5" required ></textarea>
                                        <div class="invalid-feedback">
                                        Please provide details to promote our product(s)
                                        </div>
                                        <p class="mt-2">Provide details on how you intend to promote our product(s) (be specific as much as possible)</p>
                                    </div>

                                    <div class="my-4">
                                        <input type="checkbox" id="agree" name="check" required>
                                        
                                        <label for="agree" class="ms-2">I agree to the <a href="//docs.google.com/document/d/1Xa29IVNHGbuax-a2WBQBhp1JiHfnIOBNueNIdeD69U8/edit">Referrer Program </a>terms & conditions</label>
                                        <div class="invalid-feedback">
                                                Please check
                                        </div>
                                    </div>
                                   
                                    <div class="my-4">
                                    <input type="submit" id="submit" class=" btn-button form-control" value="Register">
                                    </div>
                                </form>
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