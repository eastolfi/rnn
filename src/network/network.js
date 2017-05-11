"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsw_logger_1 = require("jsw-logger");
var layer_1 = require("./layer");
var Network = (function () {
    function Network(inputs, outputs, layers, neuronsPerLayer) {
        this.layers = [];
        this.logger = jsw_logger_1.JSWLogger.instance;
        this.numInputs = inputs;
        if (layers === 0) {
            // create the output layer (the only one)
            this.layers.push(new layer_1.Layer(inputs, outputs));
        }
        else {
            // create an input player
            this.layers.push(new layer_1.Layer(inputs, neuronsPerLayer));
            // Create all the hidden layers
            for (var i = 0; i < layers; i++) {
                this.layers.push(new layer_1.Layer(neuronsPerLayer, neuronsPerLayer));
            }
            // create the output layer
            var outputLayer = new layer_1.Layer(neuronsPerLayer, outputs);
        }
    }
    Network.prototype.run = function (inputs) {
        if (!inputs || inputs.length !== this.numInputs)
            this.logger.throw("Wrong number of inputs");
        // Run the first layer with the inputs
        var layerInputs = inputs;
        var output = null;
        for (var _i = 0, _a = this.layers; _i < _a.length; _i++) {
            var layer = _a[_i];
            output = layer.getOutput(layerInputs);
            // Use the last output as the new layer input
            layerInputs = output;
        }
        return output;
    };
    return Network;
}());
__decorate([
    jsw_logger_1.LogMethod
], Network.prototype, "run", null);
exports.Network = Network;
//# sourceMappingURL=network.js.map