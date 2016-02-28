function initialize() {
    var map = new google.maps.Map(
		document.getElementById("map"), {
		    center: new google.maps.LatLng(49.5, 26),
		    zoom: 4,
		    scrollwheel: false,
		    panControl: false,
		    draggable: true,
		    panControlOptions: {
		        position: google.maps.ControlPosition.TOP_RIGHT
		    },
		    streetViewControl: false,
		    mapTypeControl: false,
		    zoomControl: true,
		    zoomControlOptions: {
		        style: google.maps.ZoomControlStyle.DEFAULT,
		        position: google.maps.ControlPosition.LEFT_TOP
		    },
		    mapTypeControlOptions: {
		        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
		        position: google.maps.ControlPosition.TOP_RIGHT
		    },
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    styles: mapStyles
		});

    var oms = new OverlappingMarkerSpiderfier(map, { nearbyDistance: 2 });

    setMarkers(map, locations, oms);

    if ($('#bim').hasClass('hidden')) {
        $('#bim').animate({ 'opacity': 1 });
        $('#bim').removeClass('hidden');
    }
    $('.info-container').hide();
    $('#box-0').fadeIn();
}

google.maps.event.addDomListener(window, "load", initialize);

var locations = [
	['Accedo', 59.329323, 18.068581, 1, 'accedo.jpg'],
	['Adyen', 52.370216, 4.895168, 2, 'adyen.jpg'],
	['Alfresco', 51.507351, -0.127758, 3, 'alfresco.jpg']
];

//var infowindow = new google.maps.InfoWindow();
var infobox = new InfoBox({
	content: document.getElementById("infobox"),
	disableAutoPan: true,
	maxWidth: 150,
	boxClass: "testtest",
	pixelOffset: new google.maps.Size(-50, 0),
	zIndex: null,
	boxStyle: {
		background: "url('http://google-maps-utility-library-v3.googlecode.com/svn/trunk/infobox/examples/tipbox.gif') no-repeat",
		opacity: 1,
		width: "100px"
	},
	closeBoxMargin: "-5px -5px 0 0",
	closeBoxURL: "images/close_cross.png",
	infoBoxClearance: new google.maps.Size(1, 1)
});

var mapStyles = [
        {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [
                { "visibility": "on" },
                { "color": "#cccccc" }
            ]
        }, {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                { "visibility": "off" }
            ]
        }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill"
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                { "visibility": "off" },
                { "lightness": 100 },
                { "visibility": "simplified" }
            ]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                { "visibility": "off" }
            ]
        }, {
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [
              { "visibility": "on" },
              { "weight": 0.5 },
              { "color": "#0f75bb" }
            ]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
              { "visibility": "off" }
            ]
        }, {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
                { "visibility": "off" }
            ]
        }, {
            "featureType": "water",
            "stylers": [
                { "color": "#ffffff" }
            ]
        }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                { "visibility": "off" },
                { "lightness": 700 }
        ]
        }];

var myIcon = new google.maps.MarkerImage("images/marker_icon.png", null, new google.maps.Point(0, 0), new google.maps.Point(11, 20), new google.maps.Size(21, 25));

var hoverIcon = new google.maps.MarkerImage("images/hover_icon.png", null, new google.maps.Point(0, 0), new google.maps.Point(11, 20), new google.maps.Size(21, 25));

function setMarkers(map, locations, oms) {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < locations.length; i++) {
        var item = locations[i];

        var myLatLng = new google.maps.LatLng(item[1], item[2]);
        bounds.extend(myLatLng);

        var marker = new google.maps.Marker({
            title: item.h,
            icon: myIcon,
			animation: google.maps.Animation.DROP,
            position: myLatLng,
            map: map
        });

        var content = '<img src="images/logos/' + locations[i][4] + '" class="logo" /><br/>' + locations[i][0];
        marker.box_id = locations[i][3];
        marker.lat = locations[i][1];

        google.maps.event.addListener(marker, 'mouseover', (function (marker, content, infobox) {
            return function () {
                google.maps.event.trigger(marker, 'click');
				marker.setIcon(hoverIcon);
                infobox.setContent(content);
                infobox.open(map, marker);
                $('.info-container').hide();
                $('#box-' + marker.box_id).fadeIn();
            };
        })(marker, content, infobox));

        google.maps.event.addListener(marker, 'mouseout', (function (marker, content, infobox) {
            return function () {
				marker.setIcon(myIcon);
            };
        })(marker, content, infobox));
		
		google.maps.event.addListener(infobox, 'closeclick', (function (infobox) {
            return function () {
                $('.info-container').hide();
                $('#box-0').fadeIn();
                infobox.close();
            };
        })(infobox));


        //markersNearMarker(marker, firstOnly)

        oms.addMarker(marker);
    }
    //map.fitBounds(bounds);
}