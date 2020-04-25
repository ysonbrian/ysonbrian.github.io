
# Ch. 1

자바스크립트는 기본적으로 세 가지로 나뉜다.

    - 코어 (ECMAScript)

    - 문서 객체 모델(Document Object Model)

    - 브라우저 객체 모델(Browser Object Model)

**ECMAScript**는 **ECMA-265**에서 정의한 언어이며 웹브라우저에 종속되지 않는다. 이것은 문법, 타입, 선언문, 키워드 예약어, 연산자, 객체를 구현한 언어일 뿐이다.  또한 **ECMAScript** 표준 준수를 통해 많은 개발자들이 이것에 기초해 새로운 언어를 구현할 수 있게 되었고 다음과 같다.

***무조건 만족***

- 모든 타입과 값, 객체, 프로퍼티, 함수, 프로그램 문법과 시맨틱을 **ECMA-262**에 설명한 그대로 구현

- 유니코드 문자 표준 지원

***제작자 재량 만족***

- **ECMA-265**에서 정의하지 않은 타입, 값, 객체, 프로퍼티, 함수를 추가할 수 있다.

- 내장된 정규 표현식을 확장 및 변형 가능

---

## DOM (Document Object Model)

     문서 객체 모델 ***(Document Object Model)*** 은 XML을 HTML에서 사용 가능하게 확장한 애플리케이션 프로그래밍 인터페이스 (API)  이다. HTML은 트리 구조를 가지고 있으며 이것은 DOM을 이용하여 문서의 콘텐츠와 구조를 자유롭게 수정할 수 있게 되었다. DOM은 문서 구조를 표현한 것이 첫 목표였고, 그 이후에 사용자 인터페이스 이벤트를 지원하면서 객체 인터페이스를 통해 CSS를 지원하게 되었다.

- **DOM Views** - 문서의 다양한 뷰 ( CSS 적용 전후를 추적하는 인터페이스)

- **DOM 이벤트** - 이벤트와 이벤트 처리

- **DOM 스타일** - CSS를 통해 요소의 스타일을 변경

- **DOM 이동과 범위** - 문서 트리를 조작하는 인터페이스

    그 외 크기 조절 가능한 벡터 그래픽, 수학 마크업 언어, 동기회 된 멀티미디어 확장 언어를 구현했다.

---

## BOM (Browser Object Model)

     브라우저 창에 접근하고 조작할 수 있게 하는 인터페이스이며 브라우저 창을 새로 띄우거나 창을 움직이거나 크기를 조절하고 상세 정보를 반환하고 쿠키를 지원한다. 쉽게 말해서 화면에 브라우저가 띄어지고  브라우저에서 조작할 수 있는 여러 가지들을 사용자가 조작하는 것이다.

---

# Ch. 2

## script 종류

```html

    <html lang="en">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ch 2</title>
        <script type="text/javascript" defer src="http://studyJavascript/ys.dev"></script> //지연
        <script type="text/javascript" async src="http://studyJavascript/ys.dev"></script> //비동기
    </head>
    <body>
        //content..
        <script type="text/javascript" src="http://studyJavascript/ys.dev"></script> //기본
    </body>
    </html>

```

- 기본적인 script 요소를 불러올 때 HTML에 써주어야 하는 코드이다. 기본은 body 최하단에 입력해야 HTML 페이지 전체를 파싱 한 후에 스크립트를 불러와야 페이지에 보여야 할 요소가 다 그려지고 스크립트가 사용된다. head 부분에 기본 스크립트를 넣지 않는 이유는 html은 단방향이기 때문에 첫 줄부터 차례대로 콘텐츠를 파싱 한다. 그런데 script를 만나는 순간 브라우저는 페이지 렌더링이 지연되여 시간 동안 브라우저는 텅 빈 화면만 존재한다. 따라서 body 최하단에 입력해야 페이지 전체를 파싱 한 후에 자바스크립트 코드를 실행하기 때문에 최하단에 입력하는 게 우선이다.

- defer 속성을 사용하면 html이 순차적으로 코드를 진행하다가 만나도 스크립트를 로드를 시켜놓고 페이지 전체를 파싱 한 후에 스크립트를 실행시킬 수 있다. 만약 스크립트 데이터가 크다면 사용하기 좋다. 하지만 불러와야 할 스크립트 파일이 많다면 스크립트 파일이 랜덤으로 실행되기 때문에 1개의 스크립트만 불러올 때 유용하다.

- async 속성은 defer와 마찬가지로 스크립트를 불러오는 동안 페이지를 파싱 하는 건 같지만 만약 스크립트 파일을 다 불러오면 언제든 스크립트를 부를 수 있는 속성이다. 따라서 사용하지 않는 편이 좋다.

### 인라인 코드와 외부 파일

기본적으로 외부 파일로 두는 것이 여러 이점이 있다.

· 관리하기 쉽다.  자바스크립트 코드를 한 번에 모아두면 다른 html 파일에서 사용하기 편하다.

· 캐싱이 빠르다. 서로 다른 html 파일에서 같은 자바스크립트를 사용한다면 한 번만 내려받으면 되므로 페이지                    를 불러오는 시간이 빨라진다.

· 안전하다. 인라인에 두면 여러 주석 편법을 써서 관리해야 하지만 외부 파일로 불러오면 그럴 필요가 없다.

## noscript

```html

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ch 2</title>
    </head>
    <body>
        //content..
        <noscript>
            <p>브라우저가 스크립트를 지원 하지 않아야 보이는 메시지 입니다.</p>
        </noscript>
    </body>
</html>

```

브라우저가 \<script> 요소를 지원 안하거나 지원이 꺼져 있을때 사용 한다. 스크립트가 활성화된 브라우저에서는 메시지가 페이지의 일부이긴 하지만 사용자에겐 절대 표시되지 않는다.
