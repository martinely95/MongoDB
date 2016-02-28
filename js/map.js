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

    var oms = new OverlappingMarkerSpiderfier(map, { nearbyDistance: 2, circleSpiralSwitchover: Infinity, legWeight: 1 });

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
	['Alfresco', 51.507351, -0.127758, 3, 'alfresco.jpg'],
	['AlienVault', 40.416775, -3.703790, 4, 'alien_vault.jpg'],
	['Amplitude Laser Technology', 44.805830, -0.630386, 5, 'amplitude.jpg'],
	['Avantium', 52.370216, 4.895168, 6, 'avantium.jpg'],
	['Avito', 55.755826, 37.617300, 7, 'avito.jpg'],
	['Blabla car', 48.856614, 2.352222, 8, 'bla_bla_car.jpg'],
	['Blippar', 51.507351, -0.127758, 9, 'blippar.jpg'],
	['Blockchain ', 51.507351, -0.127758, 10, 'blockchain.jpg'],
	['Borro', 51.507351, -0.127758, 11, 'borro.jpg'],
	['Calastone', 51.507351, -0.127758, 12, 'calastone.jpg'],
	['Deezer', 48.856614, 2.352222, 13, 'deezer.jpg'],
	['Order Dynamics', 51.507351, -0.127758, 14, 'order_dynamic.jpg'],
	['Farfetch', 51.507351, -0.127758, 15, 'farfetch.jpg'],
	['FoodPanda', 52.520007, 13.404954, 16, 'foodpanda.jpg'],
	['B2x Care Solutions', 51.507351, -0.127758, 17, 'b2x.jpg'], // UPDATE town
	['ivi.ru Media', 55.755826, 37.617300, 18, 'ivi.jpg'],
	['Klarna', 59.329323, 18.068581, 19, 'klarna.jpg'],
	['KupiVIP', 55.755826, 37.617300, 20, 'kupivip.jpg'],
	['Lamoda.ru', 55.755826, 37.617300, 21, 'lamoda.jpg'],
	['MedicAnimal', 51.507351, -0.127758, 22, 'medianimal.jpg'],
	['Mimecast', 51.507351, -0.127758, 23, 'mimecast.jpg'],
	['Mister Spex', 51.507351, -0.127758, 24, 'mister-spex.jpg'], // CHECK infos
	['Powa Technologies', 51.507351, -0.127758, 25, 'powa.jpg'],
	['Nutmeg', 51.507351, -0.127758, 26, 'nutmg.jpg'],
	['OnefineStay', 51.507351, -0.127758, 27, 'one_fine_stay.jpg'],
	['Oodrive', 48.856614, 2.352222, 28, 'oodrive.jpg'],
	['Openet', 53.349805, -6.260310, 29, 'openet.jpg'],
	['Ozon', 55.755826, 37.617300, 30, 'ozon.jpg'],
	['Quandoo', 52.520007, 13.404954, 31, 'quandoo.jpg'],
	['Scytl', 41.385064, 2.173403, 32, 'scytl.jpg'],
	['Shazam', 51.507351, -0.127758, 33, 'shazam.jpg'],
	['Showroomprive', 48.909354, 2.362420, 34, 'showroomprive.jpg'],
	['Skyscanner', 55.953252, -3.188267, 35, 'skyscanner.jpg'],
	['Smaato', 53.551085, 9.993682, 36, 'smaato.jpg'],
	['Soundcloud', 52.520007, 13.404954, 37, 'soundcloud.jpg'],
	['Spotify', 59.329323, 18.068581, 38, 'spotify.jpg'],
	['Swiftkey', 51.507351, -0.127758, 39, 'touch_type.jpg'],
	['Talend', 48.856614, 2.352222, 40, 'talend.jpg'],
	['Tobii Technology', 59.407905, 18.019075, 41, 'tobii.jpg'],
	['Tradeshift', 55.676097, 12.568337, 42, 'tradeshift.jpg'],
	['Transferwise', 51.507351, -0.127758, 43, 'transferwise.jpg'],
	['Truecaller', 59.329323, 18.068581, 44, 'truecaller.jpg'],
	['Westwing', 48.135125, 11.581981, 45, 'westwing.jpg'],
	['Windeln', 48.044112, 11.532140, 46, 'windeln.jpg'],
	['WiThings', 48.824531, 2.274342, 47, 'withings.jpg'],
	['Wonga', 51.507351, -0.127758, 48, 'wonga.jpg'],
	['WorldRemit', 51.507351, -0.127758, 49, 'worldremit.jpg'],
	['Zound Industries', 59.329323, 18.068581, 50, 'zoundustries.jpg']
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
	//closeBoxURL: "images/close_cross.png",
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
            position: myLatLng,
            map: map
        });

        var content = '<img src="images/logos/' + locations[i][4] + '" class="logo" /><br/>' + locations[i][0];
        marker.box_id = locations[i][3];
        marker.lat = locations[i][1];
		//marker.content = '<img src="images/logos/' + locations[i][4] + '" class="logo" /><br/>' + locations[i][0];

        google.maps.event.addListener(marker, 'mouseover', (function (marker, content, infobox) {
            return function () {
                var isGroup = []; // array
                isGroup = oms.markersNearMarker(marker, false); //the second parameter defines if only the first marker will be returned;
                if (isGroup.length <= 0) {
                    google.maps.event.trigger(marker, 'click');
                    infobox.setContent(content);
                    infobox.open(map, marker);

                    $('.info-container').hide();
                    $('#box-' + marker.box_id).fadeIn();
                } else {
					
				}
            };
        })(marker, content, infobox));

        /*google.maps.event.addListener(marker, 'mouseout', (function (marker, content, infobox) {
        return function () {
        //oms.unspiderfy();
        //$('.info-container').hide();
        //$('#box-0').fadeIn();
        //infobox.close();
        };
        })(marker, content, infobox));*/





        //markersNearMarker(marker, firstOnly)

        oms.addMarker(marker);
    }


    oms.addListener('unspiderfy', function (markers) {
        $('.info-container').hide();
        $('#box-0').fadeIn();
        infobox.close();
    });

    google.maps.event.addListener(infobox, 'closeclick', (function (infobox, oms) {
        return function () {
            //oms.unspiderfy();
            //$('.info-container').hide();
            //$('#box-0').fadeIn();
            //infobox.close();
            oms.unspiderfy();
        };
    })(infobox, oms));


    map.fitBounds(bounds);
	//console.log(bounds);
}