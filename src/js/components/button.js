// let calculateAngle = function(e, item, parent) {
//     let dropShadowColor = `rgba(0, 0, 0, 0.3)`
//     if(parent.getAttribute('data-filter-color') !== null) {
//         dropShadowColor = parent.getAttribute('data-filter-color');
//     }

//     // Get the x position of the users mouse, relative to the button itself
//     let x = Math.abs(item.getBoundingClientRect().x - e.clientX);
//     // Get the y position relative to the button
//     let y = Math.abs(item.getBoundingClientRect().y - e.clientY);

//     // Calculate half the width and height
//     let halfWidth  = item.getBoundingClientRect().width / 2;
//     let halfHeight = item.getBoundingClientRect().height / 2;

//     // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
//     // Changing these numbers will change the depth of the effect.
//     let calcAngleX = (x - halfWidth) / 6;
//     let calcAngleY = (y - halfHeight) / 4;

//     // Set the items transform CSS property
//     item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${calcAngleY}deg) scale(1.15)`;
    
//     // And set its container's perspective.
//     parent.style.perspective = `${halfWidth * 2}px`
//     item.style.perspective = `${halfWidth * 3}px`

//     if(parent.getAttribute('data-custom-perspective') !== null) {
//         parent.style.perspective = `${parent.getAttribute('data-custom-perspective')}`
//     }

//     // Reapply this to the shadow, with different dividers
//     let calcShadowX = (x - halfWidth) / 3;
//     let calcShadowY = (y - halfHeight) / 3;
    
//     // Add a filter shadow - this is more performant to animate than a regular box shadow.
//     item.style.filter = `drop-shadow(${-calcShadowX}px ${calcShadowY}px 15px ${dropShadowColor})`;
// }

// document.querySelectorAll('.button').forEach(function(item) {
//     item.addEventListener('mouseenter', function(e) {
//         calculateAngle(e, this.querySelector('span'), this);
//     });

//     item.addEventListener('mousemove', function(e) {
//         calculateAngle(e, this.querySelector('span'), this);
//     });

//     item.addEventListener('mouseleave', function(e) {
//         let dropShadowColor = `rgba(0, 0, 0, 0.3)`
//         if(item.getAttribute('data-filter-color') !== null) {
//             dropShadowColor = item.getAttribute('data-filter-color')
//         }
//         item.querySelector('span').style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
//         item.querySelector('span').style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`;
//     });
// })




// // create account js


// $('.message a').click(function(){
//     $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
// });


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

// Start the animation.
// animate();

// $('[data-text]').on('keyup', function(){
//     $(this).attr('data-text', $(this).text());
//   });




//hide search 
const search = document.querySelector('.search')
const search_btn = document.querySelector('.search-btn')
const input = document.querySelector('.input')

search_btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

//testmonial js
const testmonialContainer = document.querySelector('.testmonial-container')
const testmonialContent = document.querySelector('.testmonial-content')
const userImage = document.querySelector('.user-image')
const userName = document.querySelector('.username')
const role = document.querySelector('.role')
const testtitle = document.querySelector('.test-title')


const testimonials = [
    {
        name:'brianray',

        position:'Marketing',

        photo:'https://picsum.photos/130/130?image=836',

        titl:'Works nicely',

        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, natus fugiat numquam ad expedita saepe voluptatibus ullam totam fuga impedit perspiciatis dolorum doloribus sapiente consequatur corrupti! Blanditiis non, numquam maxime quas quasi ut ad doloribus laboriosam omnis consequuntur perferendis expedita. Cupiditate corrupti praesentium saepe? Doloremque obcaecati ea ipsum soluta voluptates?",
    },

    {
        name:'venetiou',

        position:'Data Entry',

        photo:'https://picsum.photos/130/130?image=836',

        titl:'Best of the Best Radio plugin on WordPress',

        text:"Great support from the developer. He jumped right in and helped me get it working. Works perfectly.",
    },

    {
        name:'Joseph Robert Kozubek',

        position:'Web Developer',

        photo:'https://picsum.photos/130/130?image=836',

        titl:'GREAT PLUGIN, IT CAN ALSO BE ..',

        text:"Such good cooperation. Instant support. I have already forgotten about such good cooperation in the world. Instant support. The company responded absolutely expressly. I have to admit that the time difference was not an obstacle. Impression that you cooperate with a large corporation. I consider the plug to be good with a light code, a great advantage. I recommend programmers",
    },

    {
        name:'Per Kindwall',

        position:'Graophic Design',

        photo:'https://picsum.photos/130/130?image=836',

        titl:'PERFECT',

        text:"Perfect! The pro version helped me to get rid of some https problems and now everyone can hear my broadcasts!",
    },

    {
        name:'LakeHouse Media',

        position:'Marketing',

        photo:'https://picsum.photos/130/130?image=836',

        titl:'Excellent HTTP Radio Player and awesome support!',

        text:"Great and easy to use Radio Player with excellent options for customizable skin including own branding. Even better is the HTTP solution for the Chrome radio stream issue – WP Military Radio Player works like a charm for HTTP radio streams across all browsers including Chrome, Edge and Opera. Awesome support and great lifetime pricing.",
    },

]

let idx = 1

function updateTestimonial(){
   const { name , position, photo , text, titl } = testimonials[idx]
   testtitle.innerHTML = titl
   testmonialContent.innerHTML = text
   userImage.src = photo
   userName.innerHTML = name
   role.innerHTML = position

   idx++


   if(idx > testimonials.length - 1){
    idx = 0
   }

}

setInterval(updateTestimonial, 10000)

//countdown js
const second = 1000;
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;

    function setElemInnerText(id, text){
        const element = document.getElementById(id);
        element.innerText = text;
    }

    function CountDown(){
        const now = new Date().getTime();
        const free = new Date('June 24, 2023 23:59:59').getTime();
        const unixtimeleft = free-now;

        // const dayelem = document.getElementById('day');
        // dayelem.innerText = Math.floor(unixtimeleft/day);
        
        setElemInnerText('days', Math.floor(unixtimeleft / day));
        setElemInnerText('hours', Math.floor(unixtimeleft % day / hour));
        setElemInnerText('minutes', Math.floor(unixtimeleft % hour / minute));
        setElemInnerText('seconds', Math.floor(unixtimeleft % minute / second));
        
        const day_prog = Math.floor(unixtimeleft / day);
        const hour_prog = Math.floor(unixtimeleft % day / hour);
        const minute_prog = Math.floor(unixtimeleft % hour / minute);
        const second_prog = Math.floor(unixtimeleft % minute / second);


        const day_element = document.getElementById('day_progress');
        day_element.innerHTML = '<progress max="364" value="'+day_prog+'"></progress>';


        const hour_element = document.getElementById('hour_progress');
        hour_element.innerHTML = '<progress max="23" value="'+hour_prog+'"></progress>';


        const minute_element = document.getElementById('minute_progress');
        minute_element.innerHTML = '<progress max="59" value="'+minute_prog+'"></progress>';


        const second_element = document.getElementById('second_progress');
        second_element.innerHTML = '<progress max="59" value="'+second_prog+'"></progress>';
        
        if (unixtimeleft < 0) {
            clearInterval(x);
            timer.text("EXPIRED");
        }
}
    
    function run(){
        CountDown();
        setInterval(CountDown,second)
    }
    run();  

// audio


