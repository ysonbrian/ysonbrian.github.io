---
date: '2021-12-11'
title: '니모닉 지갑 개발 해보기'
categories: ['BlockChain']
summary: '니모닉 지갑 개발 해보기'
thumbnail: './block4.jpg'
---

# 니모닉 지갑 개발 해보기

---

## 스마트컨트랙트 지갑

오늘날 스마트컨트랙트 지갑은 다양하게 있기 때문에 사용자는 다양한 지갑을 통해 디지털 자산을 관리할 수 있다. 지갑의 특징을 살펴보고 어떤 지갑이 옳은 선택일지 한번 알아보자

### 지갑 종류

- 하드웨어 지갑 - 하드웨어 지갑은 개인키를 외부 장치에 저장 하기 때문에 외부 장치가 망가지지 않는한 비밀키를 가장 안전하게 보관 가능하다
- 모바일 지갑 - 인터넷만 있으면 휴대폰, 패드, 등.. 다양한 기기들로 쉽게 지갑을 만들어 사용할 수 있다
- 데스크탑 지갑 - 여러 데스크탑 OS를 기본으로 하여 컴퓨터로 비밀키를 관리한다
- 웹 지갑 - 지갑을 가장 쉽게 생성 할 수 있으며 지갑이 망가질 일이 없기 때문에 처음 지갑을 사용 한다면 추천한다. 단, 제공 업체가 정보를 관리하므로 보안 문제가 있다

### 유명한 지갑들

- **메타마스크** - 이더리움을 보유하고 송금 및 관리 할 수있는 암호화폐 지갑이며 구글 크롬 확장 프로그램을 사용함. 지갑 생성은 니모닉 코드를 사용.

  [메타마스크 확장 프로그램 다운받기](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ko)

  -> **니모닉 코드**? 이것은 무엇인가?

  - 암호화폐 지갑은 비대칭 키 암호 방식을 사용하는데 공개키와 비공개키는 **SHA-256** 알고리즘을 이용하여 어떤 길이의 암호를 생성해도 256 비트의 고정된 길이를 만들어준다.
  - 개인키를 잃어버리면 지갑을 가지고 있더라도 보관된 화폐를 찾을 수 없기 때문에 관리가 중요하다. 하지만 개인키는 외우고 다니기 힘든 64자리 문자열을 나타내는데 이것을 외우기 쉽게 니모닉 코드를 이용하여 사람이 읽기 쉬운 단어들의 조합으로 이루어져 있다.
  - 니모닉은 12개 또는 24개의 랜덤한 영어 단어로 이루어져 있으며 암호화폐에 필요한 개인키를 편하게 사용할 수 있게 도와 준다.

- **마이이더월렛(MEW)** - 이더리움을 보관하고 입•출금 할 수 있는 암호화폐 지갑

  [마이이더월렛](myetherwallet.com)

  - 하드웨어 지갑 스타일 보안 기능을 제공하고 이중 인증으로 사용자의 거래를 보호한다
  - 사용자의 개인키를 요구하지 않기 때문에 좀 더 안전하게 개인키를 소유자가 직접 관리 한다
  - 지갑의 형태는 탈중앙화이며 P2P 통신을 사용하므로 사용자의 정보를 수집하지 않는다

다양한 지갑이 있지만 니모닉 지갑을 한번 개발 해보자

---

## Mnemonic Wallet 개발해보기

