;(function (angular) {
    'use strict';

    angular
        .module('controllers.Examples', [])
        .controller('ExamplesController', ExamplesController);

    ExamplesController.$inject = ['ArticlesService'];

    function ExamplesController (ArticlesService) {
        var vm = this;

        vm.articlesList = ArticlesService.getArticles();
        
        vm.addArticle = function (response) {
            ArticlesService.addArticle(response.data);
        }
    }

})(angular);
