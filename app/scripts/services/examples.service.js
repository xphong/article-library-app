;(function (angular) {
    'use strict';

    angular
        .module('services.Examples', [])
        .factory('ExamplesService', ExamplesService);

    ExamplesService.$inject = ['$http'];

    function ExamplesService ($http) {
        var service = {
            getArticles: getArticles
        };

        return service;

        function getArticles () {
            return $http.get('/scripts/examples/examples.json');
        }

    }

})(angular);
