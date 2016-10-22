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

        function setArticles (response) {
            vm.examplesList = response.data;
        }
    }

})(angular);
