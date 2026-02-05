/**
 * 프로젝트 목록 (노션 기반)
 * - detailDescription → 위쪽 요약 블록
 * - period, features, techStack, contribution, githubUrl, deployUrl, notionUrl → 주요 정보 및 링크 정보
 */
export const FILTER_ALL = 'ALL';
export const PROJECT_TYPES = ['PERSONAL', 'TEAM'];
export const PROJECT_TECHS = ['React', 'Spring boot', 'Flutter'];

const NOTION_PROJECT_LIST = 'https://www.notion.so/21e979b744f08028ba7bd433e058c2af?pvs=21';

export const projects = [
  {
    id: 'moneylog',
    slug: 'moneylog',
    title: 'moneylog',
    type: 'TEAM',
    tech: ['Flutter', 'Spring boot', 'React'],
    image: 'images/dv03.png',
    shortDescription: '챗봇 기반 스마트 가계부',
    tags: '#Flutter #Spring Boot #Android Studio',
    githubUrl: ['https://github.com/rkdtl1930-cell/moneylog-front', 'https://github.com/ubzzang/moneylog_app'],
    githubUrlBackend: 'https://github.com/rkdtl1930-cell/moneylog-back',
    imageId: 'img-hello-money',
    period: '2024.06.09 ~ 2024.06.19',
    contribution: '프론트엔드 개발 70%, Flutter 앱 구현 70%',
    teamSize: '4',
    techStack: 'Flutter, Dart, Android Studio, React, Styled-components, Axios, JWT, RESTful API',
    frontendTech: 'Flutter, Dart, Android Studio, React, JavaScript, Axios, Styled-components, React Router',
    backendTech: 'Spring Boot, JWT 인증, RESTful API (백엔드 팀원 담당)',
    role: 'Flutter 기반 모바일 앱 개발 및 React 웹 프론트엔드 구현, 백엔드 API 연동 및 사용자 인터페이스 설계',
    responsibilities: [
      'Android 앱 UI/UX 설계 및 구현, 상태 관리',
      '웹 프론트엔드 개발 및 Styled-components를 통한 컴포넌트 스타일링',
      'JWT 기반 회원가입/로그인 인증 처리 및 Axios를 통한 백엔드 API 연동',
      '지출/수입 입력, 조회, 수정, 삭제 기능 구현 및 API 연동',
      '카테고리별·월별 지출 데이터 필터링 및 Chart 라이브러리 활용 그래프 시각화',
      '스켈레톤 로딩 UI 및 그래프 애니메이션 적용으로 사용자 경험 개선',
    ],
    notionUrl: 'https://www.notion.so/2cd979b744f080bfaa7efd6fdd1396fd?v=2cd979b744f08158a5c7000caf2e97c2&source=copy_link',
    detailDescription: (
      <>
        <p>
          <span className="highlight">moneylog</span>는 챗봇 기반의 스마트 지출 관리 애플리케이션으로,
          Flutter와 React를 활용한 크로스 플랫폼 서비스입니다.
        </p>
        <p>
          로그인 시 <span className="highlight">아이디와 비밀번호를 검증</span>하고,
          <span className="highlight">JWT 기반 인증 API 호출</span> 후 성공 시
          accessToken을 로컬 스토리지에 저장하여 <span className="highlight">인증 상태를 유지</span>합니다.
        </p>
        <p>
          회원가입 페이지에서는 <span className="highlight">닉네임, 아이디, 비밀번호 유효성 검증</span> 후
          회원가입 API를 호출하여 계정을 생성하고, 자동으로 로그인 페이지로 이동합니다.
        </p>
        <p>
          메인 페이지에서는 <span className="highlight">카테고리별 지출 데이터 필터링</span> 기능과
          <span className="highlight">Chart 라이브러리를 활용한 그래프 애니메이션</span>으로
          <span className="highlight">월별 지출 현황을 직관적으로 시각화</span>합니다.
        </p>
        <p>
          데이터 로딩 중에는 <span className="highlight">스켈레톤 UI를 표시</span>하고,
          데이터 준비가 완료되면 부드러운 애니메이션과 함께 그래프를 렌더링합니다.
        </p>
        <p>
          상세 페이지에서는 지출 항목을 <span className="highlight">수정 및 삭제</span>할 수 있으며,
          삭제 시 사용자 확인 절차를 거치고, 수정 시에는 입력 데이터 검증 후
          업데이트를 완료하고 메인 페이지로 리디렉션됩니다.
        </p>
      </>
    ),
    // 핵심 플로우 3~5개: 사용자/시스템 흐름을 단계로 정리
    coreFlows: [
      { title: '로그인', steps: ['아이디/비밀번호 입력 → API 호출 → JWT 저장(로컬스토리지) → 메인 이동'] },
      { title: '회원가입', steps: ['닉네임·아이디·비밀번호 유효성 검증 → 회원가입 API → 자동 로그인 페이지 이동'] },
      { title: '대시보드', steps: ['카테고리/월 선택 → 지출 데이터 조회 → Chart로 시각화, 스켈레톤 후 그래프 렌더'] },
      { title: '챗봇 생성', steps: ['챗봇 이름·유형 입력 → API 생성 → 목록 반영'] },
      { title: '지출 수정/삭제', steps: ['상세 진입 → 수정 시 검증 후 API 업데이트 / 삭제 시 확인 후 API 삭제 → 메인 리디렉션'] },
    ],
    // 로직 설명 3~5개: 핵심 기술/비즈니스 로직 요약
    keyLogic: [
      { title: '인증 유지', content: 'accessToken을 로컬 스토리지에 저장하고, API 요청 시 헤더에 포함해 인증 상태를 유지합니다.' },
      { title: '지출 데이터 필터링', content: '카테고리·월 조건으로 API 조회 후, 프론트에서 Chart 라이브러리로 월별 지출 현황을 시각화합니다.' },
      { title: '스켈레톤 UI', content: '데이터 로딩 중에는 스켈레톤을 보여주고, 로드 완료 시 애니메이션과 함께 그래프를 렌더링해 체감 속도를 높였습니다.' },
      { title: '챗봇 CRUD', content: '챗봇 생성/수정/삭제는 각각 전용 API를 호출하고, 성공 시 목록 또는 상세를 갱신합니다.' },
    ],
    pdfs: [
      { title: '프로젝트 소개서', url: '/documents/moneylog.pdf' },
    ],
    // url에 유튜브 또는 Streamable 링크 넣기. 유튜브: https://www.youtube.com/watch?v=영상ID | Streamable: https://streamable.com/영상ID
    videos: [
      { title: '메인보드', url: 'https://youtu.be/o3HNJbuCSKQ' },
      { title: '회원가입/로그인', url: 'https://youtu.be/QvaJMhz81xY' },
      { title: '챗봇 - 생성', url: 'https://youtu.be/atigjA0xQJY' },
      { title: '챗봇 - 수정', url: 'https://youtu.be/z_NkxqvY-7k' },
      { title: '챗봇 - 삭제', url: 'https://youtu.be/gfGbU0bUZU4' },
      { title: '챗봇 - 지출패턴', url: 'https://youtu.be/gauifz9F-hQ' },
      { title: '챗봇 - 최근 내역 수정/삭제', url: 'https://youtu.be/TaZm9pF5ZTk' },
      { title: '챗봇 - 예외처리', url: 'https://youtu.be/CLu_0wWFd-w' },
      { title: '대시보드', url: 'https://youtu.be/fSsPRxR43PY' },
      { title: '지출 내역', url: 'https://youtu.be/ioZXk6E2WyE' },
      { title: '챗봇 목록 조회', url: 'https://www.youtube.com/watch?v=영상ID' },
    ],
  },
  {
    id: 'slow-mode',
    slug: 'slow-mode',
    title: '저속노화 습관트래커',
    type: 'PERSONAL',
    tech: ['React', 'Spring boot'],
    image: 'images/dv02.png',
    shortDescription: 'Spring Boot + React 풀스택 습관 관리 서비스',
    tags: '#Spring boot #React #JWT #MySQL',
    githubUrl: 'https://github.com/ubzzang/slow_mode_app',
    githubUrlBackend: 'https://github.com/ubzzang/slow_mode',
    imageId: 'img-slow-mode',
    period: '2025.11.28 ~ 2025.12.12',
    contribution: '기획 100%, 디자인 100%, 퍼블리싱 100%, 개발 100%',
    teamSize: null,
    features: '회원가입/로그인(JWT), 일일 습관 체크, 월간 통계(카테고리별 달성률·점수), Habit/HabitLog/DailyScore 도메인',
    techStack: 'Spring Boot, Spring Security(JWT), Spring Data JPA, MySQL, React, JavaScript, Axios, Styled-components, React Router, Swiper, GSAP',
    backendTech: 'Spring Boot, Spring Security (JWT 기반 인증/인가), Spring Data JPA / Hibernate, MySQL, RESTful API 설계',
    frontendTech: 'React, JavaScript(ES6+), Axios, Styled-components / CSS, React Router, Swiper, GSAP, 반응형 웹',
    role: '사용자 중심 습관 관리 서비스 기획 및 전체 시스템 구조 설계, 인증/인가 기반 사용자 기능 구현, 프론트엔드부터 백엔드까지 전반적인 풀스택 개발',
    responsibilities: [
      'Spring Boot 기반 REST API 설계·구현, JWT 회원가입·로그인 및 인증/인가 처리',
      'Habit / HabitLog / DailyScore 도메인 모델링 및 비즈니스 로직 설계',
      '일일 습관 체크 및 점수 누적 로직, 월간 통계(카테고리별 달성률·점수 집계) 계산 로직',
      'React UI·상태 관리, Axios 프론트–백엔드 통신',
      'Styled-components 컴포넌트 단위 UI, Swiper·GSAP 인터랙션·애니메이션, 반응형 웹 및 UI/UX 개선',
    ],
    notionUrl: 'https://www.notion.so/2cd979b744f080bfaa7efd6fdd1396fd?v=2cd979b744f08158a5c7000caf2e97c2&source=copy_link',
    detailDescription: 'Spring Boot 기반의 백엔드와 React 프론트엔드를 직접 설계·구현한 풀스택 프로젝트로, 서비스 구조 이해와 데이터 흐름 설계에 집중했습니다.',
    coreFlows: [
      { title: '회원가입/로그인', steps: ['입력 검증 → Spring Security JWT API 호출 → 토큰 저장 후 메인 이동'] },
      { title: '습관 등록', steps: ['카테고리·습관명 설정 → Habit 도메인 저장 → 목록 반영'] },
      { title: '일일 체크', steps: ['오늘 날짜 기준 Habit 목록 조회 → 체크 시 HabitLog 저장, DailyScore 반영'] },
      { title: '월간 통계', steps: ['년·월 선택 → HabitLog/DailyScore 집계 API → 카테고리별 달성률·점수 시각화'] },
    ],
    keyLogic: [
      { title: 'JWT 인증', content: 'Spring Security로 로그인 시 JWT 발급, 이후 API 요청 시 토큰 검증으로 인가 처리합니다.' },
      { title: 'Habit / HabitLog / DailyScore', content: '습관(Habit) 단위로 일별 체크(HabitLog)를 남기고, 날짜별 점수(DailyScore)를 누적해 월간 통계에 활용합니다.' },
      { title: '월간 통계 집계', content: '선택한 년·월의 HabitLog·DailyScore를 조회해 카테고리별 달성률과 점수를 계산해 화면에 표시합니다.' },
    ],
    pdfs: [
      { title: '프로젝트 소개서', url: '/documents/slowmode.pdf' },
    ],
    videos: [
      { title: '동영상 넣어야함 ..', url: 'https://www.youtube.com/watch?v=영상ID' },
    ],
  },
  {
    id: 'bookkok',
    slug: 'bookkok',
    title: '책콕',
    type: 'TEAM',
    tech: ['Spring boot'],
    image: 'images/dv01.png',
    shortDescription: '중고책 거래 플랫폼 (Thymeleaf)',
    tags: '#Spring boot #Thymeleaf #Swiper #GSAP',
    githubUrl: 'https://github.com/applause000000-jpg/WebProject',
    imageId: 'img-bookkok',
    period: '2025.10.30 ~ 2025.11.12',
    teamSize: 4,
    contribution: '디자인 100%, 퍼블리싱 100%, 개발 30%',
    features: '메인·주요 화면 퍼블리싱, 장바구니·결제·알림 화면 및 로직, 알라딘 크롤링 데이터, 중고책 등록',
    techStack: 'Spring Boot, Spring Security, JPA / Hibernate, MySQL, HTML / CSS / JavaScript, Thymeleaf, Swiper, GSAP',
    backendTech: 'Spring Boot, Spring Security, JPA/Hibernate, MySQL',
    frontendTech: 'HTML, CSS, JavaScript, Thymeleaf, Swiper, GSAP',
    collaborationTech: 'Git, GitHub',
    role: '서비스 전반 UI/UX 설계 및 퍼블리싱 총괄, 장바구니·결제·알림 기능의 화면 및 로직 구현, 팀 내 프론트엔드 파트 리딩 및 공통 컴포넌트 설계',
    responsibilities: [
      '전체 서비스 레이아웃 설계 및 UI/UX 디자인, 반응형 웹 구현',
      '장바구니 관리 및 주문/결제 시스템 개발',
      '장바구니 결제·바로구매 통합 처리 로직 설계',
      '결제 수단 등록/수정 및 판매 완료 알림 기능 구현',
      'Spring Boot, JPA 기반 트랜잭션 관리 및 비즈니스 로직 개발'
    ],
    notionUrl: 'https://www.notion.so/2cd979b744f080a3aabde8c5838cc140?v=2cd979b744f08158a5c7000caf2e97c2&source=copy_link',
    detailDescription: 'Spring Boot + Thymeleaf 기반의 중고책 거래 플랫폼 팀 프로젝트입니다. 서비스 전반 UI/UX·퍼블리싱 총괄, 장바구니·결제·알림 화면 및 로직 구현을 담당했습니다.',
    coreFlows: [
      { title: '메인·도서 탐색', steps: ['메인 진입 → 알라딘 크롤링/등록 도서 목록 노출, Swiper·GSAP 인터랙션'] },
      { title: '장바구니', steps: ['도서 담기 → 장바구니 화면에서 수량·삭제 처리 → 결제 진행'] },
      { title: '결제', steps: ['결제 정보 입력 → 주문 API 호출 → 결제 완료·알림 연동'] },
      { title: '알림', steps: ['주문·배송 등 이벤트 발생 시 알림 목록 갱신, 알림 화면에서 확인'] },
      { title: '중고책 등록', steps: ['도서 정보(크롤링 또는 직접 입력) → 등록 API → 목록 반영'] },
    ],
    keyLogic: [
      { title: '장바구니', content: '담은 도서 목록 조회·수량 변경·삭제 화면과 로직을 구현했습니다. 장바구니 도메인과 연동해 결제 진행까지 이어지도록 했습니다.' },
      { title: '결제', content: '결제 정보 입력 화면과 주문 API 연동 로직을 구현했습니다. 주문 완료 후 주문 결과·알림과 연동되도록 처리했습니다.' },
      { title: '알림', content: '주문·배송 등 이벤트에 따른 알림 목록 화면과 갱신 로직을 구현했습니다. 사용자가 알림을 확인할 수 있는 UI를 담당했습니다.' },
    ],
    pdfs: [
      { title: '프로젝트 소개서', url: '/documents/chakkok.pdf' },
    ],
    videos: [
      { title: '동영상 넣어야함 ..', url: 'https://www.youtube.com/watch?v=영상ID' },
    ],
  },
];
