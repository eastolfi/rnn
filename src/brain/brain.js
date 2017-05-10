"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var network_1 = require("../network");
var Brain = (function () {
    function Brain() {
        this.network = new network_1.Network(1, 1, 1, 1);
    }
    return Brain;
}());
exports.Brain = Brain;
//# sourceMappingURL=brain.js.map