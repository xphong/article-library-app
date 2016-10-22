;(function (angular) {
    'use strict';

    angular
        .module('controllers.ArticleContent', [])
        .controller('ArticleContentController', ArticleContentController);

    ArticleContentController.$inject = ['ArticlesService', '$routeParams', '$sce'];

    function ArticleContentController (ArticlesService, $routeParams, $sce) {
        var vm = this;

        var article = ArticlesService.getArticleById($routeParams.id);

        vm.articleContent = $sce.trustAsHtml(article.content);
    }

})(angular);
