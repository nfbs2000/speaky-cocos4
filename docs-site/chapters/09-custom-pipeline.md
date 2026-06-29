# 09. Custom Pipeline

최근 커밋에는 `fix(custom-pipeline) addLight() func, return byte offset error (#167)`가 포함되어 있습니다. 이 커밋은 Custom Pipeline이 단순 샘플 기능이 아니라 실제 엔진 내부에서 계속 다듬어지고 있음을 보여줍니다.

## 확인 경로

- `cocos/rendering/custom`
- `exports/custom-pipeline.ts`
- `exports/custom-pipeline-post-process.ts`
- 최근 커밋 `07f2c5fb43 fix(custom-pipeline) addLight() func, return byte offset error (#167)`

## Custom Pipeline이 필요한 이유

기본 forward/deferred pipeline만으로는 모든 게임의 연출 요구를 만족하기 어렵습니다. 특정 장면만 다른 lighting 계산을 쓰거나, 후처리 순서를 바꾸거나, 특수 pass를 추가하고 싶을 수 있습니다.

Custom Pipeline은 이런 요구를 엔진 레벨에서 다루기 위한 표면입니다.

## `addLight()` 이슈에서 배울 점

커밋 제목만으로 전체 원인을 단정할 수는 없습니다. 하지만 “return byte offset error”라는 표현은 pipeline 데이터 구조와 GPU buffer layout 사이의 오프셋 계산이 중요하다는 점을 보여줍니다.

실습에서는 해당 커밋을 `git show 07f2c5fb43`로 열고 다음을 확인합니다.

- 어떤 파일이 수정되었는가.
- `addLight()`가 어떤 데이터를 추가하는가.
- 반환값 또는 offset 계산이 어떤 downstream 코드에서 쓰이는가.

## 강의 실습

1. `exports/custom-pipeline.ts`에서 public API를 확인합니다.
2. `cocos/rendering/custom` 내부 구현을 추적합니다.
3. `addLight` 관련 커밋 diff를 읽습니다.
4. 렌더링 결과와 데이터 구조의 연결을 설명합니다.

## AI 제작과의 연결

AI가 “이 장면을 더 극적으로 만들어줘”라고 말할 때, 단순 이미지 교체만으로는 부족할 수 있습니다. 조명, post-process, transition, effect를 통제하려면 Custom Pipeline과 Material/Effect 이해가 필요합니다. 다만 자동화 도구는 먼저 작은 연출 단위부터 증명해야 합니다.
