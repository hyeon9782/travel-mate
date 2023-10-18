# Travel Mate

### 자신만의 여행 코스를 계획하는 웹

<img src="public/travel-mate-logo.png">

## 시작 가이드

---

### Installation

```
# 프로젝트 클론
git clone https://github.com/hyeon9782/travel-mate.git

# 프로젝트로 경로 이동
cd travel-mate
```

###

```
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

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

## 화면 구성

---

### 메인 화면 (포스팅 화면)

### 글쓰기 화면

### 여행 일정 화면

### 여행 일정 상세페이지

## 주요 기능

---

### ✔ 여행 코스 계획 기능

- Kakao Map이 API를 활용하여 자신이 선택한 장소들의 위치를 확인하며 여행 코스 기획 (국내 여행지)
- Kakao Places API를 활용하여 사용자가 원하는 키워드로 장소 검색 (국내 여행지)
- Google Place API를 활용하여 사용자가 원하는 <strong>키워드로 장소 검색</strong> (해외 여행지)
- Google Map API를 활용하여 자신이 선택한 <strong>장소들의 위치를 확인하며 여행 코스 기획</strong> (해외 여행지)

### ✔ 게시글 작성 기능

- react-quill를 이용해 <strong>Editor 연동 및 게시글 작성</strong> 기능 구현
- category 별 게시글 검색 및 <strong>무한 스크롤</strong> 기능 구현
- React 18 Suspense를 사용해 <strong>로딩 처리 및 Skeleton UI</strong> 구현

### ✔ 소셜 로그인 기능

- Google Auth API를 활용하여 <strong>Google Login</strong> 기능 구현
- Kakao Login 기능 구현

## Future Works

---

### ✨ 카카오톡 공유 기능

### 여행 일정 계획 페이지 드래그 앤 드랍 기능
