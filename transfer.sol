// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract transfer {
     
     address public owner ;
     event transaction(address to  , uint amount);

     constructor(){
         owner = msg.sender ;
     }
     
     function callOwner() public view returns(address){
         return owner ;
     }
     
     function _transfer(address payable _to) public payable {
         _to.transfer(msg.value);
         emit transaction(_to , msg.value);
     }

}
