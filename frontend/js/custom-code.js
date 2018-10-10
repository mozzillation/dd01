var header = $('.header'),
  page = $('#page'),
  grain = $('.grain'),
  footer = $('.footer');




$(window).load(function() {

  $("html, body").animate({
    scrollTop: 0
  }, 10);

  setTimeout(function() {
    animate();
  }, 1000)

  var wHeight = $(window).height();

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
      footer.addClass('is-visible')
    } else {
      footer.removeClass('is-visible')
    }

    $('.overlay').css({
      opacity: opacityValue
    })

    header.css({
      transform: "translateY(" + positionValue + "px)"
    })


  })

})




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
  inView.threshold(1);
  inView('[data-scroll]')
    .on('enter', el => {
      // console.log(el);
      el.style.opacity = 1;
      el.classList.add('is-animated')
    })
    .on('exit', el => {
      // el.style.opacity = 0.1;
    });

};


function map(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}