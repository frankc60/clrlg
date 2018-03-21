const assert  = require("assert");
const clrlg   = require("../index");

let c = new clrlg();


describe("clrlg - color log", function() {

    describe("lg()", function() {
        let output = "";


        // restore process.stdout.write() and console.log() to their previous glory
        var cleanup = function() {
            process.stdout.write = write;
            c.lg = log;
        };


        beforeEach(() => {
            output = "";

            write = process.stdout.write;
            log = c.lg;

            process.stdout.write = c.lg = (s) => {
                output += s;
            };
        });


        afterEach(cleanup);

        it("c.lg('test1')", function(){
            try {
                c.lg("test1");
                assert.equal(output, "test1");
            } catch (e) {
                cleanup();
                throw e;
            }
      
        });
    });
});