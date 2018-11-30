/**                                                                             
 * @author Clayton Alexander                                                    
 * @version 1.0                                                                 
 * 
 * Third project for cs253. This file holds the tests for data_structures.js.                                                                             
 *                                                                              
 */  

//var assert = require('chai');
var expect = require('chai');
var exports = require('../data_structures.js');

/**A test suite for testing the object**/
describe("Tests", function(){
    //Test created for the whole suite


    /**Called when the suite begins to set up objects for other tests**/
    before(function(){
    });

    /**Called before each unit test **/
    beforeEach(function(){
    });

    /**Called after each function to reset objects **/
    afterEach(function(){
    });

    /**Called as the test suite ends**/
    after(function(){
    });

    /**The Unit Tests**/
    
    describe('Unit tests for wordCount function', function(){
        expect(exports.wordCount().to.equal(true));
    });

});
