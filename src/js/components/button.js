let calculateAngle = function(e, item, parent) {
    let dropShadowColor = `rgba(0, 0, 0, 0.3)`
    if(parent.getAttribute('data-filter-color') !== null) {
        dropShadowColor = parent.getAttribute('data-filter-color');
    }

    // Get the x position of the users mouse, relative to the button itself
    let x = Math.abs(item.getBoundingClientRect().x - e.clientX);
    // Get the y position relative to the button
    let y = Math.abs(item.getBoundingClientRect().y - e.clientY);

    // Calculate half the width and height
    let halfWidth  = item.getBoundingClientRect().width / 2;
    let halfHeight = item.getBoundingClientRect().height / 2;

    // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
    // Changing these numbers will change the depth of the effect.
    let calcAngleX = (x - halfWidth) / 6;
    let calcAngleY = (y - halfHeight) / 4;

    // Set the items transform CSS property
    item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${calcAngleY}deg) scale(1.15)`;
    
    // And set its container's perspective.
    parent.style.perspective = `${halfWidth * 2}px`
    item.style.perspective = `${halfWidth * 3}px`

    if(parent.getAttribute('data-custom-perspective') !== null) {
        parent.style.perspective = `${parent.getAttribute('data-custom-perspective')}`
    }

    // Reapply this to the shadow, with different dividers
    let calcShadowX = (x - halfWidth) / 3;
    let calcShadowY = (y - halfHeight) / 3;
    
    // Add a filter shadow - this is more performant to animate than a regular box shadow.
    item.style.filter = `drop-shadow(${-calcShadowX}px ${calcShadowY}px 15px ${dropShadowColor})`;
}

document.querySelectorAll('.button').forEach(function(item) {
    item.addEventListener('mouseenter', function(e) {
        calculateAngle(e, this.querySelector('span'), this);
    });

    item.addEventListener('mousemove', function(e) {
        calculateAngle(e, this.querySelector('span'), this);
    });

    item.addEventListener('mouseleave', function(e) {
        let dropShadowColor = `rgba(0, 0, 0, 0.3)`
        if(item.getAttribute('data-filter-color') !== null) {
            dropShadowColor = item.getAttribute('data-filter-color')
        }
        item.querySelector('span').style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
        item.querySelector('span').style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`;
    });
})


// // create account js
$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

// // FILTER js !
// const elts = {
//     text1: document.getElementById("text1"),
//     text2: document.getElementById("text2")
// };


// const texts = [
//     "We",
//     "Build",
//     "Awesome",
//     "Solutions",
//     "for",
//     "WordPress",
//     "by SOFTLAB"
// ];

// // Controls the speed of morphing.
// const morphTime = 1;
// const cooldownTime = 0.25;

// let textIndex = texts.length - 1;
// let time = new Date();
// let morph = 0;
// let cooldown = cooldownTime;

// elts.text1.textContent = texts[textIndex % texts.length];
// elts.text2.textContent = texts[(textIndex + 1) % texts.length];

// function doMorph() {
//     morph -= cooldown;
//     cooldown = 0;
    
//     let fraction = morph / morphTime;
    
//     if (fraction > 1) {
//     cooldown = cooldownTime;
//     fraction = 1;
//     }
    
//     setMorph(fraction);
// }

// // A lot of the magic happens here, this is what applies the blur filter to the text.
// function setMorph(fraction) {
//     // fraction = Math.cos(fraction * Math.PI) / -2 + .5;
    
//     elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
//     elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    
//     fraction = 1 - fraction;
//     elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
//     elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    
//     elts.text1.textContent = texts[textIndex % texts.length];
//     elts.text2.textContent = texts[(textIndex + 1) % texts.length];
// }

// function doCooldown() {
//     morph = 0;
    
//     elts.text2.style.filter = "";
//     elts.text2.style.opacity = "100%";
    
//     elts.text1.style.filter = "";
//     elts.text1.style.opacity = "0%";
// }

// // Animation loop, which is called every frame.
// function animate() {
//     requestAnimationFrame(animate);
    
//     let newTime = new Date();
//     let shouldIncrementIndex = cooldown > 0;
//     let dt = (newTime - time) / 1500;
//     time = newTime;
    
//     cooldown -= dt;
    
//     if (cooldown <= 0) {
//     if (shouldIncrementIndex) {
//         textIndex++;
//     }
    
//     doMorph();
//     } 
//     else {
//     doCooldown();
//     }
// }

// // Start the animation.
// animate();

$('[data-text]').on('keyup', function(){
    $(this).attr('data-text', $(this).text());
  });