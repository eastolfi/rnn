import { JSWLogger } from "jsw-logger";

import { Helper } from "../utils";

class Neuron {
    logger: JSWLogger;
    inputs: number;
    weights: Array<number> = [];
    
    constructor(inputs: number) {
        // this.logger = JSWLogger.getInstance({ level: 6 });
        this.logger = JSWLogger.instance;
        
        this.logger.debug(`Creating neuron with ${inputs} inputs`);
        
        this.inputs = inputs;
        
        // Add one weight for the bias
        for (let i = 0; i < inputs + 1; i++) {
            this.weights.push(Helper.getRandom());
        }
    }
    
    getOutput(inputs: Array<number>) {
        if (!inputs || inputs.length !== this.weights.length - 1) this.logger.throw("Wrong number of inputs");
        
        let output = 0;
        
        for (let i = 0; i < inputs.length; i++) {
            output += (inputs[i] * this.weights[i]);
            
            this.logger.debug(`Processing input #${inputs[i]}; Output by now: ${output}`);
        }
        
        // Add the bias
        output += this.weights[this.weights.length - 1]; // * -1
        
        return Helper.sigmoid(output);
    }
}

export { Neuron }