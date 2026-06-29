# Upstream과 Fork

이 저장소는 공개 COCOS 4 포크입니다.

- `origin`: `https://github.com/nfbs2000/speaky-cocos4.git`
- `upstream`: `https://github.com/cocos/cocos4.git`
- 현재 브랜치: `v4.0.0`

## 운영 원칙

원본 엔진 소스와 학습 문서를 섞어 수정하지 않습니다. 공개 학습 사이트는 `docs-site/` 아래에 두고, GitHub Pages workflow도 문서 사이트만 빌드합니다.

## 왜 분리하는가

- upstream merge 시 문서 변경이 엔진 코드와 충돌할 가능성을 줄입니다.
- 엔진 빌드와 문서 배포를 분리합니다.
- 강의 자료를 빠르게 수정해도 엔진 동작에는 영향을 주지 않습니다.
- 문서에서 실험한 내용을 엔진 patch로 승격할 때 변경 범위를 명확히 볼 수 있습니다.

## 앞으로의 브랜치 전략

문서만 바꾸는 작업은 `docs-site/`에 한정합니다. 엔진 코드 실험은 별도 브랜치에서 진행하고, 실험 로그를 문서에 먼저 남긴 뒤 코드 변경을 검토합니다.
