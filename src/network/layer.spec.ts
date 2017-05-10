import { suite, test, slow, timeout } from "mocha-typescript";
import { expect } from "chai";

import { Layer } from "./layer";

@suite("Layer")
class LayerTest {
    @test
    "#constructor" () {
        let layer = new Layer(2, 2);
        
        expect(layer).to.not.be.null;
        expect(layer).to.be.instanceOf(Layer);
    }
    
    @test
    "#getOutput" () {
        let layer = new Layer(2, 2);
        
        let output = layer.getOutput([1, 2]);
        
        expect(output).to.not.be.null;
        expect(output).to.have.lengthOf(2);
        
        // expect(output).to.be.a("number");
    }
}