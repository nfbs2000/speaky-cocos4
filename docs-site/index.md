---
layout: home

hero:
  name: Speaky COCOS 4 연구 노트
  text: 공개 엔진 포크를 읽고, 실제 게임 제작 경험으로 검증하는 한국어 가이드
  tagline: COCOS 4의 구조, 최근 alpha 변화, CLI/Editor 분리 방향, AI 제작 워크플로우를 챕터형 문서로 정리합니다.
  actions:
    - theme: brand
      text: 학습 로드맵 보기
      link: /chapters/00-roadmap
    - theme: alt
      text: 최근 alpha 노트
      link: /chapters/17-recent-alpha-notes
    - theme: alt
      text: GitHub 저장소
      link: https://github.com/nfbs2000/speaky-cocos4

features:
  - title: 엔진 소스 기준
    details: README, package scripts, cocos/native/exports 구조, 최근 커밋 기록을 기준으로 설명합니다.
  - title: 강의 가능한 흐름
    details: 개념 설명에서 끝내지 않고 확인 경로, 실험 과제, 질문 목록을 함께 둡니다.
  - title: 게임 제작 경험 반영
    details: 배경, 대사, 오디오, 프리뷰, 에이전트 도구화 경험을 COCOS 4 학습 주제로 연결합니다.
---

<script setup>
import { withBase } from 'vitepress';
</script>

<img class="engine-map" :src="withBase('/engine-map.svg')" alt="COCOS 4 학습 지도">

## 이 사이트의 목적

이 문서는 COCOS 4를 단순히 “엔진이 크다”는 감상으로 소비하지 않고, 실제 소스 구조와 최근 변화, 그리고 게임 제작 자동화 경험을 연결해서 공부하기 위한 공개 노트입니다. 원본 COCOS 4는 엔진과 에디터의 결합을 분리하고, 핵심 기능을 CLI와 엔진 레이어로 옮기려는 방향을 가지고 있습니다. 이 포크에서는 그 방향을 한국어로 풀어 읽고, 강의나 실습으로 재사용할 수 있게 정리합니다.

핵심 규칙은 세 가지입니다.

- 소스에서 확인되지 않은 내용은 추측으로 표시합니다.
- 빌드, 실행, 프리뷰, 렌더링, 에셋 로딩은 로그와 결과로 확인합니다.
- 실패를 숨기지 않고, 실패가 발생한 위치와 다음 확인 방법을 문서에 남깁니다.

## 먼저 읽을 장

<div class="chapter-grid">
  <a class="chapter-card" href="./chapters/01-cocos4-direction">COCOS 4의 방향<br><small>엔진/에디터 분리와 CLI화가 왜 중요한지 읽습니다.</small></a>
  <a class="chapter-card" href="./chapters/02-repo-map">저장소 지도<br><small>cocos, native, exports, scripts가 어떤 역할인지 봅니다.</small></a>
  <a class="chapter-card" href="./chapters/17-recent-alpha-notes">최근 alpha 노트<br><small>alpha.16부터 alpha.24까지 눈에 띄는 변화를 정리합니다.</small></a>
  <a class="chapter-card" href="./chapters/16-ai-game-dev-case-study">AI 게임 개발 사례<br><small>게임 제작 에이전트 경험을 엔진 학습 과제로 연결합니다.</small></a>
</div>

## 현재 확인한 저장소 기준

이 사이트는 `v4.0.0` 브랜치의 `4.0.0-alpha.24` 상태를 기준으로 작성했습니다. 루트 `package.json`은 엔진 버전을 `4.0.0-alpha.24`로 선언하고, `npm run build`, `npm run build:cli`, `npm run build:adapter`, `npm run build:declaration` 같은 빌드 스크립트를 제공합니다. 최근 커밋에는 Custom Pipeline, 2D Physics, 2D Mask, asset-manager/cache-manager 재구성, codegen 관련 변화가 포함되어 있습니다.

## 공개 페이지 운영 방식

문서 사이트는 루트 엔진 패키지와 분리된 `docs-site/` 패키지로 관리합니다. GitHub Pages 배포는 `.github/workflows/pages.yml`에서 수행하며, `docs-site`만 설치하고 빌드합니다. 이렇게 하면 엔진 본체의 무거운 postinstall/build 흐름과 공개 문서 배포가 서로 방해하지 않습니다.

로컬에서 문서를 확인하려면:

```bash
cd docs-site
npm install
npm run docs:dev
```

정적 빌드 검증은:

```bash
npm --prefix docs-site run docs:build
```
