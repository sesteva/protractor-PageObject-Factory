var factory = require('../lib/pageObject.js').PageObjectFactory;

module.exports = factory.create({

    search: function(param){
       return element(by.model('query')).sendKeys(param);
    },

    getProjectsAmount: function(){
        return element(by.binding('projects.length'));
    }



});