# 13. Animation

Animation은 캐릭터, UI, 카메라, 이펙트를 시간 위에서 움직이는 시스템입니다. COCOS 4에서는 전통적인 animation clip뿐 아니라 marionette, embedded-player, tracks 같은 구조를 확인할 수 있습니다.

## 확인 경로

- `cocos/animation`
- `cocos/animation/core`
- `cocos/animation/tracks`
- `cocos/animation/marionette`
- `exports/animation.ts`
- `exports/skeletal-animation.ts`

## 읽는 관점

Animation은 세 층으로 나누어 읽습니다.

- 데이터: clip, track, curve.
- 평가: 시간에 따라 어떤 값을 계산하는가.
- 적용: 계산된 값이 Node, Component, Material 등에 어떻게 반영되는가.

## 게임 제작과의 연결

Visual Novel이나 narrative game에서도 animation은 중요합니다. 배경 전환, 캐릭터 등장, 대사창 움직임, 이펙트 overlay, 카메라 shake가 모두 animation 문제입니다.

AI가 장면을 만들 때 “좋아 보이게 해줘”라는 요청은 대부분 animation, transition, timing까지 포함합니다. 그러므로 자동화 도구는 단순히 asset을 넣는 것에서 끝나지 않고 timing과 preview 검증까지 다뤄야 합니다.

## 실습 질문

1. Animation clip은 어떤 track 구조를 가지는가?
2. 한 프레임에서 animation evaluation은 언제 실행되는가?
3. Animation이 material property나 UI property를 바꿀 수 있는가?
4. Timeline 기반 narrative 연출과 COCOS animation clip은 어떻게 연결할 수 있는가?
