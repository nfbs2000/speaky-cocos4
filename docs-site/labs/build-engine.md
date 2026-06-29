# 실습: 엔진 빌드

이 실습은 COCOS 4 엔진 빌드 흐름을 확인하는 최소 절차입니다. 문서 사이트 빌드와 엔진 빌드는 분리되어 있으므로 목적에 맞게 명령을 선택합니다.

## 문서 사이트 빌드

```bash
npm --prefix docs-site install
npm --prefix docs-site run docs:build
```

성공하면 `docs-site/.vitepress/dist`가 생성됩니다. 이 산출물은 GitHub Pages workflow가 업로드합니다.

## 엔진 빌드

엔진 빌드는 더 무겁습니다.

```bash
npm install
npm run build
```

루트 `postinstall`이 여러 빌드 단계를 실행하므로 시간이 걸릴 수 있습니다.

## 실패 기록 양식

실패하면 다음을 기록합니다.

- 실행한 명령.
- Node 버전.
- OS와 shell.
- 첫 번째 오류 로그.
- 마지막 오류 로그.
- 생성된 산출물 여부.
- 다시 실행했을 때 재현되는지.

## 통과 기준

이 실습의 통과 기준은 “명령이 0으로 끝남”만이 아닙니다. 어떤 산출물이 생겼고, 다음 단계에서 그 산출물이 실제로 사용되는지까지 확인해야 합니다.
