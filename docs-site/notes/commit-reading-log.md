# 커밋 읽기 로그

이 노트는 최근 COCOS 4 alpha 커밋을 어떤 순서로 읽을지 정리합니다.

## 우선순위

1. `07f2c5fb43` Custom Pipeline `addLight()` 수정.
2. `aef31099d8` cache-manager와 asset-manager 재구성.
3. `26883ba6f4` 2D circle collider world position 수정.
4. `055c70f8d2` 2D debug draw crash 수정.
5. `5c99570616` rounded rect mask radius 지원.
6. `7f258dac58` codegen 수정과 revert 흐름.

## 읽기 양식

| 항목 | 기록 |
| --- | --- |
| 커밋 | 해시와 제목 |
| 영역 | rendering, asset, physics, ui, codegen 등 |
| 변경 파일 | `git show --stat` 기준 |
| public API 영향 | 있음/없음/확인 필요 |
| runtime 영향 | 있음/없음/확인 필요 |
| 테스트 영향 | 있음/없음/확인 필요 |
| 강의 소재 | 설명 가능한 핵심 포인트 |

## 원칙

커밋 제목만 보고 결론을 내리지 않습니다. 반드시 diff와 수정 파일을 확인한 뒤 기록합니다. 확인하지 못한 항목은 “미확인”으로 남깁니다.
