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

  $("button").click(function() {
    $('#pic').slideToggle("slow");
    $('.marquee').fadeToggle();
    $('header > span').css('padding', '5px')
  });

  $('.marquee').marquee();

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': false
  })
});
