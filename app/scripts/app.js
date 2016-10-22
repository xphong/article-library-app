;(function (angular) {
    'use strict';

    var app = angular.module('MainApp', [
        'MainRouter',
        'angular-loading-bar',

        'controllers.Articles',
        'controllers.ArticleContent',
        'controllers.Examples',

        'services.Interceptor',
        'services.Articles',
        'services.Examples',

        'components.Card'
    ]);

    app.constant('Constants', {
        baseUrl: 'https://readability.com/api/content/v1/parser',
        apiKey: '4f33c9ffe2498d61d48d2fda02cd14f9c38b40b6'
    });

    app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }]);

    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('InterceptorService');
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    }]);

})(angular);
