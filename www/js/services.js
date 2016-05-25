'use strict';
angular.module('app.services', [])
    .factory('AuthService', AuthService);

AuthService.$inject = ['$rootScope'];
function AuthService($rootScope) {
    var service = {
        login: login,
        isLoggedIn: isLoggedIn,
        isDriver: isDriver
    };

    return service;

    // PRIVATE
    function setUser(user) {
        $rootScope.globals = {
            currentUser: user
        };
    }

    function getCurrentUser() {
        if (!$rootScope.globals) return null;
        return $rootScope.globals.currentUser;
    }

    ////////////////
    function login(email, password) {
        var profile = 'passenger';
        if (email === 'conductor@mail.com') {
            profile = 'driver';
        }

        $rootScope.globals = {
            currentUser: {
                email: email,
                profile: profile
            }
        };
        $rootScope.$broadcast('loggedIn', { isDriver: isDriver() });
    }

    function isLoggedIn() {
        var currentUser = getCurrentUser();
        if (currentUser) return true;
        return false;
    }

    function isDriver() {
        var currentUser = getCurrentUser();
        if (!currentUser) return false;
        return currentUser.profile === 'driver';
    }
}