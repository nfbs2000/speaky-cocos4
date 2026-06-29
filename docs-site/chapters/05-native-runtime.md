# 05. 네이티브 런타임

`native/`는 COCOS 4의 성능과 플랫폼 이식성을 이해하는 핵심 경로입니다. C++ 런타임, 플랫폼 추상화, 렌더러, 바인딩, 네이티브 테스트가 이곳에 모여 있습니다.

## 주요 경로

| 경로 | 관심사 |
| --- | --- |
| `native/cocos/renderer` | 네이티브 렌더링 구현 |
| `native/cocos/platform` | OS와 디바이스별 platform layer |
| `native/cocos/bindings` | JS/TS와 C++ 연결 |
| `native/cocos/scene` | 네이티브 scene 표현 |
| `native/cocos/physics` | 3D 물리 backend |
| `native/cocos/audio` | 오디오 runtime |
| `native/tools` | codegen, simulator, generator 도구 |
| `native/tests` | 네이티브 계층 테스트 |

## 왜 native를 봐야 하는가

웹 프리뷰에서는 TypeScript와 WebGL 계층만 보일 수 있습니다. 하지만 실제 상용 게임은 모바일, 데스크톱, 콘솔, XR 같은 다양한 환경을 봐야 합니다. COCOS 4가 cross-platform을 말할 때, native layer는 선택 과목이 아닙니다.

## 바인딩 관점

TypeScript API가 C++ 기능을 쓰려면 바인딩이 필요합니다. 이 연결이 깨지면 API는 존재해도 실제 플랫폼에서 동작하지 않습니다. 그래서 codegen, generated binding, native test를 함께 확인해야 합니다.

## 실습 질문

1. `native/cocos/platform`에서 Android, Apple, Windows 계층은 어떻게 나뉘는가?
2. `native/cocos/bindings`는 어떤 JavaScript 엔진 또는 wrapper와 연결되는가?
3. `native/tools/bindings-generator`는 어떤 산출물을 만들기 위한 도구인가?

## 강의 포인트

네이티브 런타임은 “어려운 C++ 영역”으로 밀어두면 안 됩니다. 게임에서 프레임 드랍, 오디오 지연, 렌더링 차이, 플랫폼별 입력 문제를 만나면 대부분 이 경계까지 내려와야 합니다.
