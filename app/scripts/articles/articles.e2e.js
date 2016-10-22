describe('Articles test', function() {

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        nav.get(URL);
    });

    it('should display empty list message', function() {
        var messageEl = element(by.css('.empty.header'));
        expect(messageEl.getText()).toEqual('List is currently empty. Add article url to view articles.');
    });

    it('should add an article', function() {
        var urlInput = element(by.model('vm.articleUrl'));

        urlInput.sendKeys('http://google.ca');
        urlInput.sendKeys(protractor.Key.ENTER);

        browser.sleep(1000);

        var list = element.all(by.repeater('article in vm.articlesList'));
        expect(list.count()).toEqual(1);

        var firstRow = by.repeater('article in vm.articlesList').row(0);
        expect(element(firstRow.column('article.title')).getText()).toEqual('Google');
        expect(element(firstRow.column('article.url')).getText()).toEqual('http://Google.ca');
    });
    
});
