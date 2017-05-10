import { Layer } from "./layer";

class Network {
    // inputLayer: Layer;
    // outputLayer: Layer;
    numInputs: number;
    layers: Array<Layer> = [];
    
    constructor(inputs: number, outputs: number, layers: number, neuronsPerLayer: number) {
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
    
    run(inputs: Array<number>): Array<number> {
        if (!inputs || inputs.length !== this.numInputs) this.logger.throw("Wrong number of inputs");
        
        let outputs = [];
        
        for (let layer of this.layers) {
            outputs.push(layer.getOutput(inputs));
        }
        
        return outputs;
    }
}

export { Network }