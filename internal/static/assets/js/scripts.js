(function($) {
	'use strict';
    $(window).load(function() {
        var $container = $('#projects');
        $container.isotope({
            itemSelector: '.project-item',
            filter: '*',
            masonry: {
                columnWidth: 1
            }
        });
        $('#filters a').on("click", function() {
            var $this = $(this);
            if ($this.hasClass('selected')) {
                return false;
            }
            var $optionSet = $this.parents();
            $optionSet.find('.selected').removeClass('selected');
            $this.addClass('selected');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector
            });
            return false;
        });
    });
    // $('.image-carousel').each( function () {
    //     var $s1, $s2, $s3;
    //     var $show   = $s1 = $s2 = $(this).data('show');
    //     var $arr    = $(this).data('arrow');
    //     var $dots   = !$arr;
    //     if($(this).hasClass('partner-slider')){
    //         $dots    = false;
    //     }
    //     if( 4 > $show > 2 ) { $s1 = $s2 = $show - 1; }
    //     if( $show > 3 ) { $s1 = $show - 1; $s2 = $show - 2; $s3 = $show - 3; }

    //     $(this).slick({
    //         infinite: true,
    //         slidesToShow: $show,
    //         slidesToScroll: 1,
    //         arrows: $arr,
    //         prevArrow: '<button type="button" class="prev-nav"><i class="fa fa-angle-left"></i></button>',
    //         nextArrow: '<button type="button" class="next-nav"><i class="fa fa-angle-right"></i></button>',
    //         autoplay: true,
    //         autoplaySpeed: 7000,
    //         responsive: [
    //             {
    //                 breakpoint: 1199,
    //                 settings: {
    //                     slidesToShow: $s1,
    //                     slidesToScroll: 1,
    //                     infinite: true,
    //                     arrows: $arr,
    //                     dots: $dots
    //                 }
    //             },
    //             {
    //                 breakpoint: 991,
    //                 settings: {
    //                     slidesToShow: $s2,
    //                     slidesToScroll: 1,
    //                     infinite: true,
    //                     arrows: $arr,
    //                     dots: $dots
    //                 }
    //             },
    //             {
    //                 breakpoint: 767,
    //                 settings: {
    //                     slidesToShow: $s2,
    //                     slidesToScroll: 1,
    //                     arrows: false,
    //                     dots: false
    //                 }
    //             },
    //             {
    //                 breakpoint: 600,
    //                 settings: {
    //                     slidesToShow: 2,
    //                     slidesToScroll: 1,
    //                     arrows: false,
    //                     dots: false
    //                 }
    //             },
    //             {
    //                 breakpoint: 480,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     arrows: false,
    //                     dots: false
    //                 }
    //             }
    //         ]
    //     });
    // });
    // $('.news-slider').each( function () {
    //     var $show = $(this).data('show');
    //     var $dot  = $(this).data('dot');
    //     var $auto = $(this).data('auto');
    //     var $m_show = $show;
    //     if( $show >= 3 ) $m_show = $show - 1;
    //     $(this).slick({
    //         infinite: false,
    //         slidesToShow: $show,
    //         slidesToScroll: 1,
    //         arrows: false,
    //         dots: $dot,
    //         autoplay: $auto,
    //         autoplaySpeed: 6000,
    //         prevArrow: '<button type="button" class="prev-nav"><i class="fa fa-angle-left"></i></button>',
    //         nextArrow: '<button type="button" class="next-nav"><i class="fa fa-angle-right"></i></button>',
    //         responsive: [
    //             {
    //                 breakpoint: 991,
    //                 settings: {
    //                     slidesToShow: $m_show,
    //                     slidesToScroll: 1,
    //                     arrows: false,
    //                     dots: true
    //                 }
    //             },
    //             {
    //                 breakpoint: 767,
    //                 settings: {
    //                     slidesToShow: $m_show - 1,
    //                     slidesToScroll: 1,
    //                     arrows: false,
    //                     dots: true
    //                 }
    //             },
    //             {
    //                 breakpoint: 480,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                     arrows: false,
    //                     dots: true
    //                 }
    //             }
    //         ]
    //     });
    // });
	// $('.sign_in').on('click', function(){
	// 	Swal.fire({
	// 		html: $('#sign_in_box').innerHTML,
	// 		showCloseButton: false,
	// 		showConfirmButton: false,
	// 		customClass: 'swal_login_box'
	// 	});
	// });

	// $(document).on('click', '.btn_box a', function(e){
	// 	let email = $(document).find('.swal_login_box .email input').val().trim();
	// 	let password = $(document).find('.swal_login_box .password input').val().trim();
	// 	var is_send = true;
	// 	if ( validate_email(email) === false ) {
	// 		show_message(1);
	// 		is_send = false;
	// 	}
	// 	if ( is_send && password.length < 5 ) {
	// 		show_message(2);
	// 		is_send = false;
	// 	}
	// 	if ( is_send ) {
	// 		var post_data = new FormData();
	// 		post_data.append('email', email);
	// 		post_data.append('password', password);
	// 		//post_data.append('remember', $('#remember_me').prop('checked'));
	// 		$.ajax({
	// 			url: '/auth',
	// 			type: 'post',
	// 			async: true,
	// 			data: post_data,
	// 			cache: false,
	// 			contentType: false,
	// 			processData: false
	// 		}).done(function ( result ) {
	// 			var msg = JSON.parse(result);
	// 			if (msg.result === 'error'){
	// 				if ( msg.element === 'username' ) {
	// 					show_message(0, msg.message)
	// 				}
	// 				if ( msg.element === 'password' ) {
	// 					show_message(0, msg.message)
	// 				}
	// 			}
	// 			if (msg.result === 'success') {
	// 				location.reload();
	// 			}
	// 		});
	// 	}
	// });
	function show_message( error_id, text = false ) {
		var error_password_text = $(document).find('.swal_login_box .error_password').text();
		if ( error_id === 1 && text === false ) {
			$(document).find('.swal_login_box .error_email').css({'opacity': 1});
		}
		if ( error_id === 2 && text === false ) {
			$(document).find('.swal_login_box .error_password').css({'opacity': 1});
		}
		if ( text !== false ) {
			$(document).find('.swal_login_box .error_password').text( text );
			$(document).find('.swal_login_box .error_password').css({'opacity': 1});
		}
		setTimeout(function(){
			$(document).find('.swal_login_box .error_text').css({'opacity': 0});
			$(document).find('.swal_login_box .error_password').text( error_password_text );
		}, 3000);
	}
	function validate_email( email ) {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}
} )( jQuery );
