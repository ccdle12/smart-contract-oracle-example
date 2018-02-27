pragma solidity ^0.4.18;

contract Oracle {
  //Contract Owner
  address public owner;

  //BTC Marketcap Storage
  uint public btcMarketCap;

  //Event
  event CallbackGetBTCCap();

  function Oracle() {
    owner = msg.sender;
  }

  function updateBTCCap() public {
    CallbackGetBTCCap();
  }

  function setBTCCap(uint cap) public {
    require(msg.sender == owner);
    btcMarketCap = cap;
  }

  function getBTCCap() constant public returns (uint) {
    return btcMarketCap;
  }
}
