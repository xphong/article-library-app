;(function (angular) {
    'use strict';

    angular
        .module('services.Articles', [])
        .factory('ArticlesService', ArticlesService);

    ArticlesService.$inject = ['$http', 'Constants'];

    function ArticlesService ($http, Constants) {
        var service = {
            getArticles: getArticles,
            addArticle: addArticle,
            fetchArticle: fetchArticle
        };

        var articlesList = [];

        return service;

        function getArticles () {
            return articlesList;
        }

        function addArticle (article) {
            articlesList.push(article);
            return articlesList;
        }

        function fetchArticle (articleUrl) {
            var url = Constants.baseUrl + '?url=' + articleUrl + '&token=' + Constants.apiKey;
            return $http.get(url);
        }
    }

})(angular);
