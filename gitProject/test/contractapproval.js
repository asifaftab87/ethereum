const ContractApproval = artifacts.require('../../contracts/ContractApproval.sol');

contract('ContractApproval', function(accounts){

  it('Initiates contract', async function(){
    const contract = await ContractApproval.deployed();
    const approver = await contract.approver.call();
    assert.equal(approver, 0x34234ABCDE09, "Approve donesn't match");
  });

  it('takes a deposit', async function(){
      const contract = await ContractApproval.deployed();
      await contract.deposit(accounts[0], {value: 1e+18, from: accounts[1]});
      assert.equal(web3.eth.getBalance(contract.address), 1e+18, "amount didn't match");
  });

});
