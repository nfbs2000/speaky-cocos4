# 용어집

## COCOS 4

엔진과 에디터를 더 명확히 분리하고, 오픈소스 엔진과 CLI 중심 도구화를 강화하려는 COCOS의 차세대 방향입니다.

## Cocos Creator

기존에는 엔진과 에디터를 함께 지칭하던 이름으로 쓰였습니다. COCOS 4 방향에서는 엔진 자체를 COCOS로 분리해 설명합니다.

## GFX

WebGL, WebGPU, Vulkan, Metal 같은 graphics API 차이를 추상화하는 렌더링 하위 계층입니다.

## Rendering Pipeline

씬을 어떤 pass와 순서로 그릴지 결정하는 렌더링 흐름입니다. Forward, Deferred, Custom Pipeline이 주요 학습 대상입니다.

## Asset Manager

에셋 로딩, 캐싱, dependency, release를 다루는 시스템입니다. AI 제작 자동화에서는 catalog registration과 runtime load 실패 처리가 특히 중요합니다.

## Scene Graph

Node와 Component 관계로 게임 세계를 표현하는 구조입니다.

## Native Binding

TypeScript/JavaScript API와 C++ runtime을 연결하는 계층입니다.

## CLI / Editor 분리

에디터에서 하던 핵심 작업을 명령형 도구와 엔진 기능으로 노출해 자동화와 재현성을 높이는 방향입니다.

## No-Fallback

실패를 기본 이미지나 가짜 성공으로 숨기지 않고, missing/loadFailed/error 상태로 노출하는 원칙입니다.

## Evidence Log

테스트 통과 여부만이 아니라 실제 명령, 모델 출력, 도구 호출, 파일 diff, runtime 로그, preview 상태를 함께 남기는 검증 기록입니다.
