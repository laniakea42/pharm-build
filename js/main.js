// wow = new WOW({
//     boxClass:     'wow',      
//     animateClass: 'animated', 
//     offset:       0,          
//     mobile:       false,       
//     live:         true        
// })
// wow.init();

function sliders() {
    $('.cat--unit__for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.cat--unit__nav'
    });
    $('.cat--unit__nav').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.cat--unit__for',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
}

sliders();

$(document).ready(function() {
	$("#content>div").hide(); // Скрываем содержание
	$("#tabs li:first").attr("id","current"); // Активируем первую закладку
	$("#content div:first").fadeIn(); // Выводим содержание
    
    $('#tabs a').click(function(e) {
        e.preventDefault();        
        $("#content>div").hide(); //Скрыть все сожержание
        $("#tabs li").attr("id",""); //Сброс ID
        $(this).parent().attr("id","current"); // Активируем закладку
        $('#' + $(this).attr('title')).fadeIn(); // Выводим содержание текущей закладки
    });
});


$(function(){

    $('.i-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000
    });

    $('.vid-slider').slick({
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        dots: true,
        arrows: true,
        autoplaySpeed: 4000,
    });

    $('.tab1-slider').slick({
        slidesToShow: 5,
        autoplay: true,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1795,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 635,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.tab2-slider').slick({
        slidesToShow: 5,
        autoplay: true,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1795,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 635,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.tab3-slider').slick({
        slidesToShow: 5,
        autoplay: true,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1795,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 635,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.search-trigger').on('click', function() {
        $('.search-bar').toggleClass('active')
    });
    $('.close-bar').on('click', function() {
        $('.search-bar').toggleClass('active')
    });

    $('.cart-table .close').on('click', function() {
        $(this).parent().parent().remove();
    })
    
    $(".add-to-cart .plus").click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        let input = $(this).parent().siblings('.input-counter');
        let count = input.val();
        count++;
        $(this).siblings('.minus').removeClass('disabled');
        input.attr('value', count);
    });
    $(".add-to-cart .minus").click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        let input = $(this).parent().siblings('.input-counter');
        let count = input.val();
        if (count <= 1) {
            $(this).addClass('disabled');
            return;
        }
        count--;
        input.attr('value', count);
        if (input.val() < 10) {
        }
    })


    $('.dropdown-menu .close-menu').on('click', function(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        $(this).parents('.dropdown-menu ').fadeOut();
    });

    $('.col--phone .triggered').on('click', function(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        $('.phones-dd').children('.dropdown-menu').fadeIn();
    });

    $('.phones-dd').on('mouseleave', function() {
        $(this).children('.dropdown-menu').fadeOut(900);
    });

    $('.comps').on('click', function() {
        // $('.companies-container').toggleClass('dropped');
        if ($('.companies-container').is(':visible')) {
            $('.companies-container').fadeOut(800);
            $(this).removeClass('opened');
            // $('body').css({'overflow': 'visible'});
        }
        else {
            $('.companies-container').fadeIn(800);
            $(this).addClass('opened');
            // $('body').css({'overflow': 'hidden'});
        }
    });

    $('.dd-trigger').on('click', function() {
        $(this).siblings('.dropdown-menu').fadeIn(500);
    });

    $('.soc-dd').on('mouseleave', function() {
        $(this).children('.dropdown-menu').fadeOut(900);
    })

    $('.companies-container').on('click', function() {
        $('.comps').removeClass('opened');
        $(this).fadeOut(900);
    })

    $('.companies').on('click', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
    })

    $('.open--modal').on('click', function(){
        var modal = $(this).attr('data-modal');
        $(modal).fadeIn();
        return false;
    });
    $('.modal .close, .modal__layer').on('click', function(){
        $(this).parents('.modal').fadeOut();
        return false;
    });

    $('.nav--btn').on('click', function(){
        if ($('header .nav').is(':visible')) {
            $('header .nav').slideUp();
            $(this).removeClass('open');
            $('body').css({'overflow': 'visible'});
        } else {
            $('header .nav').slideDown();
            $(this).addClass('open');
            $('body').css({'overflow': 'hidden'});
        }
        return false;
    });

    $('.tel').inputmask('+7 (999) 999-99-99');
});

$(window).on("load",function(e){
    if ($(window).width() <= '1025'){
        $('header .submenu > a').on('click', function(){
            $(this).next().slideToggle();
            $('.preload').addClass('load').removeClass('loadR');
            return false;
        });
        $('header .submenu > a').attr('href', '#');
        $('.submenu').on('mouseleave', function(){
            $(this).children('.submenu__block').slideUp();
        });
    } else {
        $('header .submenu > a').on('mouseover', function(){
            $(this).next().fadeIn();
        });
        $('.submenu').on('mouseleave', function(){
            $(this).children('.submenu__block').fadeOut();
        });
    }
});

setTimeout(function(){
    $('.preload').addClass('load');
    wow = new WOW({
        boxClass:     'wow',      
        animateClass: 'animated', 
        offset:       0,          
        mobile:       false,       
        live:         true        
    })
    wow.init();
}, 600);

