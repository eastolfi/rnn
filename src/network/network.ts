import { JSWLogger, LogMethod } from "jsw-logger";

import { Layer } from "./layer";

class Network {
    logger: JSWLogger;
    numInputs: number;
    layers: Array<Layer> = [];
    
    constructor(inputs: number, outputs: number, layers: number, neuronsPerLayer: number) {
        this.logger = JSWLogger.instance;
        
        this.numInputs = inputs;
        
        if (layers === 0) {
            // create the output layer (the only one)
            this.layers.push(new Layer(inputs, outputs));
        } else {
            // create an input player
            this.layers.push(new Layer(inputs, neuronsPerLayer));
            
            // Create all the hidden layers
            for (let i = 0; i < layers; i++) {
                this.layers.push(new Layer(neuronsPerLayer, neuronsPerLayer));
            }
            
            // create the output layer
            let outputLayer = new Layer(neuronsPerLayer, outputs);
        }
    }
    
    @LogMethod
    run(inputs: Array<number>): Array<number> {
        if (!inputs || inputs.length !== this.numInputs) this.logger.throw("Wrong number of inputs");
        
        // Run the first layer with the inputs
        let layerInputs = inputs;
        let output = null;
        
        for (let layer of this.layers) {
            output = layer.getOutput(layerInputs);
            
            // Use the last output as the new layer input
            layerInputs = output;
        }
        
        return output;
    }
}

export { Network }