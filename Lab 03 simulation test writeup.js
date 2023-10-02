// Importing necessary modules:

const LendingContract = artifacts.require("LendingContract");
const assert = require("assert");


//Simulation Test Write up
contract("LendingContract Simulation Test", async (accounts) => {
    it("should handle borrowing more than available liquidity", async () => {
        // Define user accounts and amounts
        const owner = accounts[0];
        const user1 = accounts[1];
        const depositAmount = web3.utils.toWei("100", "ether"); // 100 ETH
        const borrowAmount = web3.utils.toWei("150", "ether"); // 150 ETH

        // Deploy the lending contract
        const lendingContract = await LendingContract.new({ from: owner });

        // Deposit an initial amount to ensure there's some liquidity
        await lendingContract.deposit({ value: depositAmount, from: user1 });

        try {
            // Attempt to borrow more than available liquidity
            await lendingContract.borrow(borrowAmount, { from: user1 });
            // If the borrow succeeds, fail the test
            assert.fail("Borrowing more than liquidity should fail");
        } catch (error) {
            // Check if the error message contains "Insufficient liquidity"
            assert.ok(error.message.includes("Insufficient liquidity"), "Expected error: Insufficient liquidity");
        }
    });
});


// Running Simulation test
truffle test simulateBorrow.js