$('a:not([href^="mailto\\:"], [href$="\\#"], [href^="tel\\:"], [target="_blank"], [data-fancybox])').click(function(e) {
    var anchor = $(this), h;
    h = anchor.attr('href');
    e.preventDefault();
    setTimeout(function(){
        window.location = h;
    }, 250);
    $('.preload').addClass('loadR');
});

window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload() 
    }
};

// $(function(){
//     $('.btn--up').bind('click.smoothscroll',function (e) {
//         e.preventDefault();
//         var target = this.hash,
//         $target = $(target);

//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top
//             }, 1000, 'swing', function () {
//             window.location.hash = target;
//         });
//     });

//     $(window).scroll(function(){
//         var bo = $(this).scrollTop();
//         var a = $(".btn--up").css('opacity')
//         if ( bo >= 200 && a == 0) {$(".btn--up").stop().animate({'opacity':'1'},400)};
//         if ( bo < 200 && a == 1) {$(".btn--up").stop().animate({'opacity':'0'},400)};
//     });
// });


/* lazyload 2 */
    /*!
 * Lazy Load - JavaScript plugin for lazy loading images
 *
 * Copyright (c) 2007-2019 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://appelsiini.net/projects/lazyload
 *
 * Version: 2.0.0-rc.2
 *
 */

(function (root, factory) {
if (typeof exports === "object") {
    module.exports = factory(root);
    } else if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        root.LazyLoad = factory(root);
    }
}) (typeof global !== "undefined" ? global : this.window || this.global, function (root) {

    "use strict";

    if (typeof define === "function" && define.amd){
        root = window;
    }

    const defaults = {
        src: "data-src",
        srcset: "data-srcset",
        selector: ".lazyload",
        root: null,
        rootMargin: "0px",
        threshold: 0
    };

    /**
    * Merge two or more objects. Returns a new object.
    * @private
    * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
    * @param {Object}   objects  The objects to merge together
    * @returns {Object}          Merged values of defaults and options
    */
    const extend = function ()  {

        let extended = {};
        let deep = false;
        let i = 0;
        let length = arguments.length;

        /* Check if a deep merge */
        if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
            deep = arguments[0];
            i++;
        }

        /* Merge the object into the extended object */
        let merge = function (obj) {
            for (let prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    /* If deep merge and property is an object, merge properties */
                    if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") {
                        extended[prop] = extend(true, extended[prop], obj[prop]);
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };

        /* Loop through each object and conduct a merge */
        for (; i < length; i++) {
            let obj = arguments[i];
            merge(obj);
        }

        return extended;
    };

    function LazyLoad(images, options) {
        this.settings = extend(defaults, options || {});
        this.images = images || document.querySelectorAll(this.settings.selector);
        this.observer = null;
        this.init();
    }

    LazyLoad.prototype = {
        init: function() {

            /* Without observers load everything and bail out early. */
            if (!root.IntersectionObserver) {
                this.loadImages();
                return;
            }

            let self = this;
            let observerConfig = {
                root: this.settings.root,
                rootMargin: this.settings.rootMargin,
                threshold: [this.settings.threshold]
            };

            this.observer = new IntersectionObserver(function(entries) {
                Array.prototype.forEach.call(entries, function (entry) {
                    if (entry.isIntersecting) {
                        self.observer.unobserve(entry.target);
                        let src = entry.target.getAttribute(self.settings.src);
                        let srcset = entry.target.getAttribute(self.settings.srcset);
                        if ("img" === entry.target.tagName.toLowerCase()) {
                            if (src) {
                                entry.target.src = src;
                            }
                            if (srcset) {
                                entry.target.srcset = srcset;
                            }
                        } else {
                            entry.target.style.backgroundImage = "url(" + src + ")";
                        }
                    }
                });
            }, observerConfig);

            Array.prototype.forEach.call(this.images, function (image) {
                self.observer.observe(image);
            });
        },

        loadAndDestroy: function () {
            if (!this.settings) { return; }
            this.loadImages();
            this.destroy();
        },

        loadImages: function () {
            if (!this.settings) { return; }

            let self = this;
            Array.prototype.forEach.call(this.images, function (image) {
                let src = image.getAttribute(self.settings.src);
                let srcset = image.getAttribute(self.settings.srcset);
                if ("img" === image.tagName.toLowerCase()) {
                    if (src) {
                        image.src = src;
                    }
                    if (srcset) {
                        image.srcset = srcset;
                    }
                } else {
                    image.style.backgroundImage = "url('" + src + "')";
                }
            });
        },

        destroy: function () {
            if (!this.settings) { return; }
            this.observer.disconnect();
            this.settings = null;
        }
    };

    root.lazyload = function(images, options) {
        return new LazyLoad(images, options);
    };

    if (root.jQuery) {
        const $ = root.jQuery;
        $.fn.lazyload = function (options) {
            options = options || {};
            options.attribute = options.attribute || "data-src";
            new LazyLoad($.makeArray(this), options);
            return this;
        };
    }

    return LazyLoad;
});


$('[data-src]').lazyload();