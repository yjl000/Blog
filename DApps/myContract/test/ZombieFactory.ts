import { expect } from "chai";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import hre from "hardhat";

describe("ZombieFactory", function () {
  async function deployZombieFactoryFixture() {
    const [owner, otherAccount] = await hre.ethers.getSigners();
    const ZombieFactory = await hre.ethers.getContractFactory("ZombieFactory");
    const zombieFactory = await ZombieFactory.deploy();
    return { zombieFactory, owner, otherAccount };
  }

  describe("createRandomZombie", function () {
    it("应该能为新用户创建一个僵尸", async function () {
      const { zombieFactory, owner } = await loadFixture(deployZombieFactoryFixture);
      const name = "zombie1";
      await expect(zombieFactory.createRandomZombie(name))
        .to.emit(zombieFactory, "NewZombie")
        .withArgs(0, name, anyValue);
      const zombie = await zombieFactory.zombies(0);
      expect(zombie.name).to.equal(name);
      expect(zombie.dna).to.be.a("bigint");
      const zombieOwner = await zombieFactory.zombieToOwner(0);
      expect(zombieOwner).to.equal(owner.address);
    });

    it("同一地址不能重复创建僵尸", async function () {
      const { zombieFactory } = await loadFixture(deployZombieFactoryFixture);
      await zombieFactory.createRandomZombie("zombie1");
      await expect(zombieFactory.createRandomZombie("zombie2")).to.be.reverted;
    });
  });
}); 