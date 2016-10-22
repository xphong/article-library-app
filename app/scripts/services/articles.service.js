;(function (angular) {
    'use strict';

    angular
        .module('services.Articles', [])
        .factory('ArticlesService', ArticlesService);

    ArticlesService.$inject = ['$http'];

    function ArticlesService ($http) {
        var service = {
            getArticles: getArticles,
            addArticle: addArticle
        };

        var articlesList = [];

        return service;

        function getArticles () {
            return articlesList;
        }

        function addArticle (url) {
            return url;
        }
    }

})(angular);
