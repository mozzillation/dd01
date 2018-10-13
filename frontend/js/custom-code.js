var header = $('.header'),
  page = $('#page'),
  grain = $('.grain'),
  footer = $('.footer');




$(window).load(function() {

  $("html, body").animate({
    scrollTop: 0
  }, 10);

  verbalGraph();

  setTimeout(function() {
    animate();
  }, 1000)




  // INFOGRAPHIC INTERACTION



  var wHeight = $(window).height();
  var overflow = $('.overflow');

  $(window).scroll(function() {

    var scroll = $(window).scrollTop();

    if (scroll > wHeight / 2) {
      $('video')[0].pause();
    } else {
      $('video')[0].play();
    }

    var opacityValue = map(scroll, 0, wHeight / 1.5, 0, 1);
    var positionValue = map(scroll, 0, wHeight / 1.5, 0, -100);

    if (scroll > wHeight) {
      footer.addClass('is-visible');
      overflow.addClass('is-visible');

    } else {
      footer.removeClass('is-visible')
      overflow.removeClass('is-visible');
    }

    $('.overlay').css({
      opacity: opacityValue
    })

    header.css({
      transform: "translateY(" + positionValue + "px)"
    })


  })

})


function verbalGraph() {
  var offset = $("#verbal").offset();

  $(window).resize(function() {
    offset = $("#verbal").offset();
  })


  console.log(offset);

  $("#verbal").mousemove(function(e) {
    var leftV = e.pageX - offset.left + 10;
    var topV = e.pageY - offset.top - 10;
    $('.verbal_box').css({
      left: leftV,
      top: topV
    })
  });

  $('#verbal g path').hover(function() {
    var parent = $(this).parent('g').attr('id');

    if (parent != 'BG') {
      var $this = $(this).parent('g');
      var country = $this.data('title'),
        verbal = $this.data('v'),
        noverbal = $this.data('nv');

      $('.verbal_box').addClass('is-visible');

      $('.verbal_box__title').html(country);
      $('.verbal_box__verbal span.perc').html(verbal + "%");
      $('.verbal_box__noverbal span.perc').html(noverbal + "%");

      $(this).parent('g').addClass('active');
      $('#verbal g').not(this).addClass('hide');

    };
  }, function() {
    $('.verbal_box').removeClass('is-visible');
    $(this).parent('g').removeClass('active');
    $('#verbal g').not(this).removeClass('hide');
  });
}



function animate() {



  grain.addClass('is-loaded');
  page.addClass('is-loaded');

  var i = 0,
    arrayAnimation = $('[data-animate]').toArray();

  // console.log(arrayAnimation);

  arrayAnimation.forEach(function(t) {
    var delay = i * 100;

    setTimeout(function() {
      t.classList.add('is-animated');
    }, delay);

    i++;
  })

  inView.offset({
    top: 0,
    right: 0,
    bottom: 50,
    left: 0
  });
  inView.threshold(0.5);
  inView('[data-scroll], section')
    .on('enter', el => {
      console.log(el);
      el.style.opacity = 1;
      el.classList.add('is-animated')
    })
    .on('exit', el => {});

};


function map(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}