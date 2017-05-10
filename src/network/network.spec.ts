import { suite, test, slow, timeout } from "mocha-typescript";
import { expect } from "chai";

import { Network } from "./network";

@suite("Network")
class NetworkTest {
    @test
    "#constructor" () {
        let net = new Network(2, 2, 2, 2);
        
        expect(net).to.not.be.null;
        expect(net).to.be.instanceOf(Network);
    }
    
    @test
    "#run" () {
        let net = new Network(2, 2, 2, 2);
        
        let output = net.run([1, 2]);
        
        expect(output).to.not.be.null;
        expect(output).to.have.lengthOf(2);
        
        // expect(output).to.be.a("number");
    }
}