jQuery(document).ready(function ($) {
	// call layout:
    // bao giờ ghép thì xóa phần này đi
	$("#header").load("header.html");
	$("#footer").load("footer.html");
	$("#modal").load("modal.html");
	$("#header_v2").load("header-V2.html");
	$("#footer_v2").load("footer-V2.html");
    // end

	$(".field-date").each(function () {
        $(this).datepicker({
            dateFormat: 'dd/mm/yy'
        });
    });

	// call slick slide
	if ($(window).width() <= 575) {
		$('.two-rows').each(function () {
			$(this).attr('data-rows', 2);
		})
		$('.to-slide').each(function () {
			$(this).addClass('autoplay');
		})
		$('.three-rows').each(function () {
			$(this).attr('data-rows', 3);
		})
		$('.has-dots').each(function () {
			$(this).attr('data-dots', true);
		})
		$('.close-center-mode').each(function () {
			$(this).attr('data-center-mode', false);
			$(this).attr('data-center-padding', 0);
		})
	}
	
	if ($(window).width() <= 575) {
        $(".two-rows").each(function() {
            $(this).attr("data-rows", 2);
        });

        $(".remove-vertical").each(function() {
            $(this).attr("data-vertical", false);
        });
    }

	$(".autoplay").each(function () {
		$(this).slick($(this).data());
	});


	$(".field-date").each(function () {
		$(this).datepicker({
			dateFormat: 'dd/mm/yy'
		});
	});

	// scroll slider by mouse
	$('.scroll-mouse').on('wheel', (function (e) {
		e.preventDefault();
		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickNext');
		} else {
			$(this).slick('slickPrev');
		}
	}));

	// fixed menu
	(function ($) {
		let menu = $('.fixed-main-menu');
		body = $('body,html');
		menuPosition = menu.offset().top;
		$(window).scroll(() => {
			let startpage = body.scrollTop();
			(startpage > menuPosition) ? (menu.addClass('fixed')) : (menu.removeClass('fixed'))
		});
	})($);
	// end fixed menu

	// load top
	(function ($) {
		let up_btn = $("body .up");
		let body = $('body,html');
		up_btn.click(function () {
			$('body,html').delay(0).animate({ scrollTop: 0 }, 400, 'swing');
			return false;
		});
		$(window).scroll(function () {
			let startpage = body.scrollTop();
			if (startpage > 200) {
				up_btn.addClass('up-active');
			} else if (startpage < 200) {
				up_btn.removeClass('up-active');
			}
		});
	})($);
	// end load top

	// Effect accordion
	$(function () {
		$('.accordion .show-option').click(function (event) {
			event.preventDefault();
			
			if ($(this).parent().hasClass('active')) {
				$(this).parent().removeClass('active');
				$(this).parent().find('.fretboard').slideUp();
				($(this).parent().find('.show').removeClass('active').text('-'));
			} else{
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
				$(this).parent().siblings().find('.fretboard').slideUp();
				$(this).parent().find('.fretboard').slideDown();
				$(this).parent().siblings().find('.show').removeClass('active').text('-');
				($(this).parent().find('.show').text() === '+') ? ($(this).parent().find('.show').removeClass('active').text('-')) : ($(this).parent().find('.show').addClass('active').text('+'));
			}
		});
	});
	// end Effect accordion

	// Effect dropdown list
	$(function () {
		$('body').on('click', '.dropdown .show-option', function (event) {
			event.preventDefault();
			if ($(this).parent().find('.fretboard')) {
				$(this).parent().find('.fretboard').slideToggle();
			}
			if ($(this).parent().find('.children')) {
				$(this).parent().find('.children').toggleClass('active');
				$(this).parent().toggleClass('active');
			}
		});

		$('body').on('click', '.close-tab', function (event) {
			event.preventDefault();
			if ($(this).parents('.dropdown').find('.children')) {
				$(this).parents('.dropdown').find('.children').removeClass('active');
				$(this).parents('.dropdown').removeClass('active');
			}
		});

		$('.check-radio').on('click', function (event) {
			event.preventDefault();
			if ($('.check-radio-option').find('.check-radio').hasClass('checked')) {
				$('.check-radio-option').find('.check-radio').removeClass('checked');
				$(this).addClass('checked');
				$('.check-radio-option').find('input').removeAttr('checked');
				$(this).find('input').attr('checked', true);
			}
		});

	});
	// end Effect dropdown list

	$(function () {
		$('.dropdown-menu .show-menu').click(function (event) {
			event.preventDefault();
			
			if ($(this).parent().hasClass('active')) {
				$(this).parent().removeClass('active');
				$(this).parent().find('.fretboard').slideUp();

			} else{
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
				$(this).parent().siblings().find('.dropdown-menu-items').slideUp();
				$(this).parent().find('.dropdown-menu-items').slideDown();
			}
		});
	});

	// Effect drop down
	(function ($) {
		let box = $('body .inside');
		box.find('.drop-down').slideUp();
		$(document).mouseup(e => {
			if (!box.is(e.target) && box.has(e.target).length === 0) {
				box.find('.drop-down').slideUp();
			}
		});
		box.find('.command-button').on('click', function (event) {
			event.preventDefault();
			$(this).parent().siblings().find('.drop-down').slideUp();
			$(this).parent().find('.drop-down').slideToggle();
		});
	})($);
	// end Effect drop down

	// Effect modal
	(function ($) {
		$('body').on('click', '.btn-modal', function (event) {
			event.preventDefault();
			let modalName = $(this).data('modal');
			let modal = $('body').find(`#${modalName}`);
			let allModal = $('body').find(`.modal-custom`);
			if (!modal.hasClass('modal-open')) {
				allModal.each(function () {
					$(this).removeClass(['modal-close', 'modal-open']).hide();
				});
				modal.show().addClass('modal-open');
				$('body').addClass('has-modal');
			} else {
				modal.addClass('modal-close');
				$('body').removeClass('has-modal');
				setTimeout(function () {
					modal.hide();
					modal.removeClass(['modal-close', 'modal-open']);
				}, 1000);
			}
		});
	})($);
	// end Effect modal

	// spinner quantity
	(function($) {
        $('.quantity').each(function() {
            let spinner = $(this),
                input = $(this).find('input'),
                btnUp = $(this).find('.quantity-up'),
                btnDown = $(this).find('.quantity-down'),
                min = input.attr('min'),
                max = input.attr('max');
            let newVal;
            btnUp.click(function() {
                let oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    newVal = oldValue;
                } else {
                    newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
            btnDown.click(function() {
                let oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    newVal = oldValue;
                } else {
                    newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
        });
    })($);
	//end

	// tabs
	$(function () {
		$(".magic-tabs  ul li").on('click', function () {
			var container_tab = $(this).closest('.cover-tab');
			container_tab.find('.tab-content .content').removeClass('active-tab-content');
			$(this).siblings().removeClass("action-tab-btn");
			$(this).addClass('action-tab-btn');
			container_tab.find('.tab-content .content').eq($(this).index()).addClass('active-tab-content');
		});

		if ($(window).width() <= 991){
			$(".magic-tabs  ul li").on('click', function () {
				$(this).parents('.children').removeClass("active");
				$(this).parents('.dropdown').removeClass("active");
			});
		}

	});
	// end tabs

	// modal form registor
	$(function () {
		// choose doctor
		let fakeData = [
			{ "name": "Bác sĩ Nguyễn Tuấn Anh", "job": "Chuyên khoa Gây mê - Điều trị đau" },
			{ "name": "Bác sĩ Nguyễn Duy Tân", "job": "Chuyên khoa nhi" },
			{ "name": "Bác sĩ Nguyễn Tuấn Đạt", "job": "Chuyên khoa mắt" },
			{ "name": "Bác sĩ Ngô Tiến Mạnh", "job": "Chuyên khoa cơ xương khớp" },
			{ "name": "Bác sĩ Bùi Văn Tiến", "job": "Chuyên khoa răng hàm mặt" },
			{ "name": "Bác sĩ Đinh Thùy Nga", "job": "Chuyên tai mũi họng" },
			{ "name": "Bác sĩ Phan Thị Linh", "job": "Chuyên khoa Gây trĩ" },
			{ "name": "Bác sĩ Phạm văn Cần", "job": "Chuyên khoa Gây phổi" },
			{ "name": "Bác sĩ Nguyễn Tuấn Huy", "job": "Chuyên khoa Gây gan" }
		];

		function showVal(fakeData) {
			let listVal = fakeData.map(item => (`
				<div class="item">
					<p class="name">${item.name}</p>
					<span class="job"> - ${item.job}</span>
				</div>
			`))
			$('#list-results').html(listVal);
		}
		showVal(fakeData);

		$(".field-doctor").keyup(function () {
			let val = $(this).val().trim().toLowerCase();
			if (val === '') {
				showVal(fakeData);
				return;
			}
			let fakeDataChange = [];
			fakeData.forEach(item => {
				if (item.name.toLowerCase().indexOf(val) >= 0 || item.job.toLowerCase().indexOf(val) >= 0) {
					fakeDataChange.push(item);
				}
			})
			showVal(fakeDataChange);
		});

		$('body').on('click', '#list-results .item', function () {
			let text = $(this).children('.name').text() + $(this).children('.job').text();
			$(".field-doctor").val(text);
			$(this).parents('#list-results').slideUp();
			$(this).parents('.field-doctor-wrapper').removeClass('active');
		});

		// choose date
		let today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth() + 1;
		let yyyy = today.getFullYear();
		if (dd < 10) {
			dd = '0' + dd;
		} if (mm < 10) {
			mm = '0' + mm;
		}
		today = yyyy + '-' + mm + '-' + dd;
		$(".field-date").attr("min", today);
		$(".field-date").change(function () {
			$(this).parent().find('.result').text($(this).val());
		});
	});
	// end modal form registor

	// show pass
	(function ($) {
		let x = document.getElementById("pass");
		if (x.type === "password") {
			x.type = "text";
		} else {
			x.type = "password";
		}
	});
	// end show pass

	// custom select
	$(".select-custom").each(function () {
		$(this).select2();
	});

	// form search active
	$(function () {
		$('body').on('click', '.form-search .input-text', function () {
			$(this).parents('.form-search').addClass('active');
		});
	});

	// get choose date table
	$(function () {
		$(".field-date").each(function () {
			$(this).datepicker();
		});
	});

	// social detail page fixed

	$(function () {
		$(document).scroll(() => {
			let post_content = $('.post-content');
		});
	});

	$(function() {
        $('.btn-menu-mobile').click(function() {
            $('body').addClass('menu-active');
        })
        $('.btn-close-mobile').click(function() {
            $('body').removeClass('menu-active');
        })
    })

    $(function() {
        $('.menu-mobile .main-menu > li > a').click(function() {
            $(this).toggleClass('active');
            $(this).next().toggleClass('active')
        })
    })

	// scroll tab
	$('body').on('click', '.tab-scroll-content .tab-items .tab-item', function (event) {
		event.preventDefault();
		$(this).parent().find('.tab-item').removeClass('active');
		$(this).addClass('active');

		let item_scroll = $(this).children('.tab-item-link').attr('href');
		$('html, body').scrollTop( $(item_scroll).offset().top - 100);  
	});

});