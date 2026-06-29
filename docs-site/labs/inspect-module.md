# 실습: 모듈 하나 끝까지 읽기

COCOS 4는 한 번에 다 읽을 수 없습니다. 모듈 하나를 정하고 public API부터 내부 구현까지 좁게 추적하는 방식이 좋습니다.

## 추천 대상

- `exports/ui.ts`
- `exports/physics-2d-framework.ts`
- `exports/custom-pipeline.ts`
- `exports/gfx-webgpu.ts`
- `exports/audio.ts`

## 절차

1. `exports/<module>.ts`를 연다.
2. import/export되는 내부 경로를 적는다.
3. `cocos/<module>` 구현을 찾는다.
4. native 의존이 있으면 `native/cocos`에서 대응 지점을 찾는다.
5. 빌드나 declaration 생성에 영향을 주는지 확인한다.

## 기록 템플릿

| 항목 | 내용 |
| --- | --- |
| 모듈 | 예: `physics-2d-framework` |
| public entrypoint | 예: `exports/physics-2d-framework.ts` |
| 내부 구현 | 예: `cocos/physics-2d/framework` |
| backend | 예: Box2D, builtin |
| native 연결 | 확인 필요 |
| 테스트 후보 | 좌표, 충돌, debug draw |

## 목표

모듈 하나를 읽고 나면 “이 기능을 수정하려면 어디부터 봐야 하는가”에 답할 수 있어야 합니다.
