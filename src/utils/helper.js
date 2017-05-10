"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Helper = (function () {
    function Helper() {
    }
    /**
 * Returns a random number between min (inclusive) and
 * max (exclusive)
 */
    Helper.getRandomExclusive = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    /**
     * Returns a random number between -1 and 1 exclusive
     */
    Helper.getRandom = function () {
        return Helper.getRandomExclusive(-1, 1);
        // getRandomInclusive?
    };
    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     */
    Helper.getRandomInclusive = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    /**
     * This is the sigmoid function used by the neurons
     * to run their output through
     * @param  Integer x The input
     * @return Integer
     */
    Helper.sigmoid = function (input) {
        return (1 / (1 + Math.pow(Math.E, (-input))));
        // return ( 1 / ( 1 + Math.exp(-input / 1)));
        //    return 1/(1+Math.pow(Math.E, -input));
    };
    return Helper;
}());
exports.Helper = Helper;
//# sourceMappingURL=helper.js.map