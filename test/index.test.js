const { soma } = require("../index.js");
const chai = require("chai");
const expect = chai.expect;

describe("Gusoma", async () => {
  it("should behave as expected", (done) => {
    expect(soma(0)).to.be.equal("zeru");
    done();
  });
  it("should behave as expected", (done) => {
    expect(soma(10)).to.be.equal("icumi");
    done();
  });
  it("should behave as expected", (done) => {
    expect(soma(100)).to.be.equal("ijana");
    done();
  });
  it("should behave as expected", (done) => {
    expect(soma(1000)).to.be.equal("igihumbi");
    done();
  });
  it("should behave as expected", (done) => {
    expect(soma(1000000)).to.be.equal("miliyoni imwe");
    done();
  });
  it("should behave as expected", (done) => {
    expect(soma(1000000000)).to.be.equal("miliyari imwe");
    done();
  });
  it("should behave as expected", (done) => {
    expect(soma(100000000000)).to.be.equal("miliyari ijana");
    done();
  });
  it("should behave as expected", (done) => {
    expect(soma(100000000000)).to.be.equal("miliyari ijana");
    done();
  });
  it("should behave as expected", (done) => {
    expect(soma(1000000000000)).to.be.equal("tiliyoni imwe");
    done();
  });
  it("should behave as expected", (done) => {
    expect(soma(10000000000000)).to.be.equal("umubare munini cyane");
    done();
  });
});
