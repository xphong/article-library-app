angular = {
    module: function () { return this; },
    controller: function (name, func) {
        angular[name] = func;
        return this;
    }
};

var expect = require('chai').expect;
require ('../../app/scripts/articles/ArticlesController');


describe('ArticlesController', function() {
    beforeEach( function () {
        angular.ArticlesController();
    });

    it('should add a new article', function() {
        var scope = angular;

        scope.addArticle('http://www.google.ca');
        expect(scope.articles.length).to.equal(scope.articles.length+1);
    });

});