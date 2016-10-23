describe('Examples test', function() {

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        nav.get(URL + '/#/examples');
    });

    it('should display a list of articles', function() {
        var list = element.all(by.repeater('article in vm.examplesList'));
        expect(list.count()).toEqual(3);
    });

    it('should display Google card as first article', function() {
        var firstRow = by.repeater('article in vm.examplesList').row(0);
        expect(element(firstRow.column('article.title')).getText()).toEqual('Google');
        expect(element(firstRow.column('article.url')).getText()).toEqual('http://www.google.com/');
    });

});
