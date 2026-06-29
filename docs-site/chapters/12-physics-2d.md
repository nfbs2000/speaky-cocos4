# 12. 2D Physics

2D 물리는 게임 연출에서 바로 체감되는 영역입니다. 최근 alpha 로그에는 circle collider world position 수정과 debug draw crash 수정이 포함되어 있습니다. 이런 커밋은 “물리 엔진은 작은 좌표 오류도 눈에 보이는 버그가 된다”는 점을 보여줍니다.

## 확인 경로

- `cocos/physics-2d/framework`
- `cocos/physics-2d/box2d`
- `cocos/physics-2d/box2d-jsb`
- `cocos/physics-2d/box2d-wasm`
- `cocos/physics-2d/builtin`
- `exports/physics-2d-framework.ts`
- `exports/physics-2d-box2d.ts`

## 최근 커밋에서 볼 점

- `fix(physics-2d): correct circle collider world position (#142)`
- `fix(physics-2d): avoid debug draw crash when toggling flags (#139)`

첫 번째는 collider의 world position 계산 문제입니다. 두 번째는 debug draw flag를 바꾸는 순간 crash가 날 수 있는 문제입니다. 둘 다 “개발 도구와 runtime 상태가 맞물리는 지점”입니다.

## AI 연출과의 연결

AI가 “sprite를 떨어뜨려서 통통 튀게 해줘”라고 요청받으면, 단순히 이미지를 화면에 추가하는 것으로 끝나지 않습니다.

- dynamic body를 생성한다.
- collider 모양을 정한다.
- gravity, restitution, density를 설정한다.
- floor boundary가 없으면 화면 밖으로 떨어질 수 있다.
- asset load 실패를 숨기면 물리 버그와 에셋 버그를 구분할 수 없다.

## 실습

1. circle collider가 local/world 좌표를 어떻게 계산하는지 확인합니다.
2. debug draw flag 변경 시 어떤 객체가 갱신되는지 확인합니다.
3. floor collider를 추가한 경우와 없는 경우를 비교합니다.
4. 에셋이 없을 때 물리 body만 존재하는 상태가 생기는지 확인합니다.

## 강의 포인트

2D 물리는 눈으로 확인하기 쉽지만, 테스트를 가짜로 만들기도 쉽습니다. 실제 검증은 좌표, 충돌 로그, physics world 상태, 렌더링 위치를 함께 봐야 합니다.