니모닉 지갑을 간단하게 만들어보자. 서버는 익스프레스로 구현하였고 [Postman](https://www.postman.com/) 과 [eth-lightwallet 모듈](https://github.com/ConsenSys/eth-lightwallet#readme) 을 사용하여 간단하게 테스트 해보았다

```javascript
router.post('/newMnemonic', async (req, res) => {
  let mnemonic // lightwallet을 사용하여 keystore을 담을 변수
  try {
    mnemonic = lightwallet.keystore.generateRandomSeed()
    res.json({ mnemonic }) // 응답 값을 JSON형태로 리턴
  } catch (err) {
    console.log(err)
  }
})
```

![결과](../../ydblog/contents/mnemicStart.gif)
응답으로 니모닉 코드를 확인할 수 있다. 이 코드를 통해 우리가 만든 지갑에 쉽게 접근 가능하다. 만약 니모닉 코드가 아니였다면 문자 하나가 달라져도 해시값이 달라지는 SHA-256 알고리즘에 의해 그 한문자를 찾아서 고쳐야 하지만 니모닉코드는 찾기 쉽다.

```javascript
router.post('/newWallet', async (req, res) => {
  let password = req.body.password // 위에서 요청받은 비밀번호와
  let mnemonic = req.body.mnemonic // 니모닉 코드를 변수에 할당한다

  try {
    // lightwallet.keystore.createVault(options, callback) 형태로 되어있으며
    // options 안에 password와 seedPhrase(니모닉코드) 를 필수적으로 넣어 줘야 한다
    // salt는 사용하면 암호화와 복호화에 추가적으로 더 단단한 암호를 생성해준다. option안에 없다면 랜덤한 salt가 디폴트로 설정된다
    // hdPathString도 필수적으로 필요하며 BIP39 에서 제공되는 "m/0'/0'/0'" 형태를 사용하거나
    // BIP44 형태인 "m/44'/60'/0'/0" 를 사용한다
    lightwallet.keystore.createVault(
      {
        password: password,
        seedPhrase: mnemonic,
        hdPathString: "m/0'/0'/0'",
      },
      //callback
      function (err, ks) {
        // keyFromPassword(password, callback) 형태
        // password에 전달된 password를 callback형태에 넘겨주면서 내부적으로 설정된 salt를 사용하여
        // 주소와 개인키를 pwDerivedKey로 넘겨준다
        ks.keyFromPassword(password, function (err, pwDerivedKey) {
          ks.generateNewAddress(pwDerivedKey, 1)

          let address = ks.getAddresses().toString() // keystore에 저장된 16진수 문자열 주소를 반환
          let keystore = ks.serialize() // keystore에 저장된 객체를 JSON-인코드된 문자로 바꿔주고 그 문자를 리턴

          res.json({ keystore: keystore, address: address }) // keystore와 address 주소를 응답
        })
      },
    )
  } catch (exception) {
    console.log('NewWallet ==>>>> ' + exception)
  }
})
```

![결과](../../ydblog/contents/mnemicMiddle.gif)

결과를 보면 알 수 있듯이 keystore의 주소와 구현 형태를 알 수 있다. 하지만 보기가 어렵기 때문에 json형태로 local서버에 저장하고 결과값을 확인하자

![결과](../../ydblog/contents/mnemicMiddle2.gif)

![결과](../../ydblog/contents/mnemicEnd.gif)

```javascript
{
  "encSeed": {
    "encStr": "eih9G7urzoAQRT86XPouRED7MHJRw1Y8RtaS3B1qs9Cu+CUqR6JqaVmOvajKxGIrNVjZDjFeTHAMJtU1orMsm48lJ4LmkL/NnwcPb/tnGedwpCxGAXybhbiOVRVtOxypBPEvUK1ZMiFY9sXVfi5odaOKI/auRdXKTmEnt/F2CC4NHK2GjCwNZQ==",
    "nonce": "eZh8WI43E8l1IywKRo6uqu94LlZm24u4"
  },
  "encHdRootPriv": {
    "encStr": "W702vUccde+WJc3NmVYziYlPlJWbPdLm4s0QfbLOi6BSYXfuLsHmhAHfh3HSti5At92DTpCFeHE2jjsNBZP/OpM0kOACnKmxdPzdJWSfqUHRUohFEIFR8TNr4h9uH249bX6wh3I/uqEJJjezo4Khz5v7MVnUA1M07aWk9UeR5w==",
    "nonce": "JGrNhxnjqOEFuFdC8f2DDXgZ9xJIy/me"
  },
  "addresses": ["a5a9802d101ad383045095601c72eaa6d8d543af"],
  "encPrivKeys": {
    "a5a9802d101ad383045095601c72eaa6d8d543af": {
      "key": "1Yd091eysuCKqXglqMOMYTTF50CnxvZ/4LcDklyQKzneTl2hpUrpB1YJftVN8l46",
      "nonce": "EkFb1Lii/IyODurWEdv2gzc5n3/qrkK8"
    }
  },
  "hdPathString": "m/0'/0'/0'",
  "salt": "WLzn6O7GQk3HvIs9dVlo62YDiGpRFipehSl41a0BPYw=",
  "hdIndex": 1,
  "version": 3
}

```

wallet.json 파일을 로컬 서버에 저장하고 결과값을 다음과 같이 확인 할 수 있었다.

[모든 코드는 여기서 확인 하세요!](https://github.com/ysonbrian/block-smart-contract/tree/master/mnemonic-wallet)

---

### 마치며

암호화페를 이용하려면 각 암호화폐가 사용하는 프로토콜에 따라 사용되는 암호 알고리즘을 가지고 개인키 와 공개키를 사용 하게 되는데 이때 개인키를 어딘가에 보관해서 사용해야만 한다. 그 때 필요한게 암호화폐 지갑인데 현재 다양한 지갑들이 서비스 되고 있으며 그 중에서 많이 상용화 된 메타마스크와 마이이더월렛을 알아보았고 마이이더월렛을 직접 간단하게 만들어 보았다. 지갑안에 모든 계좌 정보와 키 값을 저장 해야하는데 이 데이터는 어디에 저장 할까 라는 생각을 해보았는데, 이 많은 데이터가 블록체인 서버에 올라가면 정보가 노출 될 것 같고.. 그렇다면 중앙화된 서버에 관리를 하면 결국 누군가 악의적인 마음을 품는다면 해킹이 가능하지 않을까? 라는 의구심이 들지만.. 그렇지 않기때문에 많은 유저가 사용 한다고 생각한다. 모든 지갑은 개인키를 잃어버리면 계좌를 영원히 찾을 수 없는 단점이 있지만, 블록체인은 탈중앙화 이기 때문에 누가 대신 관리 해주지 않는다. 따라서 그에 따른 개인키 관리를 좀더 보완한 지갑이 나중에 더 만들어 지겠지만, 오늘 만들어본 니모닉을 활용한 지갑이 현재까지는 가장 편리한 것 같다. 각 지갑마다 구현된 시스템이 다르기 때문에 나중에 프로젝트 혹은 서비스를 만들때 지갑 구현에 필요한 기술을 좀 더 알아봐야겠다.
