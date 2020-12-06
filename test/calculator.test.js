/*
 * Unit tests for lib/calculator.js
 */

describe('Calculator', function() {

    // inject the HTML fixture for the tests
    beforeEach(function() {
        var fixture = '<div id="fixture"><input id="v1" type="text">' +
            '<input id="v2" type="text">' +
            '<input id="add" type="button" value="Sumbit">' +
            'Result: <input id="result" type="text"/>';

        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
    });

    // remove the html fixture from the DOM
    afterEach(function() {
        document.body.removeChild(document.getElementById('fixture'));
    });

    // call the init function of calculator to register DOM elements
    beforeEach(function() {
        window.calculator.init();
    });

    it('should return 3 for 1 + 2', function() {
        document.getElementById('v1').value = 1;
        document.getElementById('v2').value = 2;
        document.getElementById('add').click();
        expect(document.getElementById('result').value).toBe('3');
    });

    it('should calculate zero for invalid x value', function() {
        document.getElementById('v1').value = 'hello';
        document.getElementById('v2').value = 2;
        document.getElementById('add').click();
        expect(document.getElementById('result').value).toBe('NaN');
    });

    it('should calculate zero for invalid y value', function() {
        document.getElementById('v1').value = 1;
        document.getElementById('v2').value = 'goodbye';
        document.getElementById('add').click();
        expect(document.getElementById('result').value).toBe('NaN');
    });

});