$(document).ready(function(){
  $(".btn-default").on("click", function(e){
      e.preventDefault();

      $.ajax({
        type: "GET",
        url: googleApiUrl,
        success: googleApiSuccessHandler
      });

    });
});