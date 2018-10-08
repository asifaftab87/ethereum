pragma solidity ^0.4.23;

contract ContractApproval{

  address public sender;
  address public receiver;
  address public constant approver = 0x34234ABCDE09;

  function deposit(address _receiver) external payable{
      require(msg.value>0);
      sender = msg.sender;
      receiver = _receiver;
  }

  function viewApprover() external pure returns (address){
    return(approver);
  }

  function approve() external {
    require(msg.sender == approver);
    receiver.transfer(address(this).balance);
  }

}
