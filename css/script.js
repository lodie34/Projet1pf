    $(function() {
      $(window).ready(function() {
          var sH = $(window).height();
          $('body').css('height', sH + 'px');
      });

        $(window).resize(function() {
            var sH = $(window).height(;
            $('body').css('height', sH + 'px');
        });
    });
