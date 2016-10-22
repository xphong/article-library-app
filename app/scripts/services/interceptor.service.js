;(function (angular) {
    'use strict';

    angular
        .module('services.Interceptor', [])
        .factory('InterceptorService', InterceptorService);

    InterceptorService.$inject = ['$log'];

    function InterceptorService ($log) {
        var service = {
            requestError: logError,
            responseError: logError
        };

        return service;

        function logError (error) {
            $log.error(error);
        }
    }

})(angular);
