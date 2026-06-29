# 14. Native Binding과 Codegen

COCOS 4는 TypeScript API와 C++ runtime이 함께 움직입니다. 이 둘을 연결하는 영역이 native binding과 codegen입니다. 최근 alpha 기록에도 codegen 관련 revert/fix가 보입니다.

## 확인 경로

- `cocos/native-binding`
- `native/cocos/bindings`
- `native/tools/bindings-generator`
- `native/tools/tojs`
- 최근 커밋 `fix codegen (#148)`과 그 revert

## 왜 중요한가

바인딩은 API 문서에는 잘 드러나지 않지만, 실제 플랫폼에서 기능이 동작하는지 결정합니다. TypeScript 쪽에는 함수가 있는데 native binding이 없거나 깨져 있으면, 웹에서는 되지만 native에서는 실패할 수 있습니다.

## Codegen 커밋 읽기

최근 로그에는 `fix codegen (#148)`와 `Revert "fix codegen (#148)" (#149)`가 이어집니다. 이것은 생성 코드 변경이 엔진 전체에 큰 영향을 줄 수 있음을 보여줍니다.

커밋을 읽을 때는 다음을 확인합니다.

- 어떤 generator 또는 template이 바뀌었는가.
- 생성 결과가 저장소에 포함되는가, 빌드 중 만들어지는가.
- revert 사유가 무엇인가.
- TypeScript declaration과 native binding 사이에 불일치가 생겼는가.

## 강의 실습

1. `native/tools/bindings-generator`의 README와 설정을 확인합니다.
2. `native/cocos/bindings`에서 실제 binding 파일을 찾습니다.
3. `exports/*` public API와 native binding 사이의 연결 후보를 찾습니다.
4. codegen 변경 커밋을 읽고 위험 요소를 정리합니다.

## AI 제작과의 연결

AI가 엔진 기능을 직접 확장하려면 단순 TypeScript patch를 넘어서 native binding까지 이해해야 할 수 있습니다. 특히 모바일/native target에서만 발생하는 문제는 이 계층을 피해갈 수 없습니다.
