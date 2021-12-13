---
date: '2021-12-12'
title: 'Truffle을 이용한 ERC-721 개발'
categories: ['BlockChain']
summary: 'Truffle을 이용한 ERC-721 개발해보기'
thumbnail: './block7.jpg'
---

# Truffle을 이용한 ERC-721 개발

오늘은 ERC-721을 Truffle을 이용해서 만들어 보겠습니다 😀
먼저 ERC-721이 무엇인지 알아 볼까요?

#### 이더리움 토큰

이더리움에는 EIP-# (#는 숫자) 로 되는 다양한 제안들이 있습니다. 이 제안들은 이더리움을 좀 더 개선하는 방향을 목적으로 세계적으로 많은 개발자들이 참여하고 있죠.
이더리움은 오픈소스 이기 때문에 누구나 오픈소스에 참여 할 수 있습니다 ! 지금 이 글을 보는 당신도 말이죠 🙌
대표적으로 **ERC-20** 과 **ERC-721**를 가장 많이 채택하여 사용하고 있습니다. **ERC-20(Fungible Token)** 은 대체 가능한 토큰 이라고 하여 이더리움 생태계에서 다양한 dApp 들과 호환 및 사용 가능 하며 이더리움에서 **ETH(이더)**를 토큰으로 교환하여 사용 할 수도 있습니다. 쉽게 설명하자면 세계적으로 미국 달러를 기준으로 원유(ETH)를 구매 하는 것 처럼 각 나라마다 가지고 있는 화폐를 토큰으로 비유하여 서로 교환한다 라고 생각하면 조금 쉽지요? 그렇다면 **ERC-721**은 무엇인지 예측 한번 해보실까요?🤔

오늘 우리가 알아볼 **ERC-721**이 요즘 가장 핫한 **NFT**시장에서 사용되는 **Non-Fungible Token** 입니다. 앞서 소개 했던 **ERC-20**은 대체 가능하기 때문에 토큰을 여러개 만들어서 교환 할 수 있지만 **ERC-721**은 대체가 불가능 하며 오직 하나의 토큰으로만 식별이 가능하기 때문에 값을 매길 수 없던 것들도 가능하게 만들어준 혁신적인 디지털 기술인 것 입니다.
이것은 토큰으로 교환하는 것에 쓰이기 보단, 인터넷에 많은 디지털 자산들을 값으로 매길 수 있기 때문에 그림이나 노래, 영상, 등.. 값으로 매겨 사고 팔 수 있게 됐습니다.

![opensea](../../ydblog/contents/ercPicture.png)

