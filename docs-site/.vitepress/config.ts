import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'ko-KR',
  title: 'Speaky COCOS 4 연구 노트',
  description: 'COCOS 4 공개 포크를 읽고, 게임 개발 경험으로 검증하며, 강의 가능한 형태로 정리한 한국어 가이드',
  base: '/speaky-cocos4/',
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'dark',
  head: [
    ['meta', { property: 'og:title', content: 'Speaky COCOS 4 연구 노트' }],
    ['meta', { property: 'og:description', content: 'COCOS 4 공개 포크를 읽고 검증하는 한국어 학습 사이트' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://nfbs2000.github.io/speaky-cocos4/' }],
  ],
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  themeConfig: {
    logo: '/engine-map.svg',
    nav: [
      { text: '시작', link: '/' },
      { text: '챕터', link: '/chapters/00-roadmap' },
      { text: '실습', link: '/labs/build-engine' },
      { text: '노트', link: '/notes/commit-reading-log' },
      { text: 'GitHub', link: 'https://github.com/nfbs2000/speaky-cocos4' },
    ],
    sidebar: [
      {
        text: '학습 로드맵',
        items: [
          { text: '00. 전체 로드맵', link: '/chapters/00-roadmap' },
          { text: '01. COCOS 4의 방향', link: '/chapters/01-cocos4-direction' },
          { text: '02. 저장소 지도', link: '/chapters/02-repo-map' },
          { text: '03. 빌드 시스템', link: '/chapters/03-build-system' },
        ],
      },
      {
        text: '엔진 구조',
        items: [
          { text: '04. TypeScript 런타임', link: '/chapters/04-typescript-runtime' },
          { text: '05. 네이티브 런타임', link: '/chapters/05-native-runtime' },
          { text: '06. Scene Graph', link: '/chapters/06-scene-graph' },
          { text: '07. Asset Manager', link: '/chapters/07-asset-manager' },
          { text: '08. Rendering과 GFX', link: '/chapters/08-rendering-gfx' },
          { text: '09. Custom Pipeline', link: '/chapters/09-custom-pipeline' },
          { text: '10. Material과 Effect', link: '/chapters/10-material-effect' },
          { text: '11. 2D와 UI', link: '/chapters/11-2d-ui' },
          { text: '12. 2D Physics', link: '/chapters/12-physics-2d' },
          { text: '13. Animation', link: '/chapters/13-animation' },
          { text: '14. Native Binding과 Codegen', link: '/chapters/14-native-binding-codegen' },
          { text: '15. CLI와 Editor 분리', link: '/chapters/15-cli-editor-separation' },
        ],
      },
      {
        text: '적용 사례와 알파 기록',
        items: [
          { text: '16. AI 게임 개발 사례', link: '/chapters/16-ai-game-dev-case-study' },
          { text: '17. 최근 alpha 노트', link: '/chapters/17-recent-alpha-notes' },
        ],
      },
      {
        text: '실습',
        items: [
          { text: '엔진 빌드', link: '/labs/build-engine' },
          { text: '모듈 읽기', link: '/labs/inspect-module' },
          { text: 'Custom Pipeline addLight', link: '/labs/custom-pipeline-addlight' },
          { text: '2D Circle Collider', link: '/labs/physics-2d-circle-collider' },
          { text: 'Rounded Rect Mask', link: '/labs/rounded-rect-mask' },
        ],
      },
      {
        text: '참고 노트',
        items: [
          { text: '커밋 읽기 로그', link: '/notes/commit-reading-log' },
          { text: 'Upstream과 Fork', link: '/notes/upstream-vs-fork' },
          { text: '용어집', link: '/notes/glossary' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nfbs2000/speaky-cocos4' },
    ],
    search: {
      provider: 'local',
    },
    footer: {
      message: 'COCOS 4 공개 포크를 읽고 검증하는 한국어 학습 사이트입니다.',
      copyright: 'Released under the same repository license unless otherwise noted.',
    },
  },
});
