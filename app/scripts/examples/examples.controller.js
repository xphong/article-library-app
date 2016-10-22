;(function (angular) {
    'use strict';

    angular
        .module('controllers.Examples', [])
        .controller('ExamplesController', ExamplesController);

    ExamplesController.$inject = ['ExamplesService', 'ArticlesService'];

    function ExamplesController (ExamplesService, ArticlesService) {
        var vm = this;

        ExamplesService.getArticles()
            .then(setArticles);

        vm.saveArticle = function (article) {
            ArticlesService.addArticle(article);
            alert('Article saved');
        }

        function setArticles (response) {
            vm.examplesList = response.data;
        }
    }

})(angular);
