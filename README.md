# Travel Mate

### 여행 계획을 세울 때, 각 장소 간 거리를 일일이 확인해야 하는 번거로움이 존재했습니다. 이러한 문제를 해결하고자 지도 기반의 Travel Mate를 개발했습니다

<img src="public/travel-mate-logo.png">

## Stacks

### Environment

<div style="display: flex">
  <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white">
</div>

### Config

<img src="https://img.shields.io/badge/Npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

### Development

<div style="display: flex">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=Recoil&logoColor=white">
  <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
</div>

## Pages

### 메인 화면 (포스팅 화면)

### 글쓰기 화면

### 여행 일정 화면

### 여행 일정 상세페이지

## What I Did

- [x] Google Places API 기반 장소 검색
- [x] Google Map API 기반 여행 코스 계획
- [x] Drag & Drop으로 여행 코스 수정
- [x] Google OAuth 2.0 기반 Login & Logout
- [x] UX 향상을 위한 맞춤형 Skeleton UI
- [x] Category 별 포스팅 조회 및 무한 스크롤
- [x] Editer 연동 및 포스팅 CRUD
- [x] Kakao 공유 API 기반 공유하기

## Refactoring

- [ ] UI 로직과 비즈니스 로직 분리
- [ ] 추상화 레벨 통일성을 위해 컴포넌트 분리
- [ ] React Query로 마이그레이션
- [ ] 관심사가 비슷한 기능을 모아서 커스텀 훅 구현
- [ ] 렌더링 최적화

## Will Update

- [ ] Google Direction API 기반 이동 시간 계산
- [ ] Vue 네비게이션 가드 같은 라우터 가드 구현하기

## Trouble Shooting
Google Map에 Marker를 렌더링하는 과정에서, Network와 Console 창에서는 에러가 발생하지 않지만, 초기 지도 렌더
링 시 Marker가 표시되지 않는 문제에 직면했습니다.

- 첫 번째로 Marker에서 사용한 비동기 데이터가 문제라고 판단 후 Suspense를 사용해 Loading 처리를 진행했습니다.
- 두 번째로 useState의 비동기적 작동으로 인한 문제라고 판단하여 초기화 함수를 사용했습니다.
- 세 번째로 불필요한 리렌더링으로 인한 문제라고 판단하여 useMemo와 useCallback으로 메모이제이션을 진행했습니다.
- 네 번째로 useEffect에서 사용하는 의존성 배열이 문제라고 판단하여 의존성을 제거 또는 추가했습니다.
- 위 작업들이 모두 끝난 후에도 동일한 문제가 지속되었고, 제 코드의 문제가 아니라는 생각이 들었습니다.
- 마지막으로 React 18과 타 라이브러리와의 호환성 문제라고 판단하여 해당 라이브러리의 Issues 확인하여 문제를 해결했습니다.
