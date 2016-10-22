;(function (angular) {
    'use strict';

    angular
        .module('services.Articles', [])
        .factory('ArticlesService', ArticlesService);

    ArticlesService.$inject = ['$http'];

    function ArticlesService () {
        var service = {
            getArticles: getArticles,
            addArticle: addArticle
        };

        var articlesList = [];

        return service;

        function getArticles () {
            
        }

        function addArticle (url) {
            
        }
    }

})(angular);
