$( document ).ready( function(){
    $(".category li").hover(
        function () {
          $(this).addClass("hover");
        },
        function () {
          $(this).removeClass("hover");
        }
      );
});