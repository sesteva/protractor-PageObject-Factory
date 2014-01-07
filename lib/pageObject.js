var underscore = require('underscore');

if ( typeof protractor === 'undefined' ) {
    protractor = require('protractor');
}

var PageObject = function(){

    return {
//        Here we could add/extend convenience methods

//        by: protractor.By,
//        driver: function(){
//            return protractor.getInstance();
//        },
//        findElement:  function(by) { return this.driver().findElement(by); },
//        findElements: function(by) { return this.driver().findElements(by); }
    }
};

function createPage(page) {
    return underscore.extend(page, new PageObject());
};

exports.PageObjectFactory = {
    create: createPage
};