> NFT 시장에서 많은 거래가 이루어 지고 있는 사이트중 하나인 [OpenSea](https://opensea.io/collection/blockydoge) 이며 그중 하나의 작품

---

#### ERC-721

![TestImage](../../ydblog/contents/ydpicture.jpg)

테스트에 사용될 NFT 사진이다.. 정말 테스트용으로만 쓰이는 사진이기 때문에 절대 사용하지 마세요! 괜히 불법으로 사용하다가 적발되면 문제가... 가 아니라 이건 [Unsplash](https://unsplash.com/) 사이트 에서 랜덤한 사진을 가져온 것이므로 이 글을 보는 여러분도 아무 사진으로 하시면 되겠습니다~ 🤗

```
# 아무 폴더를 생성후 로컬 명령프롬프트 위치를 해당 폴더로 이동
truffle init
npm init
```

<img src="../../ydblog/contents/nftFolder.png" width="500" height=500><img src="../../ydblog/contents/nftConfig.png" width="500" height="500">

처음 truffle init을 실행하면 이런 폴더의 구조와 config에서 ganache를 새로 추가하고 똑같이 적용한다. 컴파일러 솔리디티 버전은 솔리디티 버전에 맞게 바꿔준다.

```solidity
//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// openzeppelin 라이브러리를 사용 하는것을 추천한다!
// 라이브러리를 사용하면 ERC721를 매번 작성해야하는 번거러움도 있고 작성한 콘트랙트에
// 치명적인 오류가 생기면 안되기 때문에 검증되고 안전한 openzeppelin 라이브러리에서 블러오자!

contract MyNFTs is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() public ERC721("MyNFTs", "MNFT") {}
  // mintNFT 함수에 기본적으로 nft를 발행해줄 사용자의 주소를 입력 받아야하지만
  // 현재 테스트용으로 하기때문에 간편하게 항상 이 함수를 실행하는 사용자가 발행되도록 구현했다
    function mintNFT(string memory tokenURI)
        public onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId); // msg.sender 부분에 원래는 address name 이런식으로 함수 인자값으로 받아서 msg.sender에 넣어주면된다
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
```

```javascript
# openzeppelin을 설치!
npm install @openzeppelin/contracts
migration/ 폴더로 이동한 후에  1_initial_migration.js을 열고 다음 코드로 수정하자

const Migrations = artifacts.require('Migrations');
const MyNFTs = artifacts.require('MyNFTs.sol'); // MyNFTs.sol 파일 추가

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(MyNFTs); // MyNFTs를 배포에 추가
};

```

> 이제 로컬 환경에서 Truffle을 구동하기 위한 단계는 끝났다. Ganache를 사용하여 본격적으로 배포 해봅시다🧑🏻‍💻
> 새로운 터미널을 키고 ganache-cli를 입력하고 실행 해보자
> ganache-cli
> 그리고 전에 Truffle 폴더의 경로로 명령 프롬프트를 키고 다음 절 을 실행하자!
>
> truffle migrate --compile-all --network ganache

<img src="../../ydblog/contents/nftBegin.png" width="500" height=500> <img src="../../ydblog/contents/nftMigrate.gif" width="1000" height=500>

```
차례대로 입력해보자
truffle console --network ganache
instance.name()
// 'MyNFTs'
instance.symbol()
// 'MNFT'
다음과 같은 결과가 나오면 MyNFTs.sol 이 잘 작동된다는 뜻이다!
instance.mintNFT("https://ipfs.io/ipfs/QmdwDwerocYHSQ2CRKuaDYDCSdTMi7v29sF13CJfLxSV3y?filename=nft.json", { from: accounts[0] })
```

[IPFS](https://ipfs.io/)에 NFT화 하고 싶은 파일을 등록하여 mintNFT에 넣어주자!
[테스트](https://ipfs.io/ipfs/QmdwDwerocYHSQ2CRKuaDYDCSdTMi7v29sF13CJfLxSV3y?filename=nft.json)용 으로 만든 파일은 여기서 확인 가능하다.
image 링크를 확인하면 이미지 파일을 확인할 수 있다. 밑에 사진은 정상적으로 NFT 파일을 등록한 결과 이다.

<img src="../../ydblog/contents/nftMiddle.png" width="500" height=200><img src="../../ydblog/contents/nftResult.png" width="500" height=500>

---

## 마치며

오늘은 ERC-720 을 이용하여 간단한 이미지 파일을 어떻게 블록체인에 올리는지 알아 보았다. 사실 너무 간단한 NFT를 만들어서 정말 이것만 하면 NFT 만들어서 부자 될 수 있겠지? 라는 생각 하면 안된다. 해보면서 느낀점은 컨트랙트는 한번 배포하면 수정 불가 하기 때문에 잘못된 NFT 상품을 등록하면 감옥에 갈 수 있으므로... 배포하기전에 꼭 많은 테스트를 해보고 배포를 해야 한다. NFT 데이터도 결국엔 데이터서버에 올라가게 되는데.. 이 많은 정보가 이더리움 상에 올라가게 되면 지금도 트랜잭션이 느린데 상품이 많아질수록 유지보수가 쉽지 않을 것이라 생각한다. 아직 ERC-720을 전부 해보진 않았고 OpenSea 에서 사용하는 NFT 파일 구조를 따라서 만든 것 이기 때문에 이것 말고도 더 보안적으로 처리를 해야하는 부분이 있을 것이라 생각한다. 직접 OpenSea 같은 사이트를 만들어서 NFT파일을 올려보고 판매 및 구매도 해보면 지금보다 더 발전된 개발자가 될 것이라 생각한다. 사이드 프로젝트로 구현 해보는 것을 숙제로 남겨두고 이만 물러가겠습니다. 😁

모든 코드는 [여기](https://github.com/ysonbrian/block-smart-contract/tree/master/ERC721) 있으니 참고하세요!
