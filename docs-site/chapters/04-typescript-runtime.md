# 04. TypeScript 런타임

COCOS 4는 C++ 기반 런타임을 중요하게 다루지만, 사용자 개발 경험은 TypeScript API를 통해 시작됩니다. `cocos/`와 `exports/`를 함께 읽어야 실제 사용자가 만지는 표면과 내부 구현의 연결을 이해할 수 있습니다.

## 읽어야 할 경로

- `exports/`: public entrypoint.
- `cocos/core`: math, event, platform, data, utils 같은 기반 모듈.
- `cocos/scene-graph`: Node와 Component 구조.
- `cocos/2d`, `cocos/3d`, `cocos/ui`: 게임 객체와 표현 계층.
- `cocos/game`: 런타임 lifecycle.

## API 경계 읽기

먼저 `exports/base.ts`처럼 작은 entrypoint를 읽고, 어떤 내부 모듈이 export되는지 확인합니다. 그 다음 `exports/ui.ts`, `exports/2d.ts`, `exports/physics-2d-framework.ts`처럼 기능 중심 파일로 확장합니다.

좋은 질문은 “내가 게임 코드에서 import하는 이름이 내부적으로 어느 디렉터리에 닿는가?”입니다. 이 질문을 따라가면 public API, 내부 framework, backend 구현을 분리해서 볼 수 있습니다.

## TypeScript와 Native의 역할 분담

README는 사용자 수준 API가 TypeScript로 제공된다고 설명합니다. 동시에 저수준 인프라, 네이티브 플랫폼 적응, 렌더러, 씬 관리는 C++에 많은 책임이 있습니다. 따라서 TypeScript 파일만 읽으면 전체 성능 구조를 놓치고, C++만 읽으면 사용자 경험을 놓칩니다.

## 확인 실습

1. `exports/ui.ts`를 엽니다.
2. 연결된 `cocos/ui` 모듈을 찾습니다.
3. UI 컴포넌트가 scene graph와 어떻게 연결되는지 추적합니다.
4. native 의존이 생기는 지점을 기록합니다.

## AI 제작과의 연결

게임 제작 에이전트가 대사, 배경, 오디오, 이펙트를 조작하려면 결국 TypeScript API 또는 그 위에 만들어진 도구를 호출해야 합니다. 이때 중요한 것은 “도구가 성공했다고 말하는 것”이 아니라, 실제 런타임 상태와 파일 상태가 바뀌었는지 확인하는 것입니다.
