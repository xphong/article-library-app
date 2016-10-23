;(function (angular) {
    'use strict';

    angular
        .module('components.Card', [])
        .component('alCard', {
            bindings: {
                article: '=',
                index: '@'
            },
            templateUrl: '/scripts/components/card/card.html',
            controller: CardComponentController,
            controllerAs: 'vm'
        });

    CardComponentController.$inject = ['$location', 'ArticlesService'];

    function CardComponentController ($location, ArticlesService) {
        var vm = this;

        vm.isExamplesPage = $location.path().indexOf('/examples') !== -1;
        vm.saveArticle = saveArticle;

        function saveArticle (article) {
            ArticlesService.addArticle(article);
            alert('Article saved');
        }
    }

})(angular);
