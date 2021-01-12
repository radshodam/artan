/*********************************************************************************

	Template Name: Haltico - Mega Store eCommerce Bootstrap 4 Template
	Description: A perfect template to build beautiful and unique mega store eCommerce websites. It comes with nice and clean design.
	Version: 3.0

	Note: This is main js.

**********************************************************************************/

/**************************************************************
	
	SCRIPT INDEXING
	|
	|
	|___ Mobile Menu
	|___ Custom Selectbox
	|___ Herobanner Slider
	|___ Deal Of The Day Slider
	|___ Deal Of The Day Slider 2
	|___ Trending Product Slider
	|___ Trending Product Slider 2
	|___ Our Product Slider
	|___ Our Proudct Slider 2
	|___ Our Proudcts Slider 3
	|___ New Best Featured Slider
	|___ Category Slider
	|___ Category Slider 2
	|___ Recommended Product Slider
	|___ Featured Product Slider
	|___ Brand Logos Slider
	|___ Latest Blog Slider
	|___ Product Details Slider Image
	|___ Product Details Image Slider
	|___ Countdown Activation
	|___ Accountbox
	|___ Current Currency
	|___ Current Language
	|___ Select Sortby
	|___ Header Cart
	|___ Category Menu
	|___ Recommended Product Exerpt
	|___ Product Quantity
	|___ Product Detals Color & Size
	|___ Rating Hover Action
	|___ Quickview Modal
	|___ Product Details Zoom
	|___ Range Slider Active
	|___ Product Viewmode
	|___ Checkout Login Coupon
	|___ Different Address Form
	|___ Progress Bar Effect
	|___ Ajax Chimp
	|___ Scroll Up Active
	|
	|
	|___ END SCRIPT INDEXING

***************************************************************/


(function ($) {
	'use strict';


		/* Trending Product Slider */
		$('.trending-products-slider').slick({
			slidesToShow: 2,
			autoplay: false,
			autoplaySpeed: 8000,
			speed: 1000,
			adaptiveHeight: true,
			fade: false,
			easing: 'ease-in-out',
			dots: false,
			arrows: true,
			prevArrow: '<span class="slider-navigation-arrow slider-navigation-prev"><i class="ion ion-ios-arrow-back"></i></span>',
			nextArrow: '<span class="slider-navigation-arrow slider-navigation-next"><i class="ion ion-ios-arrow-forward"></i></span>',
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});
	
	
		/* Trending Product Slider 2 */
		$('.trending-products-slider-2').slick({
			slidesToShow: 3,
			autoplay: false,
			autoplaySpeed: 8000,
			speed: 1000,
			adaptiveHeight: true,
			fade: false,
			easing: 'ease-in-out',
			dots: false,
			arrows: true,
			prevArrow: '<span class="slider-navigation-arrow slider-navigation-prev"><i class="ion ion-ios-arrow-back"></i></span>',
			nextArrow: '<span class="slider-navigation-arrow slider-navigation-next"><i class="ion ion-ios-arrow-forward"></i></span>',
			responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	



})(jQuery);