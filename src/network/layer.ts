import { JSWLogger } from "jsw-logger";

import { Neuron } from "../neuron";

class Layer {
    logger: JSWLogger;
    neurons: Array<Neuron> = [];
    inputsPerNeuron: number;
    
    constructor(inputs: number, neurons: number) {
        // this.logger = JSWLogger.getInstance({ level: 6 });
        this.logger = JSWLogger.instance;
        
        this.inputsPerNeuron = inputs;
        
        this.logger.debug(`Creating the ${neurons} neurons of the layer`);
        
        for (let i = 0; i < neurons; i++) {
            this.neurons.push(new Neuron(inputs));
        }
    }
    
    getOutput(inputs: Array<number>): Array<number> {
        if (!inputs || inputs.length !== this.neurons.length) this.logger.throw("Wrong number of inputs");
        
        let output = [];
        
        for (let i = 0; i < inputs.length; i++) {
            let neuron = this.neurons[i];
            
            output.push(neuron.getOutput(inputs));
        }
        
        return output;
    }
}

export { Layer }