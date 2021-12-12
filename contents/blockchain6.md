---
date: '2021-12-11'
title: 'Solidity를 이용한 가위바위보 게임'
categories: ['BlockChain']
summary: 'Solidity를 이용하여 가위바위보 게임을 만들어보고 개선 해보자!'
thumbnail: './block6.png'
---

# Solidity를 이용한 가위바위보 게임

---

블록체인 네트워크에 우리가 작성한 스마트 컨트렉트를 보여주기 위해선 특수한 언어를 사용해야 하는데 이 언어는 어카운트 주소, 규칙 사양, 트랜잭션 되돌림과 같은 블록체인에 특화된 틍정 기능이 언어에 내장되어 있어야 합니다. 그렇다면 이것을 충족시켜주는 언어는 어떤게 있을까요?

#### Solidity 특징

- 객체지향 고수준 언어이며 C++, 파이썬, 자바스크립트의 영향을 받았음
- 정적타입, 상속, 라이브러리, 사용자 정의 타입 등을 지원
- 블록체인 애플리케이션 개발을 위한 유용한 기능을 많이 제공

오늘날 대부분의 스마트 컨트랙트는 Solidity를 사용 하고 있기 때문에 꼭 배워야 겠죠? 😉

오늘은 **solidity** 언어를 사용하여 간단한 가위바위보 게임을 만들어 보겠습니다.
가위바위보 게임을 만들기 위해선 스마트 컨트랙트 코드를 배포하고 테스트 해야 이더리움 네트워크에서 확인 할 수 있습니다.
여러 통합 개발 환경(Truffle, Ganache.. etc)이 있지만 Remix라는 통합 개발 환경을 이용해서 진행해 보겠습니다.

---

#### 가위바위보 스마트 컨트랙트

##### 게임방법

스마트 컨트랙트를 처음 만든 사람이 방장이 되고 방장이 가위 바위 보 셋중에 하나의 값과 ether, gwei, 또는 wei 값을 컨트랙트에 저장하고 참가자도 마찬가지로 진행하고 둘중 이긴 사람이 컨트랙트에 담긴 모든 화폐를 가져가는 간단한 게임

