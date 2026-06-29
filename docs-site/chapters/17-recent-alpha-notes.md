# 17. 최근 alpha 노트

이 장은 `v4.0.0` 브랜치의 최근 커밋을 읽기 위한 입구입니다. 커밋 제목만으로 모든 의미를 단정하지 않고, 어떤 엔진 영역을 봐야 하는지 표시합니다.

## 기준 커밋

현재 문서 작성 기준 HEAD는 `4.0.0-alpha.24` 태그가 붙은 `bump version to 4.0.0-alpha.24 (#175)`입니다.

## 눈에 띄는 변화

| 커밋 | 주제 | 읽을 영역 |
| --- | --- | --- |
| `07f2c5fb43` | Custom Pipeline `addLight()` byte offset 오류 수정 | `cocos/rendering/custom` |
| `aef31099d8` | cache-manager와 asset-manager 재구성 | `cocos/asset/asset-manager` |
| `26883ba6f4` | 2D circle collider world position 수정 | `cocos/physics-2d` |
| `055c70f8d2` | 2D debug draw flag toggle crash 방지 | `cocos/physics-2d` |
| `5c99570616` | rounded rect mask radius 지원 | `cocos/2d`, `cocos/ui`, `exports/mask.ts` |
| `7f258dac58` | codegen 수정 | `native/tools`, `native/cocos/bindings` |

## 읽는 방법

각 커밋은 다음 순서로 읽습니다.

```bash
git show --stat <commit>
git show <commit>
```

그 다음 변경 파일을 주제별로 분류합니다.

- Public API 변경인가?
- Runtime behavior 변경인가?
- Build/codegen 변경인가?
- Native-only 변경인가?
- 테스트 또는 리소스 변경인가?

## 알파 버전 읽기 주의

alpha 버전은 방향이 빠르게 바뀔 수 있습니다. 따라서 “최근 커밋에 있다”는 사실과 “장기 API로 고정됐다”는 사실은 다릅니다. 강의나 실습에서는 반드시 현재 태그와 커밋 해시를 함께 표시해야 합니다.

## 다음 조사 과제

- alpha.16부터 alpha.24까지 release note 형태로 재구성.
- Custom Pipeline 관련 커밋을 실제 샘플과 연결.
- Asset Manager 재구성 전후의 흐름 비교.
- Physics 2D 버그 수정이 실제 좌표 계산에 미치는 영향 시각화.
