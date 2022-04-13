$(document).ready( function(){ 
        // freeze screen when logo is in play, then logo fade out
    $(function() {
        var body = $("html,body");
        var top = body.scrollTop();
        body.css({ overflow: 'hidden', height: '100%' });
        setTimeout(function() {
            body.css({ overflow: 'auto', 'overflow-x': 'hidden', height: 'auto' })
        }, 4000)
        if (top != 0) {
            body.animate({ scrollTop: 0 }, '0');
        }
        $("#logo").delay(2500).fadeOut(1000);
    });
    $(".row").delay(4000).animate({ opacity: 1.0 }, 1000)
  })