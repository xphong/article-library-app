angular = {
    module: function () { return this; },
    controller: function (name, func) {
        angular[name] = func;
        return this;
    }
};

var expect = require('chai').expect;
require ('./examples.controller.js');


describe('ExamplesControler', function() {

    beforeEach(function () {
        angular.ExamplesControler();
    });

    it('should have a list of articles', function() {
        var scope = angular;

        expect(scope.examplesList.length).to.equal(3);
    });

});
