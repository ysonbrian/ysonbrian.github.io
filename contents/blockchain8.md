---
date: '2021-12-12'
title: 'Klaytn 개발 환경에서 NFT 개발'
categories: ['BlockChain']
summary: 'Klaytn 개발 환경에서 NFT 개발해보기'
thumbnail: './block8.jpg'
---

## Klaytn 개발 환경에서 NFT 개발

오늘은 Klaytn IDE를 이용하여 NFT를 만들어 보겠습니다 🙂
**ERC-721 (Non-Fungible Token)**을 먼저 이해하면 훨씬 따라오기 쉬우니 먼저 [Truffle을 이용한 ERC-721 개발](https://ysonbrian.github.io/blockchain7/) 편 을 보고 와주세요!

### KIP-17

KIP-17은 카카오 자회사인 그라운드X 에서 클레이튼 프로토콜 위에 돌아가는 NFT를 말하는데 이것은 ERC-721과 같은 내용을 담고 있습니다.
클레이튼에서 사용하는 Solidity의 버전은 0.5.6(2021년 12월 기준) 이므로 컴파일 버전을 수시로 확인해주세요!
Solidity를 사용하기 편리한 Remix가 있는 것처럼 그라운드X는 [Klaytn IDE](https://ide.klaytn.com/) 를 사용합니다.
오늘 개발은 Klaytn IDE를 사용해서 NFT를 만들겠습니다. 테스트넷 환경은 baobab 테스트넷을 사용하여 배포하므로 클레이튼 지갑이 필요합니다!
지갑이 없으신분은 [Baobab](https://baobab.wallet.klaytn.com/create) 에서 지갑 생성하시고 KLAY Faucet 에서 생성한 지갑의 비밀키를 입력하면 테스트용 Klay을 얻을 수 있으니 준비 해주세요!

![klaytnMain](../../ydblog/contents/klaytnMain.png)

---

####

![ydpicture](../../ydblog/contents/ydpicture.jpg)

지난번에 사용된 NFT 사진이다.. 다시한번 말하지만 테스트용으로만 쓰이는 사진이기 때문에 절대 사용하지 마세요
[Unsplash](https://unsplash.com/) 사이트 에서 랜덤한 사진을 가져온 것이므로 이 글을 보는 여러분도 아무 사진을 사용하세요~ 🤗

---

## 테스트 시작

클레이튼 NFT를 배포하려면 클레이튼 에서 제공하는 코드를 사용해야 합니다.
[Klaytn NFT Code](https://github.com/ysonbrian/block-smart-contract/blob/master/kip17/contracts/MyNFTs.sol) 여기서 코드를 복사해서 사용해주세요

![klaytnCompile](../../ydblog/contents/klaytnCompile.gif)
클레이튼 IDE 화면에서 컴파일 버전을 선택해주고 사진처럼 초록색과 함께 뜨면 컴파일 성공을 의미 합니다!

![klaytnAccount](../../ydblog/contents/klaytnAccount.gif)
발급 받은 지갑의 비밀키를 입력하면 account 값을 확인 할 수 있습니다

![klaytnUri](../../ydblog/contents/klaytnUri.gif)
저번 시간 IPFS 에서 발행한 NFT 파일의 URI 주소를 사용 했습니다. [사용한 URI](https://ipfs.io/ipfs/QmdwDwerocYHSQ2CRKuaDYDCSdTMi7v29sF13CJfLxSV3y?filename=nft.json) 를 이용 하셔도 되니 만들기 귀찮으신 분들은 맘것 사용하세요~

<img src="../../ydblog/contents/klaytnResult.png" width="500">|

결과를 확인해보면 확인해 볼수 있네요! 그럼 한번 직접 트랜잭션을 확인해보죠!

![klaytnBaobab](../../ydblog/contents/klaytnBaobab.gif)

---

## 마치며

오늘은 Klaytn NFT를 Klaytn IDE를 이용하여 Baobab 테스트넷에 배포도 해보았습니다. 저번 시간에 Truffle을 이용한 것 보다 훨씬 수월 하게 진행 할 수 있었습니다.
이더리움 프로토콜에서 NFT를 개발하는 것은 아무래도 공통으로 사용하는 토큰 이다 보니 여러 정보를 찾을 수 있었지만, 클레이튼은 독자적으로 운영하는 프로토콜 이다 보니 정보를 찾기가 많이 어려웠습니다. 하지만 클레이튼 말고도 다른 프로토콜위에 돌아가는 NFT가 많은 만큼 한가지 방식으로 구현하는 방법을 고수 하기 보단, 다양한 NFT를 구현해 보면서 블록체인 기술을 습득 하는 것이 좀 더 발전 하는 개발자가 되지 않을까요? 저번에 말한 OpenSea 사이트를 보면 다양한 토큰으로 NFT 상품을 구매 할 수 있는데 막상 구현 하려고 생각 해보니 머리만 아파졌습니다. 😅
아직 만들기만 해보고 직접 NFT 상품을 구매해보진 않았습니다만... 조만간 직접 구매하여 어떤 방식으로 진행이 되는지 확인해볼까 합니다.

> 모든 코드는 [여기](https://github.com/ysonbrian/block-smart-contract/tree/master/kip17) 있으니 참고하세요!
>
> NFT 컨트랙트 주소: 0x359dabb503961b61b2415a1cce4d96f0f6afe2c76961ac405c3918fc121e2815
>
> [클레이튼 baobab 결과](https://baobab.scope.klaytn.com/tx/0x359dabb503961b61b2415a1cce4d96f0f6afe2c76961ac405c3918fc121e2815?tabId=inputData)
