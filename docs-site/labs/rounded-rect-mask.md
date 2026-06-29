# 실습: Rounded Rect Mask

최근 커밋 `5c99570616`은 2D rounded rect mask radius를 지원합니다. UI 품질과 직접 연결되는 기능입니다.

## 명령

```bash
git show --stat 5c99570616
git show 5c99570616
```

## 확인할 것

- public property가 추가되었는가.
- mask assembler 또는 renderer가 수정되었는가.
- radius 값이 음수, 0, 큰 값일 때 어떻게 처리되는가.
- WebGL/WebGPU/native 결과가 일관되는가.

## 실험 아이디어

대화창, 버튼, 캐릭터 프로필 패널에 rounded rect mask를 적용하고 다양한 해상도에서 clipping이 깨지지 않는지 확인합니다.

## 강의 포인트

작은 UI 기능도 엔진 내부에서는 컴포넌트, 렌더링, material, batching과 연결될 수 있습니다. 기능 하나를 끝까지 추적하는 연습에 적합합니다.
