// LendingContract.sol
pragma solidity ^0.8.0;

contract LendingContractLab03 {
    mapping(address => uint256) public balances;
    uint256 public liquidity;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function deposit() external payable {
        balances[msg.sender] += msg.value;
        liquidity += msg.value;
    }

    function borrow(uint256 amount) external {
        require(amount <= liquidity, "Insufficient liquidity");
        balances[msg.sender] -= amount;
        liquidity -= amount;
    }
    
    function getBalance() external view returns (uint256) {
        return balances[msg.sender];
    }

    function getBorrowedBalance() external view returns (uint256) {
        
       
    }
}
