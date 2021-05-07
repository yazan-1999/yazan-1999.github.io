$(function() {
    "use strict";

    //------- Parallax -------//
    skrollr.init({
        forceHeight: false
    });

    //------- Active Nice Select --------//
    $('select').niceSelect();

    //------- hero carousel -------//
    $(".hero-carousel").owlCarousel({
        items: 3,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 5000,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            810: {
                items: 3
            }
        }
    });

    //------- Best Seller Carousel -------//
    if ($('.owl-carousel').length > 0) {
        $('#bestSellerCarousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                900: {
                    items: 3
                },
                1130: {
                    items: 4
                }
            }
        })
    }

    //------- single product area carousel -------//
    $(".s_Product_carousel").owlCarousel({
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        loop: true,
        nav: false,
        dots: false
    });

    //------- mailchimp --------//  
    function mailChimp() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();

    //------- fixed navbar --------//  
    $(window).scroll(function() {
        var sticky = $('.header_area'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    //------- Price Range slider -------//
    // if (document.getElementById("price-range")) {

    //     var nonLinearSlider = document.getElementById('price-range');

    //     noUiSlider.create(nonLinearSlider, {
    //         connect: true,
    //         behaviour: 'tap',
    //         start: [500, 4000],
    //         range: {
    //             // Starting at 500, step the value by 500,
    //             // until 4000 is reached. From there, step by 1000.
    //             'min': [0],
    //             '10%': [500, 500],
    //             '50%': [4000, 1000],
    //             'max': [10000]
    //         }
    //     });


    //     var nodes = [
    //         document.getElementById('lower-value'), // 0
    //         document.getElementById('upper-value') // 1
    //     ];

    //     // Display the slider value and how far the handle moved
    //     // from the left edge of the slider.
    //     nonLinearSlider.noUiSlider.on('update', function(values, handle, unencoded, isTap, positions) {
    //         nodes[handle].innerHTML = values[handle];
    //     });

    // }

});
//-------*********************** main carousel ***********************-------//
// set and cache variables
var w, container, carousel, item, radius, itemLength, rY, ticker, fps;
var mouseX = 0;
var mouseY = 0;
var mouseZ = 0;
var addX = 0;


// fps counter created by: https://gist.github.com/sharkbrainguy/1156092,
// no need to create my own :)
var fps_counter = {

    tick: function() {
        // this has to clone the array every tick so that
        // separate instances won't share state 
        this.times = this.times.concat(+new Date());
        var seconds, times = this.times;

        if (times.length > this.span + 1) {
            times.shift(); // ditch the oldest time
            seconds = (times[times.length - 1] - times[0]) / 1000;
            return Math.round(this.span / seconds);
        } else return null;
    },

    times: [],
    span: 20
};
var counter = Object.create(fps_counter);



$(document).ready(init)

function init() {
    w = $(window);
    container = $('#contentContainer');
    carousel = $('#carouselContainer');
    item = $('.carouselItem');
    itemLength = $('.carouselItem').length;
    fps = $('#fps');
    rY = 360 / itemLength;
    radius = Math.round((250) / Math.tan(Math.PI / itemLength));

    // set container 3d props
    TweenMax.set(container, {
        perspective: 600
    })
    TweenMax.set(carousel, {
        z: -(radius)
    })

    // create carousel item props

    for (var i = 0; i < itemLength; i++) {
        var $item = item.eq(i);
        var $block = $item.find('.carouselItemInner');

        //thanks @chrisgannon!        
        TweenMax.set($item, {
            rotationY: rY * i,
            z: radius,
            transformOrigin: "50% 50% " + -radius + "px"
        });

        animateIn($item, $block)
    }

    // set mouse x and y props and looper ticker
    window.addEventListener("mousemove", onMouseMove, false);
    ticker = setInterval(looper, 1000 / 60);
}

function animateIn($item, $block) {
    var $nrX = 360 * getRandomInt(2);
    var $nrY = 360 * getRandomInt(2);

    var $nx = -(2000) + getRandomInt(4000)
    var $ny = -(2000) + getRandomInt(4000)
    var $nz = -4000 + getRandomInt(4000)

    var $s = 1.5 + (getRandomInt(10) * .1)
    var $d = 1 - (getRandomInt(8) * .1)

    TweenMax.set($item, {
        autoAlpha: 1,
        delay: $d
    })
    TweenMax.set($block, {
        z: $nz,
        rotationY: $nrY,
        rotationX: $nrX,
        x: $nx,
        y: $ny,
        autoAlpha: 0
    })
    TweenMax.to($block, $s, {
        delay: $d,
        rotationY: 0,
        rotationX: 0,
        z: 0,
        ease: Expo.easeInOut
    })
    TweenMax.to($block, $s - .5, {
        delay: $d,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: Expo.easeInOut
    })
}

function onMouseMove(event) {
    mouseX = -(-(window.innerWidth * .5) + event.pageX) * .0025;
    mouseY = -(-(window.innerHeight * .5) + event.pageY) * .01;
    mouseZ = -(radius) - (Math.abs(-(window.innerHeight * .5) + event.pageY) - 200);
}

// loops and sets the carousel 3d properties
function looper() {
    addX += mouseX
    TweenMax.to(carousel, 1, {
        rotationY: addX,
        rotationX: mouseY,
        ease: Quint.easeOut
    })
    TweenMax.set(carousel, {
        z: mouseZ
    })
    fps.text('Framerate: ' + counter.tick() + '/60 FPS')
}

function getRandomInt($n) {
    return Math.floor((Math.random() * $n) + 1);
}
//