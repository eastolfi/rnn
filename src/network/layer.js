"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsw_logger_1 = require("jsw-logger");
var neuron_1 = require("../neuron");
var Layer = (function () {
    function Layer(inputs, neurons) {
        this.neurons = [];
        // this.logger = JSWLogger.getInstance({ level: 6 });
        this.logger = jsw_logger_1.JSWLogger.instance;
        this.inputsPerNeuron = inputs;
        this.logger.debug("Creating the " + neurons + " neurons of the layer");
        for (var i = 0; i < neurons; i++) {
            this.neurons.push(new neuron_1.Neuron(inputs));
        }
    }
    Layer.prototype.getOutput = function (inputs) {
        if (!inputs || inputs.length !== this.neurons.length)
            this.logger.throw("Wrong number of inputs");
        var output = [];
        for (var i = 0; i < inputs.length; i++) {
            var neuron = this.neurons[i];
            output.push(neuron.getOutput(inputs));
        }
        return output;
    };
    return Layer;
}());
exports.Layer = Layer;
//# sourceMappingURL=layer.js.map