$(document).ready(function(){
  $(".btn-default").on("click", function(e){
      e.preventDefault();
      var userAddress = $("#userAddress").val();
      var googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
      googleApiUrl += "key=AIzaSyBZLmXraiEgYbduvsEWvgWmfO4Bg8-9Dis";
      googleApiUrl += "&address=" + userAddress;

      $.ajax({
        type: "GET",
        url: googleApiUrl,
        success: googleApiSuccessHandler
      });

    });

  function googleApiSuccessHandler(response) {


    var geoLocation = response.results[0].geometry.location

    var issPassoverParams = {
    "latitude": geoLocation.lat,
    "longitude": geoLocation.lng, 
    }

    $.ajax({
      type: "GET",
      url: "http://api.open-notify.org/iss-pass.json?lat=LAT&lon=LON" + $.param(flickrApiParams),
      success: issPassoverSuccessHandler
    });



  };

  function issPassoverSuccessHandler(results){
    console.log(results)
  }
});

