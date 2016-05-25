angular.module('app.controllers', [])

    .controller('rutaSabanaCtrl', function ($scope, AuthService) {
        function initMap() {
            var pointA = new google.maps.LatLng(4.657804, -74.113996),
                pointB = new google.maps.LatLng(4.675864, -74.050683),
                myOptions = {
                    zoom: 7,
                    center: pointA
                },
                map = new google.maps.Map(document.getElementById('map'), myOptions),
                // Instantiate a directions service.
                directionsService = new google.maps.DirectionsService,
                directionsDisplay = new google.maps.DirectionsRenderer({
                    map: map
                }),
                markerA = new google.maps.Marker({
                    position: pointA,
                    title: "point A",
                    label: "A",
                    map: map
                }),
                markerB = new google.maps.Marker({
                    position: pointB,
                    title: "point B",
                    label: "B",
                    map: map
                });

            // get route from A to B
            calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB);

        }

        function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
            directionsService.route({
                origin: pointA,
                destination: pointB,
                avoidTolls: true,
                avoidHighways: false,
                travelMode: google.maps.TravelMode.DRIVING
            }, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }

        initMap();
    })

    .controller('bScarRutaCtrl', function ($scope) {

    })

    .controller('configuraciNCtrl', function ($scope) {

    })

    .controller('wheelsCtrl', function ($scope) {

    })

    .controller('loginCtrl', function ($scope, AuthService) {
        $scope.login = function (email, password) {
            AuthService.login(email, password);
        };
    })

    .controller('dashboardCtrl', function ($scope, AuthService) {
        $scope.isDriver = AuthService.isDriver();
    })

    .controller('registrarseCtrl', function ($scope) {

    })

    .controller('perfilCtrl', function ($scope) {

    })

    .controller('registrarVehCuloCtrl', function ($scope) {

    })

    .controller('crearRutaCtrl', function ($scope, $ionicPopup, $timeout) {
        $scope.publish = function () {
            var myPopup = $ionicPopup.show({
                template: '',
                title: 'Ruta creada exitosamente!',
                scope: $scope
            });
            myPopup.then(function (res) {

            });
            $timeout(function () {
                myPopup.close(); //close the popup after 3 seconds for some reason
            }, 3000);
        };
    })
