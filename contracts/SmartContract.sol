// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract SpaceOtterClub is ERC721A, Ownable, ReentrancyGuard {

    using Strings for uint256;

    bool public adoption = false;
    string public otterData = "https://biodata.spaceotter.club/male/";
    uint256 public immutable otterForAdoption = 1888;

    // It's FREE, define it just in case for future need...
    uint256 public otterAdoptionFee = 0;

    mapping(address => bool) public adoptedOtter;

    constructor() ERC721A("Space Otter Club", "SOC") {
        // Reserve 188 otters for team and marketing
        _safeMint(msg.sender, 188);
    }

    // Make sure caller is a user
    modifier callerIsUser() {
        require(tx.origin == msg.sender);
        _;
    }

    // Otter Adoption (Public Mint)
    function adoptOtter() external payable callerIsUser nonReentrant {
        require(adoption, "Adoption is closed.");
        uint256 otterSupply = totalSupply();
        require(otterSupply + 1 <= otterForAdoption, "No more otter for adoption.");
        require(adoptedOtter[msg.sender] == false, "Already adopted an otter.");
        require(msg.value >= otterAdoptionFee, "Insufficient fund for adoption.");
        _safeMint(msg.sender, 1);
        adoptedOtter[msg.sender] = true;
    }

    // The first otter has ID #1
    function _startTokenId() internal view virtual override returns (uint256) {
        return 1;
    }

    // All otters deserve a home
    // Hope we never have to call this function
    function adoptRemainingOtters() public onlyOwner {
        uint256 otterSupply = totalSupply();
        require(otterSupply < otterForAdoption, "All 1,888 otters are adopted! Owner cannot mint.");
        uint256 remainingOtter = otterForAdoption - otterSupply;
        _safeMint(msg.sender, remainingOtter);
    }

    // Start or Pause Otter Adoption
    function toggleAdoption(bool _status) external onlyOwner {
        adoption = _status;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return otterData;
    }

    // There are some changes for the otters' details?
    function updateURI(string memory _newData) external onlyOwner {
        otterData = _newData;
    }

    // Set new adoption fee
    function setAdoptionFee(uint256 _newFee) external onlyOwner {
        otterAdoptionFee = _newFee;
    }

    // If have any...
    function withdrawFund() external onlyOwner nonReentrant {
	    (bool success, ) = payable(msg.sender).call{value: address(this).balance}("");
		require(success);
    }

}