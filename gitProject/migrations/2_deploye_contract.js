var ContractApproval = artifacts.require("ContractApproval");

module.exports = function(deployer){
  deployer.deploy(ContractApproval);
}
