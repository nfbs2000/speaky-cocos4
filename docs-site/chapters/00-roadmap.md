# 00. 전체 로드맵

이 로드맵은 COCOS 4를 “게임을 만들 때 어디를 고치면 무엇이 바뀌는가”라는 관점에서 읽기 위한 순서입니다. 공식 매뉴얼을 대체하는 문서가 아니라, 이 공개 포크의 소스를 직접 읽고 강의/실습으로 확장하기 위한 안내서입니다.

## 학습 목표

- COCOS 4가 엔진과 에디터를 분리하려는 이유를 설명할 수 있다.
- `cocos/`, `native/`, `exports/`, `scripts/`, `platforms/`의 책임을 구분할 수 있다.
- 렌더링, 에셋, 씬 그래프, 물리, 애니메이션, 바인딩을 각각 독립 주제로 읽을 수 있다.
- 최근 alpha 커밋이 어떤 엔진 영역을 건드렸는지 추적할 수 있다.
- AI 게임 제작 워크플로우를 엔진의 CLI/런타임 구조와 연결해서 설계할 수 있다.

## 권장 순서

1. `README.md`와 [COCOS 4의 방향](./01-cocos4-direction.md)을 읽어 엔진/에디터 분리의 배경을 잡습니다.
2. [저장소 지도](./02-repo-map.md)에서 실제 디렉터리 구조를 확인합니다.
3. [빌드 시스템](./03-build-system.md)과 [CLI/Editor 분리](./15-cli-editor-separation.md)를 읽고 개발 루프를 잡습니다.
4. Runtime 계층은 TypeScript, Native, Scene Graph 순서로 읽습니다.
5. Gameplay 계층은 Asset Manager, 2D/UI, Physics, Animation 순서로 읽습니다.
6. Rendering 계층은 GFX, Custom Pipeline, Material/Effect 순서로 읽습니다.
7. 마지막으로 [AI 게임 개발 사례](./16-ai-game-dev-case-study.md)를 통해 실제 제작 흐름에 연결합니다.

## 증거 우선 규칙

엔진 공부에서 가장 위험한 것은 “될 것 같다”를 “된다”로 착각하는 것입니다. 이 문서는 다음 기준으로 작성합니다.

- 소스 경로를 제시합니다.
- 실행 명령을 제시합니다.
- 확인해야 할 로그와 결과를 분리합니다.
- 실패하면 실패한 명령, 환경, 다음 확인 지점을 남깁니다.

## 강의 구성 예시

| 회차 | 주제 | 결과물 |
| --- | --- | --- |
| 1 | COCOS 4 방향과 저장소 구조 | 저장소 지도 설명 |
| 2 | 빌드와 CLI | 로컬 빌드 로그 |
| 3 | Scene Graph와 Component | 작은 런타임 예제 설계 |
| 4 | Asset Manager | 에셋 로딩 실패 추적 |
| 5 | Rendering/GFX | 파이프라인 흐름도 |
| 6 | 2D/UI/Physics | 2D 충돌/마스크 실험 |
| 7 | Native Binding | TS와 C++ 연결 구조 |
| 8 | AI 제작 워크플로우 | 로그 기반 제작 자동화 설계 |

## 다음에 추가할 내용

- 실제 COCOS 4 샘플 프로젝트를 붙인 화면 캡처.
- 주요 모듈별 최소 재현 테스트.
- Custom Pipeline을 수정하고 렌더 결과를 비교하는 실습 영상.
- AI 에이전트가 엔진 도구를 호출할 때 필요한 프로토콜 예시.
