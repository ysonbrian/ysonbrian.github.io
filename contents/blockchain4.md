---
date: '2021-11-23'
title: '블록체인 • 다양한 암호화폐 지갑'
categories: ['BlockChain']
summary: '다양한 암호화폐 지갑을 알아보고 실습도 해보자'
thumbnail: './block4.jpg'
---

# 다양한 블록체인 지갑

---

## 스마트컨트랙트 지갑

스마트컨트랙트지갑은 스마트컨트랙트 기능을 통해 고유한 능력을 가진 지갑입니다. 사용자를 위한 추가 보안 및 복구 기능을 사용할 수 있습니다.

### 특징

- **2단계 인증** 인증 앱 및/또는 기본 지갑 솔루션을 통해 추가 보안 기능을 제공한다.
- **ATM과 같은 인출 제한** 트랜잭션 금액 제한을 설정할 수 있는데 이는 사용자가 잘못 판단하여 높은 금액의 인출 가능성을 줄이고, 공격자가 한 트랜잭션에서 지갑의 모든 금액을 가져가는 것을 방지할 수 있다.
- **화이트리스트 및 블랙리스트** 사용자는 자신이 지정한 주소(화이트리스트)로만 전송할 수 있고, 차단한 주소(블랙리스트)에는 전송 하지 않는다.
- **사기 경보 및 긴급 잠금** 장치를 분실하거나 도난당한 경우 계정을 잠그거나 손상된 장치에서 계정에 대한 액세스를 비활성화 할 수 있음

### 지갑 종류

- 하드웨어 지갑 - 하드웨어 지갑은 거래에 서명할 때 개인 키를 인터넷에 노출하지 않기 때문에 온라인 상태에서 자산에 액세스하는 가장 안전한 방법
- 모바일 지갑 - 모바일 지갑은 데스크톱 & 웹 지갑의 모바일형 지갑
- 데스크탑 지갑 - 데스크탑 지갑은 Windows, Mac 또는 Linux같은 OS에 다운로드하여 작동할 수 있는 앱
- 웹 지갑 - 웹 지갑은 웹사이트에서 호스팅되는 지갑으로 사용자가 계정을 생성하고, 보관할 수 있음. 절대 고장나지 않고 쉽게 접속 가능하나 보안에 관련하여 제공업체에 의존적임

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
  - 탈중앙화와 P2P 통신을 사용하고 개인 데이터를 수집 하지 않는다.

### Mnemonic Wallet 개발해보기

[Postman](https://www.postman.com/) 과 [eth-lightwallet 모듈](https://github.com/ConsenSys/eth-lightwallet#readme) 을 사용하여 간단하게 테스트 해보았다

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

![결과](/Users/brianson/Documents/Blog/ydblog/contents/Mn1.png)

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

![결과](/Users/brianson/Documents/Blog/ydblog/contents/Mn2.png)

결과를 보면 알 수 있듯이 keystore의 주소와 구현 형태를 알 수 있다. 하지만 보기가 어렵기 때문에 json형태로 local서버에 저장하고 결과값을 확인하자

![결과](/Users/brianson/Documents/Blog/ydblog/contents/Mn3.png)

```javascript
{
  "encSeed": {
    "encStr": "rrvU90nKF8b+jerdoDDhMyr7qplFnLFT5+ZxuRYZh4jYYIkq1NTLmKOYK0NhEKtpSDTGLZ6vcYMO2qIxnXCM8/Ks6VTmv//HSZHh0OTQFn8OpP6FS85G8BeyKIl45pNsWU8HC2QrJ8j6U9l/e77KWOHQLxqxI9DvYchwBXo1z+6nauvTAlvTBQ==",
    "nonce": "slYsGfEzTB6eW/ljOAao9GzIwCJ4blQV"
  },
  "encHdRootPriv": {
    "encStr": "4f3/cDc5KMhJPuB64aoVl69njYg9RIrOyG0K9v1UTs6f1nwgOrMd7uj3CwF6e6u587xG9HrrnWcZfo1eNsYvGv9mFF6SSnbdakT/7InG2eQTKNk5pjv8DizM/ekMBhZ2bOsRYgMQ/6xVv2IDRetypcnp9/T8sT+JcVPqFTq5Tw==",
    "nonce": "GfijZB9ir+cMTgXTPOVj53y8o6skEA/q"
  },
  "addresses": ["7ba908580b5c3538a70a86f5af25f747fd667e09"],
  "encPrivKeys": {
    "7ba908580b5c3538a70a86f5af25f747fd667e09": {
      "key": "cjEDSLRjLA4UtEmnA07RR0MrllPobYib5SNUvQf1XyTljYSteQW0jNd3iZQiRk//",
      "nonce": "npMs2YPSHsUU4cFLAGGRUNfSxLjjCEiZ"
    }
  },
  "hdPathString": "m/0'/0'/0'",
  "salt": "p2pIkf069vcne9C3JvNKnTYLm4BdQSQThmY3g24QFi4=",
  "hdIndex": 1,
  "version": 3
}

```

wallet.json 파일을 로컬 서버에 저장하고 결과값을 다음과 같이 확인 할 수 있었다.

### 마치며

암호화페를 이용하려면 각 암호화폐가 사용하는 프로토콜에 따라 사용되는 암호 알고리즘을 가지고 개인키 와 공개키를 사용 하게 되는데 이때 개인키를 어딘가에 보관해서 사용해야만 한다. 그 때 필요한게 암호화폐 지갑인데 현재 다양한 지갑들이 서비스 되고 있으며 그 중에서 많이 상용화 된 메타마스크와 마이이더월렛을 알아보았고 마이이더월렛을 직접 간단하게 만들어 보았다. 각 지갑마다 구현된 시스템이 다르기 때문에 나중에 프로젝트 혹은 서비스를 만들때 지갑 구현에 필요한 기술을 좀 더 알아봐야겠다.
