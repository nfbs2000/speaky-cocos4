# 08. Rendering과 GFX

Rendering/GFX는 COCOS 4의 핵심 경쟁력입니다. README는 GFX 구현이 Vulkan, Metal, WebGL 같은 현대 graphics API에 적응하도록 설계되었다고 설명합니다. 저장소에서는 `cocos/gfx`, `cocos/rendering`, `native/cocos/renderer`를 함께 읽어야 합니다.

## 확인 경로

- `cocos/gfx/base`
- `cocos/gfx/webgl`
- `cocos/gfx/webgl2`
- `cocos/gfx/webgpu`
- `cocos/rendering/forward`
- `cocos/rendering/deferred`
- `cocos/rendering/custom`
- `native/cocos/renderer`

## GFX의 역할

GFX는 특정 graphics API를 직접 쓰는 게임 코드와, 플랫폼별 렌더링 backend 사이의 추상화 계층입니다. 게임 개발자는 material, mesh, light, camera 같은 상위 개념을 다루지만, 엔진은 이를 실제 GPU 명령으로 바꾸어야 합니다.

## Rendering Pipeline의 역할

Rendering Pipeline은 어떤 순서로 scene을 수집하고, light를 계산하고, pass를 구성하고, render target에 그릴지 결정합니다. Forward, Deferred, Custom Pipeline을 분리해서 봐야 합니다.

## WebGPU를 읽는 이유

`cocos/gfx/webgpu`가 있다는 것은 COCOS 4가 웹에서도 더 현대적인 graphics backend를 고려한다는 신호입니다. WebGL과 WebGPU의 차이는 단순 API 차이가 아니라 리소스 관리, command submission, pipeline state 구성 방식의 차이입니다.

## 검증 질문

1. 어떤 rendering feature가 GFX base에 있고, 어떤 feature가 backend별 구현에 있는가?
2. Forward와 Deferred pipeline은 pass 구성에서 어떻게 달라지는가?
3. Native renderer와 web backend의 책임 경계는 어디인가?

## 강의 포인트

렌더링은 눈으로 보이는 결과가 전부가 아닙니다. 같은 장면이 웹 프리뷰에서는 나오고 native에서는 깨질 수 있습니다. 그래서 렌더링 검증은 화면 캡처, backend 로그, pipeline 설정, material/effect compile 결과를 함께 봐야 합니다.
