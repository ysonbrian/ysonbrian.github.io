---
date: '2022-01-03'
title: '인센티브 기반 토론 시스템을 갖춘 커뮤니티 사이트 개발'
categories: ['Laboratory']
summary: '인센티브 기반 토론 시스템을 갖춘 커뮤니티 사이트 개발'
thumbnail: './labPicture/lab1.webp'
---

# 인센티브 기반 토론 시스템을 갖춘 커뮤니티 사이트 개발

![main](../../ydblog/contents/labPicture/lab2Main.png)

- 프로젝트 기간: 12.21.21 ~ 01.03.22
- 프로젝트: 인센티브 기반 토론 시스템을 갖춘 커뮤니티 사이트 개발
- 프로젝트 목표: ERC-20 토큰을 인센트브로 주고 ERC-721도 구현
- [전체코드](https://github.com/codestates/BEB_01_CantSleep)

## 새로운 팀구성

새로만남 팀원분들과 프로젝트 방향성과 구성을 어떻게 진행할지 초반에 많은 고민을 했다. 무조건 프로젝트를 만들기 부터 한다면 나중에 문제가 생길때 수정하기 어렵기 때문이다.
기본적인 프론트 레이아웃과 ERC-20 토큰발행 및 ERC-721 교환을 목표로 잡고 시작했다. 3명이서 팀을 진행했고 프론트에 조금 자신이 있어서 프론트를 진행했고 백엔드 한분과 나머지 한분은 전체적인 부분을 수정 검토 하는 방식으로 진행했다.

## 개발 환경

- React (클라이언트)
- Ganache(블록체인 서버)
- Node js (서버)
- AWS (DB 저장)
- MySQL (DB)
- Web3.js(블록체인 서버, 클라이언트)

## 기능

- 사용자가 글작성을 할 시 ERC-20 토큰을 보상한다
- 사용자는 토큰으로 NFT (ERC721) 을 생성할 수 있다.
- 사용자 토큰으로 NFT 를 판매/구매할 수 있다.
- 발행한 NFT의 메타데이터와 IPFS를 확인 할 수 있다.
- 사용자가 회원가입하면 니모닉월렛을 발행하여 사이트를 이용 가능하게 한다.

## 프로젝트 시작

![main](../../ydblog/contents/labPicture/lab2First.png)

사이트에 접속후 로그인하면 상단에 사용자가 가진 토큰 수량을 확인할 수 있다. 한번 게시글 작성을 해보겠다.

---

![main](../../ydblog/contents/labPicture/lab2Write.gif)

사용자가 게시글을 작성 하면 토큰을 지급 받는 걸 확인 할 수 있다.

---

![main](../../ydblog/contents/labPicture/lab2NFT.gif)

사용자가 NFT를 발행 할 수 있다.

---

![main](../../ydblog/contents/labPicture/lab2Mypage.gif)

사용자가 발행한 NFT를 확인 할 수 있다.

---

![main](../../ydblog/contents/labPicture/lab2IPFS.gif)

사용자가 발행한 NFT 파일의 메타데이터와 IPFS에 저장된 URI를 확인 할 수 있다.

---

```javascript
mintNFT: async (req, res, metadata) => {
    const sendAccount = process.env.serverAddress;
    const privateKey = process.env.serverAddress_PK;
    const tokenUri = `https://ipfs.io/ipfs/${metadata.path}`;
    const receiveAccount = '0x747b089fD11Da5032242818E2728A6444CAe464f';
    const nonce = await web3.eth.getTransactionCount(sendAccount, 'latest');
    const data = erc721Contract.methods
      .mintNFT(receiveAccount, tokenUri)
      .encodeABI();

    const tx = {
      from: sendAccount,
      to: process.env.nftCA,
      nonce: nonce,
      gas: 5000000,
      data: data,
    };

    const signPromise = web3.eth.accounts.signTransaction(tx, privateKey); //NFT 발행을 위한 트렌잭션 생성
    let outTokenId = 0;

    signPromise
      .then((signedTx) => {
        web3.eth.sendSignedTransaction(
          signedTx.rawTransaction,
          async function (err, hash) {
            console.log(err);
            if (!err) { // 트렌젝션 성공 후
              const tokenId = await erc721Contract.methods
                .checkTokenId(tokenUri)
                .call();

              console.log(tokenId + 'mint');

              Metadata.create({ // AWS 에 데이터를 저장
                userId: metadata.userId,
                name: metadata.name,
                description: metadata.description,
                imgURI: metadata.imgURI,
                tokenURI: tokenUri,
                tokenId: tokenId,
                price: metadata.price,
              }).then((result) => {
                console.log('DB store success!');
              });
            } else {
              console.log('failed!');
            }
          }
        );
      })
      .catch((err) => {
        console.log('Promise failed:', err);
      });
  },
```

## 아쉬운점

프로젝트를 진행하면서 프론트와 백엔드 코드만 관리하기도 벅찬데 블록체인 코드를 추가적으로 관리를 해야 하다보니 프로젝트 폴더가 커지면서 관리하기가 어려웠다. 왜 리팩토링이 중요한지를 알 수 있었다. 기능을 추가하다보니 코드가 더 복잡해지고 나중에 코드를 확인해보면 다시 처음부터 코드 흐름을 이해해야 이해 할 수 있었다. 간간히 중요한 기능에 주석을 달고 표시하면 좀 더 쾌적한 진행을 할 수 있었을 것이다. Ganache로만 블록체인 서버를 이용했기 때문에 디버깅도 오래 걸려서 프로젝트 진행이 수월 하진 못했다. 블록체인 서버와 소통할 수 있는 Web3.js의 사용법이 익숙치 않아서 공식사이트를 자주 확인하며 블록체인 서버와 프론트 백엔드를 동시에 이해 하려다 보니 많이 어려웠다. 아무래도 아직 Web3 사용법이 익숙치 않은 것 같아서 좀 더 공부하여 진행했으면 프로젝트 진행 기간이 좀 더 수월 했을 것이다.

## 마치며

이번 프로젝트는 팀원끼리 임무 분담을 제대로 하고 진행 했음에도 불구하고 시간이 많이 부족했던 것 같다. 나름 이번 프로젝트는 기능부분도 중요하지만 디자인도 더 멋지게 구현하고 싶어서 욕심을 냈다. 디자인에 조금 시간을 더 투자하다 보니 백엔드와 Web3, 블록체인 공부에 시간을 좀 소홀히 한 것 같다. 다음 프로젝트는 디자인보단 기능에 초점을 두고 도전 해봐야겠다. 끝!
