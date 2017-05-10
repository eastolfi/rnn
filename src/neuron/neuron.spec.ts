import { suite, test, slow, timeout } from "mocha-typescript";
import { expect } from "chai";

import { Neuron } from "./neuron";

@suite("Neuron")
class NeuronTest {
    @test
    "#constructor" () {
        let neuron = new Neuron(2);
        
        expect(neuron).to.not.be.null;
        expect(neuron).to.be.instanceOf(Neuron);
    }
    
    @test
    "#getOutput" () {
        let neuron = new Neuron(2);
        
        let output = neuron.getOutput([1, 2]);
        
        expect(output).to.not.be.null;
        expect(output).to.not.be.NaN;
        expect(output).to.be.a("number");
    }
}