var header = $('.header'),
  page = $('#page'),
  pageScroll = $('#page-scroll'),
  menu = $('#menu'),
  grain = $('.grain'),
  footer = $('.footer');




$(window).load(function() {

  $("html, body").animate({
    scrollTop: 0
  }, 10);

  alluvionalGraph();
  verbalGraph();
  perpetratorGraph();
  scrollTo();

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
      menu.addClass('is-visible');

    } else {
      footer.removeClass('is-visible')
      overflow.removeClass('is-visible');
      menu.removeClass('is-visible');
    }

    $('.overlay').css({
      opacity: opacityValue
    })

    header.css({
      transform: "translateY(" + positionValue + "px)"
    })


  })

})

// ———————————————————————————
//  ALLUVIONAL GRAPH
// ———————————————————————————

function alluvionalGraph() {

  var offset = $("#alluvional").offset();

  $(window).resize(function() {
    offset = $("#alluvional").offset();
  })


  // console.log(offset);

  $("#alluvional").mousemove(function(e) {
    var leftV = e.pageX - offset.left + 30;
    var topV = e.pageY - offset.top - 10;

    console.log(leftV);
    $('.alluvional .box, .alluvional .box2').css({
      left: leftV,
      top: topV
    })
  });


  $(".alluvional g[id*='ALL']").hoverIntent(function() {

    $('.box').addClass('is-visible');

    var ID = $(this).val('id');
    $(".alluvional g[id*='ALL']").not(ID).addClass('hide');
    $(this).addClass('bright');

    var physical = $(this).data('physical');
    var intrusive = $(this).data('intrusive');
    var sexual = $(this).data('sexual');
    var leering = $(this).data('leering');
    var invitations = $(this).data('invitations');
    var picture = $(this).data('picture');
    var message = $(this).data('message');
    var social = $(this).data('social');
    var exposure = $(this).data('exposure');

    $('.box__physical span.perc').html(physical + "%");
    $('.box__intrusive span.perc').html(intrusive + "%");
    $('.box__sexual span.perc').html(sexual + "%");
    $('.box__leering span.perc').html(leering + "%");
    $('.box__invitations span.perc').html(invitations + "%");
    $('.box__picture span.perc').html(picture + "%");
    $('.box__message span.perc').html(message + "%");
    $('.box__social span.perc').html(social + "%");
    $('.box__physical span.perc').html(physical + "%");
    $('.box__exposure span.perc').html(exposure + "%");


  }, function() {
    $(".alluvional g").removeClass('hide bright');
    $('.alluvional .box').removeClass('is-visible');
  });

  $(".alluvional g[id*='BAR']").hoverIntent(function() {
    $('.box2').addClass('is-visible');

    var ID = $(this).val('id');
    $(".alluvional g[id*='BAR']").not(ID).addClass('hide');

    var once = $(this).data('once');
    var two = $(this).data('two');
    var six = $(this).data('six');

    $('.box__once span.perc').html(once + "%");
    $('.box__two span.perc').html(two + "%");
    $('.box__six span.perc').html(six + "%");

  }, function() {
    $(".alluvional g").removeClass('hide');
    $('.alluvional .box2').removeClass('is-visible');
  });




}


// ———————————————————————————
//  VERBAL - NON VERBAL GRAPH
// ———————————————————————————

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

  $('#verbal g path').hoverIntent(function() {
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



function perpetratorGraph() {
  $('.perpetrator g').hoverIntent(function() {
    if ($(this).attr('id') === 'BG') {

    } else {
      $('.perpetrator g.country').not(this).toggleClass('hide');
    }
  })

  var rotate = 45;
  $('#rotate').click(function() {
    rotate += 60;
    $('.perpetrator svg').css({
      transform: 'rotate(' + rotate + 'deg)'
    })
  })

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
  inView.threshold(0.3);
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



function scrollTo() {
  $('.definition_button').click(function() {
    $('.paper, .paper__overlay').addClass('is-visible');
  })

  $('.paper__overlay').click(function() {
    $('.paper, .paper__overlay').removeClass('is-visible');
  });

}