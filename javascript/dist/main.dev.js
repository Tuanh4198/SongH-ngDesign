"use strict";

jQuery(document).ready(function ($) {
  // call layout
  function getlayout() {
    return regeneratorRuntime.async(function getlayout$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap($("#header").load("header.html"));

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap($("#footer").load("footer.html"));

          case 4:
            _context.next = 6;
            return regeneratorRuntime.awrap($("#modal").load("modal.html"));

          case 6:
            _context.next = 8;
            return regeneratorRuntime.awrap($("#header_v2").load("header-V2.html"));

          case 8:
            _context.next = 10;
            return regeneratorRuntime.awrap($("#footer_v2").load("footer-V2.html"));

          case 10:
            _context.next = 12;
            return regeneratorRuntime.awrap($(".field-date").each(function () {
              $(this).datepicker({
                dateFormat: 'dd/mm/yy'
              });
            }));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  getlayout(); // call slick slide

  if ($(window).width() <= 575) {
    $('.two-rows').each(function () {
      $(this).attr('data-rows', 2);
    });
    $('.to-slide').each(function () {
      $(this).addClass('autoplay');
    });
    $('.three-rows').each(function () {
      $(this).attr('data-rows', 3);
    });
    $('.has-dots').each(function () {
      $(this).attr('data-dots', true);
    });
    $('.close-center-mode').each(function () {
      $(this).attr('data-center-mode', false);
      $(this).attr('data-center-padding', 0);
    });
  }

  $(".autoplay").each(function () {
    $(this).slick($(this).data());
  });
  $(".field-date").each(function () {
    $(this).datepicker({
      dateFormat: 'dd/mm/yy'
    });
  }); // scroll slider by mouse

  $('.scroll-mouse').on('wheel', function (e) {
    e.preventDefault();

    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }); // fixed menu

  (function ($) {
    var menu = $('.fixed-main-menu');
    body = $('body,html');
    menuPosition = menu.offset().top;
    $(window).scroll(function () {
      var startpage = body.scrollTop();
      startpage > menuPosition ? menu.addClass('fixed') : menu.removeClass('fixed');
    });
  })($); // end fixed menu
  // load top


  (function ($) {
    var up_btn = $("body .up");
    var body = $('body,html');
    up_btn.click(function () {
      console.log('object');
      $('body,html').delay(0).animate({
        scrollTop: 0
      }, 400, 'swing');
      return false;
    });
    $(window).scroll(function () {
      var startpage = body.scrollTop();

      if (startpage > 200) {
        up_btn.addClass('up-active');
      } else if (startpage < 200) {
        up_btn.removeClass('up-active');
      }
    });
  })($); // end load top
  // Effect accordion


  $(function () {
    $('.accordion .show-option').click(function (event) {
      event.preventDefault();

      if ($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
        $(this).parent().find('.fretboard').slideUp();
        $(this).parent().find('.show').removeClass('active').text('-');
      } else {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        $(this).parent().siblings().find('.fretboard').slideUp();
        $(this).parent().find('.fretboard').slideDown();
        $(this).parent().siblings().find('.show').removeClass('active').text('-');
        $(this).parent().find('.show').text() === '+' ? $(this).parent().find('.show').removeClass('active').text('-') : $(this).parent().find('.show').addClass('active').text('+');
      }
    });
  }); // end Effect accordion
  // Effect dropdown list

  $(function () {
    $('body').on('click', '.dropdown .show-option', function (event) {
      event.preventDefault();
      console.log('object');

      if ($(this).parent().find('.fretboard')) {
        $(this).parent().find('.fretboard').slideToggle();
      }

      if ($(this).parent().find('.children')) {
        $(this).parent().find('.children').toggleClass('active');
      }
    });
    $('body').on('click', '.close-tab', function (event) {
      event.preventDefault();
      console.log('object');

      if ($(this).parents('.dropdown').find('.children')) {
        $(this).parents('.dropdown').find('.children').removeClass('active');
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
  }); // end Effect accordion
  // Effect drop down

  (function ($) {
    var box = $('body .inside');
    box.find('.drop-down').slideUp();
    $(document).mouseup(function (e) {
      if (!box.is(e.target) && box.has(e.target).length === 0) {
        box.find('.drop-down').slideUp();
      }
    });
    box.find('.command-button').on('click', function (event) {
      event.preventDefault();
      $(this).parent().siblings().find('.drop-down').slideUp();
      $(this).parent().find('.drop-down').slideToggle();
    });
  })($); // end Effect drop down
  // Effect modal


  (function ($) {
    $('body').on('click', '.btn-modal', function (event) {
      event.preventDefault();
      var modalName = $(this).data('modal');
      var modal = $('body').find("#".concat(modalName));
      var allModal = $('body').find(".modal-custom");

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
  })($); // end Effect modal
  // spinner quantity


  (function ($) {
    $('.quantity').each(function () {
      var spinner = $(this),
          input = $('.quantity input[type="number"]'),
          btnUp = $('.quantity .quantity-up'),
          btnDown = $('.quantity .quantity-down'),
          min = input.attr('min'),
          max = input.attr('max');
      var newVal;
      btnUp.click(function () {
        var oldValue = parseFloat(input.val());

        if (oldValue >= max) {
          newVal = oldValue;
        } else {
          newVal = oldValue + 1;
        }

        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
      btnDown.click(function () {
        var oldValue = parseFloat(input.val());

        if (oldValue <= min) {
          newVal = oldValue;
        } else {
          newVal = oldValue - 1;
        }

        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
    });
  }); //end
  // tabs


  $(function () {
    $(".magic-tabs  ul li").on('click', function () {
      var container_tab = $(this).closest('.cover-tab');
      container_tab.find('.tab-content .content').removeClass('active-tab-content');
      $(this).siblings().removeClass("action-tab-btn");
      $(this).addClass('action-tab-btn');
      container_tab.find('.tab-content .content').eq($(this).index()).addClass('active-tab-content');
    });
  }); // end tabs
  // modal form registor

  $(function () {
    // choose doctor
    var fakeData = [{
      "name": "Bác sĩ Nguyễn Tuấn Anh",
      "job": "Chuyên khoa Gây mê - Điều trị đau"
    }, {
      "name": "Bác sĩ Nguyễn Duy Tân",
      "job": "Chuyên khoa nhi"
    }, {
      "name": "Bác sĩ Nguyễn Tuấn Đạt",
      "job": "Chuyên khoa mắt"
    }, {
      "name": "Bác sĩ Ngô Tiến Mạnh",
      "job": "Chuyên khoa cơ xương khớp"
    }, {
      "name": "Bác sĩ Bùi Văn Tiến",
      "job": "Chuyên khoa răng hàm mặt"
    }, {
      "name": "Bác sĩ Đinh Thùy Nga",
      "job": "Chuyên tai mũi họng"
    }, {
      "name": "Bác sĩ Phan Thị Linh",
      "job": "Chuyên khoa Gây trĩ"
    }, {
      "name": "Bác sĩ Phạm văn Cần",
      "job": "Chuyên khoa Gây phổi"
    }, {
      "name": "Bác sĩ Nguyễn Tuấn Huy",
      "job": "Chuyên khoa Gây gan"
    }];

    function showVal(fakeData) {
      var listVal = fakeData.map(function (item) {
        return "\n\t\t\t\t<div class=\"item\">\n\t\t\t\t\t<p class=\"name\">".concat(item.name, "</p>\n\t\t\t\t\t<span class=\"job\"> - ").concat(item.job, "</span>\n\t\t\t\t</div>\n\t\t\t");
      });
      $('#list-results').html(listVal);
    }

    showVal(fakeData);
    $(".field-doctor").keyup(function () {
      var val = $(this).val().trim().toLowerCase();

      if (val === '') {
        showVal(fakeData);
        return;
      }

      var fakeDataChange = [];
      fakeData.forEach(function (item) {
        if (item.name.toLowerCase().indexOf(val) >= 0 || item.job.toLowerCase().indexOf(val) >= 0) {
          fakeDataChange.push(item);
        }
      });
      showVal(fakeDataChange);
    });
    $('body').on('click', '#list-results .item', function () {
      var text = $(this).children('.name').text() + $(this).children('.job').text();
      $(".field-doctor").val(text);
      console.log(text);
    }); // choose date

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;
    $(".field-date").attr("min", today);
    $(".field-date").change(function () {
      $(this).parent().find('.result').text($(this).val());
      console.log($(this).text());
    });
  }); // end modal form registor
  // show pass

  (function ($) {
    var x = document.getElementById("pass");

    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }); // end show pass
  // custom select


  $(".select-custom").each(function () {
    $(this).select2();
  }); // form search active

  $(function () {
    $('body').on('click', '.form-search .input-text', function () {
      $(this).parents('.form-search').addClass('active');
    });
  }); // get choose date table

  $(function () {
    $(".field-date").each(function () {
      $(this).datepicker();
    });
  }); // social detail page fixed

  $(function () {
    $(document).scroll(function () {
      var post_content = $('.post-content');
    });
  }); // scroll tab

  $('body').on('click', '.tab-scroll-content .tab-items .tab-item', function (event) {
    event.preventDefault();
    $(this).parent().find('.tab-item').removeClass('active');
    $(this).addClass('active');
    var item_scroll = $(this).children('.tab-item-link').attr('href');
    $('html, body').animate({
      scrollTop: $(item_scroll).offset().top
    }, 0);
  });
});