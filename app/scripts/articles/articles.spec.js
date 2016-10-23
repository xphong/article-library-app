angular = {
    module: function () { return this; },
    controller: function (name, func) {
        angular[name] = func;
        return this;
    }
};

var expect = require('chai').expect;
require ('./articles.controller.js');


describe('ArticlesController', function() {

    beforeEach(function () {
        angular.ArticlesController();
    });

    it('should have empty articles list', function() {
        var scope = angular;

        expect(scope.articlesList.length).to.equal(0);
    });

    it('should add a new article', function() {
        var scope = angular;

        scope.addArticle('http://www.google.com');
        expect(scope.articlesList.length).to.equal(scope.articlesList.length+1);
    });

});
