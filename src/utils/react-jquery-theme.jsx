/*
Theme Name: Goru
Theme URI: http://tf.wpcashcow.com/goru/
Author: wpsmasher
Author URI: http://wpcashcow.com/
Description: Goru - Ecommerce HTML5 Responsive Template
Version: 1.0
License:
License URI:
*/
/*=======================================================================
 [Table of contents]
 =========================================================================
 1. Revolution Slider 01
 2. Revolution Slider 02
 3. All Carousel
 4. Popup Search
 5. Count Down
 6. Fixed Header
 7. Mobile Menu
 8. Video Popup
 9. Qty
 10. Payment Accordian
 11. popUp Menu
 12. Back To Top
 13. Slider Range
 14. Contact Form Submission
 */

import { TimelineLite, Power2 } from "gsap/gsap-core";

const globalReactJQueryInitializer = function () {
	/* Init Vars */
	var trending_slider = window.$(".trending-slider"),
		popular_tab_slider = window.$(".popular-tab-slider"),
		related_slider = window.$(".related-slider"),
		client_logo = window.$(".client-logo"),
		countdown = window.$("#countdown-coupone"),
		popular_tab_slider_two = window.$(".popular-tab-slider-two"),
		popup_video = window.$(".popup-video"),
		slider_range = window.$("#slider-range");

	/*--------------------------------------------------------
     / 1. Revolution Slider 01
     /----------------------------------------------------------*/
	// var revapi = window
	// 	.jQuery("#rev_slider_1")
	// 	.show()
	// 	.revolution({
	// 		delay: 7000,
	// 		responsiveLevels: [1200, 1140, 778, 480],
	// 		gridwidth: [1140, 920, 700, 380],
	// 		sliderLayout: "fullscreen",
	// 		navigation: {
	// 			arrows: {
	// 				enable: true,
	// 				style: "uranus",
	// 				hide_onmobile: false,
	// 				hide_onleave: false,
	// 				left: {
	// 					h_align: "right",
	// 					v_align: "bottom",
	// 					h_offset: 208,
	// 					v_offset: 100,
	// 				},
	// 				right: {
	// 					h_align: "right",
	// 					v_align: "bottom",
	// 					h_offset: 130,
	// 					v_offset: 100,
	// 				},
	// 			},
	// 		},
	// 	});
	// revapi.one("revolution.slide.onloaded", function () {
	// 	var currentSlide = parseInt(revapi.revcurrentslide(), 10) + 1;
	// 	currentSlide = currentSlide < 10 ? "0" + currentSlide : currentSlide;
	// 	var totalSlides = revapi.revmaxslide();
	// 	totalSlides = totalSlides < 10 ? "0" + totalSlides : totalSlides;
	// 	window.$(".slider-counter .total-item").html(totalSlides);
	// 	window.$(".slider-counter .current-item").html(currentSlide);
	// });
	// revapi.on("revolution.slide.onafterswap", function (event, data) {
	// 	var currentSlide = revapi.revcurrentslide();
	// 	currentSlide = currentSlide < 10 ? "0" + currentSlide : currentSlide;
	// 	window.$(".slider-counter .current-item").html(currentSlide);
	// });

	/*--------------------------------------------------------
     / 2. Revolution Slider 02
     /----------------------------------------------------------*/
	var revapi2 = window
		.jQuery("#rev_slider_2")
		.show()
		.revolution({
			delay: 7000,
			responsiveLevels: [1200, 1140, 778, 480],
			gridwidth: [1140, 920, 700, 380],
			sliderLayout: "fullscreen",
			navigation: {
				arrows: {
					enable: true,
					style: "uranus",
					hide_onmobile: false,
					hide_onleave: false,
					left: {
						h_align: "left",
						v_align: "center",
						h_offset: 90,
						v_offset: 0,
					},
					right: {
						h_align: "right",
						v_align: "center",
						h_offset: 90,
						v_offset: 0,
					},
				},
			},
		});
	revapi2.one("revolution.slide.onloaded", function () {
		var currentSlide = parseInt(revapi2.revcurrentslide(), 10) + 1;
		currentSlide = currentSlide < 10 ? "0" + currentSlide : currentSlide;
		var totalSlides = revapi2.revmaxslide();
		totalSlides = totalSlides < 10 ? "0" + totalSlides : totalSlides;
		window.$(".slider-counter .total-item").html(totalSlides);
		window.$(".slider-counter .current-item").html(currentSlide);
	});
	revapi2.on("revolution.slide.onafterswap", function (event, data) {
		var currentSlide = revapi2.revcurrentslide();
		currentSlide = currentSlide < 10 ? "0" + currentSlide : currentSlide;
		window.$(".slider-counter .current-item").html(currentSlide);
	});
	/*--------------------------------------------------------
     / 3. All Carousel
     /----------------------------------------------------------*/

	/*----- 3.1 Trending Slider -----*/
	// trending_slider.owlCarousel({
	// 	loop: false,
	// 	margin: 0,
	// 	responsiveClass: true,
	// 	dots: false,
	// 	smartSpeed: 700,
	// 	animateIn: "slideInRight",
	// 	animateOut: "slideOutRight",
	// 	nav: true,
	// 	navText: [
	// 		'<i class="twi-long-arrow-alt-left1"></i>',
	// 		'<i class="twi-long-arrow-alt-right1"></i>',
	// 	],
	// 	items: 1,
	// });
	/*----- 3.2 Popular Product Slider -----*/
	// popular_tab_slider.owlCarousel({
	// 	loop: false,
	// 	margin: 30,
	// 	responsiveClass: true,
	// 	dots: false,
	// 	smartSpeed: 700,
	// 	animateIn: "slideInRight",
	// 	animateOut: "slideOutRight",
	// 	nav: true,
	// 	navText: [
	// 		'<i class="twi-long-arrow-alt-left1"></i>',
	// 		'<i class="twi-long-arrow-alt-right1"></i>',
	// 	],
	// 	items: 3,
	// 	responsive: {
	// 		0: {
	// 			items: 1,
	// 		},
	// 		700: {
	// 			items: 2,
	// 		},
	// 		992: {
	// 			items: 3,
	// 		},
	// 	},
	// });
	/*----- 3.3 Popular Product Slider 02 -----*/
	// popular_tab_slider_two.owlCarousel({
	// 	loop: false,
	// 	margin: 40,
	// 	responsiveClass: true,
	// 	dots: false,
	// 	smartSpeed: 700,
	// 	animateIn: "slideInLeft",
	// 	animateOut: "slideOutRight",
	// 	nav: true,
	// 	navText: [
	// 		'<i class="twi-long-arrow-alt-left1"></i>',
	// 		'<i class="twi-long-arrow-alt-right1"></i>',
	// 	],
	// 	items: 4,
	// 	responsive: {
	// 		0: {
	// 			items: 1,
	// 		},
	// 		700: {
	// 			items: 2,
	// 			margin: 30,
	// 		},
	// 		992: {
	// 			items: 3,
	// 			margin: 30,
	// 		},
	// 		1200: {
	// 			items: 4,
	// 		},
	// 	},
	// });

	/*----- 3.4 Related Product Slider -----*/
	related_slider.owlCarousel({
		loop: false,
		margin: 30,
		responsiveClass: true,
		dots: false,
		smartSpeed: 700,
		autoplay: true,
		autoplayTimeout: 3000,
		animateIn: "slideInLeft",
		animateOut: "slideOutRight",
		nav: false,
		items: 3,
		responsive: {
			0: {
				items: 1,
			},
			700: {
				items: 2,
			},
			992: {
				items: 3,
			},
		},
	});

	/*----- 3.5 Related Product Slider -----*/
	client_logo.owlCarousel({
		loop: true,
		margin: 30,
		responsiveClass: true,
		dots: false,
		smartSpeed: 700,
		autoplay: false,
		autoplayTimeout: 3000,
		animateIn: "slideInLeft",
		animateOut: "slideOutRight",
		nav: false,
		items: 5,
		responsive: {
			0: {
				items: 1,
			},
			450: {
				items: 2,
			},
			700: {
				items: 3,
			},
			992: {
				items: 5,
			},
		},
	});
	/*--------------------------------------------------------
    / 4. Popup Search and Scroll Off
    /----------------------------------------------------------*/
	// window.$(".search-toggles").on("click", function (e) {
	// 	e.preventDefault();
	// 	window.$(".popup-search-sec").toggleClass("active");
	// });
	// window.$(".search-closer").on("click", function () {
	// 	window.$(".popup-search-sec").removeClass("active");
	// });

	// window.$(".scroll-down a").on("click", function () {
	// 	window
	// 		.$("html, body")
	// 		.animate(
	// 			{ scrollTop: window.$(this.hash).offset().top - 68 },
	// 			1000
	// 		);
	// 	return false;
	// });
	// window.$(".colse-popup").on("click", function (e) {
	// 	e.preventDefault();
	// 	window.$(".newsletter-popup").fadeOut("medium");
	// });

	/*--------------------------------------------------------
     / 5. Count Down
     /----------------------------------------------------------*/
	// if (countdown.length > 0) {
	//   var d = countdown.attr("data-day");
	//   var m = countdown.attr("data-month");
	//   var y = countdown.attr("data-year");
	//   countdown.countdown({
	//     until: new Date(y, m - 1, d),
	//     format: "DHMS",
	//   });
	// }

	/*--------------------------------------------------------
     / 6. Fixed Header
     /--------------------------------------------------------*/
	window.$(window).on("scroll", function () {
		if (window.$(window).scrollTop() > 40) {
			window.$(".fix-header").addClass("sticky animated fadeIn");
		} else {
			window.$(".fix-header").removeClass("sticky animated fadeIn");
		}
	});

	/*--------------------------------------------------------
    / 7. Mobile Menu
    /---------------------------------------------------------*/
	window.$(window).on("load resize", function (e) {
		if (window.$(window).width() < 991) {
			window.$(".mobile-btn a").on("click", function (e) {
				e.preventDefault();
				window.$(".mobile-menu > ul").stop(true, true).slideToggle();
			});
			window
				.$(".mobile-menu ul li.menu-item-has-children")
				.each(function () {
					var $this = window.$(this);
					$this.append(
						'<span class="submenu-toggler"><i class="twi-caret-down"></i></span>'
					);
				});
			window
				.$(
					".mobile-menu ul li.menu-item-has-children > span.submenu-toggler"
				)
				.on("click", function () {
					var $this = window.$(this);

					if (window.$(this).hasClass("active-span")) {
						window
							.$("i", $this)
							.removeClass("twi-caret-up")
							.addClass("twi-caret-down");
					} else {
						window
							.$("i", $this)
							.addClass("twi-caret-up")
							.removeClass("twi-caret-down");
					}

					window.$(this).prev("ul.sub-menu").slideToggle();
					window.$(this).toggleClass("active-span");
				});
		}
	});
	/*--------------------------------------------------------
    / 8. Video Popup
    /---------------------------------------------------------*/
	popup_video.lightcase({
		transition: "elastic",
		showSequenceInfo: false,
		slideshow: false,
		swipe: true,
		showTitle: false,
		controls: true,
	});

	/*--------------------------------------------------------
    / 9. Qty
    /----------------------------------------------------------*/
	if (window.$(".qtyBtn").length > 0) {
		window.$(".btnMinus").on("click", function () {
			var vals = parseInt(window.$(this).next(".carqty").val(), 10);

			if (vals > 1) {
				vals -= 1;
				window.$(this).next(".carqty").val(vals);
			} else {
				window.$(this).next(".carqty").val(vals);
			}
			return false;
		});
		window.$(".btnPlus").on("click", function () {
			var vals = parseInt(window.$(this).prev(".carqty").val(), 10);
			vals += 1;
			window.$(this).prev(".carqty").val(vals);
			return false;
		});
	}

	/*--------------------------------------------------------
     / 10. Payment Accordian
     /---------------------------------------------------------*/
	if (window.$(".wc_payment_methods").length > 0) {
		window.$(".wc_payment_methods li").each(function () {
			window.$('input[type="radio"]', this).on("click", function (e) {
				var ids = window.$(this).attr("id");
				if (window.$("div." + ids).hasClass("visibales")) {
				} else {
					window.$(".payment_box").removeClass("visibales");
					window.$(".payment_box").slideUp("fast");
					window
						.$("div." + ids)
						.slideDown("fast")
						.addClass("visibales");
				}
			});
		});
	}
	/*--------------------------------------------------------
    / 11. popUp Menu
    /---------------------------------------------------------*/
	window.$("#hamburger").on("click", function (e) {
		e.preventDefault();
		window.$(".popup_menu").addClass("active").fadeIn();
		setTimeout(function () {
			if (window.$(".popup_menu").hasClass("active")) {
				var tlMenu = new TimelineLite();
				tlMenu.set(window.$(".animated_menu"), { y: 80, opacity: 0 });
				window.$(".animated_menu").each(function (index, element) {
					tlMenu.to(
						element,
						0.5,
						{ y: 0, opacity: 1, delay: 0.4, ease: Power2.easeOut },
						index * 0.1
					);
				});
			} else {
				var tlMenu = new TimelineLite();
				window.$(".animated_menu").each(function (index, element) {
					tlMenu.to(
						element,
						0.25,
						{ y: -80, opacity: 0, ease: Power2.easeIn },
						index * 0.05
					);
				});
			}
		}, 20);
	});
	if (window.$(".menu_popup").length > 0) {
		window
			.$(".menu_popup ul li.menu-item-has-children > a")
			.on("click", function (e) {
				e.preventDefault();
				if (window.$(this).parent("li").hasClass("active")) {
					window.$(this).parent("li").removeClass("active");
					window.$(this).next("ul.sub-menu").slideUp("slow");
				} else {
					window
						.$(".menu-item-has-children ul.sub-menu")
						.slideUp("slow");
					window
						.$(".menu-item-has-children.active")
						.removeClass("active");
					window.$(this).parent().toggleClass("active");
					window.$(this).next("ul.sub-menu").slideToggle("slow");
				}
			});
	}
	window.$("#close_menu").on("click", function () {
		var tlMenu = new TimelineLite();
		window.$(".animated_menu").each(function (index, element) {
			tlMenu.to(
				element,
				0.25,
				{ y: -80, opacity: 0, ease: Power2.easeIn },
				index * 0.05
			);
		});
		window.$(".popup_menu ul.sub-menu").slideUp("slow", function () {
			window.$(".menu-item-has-children.active").removeClass("active");
			window.$(".popup_menu").removeClass("active");
		});
		setTimeout(function () {
			window.$(".popup_menu").fadeOut();
		}, 500);
	});
	/*--------------------------------------------------------
    / 12. Back To Top And Loader
    /---------------------------------------------------------*/
	var back = window.$("#backtotop"),
		body = window.$("body, html");
	window.$(window).on("scroll", function () {
		if (window.$(window).scrollTop() > window.$(window).height()) {
			back.css({ bottom: "50px", opacity: "1", visibility: "visible" });
		} else {
			back.css({ bottom: "-50px", opacity: "0", visibility: "hidden" });
		}
	});
	body.on("click", "#backtotop", function (e) {
		e.preventDefault();
		body.animate({ scrollTop: 0 }, 800);
		return false;
	});
	window.$(window).on("load", function (event) {
		window.$("#preloader").delay(800).fadeOut(500);
	});
	/*--------------------------------------------------------
    / 13. Slider Range
    /--------------------------------------------------------*/
	if (slider_range.length > 0) {
		slider_range.slider({
			range: true,
			min: 0,
			max: 999,
			values: [0, 999],
			slide: function (event, ui) {
				window
					.$("#slider-range span.ui-slider-handle")
					.eq(0)
					.html("<span>" + "$" + ui.values[0] + "</span>");
				window
					.$("#slider-range span.ui-slider-handle")
					.eq(1)
					.html("<span>" + "$" + ui.values[1] + "</span>");
			},
		});
		window
			.$("#slider-range span.ui-slider-handle")
			.eq(0)
			.html(
				"<span>" +
					"$" +
					window.$("#slider-range").slider("values", 0) +
					"</span>"
			);
		window
			.$("#slider-range span.ui-slider-handle")
			.eq(1)
			.html(
				"<span>" +
					"$" +
					window.$("#slider-range").slider("values", 1) +
					"</span>"
			);
	}

	/*--------------------------------------------------------
    / 14. Contact Form Submission
    /--------------------------------------------------------*/
	window.$("#contact-form").on("submit", function (e) {
		e.preventDefault();
		var $this = window.$(this);

		window.$('button[type="submit"]', this).attr("disabled", "disabled");
		window.$(".goru_loader", this).fadeIn();

		var form_data = $this.serialize();

		var required = 0;
		window.$(".required", this).each(function () {
			if (window.$(this).val() === "") {
				window.$(this).addClass("reqError");
				required += 1;
			} else {
				if (window.$(this).hasClass("reqError")) {
					window.$(this).removeClass("reqError");
					if (required > 0) {
						required -= 1;
					}
				}
			}
		});

		if (required === 0) {
			window.$.ajax({
				type: "POST",
				url: "assets/ajax/mail.php",
				data: { form_data: form_data },
				success: function (data) {
					window
						.$('button[type="submit"]', $this)
						.removeAttr("disabled");
					window.$(".goru_loader", $this).fadeOut();

					window.$(this).remove(".goru_con_message");
					window
						.$(".goru_con_message", $this)
						.fadeIn()
						.html("Congratulation! Message successfully sent.");
					setTimeout(function () {
						window.$(".goru_con_message", $this).fadeOut().html("");
					}, 5000);
				},
			});
		} else {
			window.$('button[type="submit"]', $this).removeAttr("disabled");
			window.$(".goru_loader", $this).fadeOut();
			window.$(".goru_con_message", $this).fadeOut().html("");
		}
	});
	window.$(".required").on("keyup", function () {
		window.$(this).removeClass("reqError");
	});
};

export default globalReactJQueryInitializer;
