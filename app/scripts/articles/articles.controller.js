;(function (angular) {
    'use strict';

    angular
        .module('controllers.Articles', [])
        .controller('ArticlesController', ArticlesController);

    ArticlesController.$inject = ['ArticlesService'];

    function ArticlesController (ArticlesService) {
        var vm = this;
        
    }

})(angular);