모든 코드는 [여기](https://github.com/ysonbrian/block-smart-contract/blob/master/contract/RPS.sol) 있습니다!

가위바위보 게임에서 가장 핵심적인 함수만 짚고 넘어가 보겠습니다 😁

```solidity
function createRoom(Hand _hand)
    public
    payable
    isValidHand(_hand)
    returns (uint256 roomNum)
  {
    // 컨트랙트를 만든 사람이 게임 주인이며 컨트랙트를 생성과 동시에 자신의 가위바위보를 하나 설정하여 컨트랙트에 저장!
    rooms[roomLen] = Game({
      betAmount: msg.value, // 이 게임에 배팅한 총 금액 ... 처음엔 방장이 돈을 넣는다
      gameStatus: GameStatus.STATUS_NOT_STRTED, // 게임 상태
      originator: Player({ // originator는 스마트 컨트랙트를 처음 만든 이 게임의 주인을 나타냄
        hand: _hand, // 가위 바위 보 셋중 하나
        addr: payable(msg.sender), // 방장 어카운트 주소
        playerStatus: PlayerStatus.STATUS_PENDING, // 방장 상태
        playerBetAmount: msg.value // 방장이 낸 금액
      }),
      taker: Player({ // taker는 참여자를 나타냄
        hand: Hand.rock, // 디폴트로 참여자 정보를 세팅
        addr: payable(msg.sender), // 초기 세팅은 방장의 주소.. 참여자가 참여하면 바뀜
        playerStatus: PlayerStatus.STATUS_PENDING, // 참여자의 상태
        playerBetAmount: 0 // 참여자가 없기때문에 초기 값은 0
      })
    });
    roomNum = roomLen;
    roomLen = roomLen + 1; // 방은 여러개가 생성 될 수 있기 때문에 방 생성시 자동으로 증가
  }
```

```solidity
function joinRoom(uint256 roomNum, Hand _hand)
    public
    payable
    isValidHand(_hand) // 참여자의 가위 바위 보 값을 확인
  {
    rooms[roomNum].taker = Player({ // 실질적으로 참여자가 게임에 참여 하면서 정보가 담김
      hand: _hand, // 가위 바위 보
      addr: payable(msg.sender), // 참여자 주소
      playerStatus: PlayerStatus.STATUS_PENDING, // 참여자 상태
      playerBetAmount: msg.value // 참여자의 배팅 금액
    });
    rooms[roomNum].betAmount = rooms[roomNum].betAmount + msg.value; // 참여가 완료 되면 게임방의 배팅 금액에 참여자 배팅을 더함
    compareHands(roomNum); // 방장과 참여자의 결과를 확인
  }
```

```solidity
function compareHands(uint256 roomNum) private {
    uint8 originator = uint8(rooms[roomNum].originator.hand); // 방장이 낸 가위 바위 보 값을 확인
    uint8 taker = uint8(rooms[roomNum].taker.hand); // 참여자의 가위 바위 보 값을 확인

    rooms[roomNum].gameStatus = GameStatus.STATUS_STARTED; // 게임이 시작함을 알림

    if (taker == originator) {
      // 비긴 경우
      rooms[roomNum].originator.playerStatus = PlayerStatus.STATUS_TIE;
      rooms[roomNum].taker.playerStatus = PlayerStatus.STATUS_TIE;
    } else if ((taker + 1) % 3 == originator) {
      // 방장이 이긴 경우
      rooms[roomNum].originator.playerStatus = PlayerStatus.STATUS_WIN;
      rooms[roomNum].taker.playerStatus = PlayerStatus.STATUS_LOSE;
    } else if ((originator + 1) % 3 == taker) {
      // 참가자가 이긴 경우
      rooms[roomNum].originator.playerStatus = PlayerStatus.STATUS_LOSE;
      rooms[roomNum].taker.playerStatus = PlayerStatus.STATUS_WIN;
    } else {
      // 그 외의 상황에는 게임 상태를 에러로 업데이트한다
      rooms[roomNum].gameStatus = GameStatus.STATUS_ERROR;
    }
  }

  modifier isPlayer(uint256 roomNum, address sender) { // 방장 또는 참여자의 주소가 맞는지 확인
    require(
      sender == rooms[roomNum].originator.addr ||
        sender == rooms[roomNum].taker.addr
    );
    _;
  }

```

```solidity
function payout(uint256 roomNum) // 게임 결과를 확인하고 배팅을 정산
    public
    payable
    isPlayer(roomNum, msg.sender)
  {
    if ( // 비기는 경우
      rooms[roomNum].originator.playerStatus == PlayerStatus.STATUS_TIE &&
      rooms[roomNum].taker.playerStatus == PlayerStatus.STATUS_TIE
    ) {
      rooms[roomNum].originator.addr.transfer(
        rooms[roomNum].originator.playerBetAmount
      );
      rooms[roomNum].taker.addr.transfer(rooms[roomNum].taker.playerBetAmount);
    } else {
      if (rooms[roomNum].originator.playerStatus == PlayerStatus.STATUS_WIN) {// 방장이 이기는 경우
        rooms[roomNum].originator.addr.transfer(rooms[roomNum].betAmount);
      } else if (rooms[roomNum].taker.playerStatus == PlayerStatus.STATUS_WIN) { // 참여자가 이기는 경우
        rooms[roomNum].taker.addr.transfer(rooms[roomNum].betAmount);
      } else { // 둘다 아닌경우
        rooms[roomNum].originator.addr.transfer(
          rooms[roomNum].originator.playerBetAmount
        );
        rooms[roomNum].taker.addr.transfer(
          rooms[roomNum].taker.playerBetAmount
        );
      }
    }
    rooms[roomNum].gameStatus = GameStatus.STATUS_COMPLETE; // 게임이 종료되었으므로 게임 상태 변경
  }
```

---

### 가위바위보 게임 실행

1. 방을 만든다

   ![](../../ydblog/contents/createRoom.gif)
   방장은 게임방을 생성하고 가위 바위 보 값중에 하나를 넣는다. 이 예시 에서는 주먹을 넣었고 추가로 10 이더 값을 넣었다

2. 참여자 입장
   ![playerEnter](../../ydblog/contents/playerEnter.gif)
   첫 방을 생성하면 0 번째 부터 시작하기 때문에 0 값을 넣어주고 방장을 이기는 조건으로 바위와 10 이더를 함께 트랜잭션을 해주었다

3. 결과 확인
   ![endGame](../../ydblog/contents/endGame.gif)
   방장이 payout을 누르면 결과값을 확인 할 수 있는데 이 예시에서는 참여자가 이기는 조건으로 진행 했기 때문에 2번째 어카운트에 20 이더가 추가 된 것을 확인했다.

#### 잠깐! 뭔가 문제가 있는데?😱

![canSee](../../ydblog/contents/canSee.gif)
롭스텐에 배포후 방장이 낸 가위 바위 정보를 확인 할 수 있다니..?? 이러면 참여자가 무조건 이기는 게임이 된다!!

### 심각한 오류를 발견! 개선 해보자! 🧑🏻‍💻

모든 스마트 컨트랙트는 블록체인 네트워크에 올라가면 모든 정보를 누구나 볼 수 있기 때문에 보안을 무조건 신경 써주어야 하는데 우리가 만든 가위바위보의 게임은 방장의 선택을 누구나 확인 할 수 있기 때문에 방장의 돈을 무조건 가져갈 수 있는 게임이 되었다.
정보를 감추기 위해 고민을 해보았고 여러 리서치를 통해 한가지 방법을 찾을 수 있었다. Solidity에서 제공하는 **keccak256**이라는 함수는 데이터의 값을 해시로 암호화 하여 고정된 값으로 바꿔주는데 이 값을 바이트 값으로 바꿔주면 블록체인 네트워크에 올라가도 바이트값으로 나오기 때문에 참여자가 어떤 값인지 확인 할 수가 없다.

Keccak256 함수에 abi.encodePacked(first, second)를 넣어주면 데이터 값을 해시화 하여 리턴 해주는데 first 와 second 값은 string, bytes 또는 uint 자료형으로 구성해야 하며 각 값중에 하나는 감추고 싶은 데이터와 다른 값은 랜덤한 값을 넣어주면 기본 해시 + salt**(Brute Force Attack (무작위 공격**)을 예방하여 기본 해시값에 다른 랜덤 값을 더해주는 개념) 하여 암호화 할 수 있다. Solidty 공식 사이트에서는 만약 first 와 second 값이 'A' + 'BB' 이거나 'AB' + 'B' 이라면 동일한 값을 리턴한다고 하여 사용하는데 주의 하라 하였지만 방장은 처음 게임을 만들때 가위바위보 값이 아닌 해쉬된 값을 넣고 만들면 참여자는 방장의 2번째 값을 알 수 없기 때문에 괜찮다고 생각했다.

개선된 코드는 [여기](https://github.com/ysonbrian/block-smart-contract/blob/master/contract/rpsAdvanced.sol) 있습니다!

```solidity
function hashFunction(uint256 _hand, string memory _secret)
    public
    pure
    returns (bytes32)
  {
    return keccak256(abi.encodePacked(_hand, _secret)); // 해시된 바이트값
  }
```

가위바위보 게임을 처음 디플로이 하면 방장은 hashFunction을 사용하여 핸드 값과 개인 비밀값을 넣어서 반환된 byte 값을 게임 생성할때 값으로 넣어준다.

```solidity
function compareHands(
    uint256 roomNum,
    uint256 _hand,
    string memory _secret
  ) private {
    uint256 originator;
    uint256 taker;
    bytes32 validateHand = keccak256(abi.encodePacked(_hand, _secret)); // 방장은 결과를 확인하기 위해 처음에 입력했던 값들을 넣어준다
    require( // 방장이 다른값을 넣을 수 없도록 입력된 값이 처음 생성됐을때 값과 같은지 확인
      validateHand == rooms[roomNum].originator.hand,
      'Creator Must submit right hand and secret'
    );
    originator = _hand;
    taker = uint8(rooms[roomNum].taker.hand);

    rooms[roomNum].gameStatus = GameStatus.STATUS_STARTED;

    if (taker == originator) {
      // 비긴 경우
      rooms[roomNum].originator.playerStatus = PlayerStatus.STATUS_TIE;
      rooms[roomNum].taker.playerStatus = PlayerStatus.STATUS_TIE;
    } else if ((taker + 1) % 3 == originator) {
      // 방장이 이긴 경우
      rooms[roomNum].originator.playerStatus = PlayerStatus.STATUS_WIN;
      rooms[roomNum].taker.playerStatus = PlayerStatus.STATUS_LOSE;
    } else if ((originator + 1) % 3 == taker) {
      // 참가자가 이긴 경우
      rooms[roomNum].originator.playerStatus = PlayerStatus.STATUS_LOSE;
      rooms[roomNum].taker.playerStatus = PlayerStatus.STATUS_WIN;
    } else {
      // 그 외의 상황에는 게임 상태를 에러로 업데이트한다
      rooms[roomNum].gameStatus = GameStatus.STATUS_ERROR;
    }
  }

  modifier isPlayer(uint256 roomNum, address sender) {
    require(
      sender == rooms[roomNum].originator.addr ||
        sender == rooms[roomNum].taker.addr
    );
    _;
  }

```

기존 compareHands 함수는 참여자가 joinRoom 함수를 실행 할때 마지막에 실행 됐지만, 이 함수를 방장이 결괏값을 확인할 때 실행 하면서 게임의 결과를 확인하도록 바꾸었다.
require 구문을 사용하여 방장이 마음이 바뀌어 다른값을 입력해도 초기에 입력한 값으로만 게임이 진행하도록 구현하였고 게임은 문제 없이 진행 할 수 있다.

![advancedCreateRoom](../../ydblog/contents/advancedCreateRoom.gif)
방장이 처음 방을 만들면 hashFunction을 사용하여 가위 바위 보 값과 비밀값을 넣어주면 해시값을 얻을 수 있고 이 값을 그대로 createRoom 값에 넣어준다.
![advancedPlayerEnter](../../ydblog/contents/advancedPlayerEnter.gif)
참여자는 전 과 동일하게 값을 넣어준다.
![advancedEndGame](../../ydblog/contents/advancedEndGame.gif)
방장이 payout 함수를 실행 할 때 처음에 입력했던 값을 그대로 넣어야만 게임이 끝이 난다.

![errorSituation](../../ydblog/contents/errorSituation.png)
기존 값이 아닌 값을 입력하면 "Creator Must submit right hand and secret" 이라는 문구를 보여주며 실패하게 된다

![result](../../ydblog/contents/result.png)
롭스텐에 직접 배포하여 확인해보니 역시나 바이트값으로 잘 감춰진 것을 확인 할 수가 있었다.

![gameResult](../../ydblog/contents/gameResult.png)
참여자가 200 wei로 참여하고 게임을 승리하여 300wei를 돌려 받았다.

#### [컨트랙트주소](https://ropsten.etherscan.io/address/0x523d10ace8773ce9fc1bebc2f3e811fdcb9cdf73) 를 확인할 수 있다

---

## 마치며

가위바위보 라는 간단한 게임을 직접 스마트 컨트랙트로 작성하고 배포 해보았는데 스마트 컨트랙트가 블록체인에 올라가게 되면 작성한 코드를 바꿀 수 없기 때문에 배포하기 전에 많은 테스트를 거치고 보완점을 찾고 배포해야만 한다. 일반 웹게임처럼 게임하면 지고 끝나는게 아니라 개인의 돈을 지불 하기 때문에 코드를 좀 더 정교하게 짜고 배포해야 다른 해커로부터 위험을 방지 할 수가 있다. 보안이 중요시 되는 값들을 잘 관리하여 배포하고 그렇다고 많은 데이터를 스마트 컨트랙트에 담게 되면 그만큼 가스 소비가 크기 때문에 코드를 최적화 하는 것도 잊지 말아야 한다. 이 게임은 오직 방장만이 payout을 실행하여 금액을 배분하는 구조 이지만, 만약 방장이 악의적인 마음을 가지고 참여자의 값을 확인하고 본인이 불리하면 실행하지 않게 되면 이 컨트랙트 안에 있는 돈은 영원히 묵히게 되므로 방장만 실행하는 것이 아니라 참여자가 결과를 확인하는 방법도 시도해볼만 하다. 또한 참여자의 값도 해시화 하여 방장도 확인 못하게 하면 굳이 마지막 참여자가 결과를 확인 안하더라도 방장도 궁금해서 확인하지 않을까 한다. 다음에 이런 비슷한 게임이나 다른 것을 만들때는 이부분을 생각하여 더 나은 스마트 컨트랙트를 만들어 봐야겠다.
