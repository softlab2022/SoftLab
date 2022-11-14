<section id="http">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 m-auto">
                <div class="http-head text-center">
                    <h1>Live stream player for HTTP streaming server</h1>
                    <p>You can play any live mp3, iceCast and Shoutcast stream in your WordPress website. Radio Player can play HTTP streams on an HTTPS website.</p>
                </div>
            </div>
        </div>
        

    </div>
</section>

<!--=== stream area ===-->
<section id="stream">
    <div class="container">
        <div class="row">
            <div class="col-lg-7 m-auto">
                <div class="head text-center">
                    <span>Check your stream URL</span>
                </div>
            </div>
            <div class="col-lg-6 m-auto">
                    <form action="">
                    
                        <label for="validationCustom05" class="form-label"></label>
                        <input type="url" class="form-control" id="validationCustom05" required placeholder="Enter your Stream URL" >
                        <div class="invalid-feedback">
                        Please provide a valid zip.
                        </div>
                            <div class="col-12 text-center">
                                <button class="btn btn-primary check-btn" type="submit">Cheek URL</button>
                            </div>
                    </form>
            </div>
                <div class="col-lg-8 m-auto">
                     <div class="image text-center">
                        <?php echo do_shortcode('[radio_player id=138]');?>
                     </div>   
                </div>
        </div>

    </div>
</section>