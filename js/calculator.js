'use strict';

window.calculator = window.calculator || {};

(function() {
    var getIntById = function(id) {
        return parseInt(document.getElementById(id).value, 10);
    };

    var calculate = function() {
        var sum = getIntById('v1') + getIntById('v2');
        document.getElementById('result').value = sum;
    };

    window.calculator.init = function() {
        document.getElementById('add').addEventListener('click', calculate);
    };
})();