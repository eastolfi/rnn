import { Network } from "../network";

class Brain {
    network: Network;
    
    constructor() {
        this.network = new Network(1, 1, 1, 1);
    }
}

export { Brain }