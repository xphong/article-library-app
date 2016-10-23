;(function (angular) {
    'use strict';

    angular
        .module('controllers.Articles', [])
        .controller('ArticlesController', ArticlesController);

    ArticlesController.$inject = ['ArticlesService'];

    function ArticlesController (ArticlesService) {
        var vm = this;

        vm.articlesList = ArticlesService.getArticles();
        vm.addArticle = addArticle;

        function addArticle () {
            if (vm.articleUrl) {
                ArticlesService.fetchArticle(vm.articleUrl)
                    .then(addNewArticle);
            }
        }

        function addNewArticle (response) {
            if (response && response.data) {
                vm.articlesList = ArticlesService.addArticle(response.data);
            }
        }
    }

})(angular);
