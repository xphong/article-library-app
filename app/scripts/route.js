;(function (angular) {
    'use strict';

    angular
        .module('MainRouter', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'scripts/articles/articles.html',
                    controller: 'ArticlesController',
                    controllerAs: 'vm'
                }).
                when('/login', {
                    templateUrl: 'partials/auth.html',
                    controller: 'AuthCtrl',
                    controllerAs: 'vm'
                }).
                otherwise({
                    redirectTo: '/'
                });
            }
        ]);
})(angular);
