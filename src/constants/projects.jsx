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
    image: '/images/dv03.png',
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
      'Flutter를 활용한 Android 앱 UI/UX 구현 및 상태 관리',
      'React 기반 웹 프론트엔드 개발 및 Styled-components를 통한 컴포넌트 스타일링',
      'Axios를 통한 백엔드 API 통신 및 JWT 기반 인증 처리',
      '카테고리별 월별 지출 데이터 필터링 및 그래프 시각화 (Chart 라이브러리 활용)',
      '스켈레톤 로딩 UI 및 그래프 애니메이션 적용',
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
    videos: [
      { title: '메인보드', videoUrl: '/videos/00_mainboard.mp4' },
      { title: '회원가입/로그인', videoUrl: '/videos/01_signup_signin.mp4' },
      { title: '챗봇 생성', videoUrl: '/videos/02_create_chatbot.mp4' },
      { title: '챗봇 수정', videoUrl: '/videos/03_update_chatbot.mp4' },
      { title: '챗봇 삭제', videoUrl: '/videos/04_delete_chatbot.mp4' },
      { title: '지출 패턴 챗봇', videoUrl: '/videos/05_expense_pattern_chatbot.mp4' },
      { title: '최근 내역 수정/삭제 챗봇', videoUrl: '/videos/06_latest_update_delete_chatbot.mp4' },
      { title: '보호 챗봇', videoUrl: '/videos/07_protection_chatbot.mp4' },
      { title: '대시보드 - 월별 통계', videoUrl: '/videos/08_dashboard_monthly.mp4' },
      { title: '지출 내역', videoUrl: '/videos/09_history.mp4' },
      { title: '챗봇 목록 조회', videoUrl: '/videos/10_read_list_chatbot.mp4' },
    ],
  },
  {
    id: 'slow-mode',
    slug: 'slow-mode',
    title: '저속노화 습관트래커',
    type: 'PERSONAL',
    tech: ['React', 'Spring boot'],
    image: '/images/dv02.png',
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
  },
  {
    id: 'bookkok',
    slug: 'bookkok',
    title: '책콕',
    type: 'TEAM',
    tech: ['Spring boot'],
    image: '/images/dv01.png',
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
      'Spring Boot 프로젝트 메인·주요 화면 퍼블리싱, Thymeleaf 서버 사이드 렌더링 화면 구조',
      '공통 레이아웃(Fragment)·재사용 컴포넌트 설계·구현, HTML/CSS 구조 및 클래스 네이밍 전략',
      '반응형 레이아웃, Swiper·GSAP UI 인터랙션·애니메이션',
      '장바구니·결제·알림 연동 화면 UI 및 일부 로직 구현',
    ],
    notionUrl: 'https://www.notion.so/2cd979b744f080a3aabde8c5838cc140?v=2cd979b744f08158a5c7000caf2e97c2&source=copy_link',
    detailDescription: 'Spring Boot + Thymeleaf 기반의 중고책 거래 플랫폼 팀 프로젝트입니다. 서비스 전반 UI/UX·퍼블리싱 총괄, 장바구니·결제·알림 화면 및 로직 구현을 담당했습니다.',
  },
];
