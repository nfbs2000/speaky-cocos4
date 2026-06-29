# 02. 저장소 지도

COCOS 4 저장소는 크고 깊습니다. 처음부터 모든 파일을 읽으려고 하면 길을 잃기 쉽습니다. 먼저 최상위 디렉터리의 책임을 잡고, 필요한 주제에서만 깊게 들어갑니다.

## 주요 디렉터리

| 경로 | 역할 |
| --- | --- |
| `cocos/` | TypeScript 런타임, 사용자 API, 엔진 모듈의 스크립트 계층 |
| `native/` | C++ 런타임, 플랫폼, 렌더러, 네이티브 바인딩, 테스트 |
| `exports/` | 외부에서 import하는 엔진 entrypoint |
| `scripts/` | 빌드, declaration 생성, adapter 생성, 버전 검증 |
| `platforms/` | runtime/minigame/native 플랫폼별 어댑터 |
| `templates/` | 플랫폼별 프로젝트 템플릿 |
| `docs/` | 코딩 스타일, contribution, experimental/deprecated 문서 |
| `.github/workflows/` | upstream CI와 문서 배포 워크플로우 |

## `cocos/`에서 먼저 볼 모듈

- `cocos/scene-graph`: Node, Component, Prefab 같은 씬 구조.
- `cocos/asset/asset-manager`: 에셋 로딩과 캐시 흐름.
- `cocos/rendering`: forward, deferred, custom pipeline.
- `cocos/gfx`: WebGL, WebGL2, WebGPU 같은 graphics backend 추상화.
- `cocos/physics-2d`: Box2D, builtin, framework, spec 계층.
- `cocos/ui`: 2D UI 컴포넌트.
- `cocos/animation`: 애니메이션 그래프와 트랙.
- `cocos/native-binding`: TS와 native 사이의 연결 표면.

## `native/`에서 먼저 볼 모듈

`native/cocos`는 C++ 런타임의 중심입니다. 여기에는 `renderer`, `scene`, `platform`, `physics`, `bindings`, `audio`, `ui`, `xr` 같은 하위 영역이 있습니다. COCOS 4가 “고성능 엔진”이라고 말할 때, 실제로 많은 책임이 이 계층에 놓입니다.

## `exports/`의 의미

`exports/`는 엔진 내부 구조를 그대로 노출하지 않고, 사용자가 import할 수 있는 entrypoint를 정리합니다. 예를 들어 `exports/2d.ts`, `exports/ui.ts`, `exports/physics-2d-box2d.ts`, `exports/gfx-webgpu.ts` 같은 파일은 모듈 경계를 읽는 출발점입니다.

## 읽는 순서

1. `exports/*`에서 public API 이름을 확인합니다.
2. 해당 export가 `cocos/*`의 어느 모듈을 끌어오는지 따라갑니다.
3. native 의존이 있으면 `native/cocos/*`와 `native/cocos/bindings`를 확인합니다.
4. 빌드 결과나 declaration 생성이 필요한 경우 `scripts/build-*`를 확인합니다.

## 실습

`exports/physics-2d-box2d.ts`를 열고, 어떤 파일을 export하는지 추적합니다. 그 다음 `cocos/physics-2d/box2d`와 `cocos/physics-2d/framework`가 어떻게 나뉘는지 메모합니다. 목표는 “Box2D 구현”과 “엔진이 제공하는 공통 2D 물리 API”를 구분하는 것입니다.
