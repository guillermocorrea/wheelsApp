angular.module('app.routes', ['ionicUIRouter', 'app.services'])

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='dashboard.rutaSabana'
      2) Using $state.go programatically:
        $state.go('dashboard.rutaSabana');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /dashboard/tab1/sabana
      /dashboard/tab2/sabana
      /dashboard/tab4/sabana
  */
      .state('dashboard.rutaSabana', {
        url: '/sabana',
        views: {
          'tab1': {
            templateUrl: 'templates/rutaSabana.html',
            controller: 'rutaSabanaCtrl'
          },
          'tab2': {
            templateUrl: 'templates/rutaSabana.html',
            controller: 'rutaSabanaCtrl'
          },
          'tab4': {
            templateUrl: 'templates/rutaSabana.html',
            controller: 'rutaSabanaCtrl'
          }
        }
      })

      .state('dashboard.bScarRuta', {
        url: '/search-route',
        views: {
          'tab3': {
            templateUrl: 'templates/bScarRuta.html',
            controller: 'bScarRutaCtrl'
          }
        }
      })

      .state('dashboard.configuraciN', {
        url: '/configuration',
        views: {
          'tab4': {
            templateUrl: 'templates/configuraciN.html',
            controller: 'configuraciNCtrl'
          }
        }
      })

      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'templates/dashboard.html',
        abstract: true,
        controller: 'dashboardCtrl'
      })

      .state('wheels', {
        url: '/home',
        templateUrl: 'templates/wheels.html',
        controller: 'wheelsCtrl'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })

      .state('registrarse', {
        url: '/register',
        templateUrl: 'templates/registrarse.html',
        controller: 'registrarseCtrl'
      })

      .state('perfil', {
        url: '/profile',
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      })

      .state('registrarVehCulo', {
        url: '/register-vehicle',
        templateUrl: 'templates/registrarVehCulo.html',
        controller: 'registrarVehCuloCtrl'
      })

      .state('dashboard.crearRuta', {
        url: '/create-route',
        views: {
          'tab2': {
            templateUrl: 'templates/crearRuta.html',
            controller: 'crearRutaCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/home');



  });