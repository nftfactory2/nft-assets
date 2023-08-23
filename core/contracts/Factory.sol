// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {SimpleCollectible} from "./SimpleCollectible.sol";

contract Factory {
	address[] public marketplace;

	event Deploy(address addr, string Name);

	function deploy(
		string memory Name,
		string memory Symbol,
		string[] memory _URIs,
		uint[] memory _mintFee
	) external {
		SimpleCollectible _contract = new SimpleCollectible(
			Name,
			Symbol,
			_URIs,
			_mintFee,
			msg.sender
		);
		marketplace.push(address(_contract));
		emit Deploy(address(_contract), Name);
	}
}
