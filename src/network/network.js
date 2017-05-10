"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layer_1 = require("./layer");
var Network = (function () {
    function Network(inputs, outputs, layers, neuronsPerLayer) {
        this.inputLayer = new layer_1.Layer(inputs, neuronsPerLayer);
        this.outputLayer = new layer_1.Layer(neuronsPerLayer, outputs);
    }
    return Network;
}());
exports.Network = Network;
//# sourceMappingURL=network.js.map