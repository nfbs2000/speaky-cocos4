# 10. Material과 Effect

Material과 Effect는 화면에 보이는 물체가 어떤 방식으로 빛을 받고 그려지는지 결정합니다. COCOS 4 README는 effect format과 GLSL 300 기반 shader 변환, PBR, physical camera를 강조합니다.

## 확인 경로

- `cocos/render-scene`
- `cocos/rendering`
- `cocos/asset/assets`
- `native/cocos/renderer`
- effect 관련 리소스와 shader 처리 경로

## 핵심 개념

- Material: 어떤 effect와 property를 사용할지 정하는 렌더링 리소스.
- Effect: shader, pass, macro, technique 같은 렌더링 정의.
- PBR: 물리 기반 조명 모델.
- Pipeline: effect/material을 어느 pass에서 어떻게 사용할지 결정하는 흐름.

## 읽는 방법

Material/Effect는 파일 하나로 이해하기 어렵습니다. 에셋 정의, runtime 로딩, shader compile, pipeline pass, native renderer가 모두 얽혀 있습니다.

먼저 public API와 asset class를 찾고, 그 다음 rendering pipeline에서 material을 소비하는 지점을 봅니다. 마지막으로 native renderer나 web backend에서 실제 GPU 리소스로 바뀌는 지점을 확인합니다.

## 게임 제작과의 연결

AI가 생성한 이미지나 sprite만으로는 게임의 통일감이 보장되지 않습니다. 같은 캐릭터 기반 배경을 만들더라도 lighting, palette, material 느낌이 장면마다 어긋날 수 있습니다. Material/Effect를 이해하면 생성 에셋을 엔진 연출과 결합하는 방법을 더 정확히 설계할 수 있습니다.

## 검증 질문

1. Material property가 runtime에서 어느 객체로 저장되는가?
2. Effect compile 실패는 어디에 기록되는가?
3. Shader fallback이 있다면 사용자가 알 수 있는가?
4. WebGL/WebGPU/native backend에서 같은 material이 같은 결과를 보장하는가?
