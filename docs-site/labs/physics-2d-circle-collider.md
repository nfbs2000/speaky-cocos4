# 실습: 2D Circle Collider 좌표 확인

최근 커밋 `26883ba6f4`는 2D circle collider의 world position 문제를 수정합니다. 이 실습은 물리 collider와 scene transform의 관계를 읽기 위한 출발점입니다.

## 명령

```bash
git show --stat 26883ba6f4
git show 26883ba6f4
```

## 확인할 것

- circle collider center가 local 좌표인지 world 좌표인지.
- Node transform이 collider 위치에 반영되는 시점.
- Box2D backend와 framework 계층의 책임 분리.
- test 또는 debug draw가 수정되었는지.

## 실험 아이디어

작은 scene에서 원형 collider를 가진 sprite를 만들고, parent node를 이동/회전/scale한 뒤 충돌 위치가 화면과 맞는지 확인합니다.

## 실패를 기록하는 법

물리 실험은 “눈으로 비슷해 보인다”로 끝내면 안 됩니다. 좌표값, physics world 상태, debug draw 캡처를 함께 기록합니다.
