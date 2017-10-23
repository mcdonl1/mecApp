

$(window).load(function() {
    $("#preloader-wrapper").fadeOut("slow");
});

$(document).ready(function(){



    //animated header class
    $(window).scroll(function() {
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll > 200) {
        //console.log('a');
        $(".navigation").addClass("animated");
    } else {
        //console.log('a');
        $(".navigation").removeClass("animated");
    }});



    $(".gallery-slider").owlCarousel(
        {
        pagination : true,
        autoPlay : 5000,
        itemsDesktop  :  [1500,4],
        itemsDesktopSmall :  [979,3]
        }
    );

    // Gallery Popup
    $('.image-popup').magnificPopup({type:'image'});



});




function getLoc(address) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
        var latlng = results[0].location;
        var lat = latlng.lat();
        var lng = latlng.lng();
        console.log(lat + " " + lng);
    } )

    return lat, lng;
}
