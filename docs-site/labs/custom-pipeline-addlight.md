# 실습: Custom Pipeline `addLight()` 커밋 읽기

최근 커밋 `07f2c5fb43`은 Custom Pipeline의 `addLight()` byte offset 문제를 수정합니다. 이 실습은 커밋을 읽는 법을 훈련합니다.

## 명령

```bash
git show --stat 07f2c5fb43
git show 07f2c5fb43
```

## 확인할 것

- 수정된 파일 목록.
- `addLight()`가 있는 클래스 또는 함수.
- byte offset이 계산되는 자료구조.
- 반환값을 사용하는 호출자.
- 테스트 또는 샘플 변경 여부.

## 질문

1. offset 오류가 화면에는 어떤 증상으로 나타날 수 있는가?
2. 이 문제가 custom pipeline에만 영향을 주는가?
3. API 표면은 그대로인데 내부 데이터 구조만 바뀐 것인가?

## 결과물

커밋을 10줄 이하로 요약하고, 실제 수정 경로를 함께 기록합니다. “렌더링 버그 수정”처럼 넓은 말로 끝내지 않습니다.
