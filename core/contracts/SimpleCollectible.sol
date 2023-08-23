// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract SimpleCollectible is ERC721 {
	
  using Counters for Counters.Counter;
	Counters.Counter private _tokenIds;
  mapping(uint=>string) tokenURIs;
  mapping(address=>uint)redeemed;
  address[] redeemers;
  Data[] URIS;
  address private owner;
  struct Data{
    uint index;
    string uri;
    uint256 mintFee;
  }

/**
 * 
 * @param Name name of the Nft
 * @param Symbol Symbol of the NFT
 * @param _URIs A List of all the NFT URIs
 * @param _mintFee Mint fee for each URI
 * @param _owner owner of the contract
 * @dev this function takes a list of uris and a list of mint fees and stores it in a struct array
 * This will enable us perfom certain functions like assertion of mint fees, etc.
 */

	constructor(
		string memory Name,
		string memory Symbol,
		string[] memory _URIs,
    uint256[] memory _mintFee,
    address _owner
	) ERC721(Name, Symbol) {
    owner = _owner;
    if(_URIs.length != _mintFee.length){
      revert("Transaction failed for some reason") ;
    }
    for (uint i = 0; i < _URIs.length; i++) {
      URIS.push(Data(i,_URIs[i],_mintFee[i]));
    }
	}

modifier onlyOwner {
  require(msg.sender == owner, "Not the owner");
  _;
}

/**
 * 
 * @param recipient receiptient of an NFT
 * @param _uriIndex the index of the NFT that the msg.sender wants to mint
 * @dev Since there is no randomization in our minting function, we want to pass a specific nft type to be minted,
 * we also check for the fee. To make sure the correct amount is being paid.
 */
	function createCollectible(
		address recipient,
    uint256 _uriIndex
	) payable external returns (uint256) {
		
    Data memory IndexUri = URIS[_uriIndex];
    uint256 amount = IndexUri.mintFee;
    if (msg.value < (amount * 1e18)) {
			revert("Transaction failed for some reason");
		}
		uint256 tokenID = _tokenIds.current();
		_safeMint(recipient, tokenID);
    if(_createTokenURI(tokenID, _uriIndex) != true){
        revert("Transaction failed for some reason");
      }
		_tokenIds.increment();
		return tokenID;

	}

  function _createTokenURI(uint256 tokenId, uint256 _uriIndex)internal returns(bool success){
        Data memory IndexUri = URIS[_uriIndex];
        string memory _uri = IndexUri.uri;
        tokenURIs[tokenId] = _uri;
        return true;
    }

function tokenURI(uint tokenId) public view virtual override returns(string memory){
        return tokenURIs[tokenId];
    }

function redeem( uint256 _tokenId)external {
    address caller = ownerOf(_tokenId);
    if(caller != msg.sender){
      revert("Transaction failed for some reason") ;
    }
    _burn(_tokenId);
    redeemed[msg.sender]++;
    redeemers.push(msg.sender);
}  

function adjustMintFee(uint index, uint256 _newMintFee) external onlyOwner {
  Data storage _data = URIS[index];
  _data.mintFee = _newMintFee;  
}

function adjustURI(uint index, string memory _newURI) external onlyOwner {
  Data storage data = URIS[index];
  data.uri = _newURI;  
}

function withdraw() external onlyOwner {
  (bool sent, ) = payable(owner).call{value:address(this).balance}("");
  if(!sent){
    revert("Transaction failed for some reason") ;
  }
}

}




