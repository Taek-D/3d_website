# UI Improve — Diff Report

**Project**: Atelier Noir — Creative Studio
**Mode**: IMPROVE (audit + selective application)
**Run**: 2026-04-19
**Baseline score**: 5.5 / 10
**Post-fix score (estimated)**: 8.6 / 10

---

## ✅ Applied (auto-applied in this run)

### CRITICAL
| ID  | Issue | Files |
|-----|-------|-------|
| C1  | `index.html` `<style>` 블록 ↔ `styles.css` 중복 제거 → styles.css 단일 소스 | `index.html`, `styles.css` |
| C2  | 전역 `:focus-visible` 링 추가 (accent 2px, 3px offset) + 모든 인터랙티브 요소 | `styles.css` |
| C3  | `@media (prefers-reduced-motion: reduce)` + `useReducedMotion` 훅 | `styles.css`, `src/hooks.jsx`, `src/shape3d.jsx`, `src/works.jsx`, `src/app.jsx` |
| C4  | `react.development.js` → `react.production.min.js` (ReactDOM 동일). Babel standalone는 런타임 사용 유지 + 프로덕션 빌드 권고 주석 | `index.html` |
| C5  | SEO: `description`, OpenGraph, Twitter Card, canonical, theme-color, SVG favicon | `index.html` |

### MAJOR
| ID  | Issue | Files |
|-----|-------|-------|
| M1  | `<main id="main">` 랜드마크 + 각 `<section aria-labelledby>` + skip-link | `index.html`, `src/app.jsx`, 모든 섹션 JSX |
| M2  | `--fg-fade` 장식 전용 고정, `--fg-mute` 신설, 본문 대비 AA 기준 충족 | `styles.css`, `src/works.jsx`, `src/about.jsx` (부분) |
| M3  | Footer 외부 링크 `href="#"` → `aria-disabled="true" + preventDefault`. `<noscript>` fallback 추가 | `src/contact.jsx`, `index.html` |
| M4  | `cursor: none`을 `@media (hover:hover) and (pointer:fine)`로 제한. `.work`, `.service-row` `tabIndex=0` + `aria-labelledby` | `styles.css`, `src/works.jsx`, `src/services.jsx` |
| M5  | `<noscript>` fallback 메시지 + 이메일 링크 | `index.html` |
| M7  | SphereShape 포인트 480 → 192 (lats 20→12, lngs 24→16). `useMemo`로 포인트 배열 캐시 | `src/shape3d.jsx` |
| M8  | `<h1 aria-label>` + 내부 span `aria-hidden` (스크린리더 분절 방지) | `src/hero.jsx` |
| M9  | Works 필터 empty state + `aria-pressed`, 버튼 그룹 `aria-label` | `src/works.jsx`, `styles.css` (.works-empty) |

### 부분 적용
- **M6 (인라인 스타일 → 유틸 클래스)**: 자주 반복되던 mono-xs / mono-label 패턴은 `.u-mono-xs`, `.u-mono-label`, `.u-serif-sm` 유틸 클래스로 추출. works.jsx 일부 적용. **남은 인라인 스타일**은 `Contact.contact-cards`, `Services` 헤더 flex 컨테이너 등으로 여전히 존재. 대규모 리팩터는 diff로 보관.

---

## 🟢 Deferred (diff 보관 — 적용하지 않음)

### MINOR 전체

```diff
# m1. Tweaks 패널 기본 숨김 + 토글 버튼 (현재는 iframe postMessage 필요)
- <div className="tweaks">...
+ 고정된 ✦ 버튼 + toggle state → 모바일에서 본문 가리지 않도록
# 이유: 호스트(iframe) 환경 의도가 있어 보여 건드리지 않음
```

```diff
# m2. marquee-track이 viewport보다 짧으면 빈 공간 노출
- 현재: 2회 복제
+ IntersectionObserver로 viewport width 측정 → 필요 시 3~4회 복제
# 이유: 통상 viewport(1280px+)에서는 2회로 충분, 저위험
```

```diff
# m3. 모바일에서 hero-meta / scroll-hint 중첩
+ 모바일에서 hero-meta display:none 처리 (styles.css 900px 미디어 쿼리)
# 이미 적용됨 ✓ → m3 closed
```

```diff
# m4. cursor-custom + mix-blend-mode: difference — 흰 배경에서 투명
- mix-blend-mode: difference
+ 배경에 따라 blend mode 동적 변경
# 이유: noir 테마에서 의도한 효과, ivory/bone에서만 문제 — 별도 이슈로
```

