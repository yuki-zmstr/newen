$(document).ready(function() {
  var wh = $(window).height();

  // project description pop up
  $popup = $('.popup');
  $(document).mousemove(function(){
    $popup.each(function() {
      var $this = $(this)
      var to_pop = "#" + $this.data('name');
      var $to_pop = $(to_pop)
      $this.hover(function(){
        $to_pop.fadeIn(300);
      }, function() {
        $to_pop.fadeOut(300)
      })
    })
  })
});