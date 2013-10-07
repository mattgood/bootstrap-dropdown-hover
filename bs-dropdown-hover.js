/**
 * Bootstrap Dropdown - Hover on mouse over
 * Original Source by Andreas Pizsa
 * Modifications by Matt Good
 *
 * Works with Twitter Bootstrap 3.0.0
 */
(function ($, window, delay) {

  var theTimer = 0, // timer for delay on open or close
    theElement$ = null, // element to open or close on hover
    theLastPosition = {x:0,y:0}; // position of mouse to avoid jitter

  $('[data-hover="dropdown"]')
    .closest('li')
      .on('mouseenter', function (inEvent) {

        if (theElement$) {
          theElement$.removeClass('open');
        }

        window.clearTimeout(theTimer);

        theElement$ = $(this);

        theTimer = window.setTimeout(function () {
          theElement$.addClass('open');
        }, delay);

      })
      .on('mousemove', function (inEvent) {

        if(Math.abs(theLastPosition.x - inEvent.screenX) > 4 ||
           Math.abs(theLastPosition.y - inEvent.screenY) > 4)
        {
            theLastPosition.x = inEvent.screenX;
            theLastPosition.y = inEvent.screenY;
            return;
        }

        if (theElement$.hasClass('open')) return;

        window.clearTimeout(theTimer);

        theTimer = window.setTimeout(function () {
          theElement$.addClass('open');
        }, delay);

      })
      .on('mouseleave', function (inEvent) {

        window.clearTimeout(theTimer);

        theElement$ = $(this);

        theTimer = window.setTimeout(function () {
          theElement$.removeClass('open');
        }, delay);
      });

})(jQuery, window, 200); // 200 is the delay in milliseconds
