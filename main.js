$(function() {
  $('.tlt').textillate({ in : {
      effect: 'bounceIn',
      shuffle: false,
      sequence: true,
    },
  });

  $('.tlt-about-p').textillate({ in : {
      effect: 'bounceIn',
      shuffle: false,
      sequence: true,
      delayScale: 0.1,
      callback: function() {
        $('.tlt-contact').textillate({ in : {
            effect: 'flash',
            shuffle: false,
            sequence: true,
          },
          out: {
              effect: 'shake',
              shuffle: true,
            },
            loop: true
        });
      }

    }
  });

  $(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 200;
    if(y_scroll_pos > scroll_pos_test) {
      $('h3').css({"font-size": "2.6em", "transition": "1s"});
    } else {
      $('h3').css({"font-size": "2em"});
    }
});

  $("button").click(function() {
    $('#pic').slideToggle("slow");
    $('.marquee').fadeToggle();
    $('header > span').css('padding', '10px')
  });

  $('.marquee').marquee();

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': false
  })
});
