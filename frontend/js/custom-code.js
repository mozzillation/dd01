$(window).load(function() {
  animate();
})

function animate() {

  var page = $('#page'),
    grain = $('.grain');

  grain.addClass('is-loaded');
  page.addClass('is-loaded');

  var i = 0,
    arrayAnimation = $('[data-animate]').toArray();

  console.log(arrayAnimation);

  arrayAnimation.forEach(function(t) {
    var delay = i * 100;

    setTimeout(function() {
      t.classList.add('is-animated');
    }, delay);

    i++;
  })

};