$(document).ready(function(){
  $(".btn-default").on("click", function(e){
      e.preventDefault();

      $.ajax({
        type: "GET",
        url: googleApiUrl,
        success: googleApiSuccessHandler
      });

    });

  function googleApiSuccessHandler(response) {
    var userAddress = $("#userAddress").val();
    var googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
    googleApiUrl += "key=AIzaSyBMRKa7-ZiGt-5oyuW8en1ln_zIDvGRUj0";
    googleApiUrl += "&address=" + userAddress;

    var geoLocation = response.results[0].geometry.location

    var issPassover = {
    "latitude": geoLocation.lat,
    "longitude": geoLocation.lng, 
    }
});

