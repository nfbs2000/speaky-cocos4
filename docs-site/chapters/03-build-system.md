# 03. 빌드 시스템

COCOS 4 루트 `package.json`은 엔진 개발 루프의 출발점입니다. 이 문서 사이트는 별도 `docs-site/` 패키지로 분리했지만, 엔진 자체를 공부하려면 루트 빌드 스크립트를 이해해야 합니다.

## 주요 스크립트

| 명령 | 역할 |
| --- | --- |
| `npm run build` | minified H5 빌드와 declaration 생성 |
| `npm run build:cli` | CLI용 minified 빌드와 declaration 생성 |
| `npm run build:dev` | debug info 생성 후 H5 source 빌드 |
| `npm run build:min` | debug info 생성 후 H5 minified 빌드 |
| `npm run build:adapter` | 플랫폼 adapter 생성 |
| `npm run build:declaration` | const와 TypeScript declaration 생성 |
| `npm run build:native-pack-tool` | native pack tool 설치/빌드 |
| `npm run test` | TypeScript type check와 Jest |

## 주의할 점

루트 `postinstall`은 `build:debug-infos`, `build:declaration`, `build:adapter`, `build:native-pack-tool`을 실행합니다. 즉 루트에서 무심코 `npm install`을 하면 문서 사이트 설치보다 훨씬 무거운 작업이 같이 실행됩니다.

그래서 GitHub Pages는 `docs-site/` 안에서만 `npm ci`를 실행하도록 구성했습니다. 공개 문서 배포와 엔진 빌드 검증은 서로 다른 파이프라인으로 두는 것이 안정적입니다.

## 빌드 산출물을 읽는 법

빌드 스크립트는 `scripts/` 아래에 있습니다. 이름만 보면 단순해 보이지만, 실제로는 엔진의 공개 API, platform adapter, native pack 도구와 연결됩니다.

- `scripts/build-const.js`: 엔진 compile-time constant 생성 흐름.
- `scripts/build-declarations.js`: TypeScript declaration 생성.
- `scripts/build-h5-source.js`: 개발용 H5 source 빌드.
- `scripts/build-h5-minified.js`: 배포용 H5 minified 빌드.
- `scripts/build-cli-minified.js`: CLI 런타임을 위한 빌드.

## 검증 명령

문서 사이트만 검증하려면:

```bash
npm --prefix docs-site run docs:build
```

엔진 빌드까지 확인하려면 환경과 시간이 더 필요합니다.

```bash
npm install
npm run build
```

## 강의 포인트

빌드 시스템은 단순한 배포 도구가 아니라 “엔진이 어떤 공개 표면을 약속하는가”를 보여줍니다. declaration 생성이 깨지면 API 경계가 깨진 것이고, adapter 생성이 깨지면 플랫폼 경계가 깨진 것입니다. COCOS 4를 제대로 이해하려면 빌드 실패를 숨기지 않고 원인별로 분류해야 합니다.
