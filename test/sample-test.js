const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SELToken deployment", function () {
  it("It should deploy contract and give token symbol SEL", async function () {
    const SELToken = await ethers.getContractFactory("SELToken");
    const sel = await SELToken.deploy();
    await sel.deployed();

    expect(await sel.symbol()).to.equal("SEL");
  });
});
