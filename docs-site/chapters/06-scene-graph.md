# 06. Scene Graph

Scene Graph는 게임 세계를 구성하는 기본 뼈대입니다. COCOS 4에서 Node, Component, Prefab, Transform, Event 흐름을 이해하지 못하면 렌더링이나 물리, UI도 제대로 연결하기 어렵습니다.

## 확인 경로

- `cocos/scene-graph`
- `cocos/scene-graph/prefab`
- `cocos/core/event`
- `cocos/core/math`
- `cocos/2d/framework`
- `cocos/3d/framework`

## 읽는 관점

Scene Graph를 읽을 때는 “데이터 구조”와 “런타임 업데이트”를 분리합니다.

- 데이터 구조: Node가 어떤 상태를 가지고 있고, 부모/자식 관계가 어떻게 저장되는가.
- 런타임 업데이트: Component lifecycle이 언제 호출되고, transform 변경이 어디로 전파되는가.
- 직렬화: Prefab과 scene 데이터가 어떤 형태로 저장되고 복원되는가.

## 게임 제작 에이전트와의 연결

AI가 “이 장면에 배경을 추가해줘”라고 했을 때 실제로 해야 하는 일은 여러 단계입니다.

1. 에셋이 존재하는지 확인한다.
2. 카탈로그나 리소스 테이블에 등록한다.
3. Scene 또는 timeline 데이터에 참조를 넣는다.
4. 프리뷰와 실제 플레이어에서 같은 리소스가 로드되는지 확인한다.
5. 실패하면 fallback 이미지를 넣지 않고 실패 상태를 노출한다.

이 흐름은 결국 Scene Graph와 Asset Manager의 결합 문제입니다.

## 실습

작은 노드 하나를 추가한다고 가정하고 다음을 추적합니다.

- 노드가 생성되는 API.
- 컴포넌트가 붙는 API.
- transform이 갱신되는 위치.
- 렌더링 시스템이 이 노드를 언제 읽는지.

## 주의

에디터 화면에서 보이는 상태와 실제 런타임 상태가 다를 수 있습니다. 그래서 장면 조작을 검증할 때는 에디터 selection, 저장된 scene/story 파일, 빌드된 import 파일, 프리뷰 runtime 로그를 함께 봐야 합니다.
