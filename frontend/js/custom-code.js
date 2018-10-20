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

  mapGraph();
  alluvionalGraph();
  verbalGraph();
  perpetratorGraph();
  radarGraph();
  radar2Graph();
  policiesGraph();
  perpetrator2Graph();
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


function perpetrator2Graph() {

  $("#perpetrator2 g[id*='country']").hoverIntent(function() {
    var ID = $(this).val('id');
    $("#perpetrator2 g[id*='country']").not(ID).addClass('hide');
    $(this).find("g[id*='numeri']").addClass('is-visible');

  }, function() {
    $("#perpetrator2 g, #perpetrator2 g[id*='country']").removeClass('hide is-visible');
  });

}


function mapGraph() {

  $(".map g[id*='stato']").hoverIntent(function() {

    $('#map').removeClass('off');
    $(".map g").removeClass('animated');

    var ID = $(this).val('id');
    var name = $(this).data('name');
    var perc = $(this).data('perc');
    $(".map g[id*='stato']").not(ID).addClass('hide');
    $('.map .info .country').html(name);
    $('.map .info').addClass('is-visible')
    $('.map .info .perc').html(perc + '%');
  }, function() {
    $(".map g, .map .info").removeClass('hide is-visible');
  })

};



// ———————————————————————————
//  ALLUVIONAL GRAPH
// ———————————————————————————

function alluvionalGraph() {

  var offset = $("#alluvional").offset();

  $(window).resize(function() {
    offset = $("#alluvional").offset();
  })



  $("#alluvional").mousemove(function(e) {
    var leftV = e.pageX - offset.left + 30;
    var topV = e.pageY - offset.top - 10;

    // console.log(leftV);
    $('.alluvional .box, .alluvional .box2').css({
      left: leftV,
      top: topV
    })
  });


  $(".alluvional g[id*='ALL']").hoverIntent(function() {

    $('#alluvional').removeClass('off');
    $('*').removeClass('blink');

    $('.alluvional .box').addClass('is-visible');

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
    // $('.box2').addClass('is-visible');
    $(this).find("g[id*='numbers']").each(function() {
      $(this).addClass('is-visible');
    })


    var ID = $(this).val('id');
    $(".alluvional g[id*='BAR']").not(ID).addClass('hide');

    // var once = $(this).data('once');
    // var two = $(this).data('two');
    // var six = $(this).data('six');
    //
    // $('.box__once span.perc').html(once + "%");
    // $('.box__two span.perc').html(two + "%");
    // $('.box__six span.perc').html(six + "%");

  }, function() {
    $(".alluvional g").removeClass('hide is-visible');

    // $('.alluvional .box2').removeClass('is-visible');
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


  // console.log(offset);

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


function radar2Graph() {

  var offset = $("#long").offset();

  $(window).resize(function() {
    offset = $("#long").offset();
  })


  // console.log(offset);

  $("#long").mousemove(function(e) {
    var leftV = e.pageX - offset.left + 10;
    var topV = e.pageY - offset.top - 10;
    $('.long .box').css({
      left: leftV,
      top: topV
    })
  });


  $('#long g[id^=VIOL]').hoverIntent(function() {
    var parent = $(this).data('perc');
    $('.long .box div').html(parent + "%")
    $('.long .box').addClass('is-visible');


    // console.log(parent)
    var $this = $(this);
    $this.addClass('bright');
    $('#long g[id^=VIOL]').not($this).addClass('hide');

  }, function() {
    $('.long .box').removeClass('is-visible');
    $('#long g').removeClass('hide bright');
  })
};


function radarGraph() {

  var offset = $("#short").offset();

  $(window).resize(function() {
    offset = $("#short").offset();
  })


  // console.log(offset);

  $("#short").mousemove(function(e) {
    var leftV = e.pageX - offset.left + 10;
    var topV = e.pageY - offset.top - 10;
    $('.radar .box').css({
      left: leftV,
      top: topV
    })
  });


  $('#short g[id^=VIOL]').hoverIntent(function() {
    var parent = $(this).data('perc');
    $('.radar .box div').html(parent + "%")
    $('.radar .box').addClass('is-visible');


    // console.log(parent)
    var $this = $(this);
    $this.addClass('bright');
    $('#short g[id^=VIOL]').not($this).addClass('hide');

  }, function() {
    $('.radar .box').removeClass('is-visible');
    $('#short g').removeClass('hide bright');
  })
};

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


function policiesGraph() {



};


function policiesGraph() {
  var offset = $("#policies").offset();

  $(window).resize(function() {
    offset = $("#policies").offset();
  })


  // console.log(offset);

  $("#policies").mousemove(function(e) {
    var leftV = e.pageX - offset.left + 10;
    var topV = e.pageY - offset.top - 10;
    $('.policies .box').css({
      left: leftV,
      top: topV
    })
  });

  $('#policies g ').hoverIntent(function() {
    var perc = $(this).data('perc');

    if (perc !== undefined) {
      var ID = $(this).attr('id');

      $('.policies .box').addClass('is-visible');

      if (ID.indexOf("active_user") >= 0) {

        $('.policies .box div').html(perc + " active users")
      } else if (ID.indexOf("Sample") >= 0) {
        $('.policies .box div').html("Sample 3000 women")
      } else if (ID.indexOf("harassments") >= 0) {
        $('.policies .box div').html(perc + " cases of harassment")
      } else {
        $('.policies .box div').html(perc + "%")
      }
    }
  }, function() {
    $('.policies .box').removeClass('is-visible');
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
  inView.threshold(0.3);
  inView('[data-scroll], section')
    .on('enter', el => {
      // console.log(el);
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
    $('body').addClass('overflow2');
  })

  $('.paper__overlay').click(function() {
    $('.paper, .paper__overlay').removeClass('is-visible');
    $('body').removeClass('overflow2');
  });

}