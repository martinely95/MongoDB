function initialize() {
    
    var locations = [
        ['Accedo',59.329323,18.068581,1,'accedo.jpg'],
        ['Adyen',52.370216,4.895168,2,'adyen.jpg'],
        ['Alfresco',51.507351,-0.127758,3,'alfresco.jpg'],
        ['AlienVault',40.416775,-3.703790,4,'alien_vault.jpg'],
        ['Amplitude Laser Technology',44.805830,-0.630386,5,'amplitude.jpg'],
        ['Avantium',52.370216,4.895168,6,'avantium.jpg'],
        ['Avito',55.755826,37.617300,7,'avito.jpg'],
        ['Blabla car',48.856614,2.352222,8,'bla_bla_car.jpg'],
        ['Blippar',51.507351,-0.127758,9,'blippar.jpg'],
        ['Blockchain ',51.507351,-0.127758,10,'blockchain.jpg'],
        ['Borro',51.507351,-0.127758,11,'borro.jpg'],
        ['Calastone',51.507351,-0.127758,12,'calastone.jpg'],
        ['Deezer',48.856614,2.352222,13,'deezer.jpg'],
        ['Order Dynamics',51.507351,-0.127758,14,'order_dynamic.jpg'],
        ['Farfetch',51.507351,-0.127758,15,'farfetch.jpg'],
        ['FoodPanda',52.520007,13.404954,16,'foodpanda.jpg'],
        ['B2x Care Solutions',51.507351,-0.127758,17,'b2x.jpg'],// UPDATE town
        ['ivi.ru Media',55.755826,37.617300,18,'ivi.jpg'],
        ['Klarna',59.329323,18.068581,19,'klarna.jpg'],
        ['KupiVIP',55.755826,37.617300,20,'kupivip.jpg'],
        ['Lamoda.ru',55.755826,37.617300,21,'lamoda.jpg'],
        ['MedicAnimal',51.507351,-0.127758,22,'medianimal.jpg'],
        ['Mimecast',51.507351,-0.127758,23,'mimecast.jpg'],
        ['Mister Spex',51.507351,-0.127758,24,'mister-spex.jpg'],// CHECK infos
        ['Powa Technologies',51.507351,-0.127758,25,'powa.jpg'],
        ['Nutmeg',51.507351,-0.127758,26,'nutmg.jpg'],
        ['OnefineStay',51.507351,-0.127758,27,'one_fine_stay.jpg'],
        ['Oodrive',48.856614,2.352222,28,'oodrive.jpg'],
        ['Openet',53.349805,-6.260310,29,'openet.jpg'],
        ['Ozon',55.755826,37.617300,30,'ozon.jpg'],
        ['Quandoo',52.520007,13.404954,31,'quandoo.jpg'],
        ['Scytl',41.385064,2.173403,32,'scytl.jpg'],
        ['Shazam',51.507351,-0.127758,33,'shazam.jpg'],
        ['Showroomprive',48.909354,2.362420,34,'showroomprive.jpg'],
        ['Skyscanner',55.953252,-3.188267,35,'skyscanner.jpg'],
        ['Smaato',53.551085,9.993682,36,'smaato.jpg'],
        ['Soundcloud',52.520007,13.404954,37,'soundcloud.jpg'],
        ['Spotify',59.329323,18.068581,38,'spotify.jpg'],
        ['Swiftkey',51.507351,-0.127758,39,'touch_type.jpg'],
        ['Talend',48.856614,2.352222,40,'talend.jpg'],
        ['Tobii Technology',59.407905,18.019075,41,'tobii.jpg'],
        ['Tradeshift',55.676097,12.568337,42,'tradeshift.jpg'],
        ['Transferwise',51.507351,-0.127758,43,'transferwise.jpg'],
        ['Truecaller',59.329323,18.068581,44,'truecaller.jpg'],
        ['Westwing',48.135125,11.581981,45,'westwing.jpg'],
        ['Windeln',48.044112,11.532140,46,'windeln.jpg'],
        ['WiThings',48.824531,2.274342,47,'withings.jpg'],
        ['Wonga',51.507351,-0.127758,48,'wonga.jpg'],
        ['WorldRemit',51.507351,-0.127758,49,'worldremit.jpg'],
        ['Zound Industries',59.329323,18.068581,50,'zoundustries.jpg']
    ];

    var centerMap = new google.maps.LatLng(51.9566298,24); // http://universimmedia.pagesperso-orange.fr/geo/nievre.htm
    var mapMarker = new google.maps.LatLng(51.9566298,24);
    
    var map = new google.maps.Map(document.getElementById('map'), {

        zoom: 4,
        center: centerMap, // Required http://itouchmap.com/latlong.html
        scrollwheel: false,
        panControl: false,
        draggable: true,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        streetViewControl:false,
        mapTypeControl: false,
        zoomControl: false,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.LEFT_TOP
        },
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles:[
        {
            "featureType":"landscape.natural",
            "elementType":"geometry.fill",
            "stylers":[
                {"visibility":"on"},
                {"color":"#cccccc"}
            ]
        },{
            "featureType":"poi",
            "elementType":"geometry.fill",
            "stylers":[
                {"visibility":"off"}
            ]
        },{
            "featureType":"landscape.man_made",
            "elementType":"geometry.fill"
        },{
            "featureType":"road",
            "elementType":"geometry",
            "stylers":[
                {"visibility":"off"},
                {"lightness":100},
                {"visibility":"simplified"}
            ]
        },{
            "featureType":"road",
            "elementType":"labels",
            "stylers":[
                {"visibility":"off"}
            ]
        },{
            "featureType": "all",
            "elementType": "geometry.stroke",
            "stylers": [
              { "visibility": "on" },
              { "weight": 0.5},
              { "color": "#0f75bb" }
            ]
        },{
            "featureType": "road",
            "elementType": "all",
            "stylers": [
              { "visibility": "off" }
            ]
        },{
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [
                { "visibility": "off" }
            ]
        },{
            "featureType":"water",
            "stylers":[
                {"color":"#ffffff"}
            ]
        },{
            "featureType":"transit.line",
            "elementType":"geometry",
            "stylers":[
                {"visibility":"off"},
                {"lightness":700}
        ]}]
    });

    //var infowindow = new google.maps.InfoWindow();

    /*var marker, i;
    // images - ? - origin - anchor - size
    var myIcon = new google.maps.MarkerImage("images/marker_icon2.png", null, new google.maps.Point(0,0), new google.maps.Point(12, 20), new google.maps.Size(22,30));
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        id: locations[i][3],
        icon: myIcon
    });*/

    var oms = new OverlappingMarkerSpiderfier(map);

    var iw = new google.maps.InfoWindow();
    /*oms.addListener('click', function(marker, event) {
        iw.setContent(marker.desc);
        iw.open(map, marker);

            //infowindow.setContent(locations[i][0]);
            //infowindow.open(map, marker);
            if($('#bim').hasClass('hidden')) {
                $('#bim').animate({'opacity':1});
                $('#bim').removeClass('hidden');
            }
            $('.info-container').hide();
            $('#box-'+marker.box_id).fadeIn();

    });*/
    

    infobox = new InfoBox({
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
        closeBoxURL: "images/close-cross.png",
        infoBoxClearance: new google.maps.Size(1, 1)
    });

    oms.addListener('click', function(marker, event) {

        infobox.setContent(marker.desc);
        infobox.open(map, marker);

        if($('#bim').hasClass('hidden')) {
            $('#bim').animate({'opacity':1});
            $('#bim').removeClass('hidden');
        }

        $('.info-container').hide();
        $('#box-'+marker.box_id).fadeIn();
            
    });

    var myIcon = new google.maps.MarkerImage("/images/marker_icon3.png", null, new google.maps.Point(0,0), new google.maps.Point(11,20), new google.maps.Size(21,25));
    
    for (i = 0; i < locations.length; i++) { 
        var datum = locations[i];
        var loc = new google.maps.LatLng(locations[i][1], locations[i][2]);
        var marker = new google.maps.Marker({
            position: loc,
            title: datum.h,
            map: map,
            icon: myIcon
        });
        marker.desc = '<img src="images/logos/'+locations[i][4]+'" class="logo" /><br/>'+locations[i][0];
        marker.box_id = locations[i][3];
        marker.lat = locations[i][1];
        oms.addMarker(marker);  // <-- here
    }

    google.maps.event.addListener(infobox,'closeclick', (function() {
            $('.info-container').hide();
            $('#box-0').fadeIn();
            infobox.close();
        })
    )

    google.maps.event.addListener(map,'click', (function() {
            $('.info-container').hide();
            $('#box-0').fadeIn();
            infobox.close();
        })
    )

    oms.addListener('spiderfy', function(markers) {
        $('.info-container').hide();
        $('#box-0').fadeIn();
        infobox.close();
    });

    if (typeof company_id==='undefined') {
        setTimeout(function(){
            var markers = oms.markersNearAnyOtherMarker();

            $.each(markers, function (i, marker) {
                lat = marker.lat;
                /*if(lat!='51.507351') {
                    google.maps.event.trigger(markers[i], 'click');
                }*/
                google.maps.event.trigger(markers[i], 'click');
            });
            
            $('.info-container').hide();
            $('#box-0').fadeIn();

            infobox.close();

        }, 500);

    } else {

        setTimeout(function(){
            var markers = oms.markersNearAnyOtherMarker();
            var markers_array = new Array();
            var getmarkers = oms.getMarkers();
            $.each(markers, function (i, marker) {
                if(marker.box_id==company_id) {
                    google.maps.event.trigger(markers[i], 'click');
                    infobox.setContent(marker.desc);
                    infobox.open(map, marker);
                    if($('#bim').hasClass('hidden')) {
                        $('#bim').animate({'opacity':1});
                        $('#bim').removeClass('hidden');
                    }
                    $('.info-container').hide();
                    $('#box-'+marker.box_id).show();
                }
                markers_array[markers_array.length] = marker.box_id;
            });
            
            $.each(getmarkers, function (i, marker) {
                if(marker.box_id==company_id) {
                    if(jQuery.inArray(company_id,markers_array)==-1) {
                        infobox.setContent(marker.desc);
                        infobox.open(map, marker);
                        if($('#bim').hasClass('hidden')) {
                            $('#bim').animate({'opacity':1});
                            $('#bim').removeClass('hidden');
                        }
                        $('.info-container').hide();
                        $('#box-'+marker.box_id).show();
                        console.log(marker.box_id);
                    }
                }
            });
        }, 500);

    }

    
    

    /*google.maps.event.addListener(marker,'mouseover', (function(marker, i) {
        return function() {
            //infowindow.setContent(locations[i][0]);
            //infowindow.open(map, marker);
            if($('#bim').hasClass('hidden')) {
                $('#bim').animate({'opacity':1});
                $('#bim').removeClass('hidden');
            }
            $('.info-container').hide();
            $('#box-'+marker.id).fadeIn();
        }
    })(marker, i)); 

    google.maps.event.addListener(marker,'mouseout', (function(marker, i) {
        return function() {
            //infowindow.setContent(locations[i][0]);
            //infowindow.open(map, marker);
            $('.info-container').hide();
            $('#box-0').fadeIn();
        }
    })(marker, i));*/ 
        
    /*google.maps.event.addListener(marker, 'click', (function(marker, i) {
        
        return function() {
            $('.info-container').hide();
            $('#box-'+marker.id).show();
        }
        })(marker, i)); */
      
 }

     

google.maps.event.addDomListener(window, 'load', initialize); 