"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsw_logger_1 = require("jsw-logger");
var utils_1 = require("../utils");
var Neuron = (function () {
    function Neuron(inputs) {
        this.weights = [];
        this.logger = jsw_logger_1.JSWLogger.getInstance({ level: 6 });
        this.logger.debug("Creating neuron with " + inputs + " inputs");
        this.inputs = inputs;
        // Add one weight for the bias
        for (var i = 0; i < inputs + 1; i++) {
            this.weights.push(utils_1.Helper.getRandom());
        }
    }
    Neuron.prototype.getOutput = function (inputs) {
        if (!inputs || inputs.length !== this.weights.length - 1)
            this.logger.throw("Wrong number of inputs");
        var output = 0;
        for (var i = 0; i < inputs.length; i++) {
            output += (inputs[i] * this.weights[i]);
            this.logger.debug("Processing input #" + inputs[i] + "; Output by now: " + output);
        }
        // Add the bias
        output += this.weights[this.weights.length - 1]; // * -1
        return utils_1.Helper.sigmoid(output);
    };
    return Neuron;
}());
exports.Neuron = Neuron;
//# sourceMappingURL=neuron.js.map