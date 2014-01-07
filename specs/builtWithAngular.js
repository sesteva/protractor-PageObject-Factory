describe ("Built With Angular", function(){

    var page = require('../pageObjects/builtwithangular.js');

    beforeEach(function() {
        browser.get("http://builtwith.angularjs.org/");
    });

    it("should mention 95 sites were done with this fw", function(){
        var amount = page.getProjectsAmount();
        expect(amount.getText()).toEqual("95");
    });

    it("should be able to search projects", function(){
        page.search('airline');
        var projectsList = element.all(by.repeater('project in projectCol'));
        expect(projectsList.count()).toBe(1);
    });

    it("should be able to search projects", function(){
        page.search('airline');
        var project = element(by.repeater('project in projectCol').row(0));
        expect(project.getText()).toMatch(/WhichAirline/);
        project.click();
    });
});