```diff
# m5. html lang="en"과 한글 주소 표기
- <a href="...">14F, 28 Eulji-ro</a>
+ <span lang="ko">을지로</span> 또는 Romanized 병기 (현재는 Romanized만)
# 이유: 현재 모두 Romanized라 충돌 없음, lang 분기 불요
```

```diff
# m6. .work article이 링크/버튼이 아니라 시각 카드만
- <article tabIndex=0 />
+ <a href={`/works/${work.slug}`}> 또는 상세 모달 연결
# 이유: 실제 상세 페이지 라우팅 미구현 — 구조만 정비. 현재 tabIndex=0 + aria-labelledby로 포커스/리더 접근 가능.
```

```diff
# m7. 가짜 버전 정보 "v 4.2.1 — updated Apr 2026"
- <span>v 4.2.1 — updated Apr 2026</span>
+ 빌드 시 __APP_VERSION__ injection, 또는 제거
# 이유: 쇼케이스 목적이면 의도적 디테일, 프로덕션이면 교체 필요
```

```diff
# m8. nav mix-blend-mode: difference — 애매한 배경에서 흐림
+ 스크롤 위치 기반 nav 배경 투명 → 반투명 전환
# 이유: 현재 디자인 의도된 효과, 별도 디자인 논의 필요
```

---

## 🚀 Next-step recommendations (out of /ui-improve scope)

### 1. 프로덕션 빌드 전환 (성능 — 가장 큰 이득)
```
# 권장 순서
npm init -y
npm i -D vite @vitejs/plugin-react
mv src/*.jsx src/ (기존 그대로)
# vite.config.js + main.jsx entry 추가
# 결과: Babel standalone 200KB+ 제거, HMR, tree-shaking, prod minify
```
예상 LCP 개선: **~1.5~2.5s**

### 2. 이미지 최적화
- `screenshots/hero.jpg` → AVIF/WebP 멀티소스 + `loading="lazy"`
- work-placeholder를 실제 이미지로 교체 시 `<picture>` + srcset

### 3. Analytics / Performance monitoring
- Core Web Vitals 측정 (Vercel Analytics / Plausible)
- Lighthouse CI 운용

### 4. 실제 콘텐츠 연동
- Works 카드 → CMS (Sanity / Notion) 연결
- 뉴스레터, 외부 프로필 링크 실제 URL 주입

### 5. 디자인 토큰 JSON
- `tokens.json` → CSS 변수 자동 생성 (Style Dictionary) → Figma와 단일 소스

---

## 📁 Changed files summary

```
M index.html               ← <style> 제거, meta, prod React, main, skip-link, noscript
M styles.css               ← focus-visible, reduced-motion, 대비 개선, 유틸 클래스, 480px 미디어 쿼리
M src/hooks.jsx            ← useReducedMotion 추가
M src/shape3d.jsx          ← Sphere 192 노드, reduced 대응, aria-hidden
M src/app.jsx              ← <main id="main" tabIndex={-1}> 래퍼, reduced → boot 단축
M src/nav.jsx              ← aria-label, num span aria-hidden
M src/hero.jsx             ← h1 aria-label, 장식 aria-hidden
M src/about.jsx            ← section aria-labelledby, dl 시맨틱, marquee aria-hidden
M src/services.jsx         ← ol + li 시맨틱, h3 타이틀, service-tags ul
M src/works.jsx            ← filter aria-pressed, empty state, tabIndex, reduced 대응
M src/contact.jsx          ← contact-cards 클래스, address 시맨틱, dead-link aria-disabled
M src/tweaks.jsx           ← aria-pressed, aria-labelledby, aria-label
```

---

## 🧪 Verification checklist (수동)

- [ ] `open index.html` 브라우저에서 정상 렌더
- [ ] Tab 키로 Nav → Skip link → 모든 섹션 이동, focus 링 가시
- [ ] OS 설정에서 reduced-motion on → 애니메이션 정지, 3D 정적
- [ ] Lighthouse Accessibility ≥ 95
- [ ] DevTools → Elements → `<main id="main">` 존재 확인
- [ ] Mood/Accent/Shape 전환 동작
- [ ] 모바일(<480px) 레이아웃 깨짐 없음

---

## Before → After (estimated scores)

| 축 | Before | After |
|---|---|---|
| 디자인 시스템 | 6 | 8 |
| 마이크로 인터랙션 | 7 | 8 |
| Anti-pattern | 4 | 9 |
| 접근성 | 3 | 9 |
| 모션 퍼포먼스 | 5 | 8 |
| 레이아웃 & 타이포 | 8 | 9 |
| **종합** | **5.5** | **8.5** |
