export const FILTER_ALL = 'ALL';
export const PROJECT_TYPES = ['PERSONAL', 'TEAM'];
export const PROJECT_TECHS = ['React', 'Spring boot', 'Flutter'];

export const projects = [
  {
    // 기본 정보
    id: 'moneylog',
    slug: 'moneylog',
    title: 'moneylog',
    type: 'TEAM',
    tech: ['Flutter', 'Spring boot', 'React'],
    image: 'images/dv03.png',
    shortDescription: '챗봇 기반 스마트 가계부',
    tags: '#Flutter #Spring Boot #React #Android Studio',
    
    // 프로젝트 정보
    period: '2024.06.09 ~ 2024.06.19',
    teamSize: 4,
    
    // 기술 스택
    techStack: {
      frontend: 'Flutter, Dart, Android Studio, React, JavaScript, Axios, Styled-components, React Router',
      backend: 'Spring Boot, JWT 인증, RESTful API',
      tools: 'Git, GitHub'
    },
    
    // 담당 역할
    responsibilities: [
      'Flutter 기반 Android 앱 UI/UX 설계 및 구현, 상태 관리',
      'React 기반 웹 프론트엔드 개발 및 Styled-components를 통한 컴포넌트 스타일링',
      'JWT 기반 회원가입/로그인 인증 처리 및 Axios를 통한 백엔드 API 연동',
      '지출/수입 입력, 조회, 수정, 삭제 기능 구현 및 API 연동',
      '카테고리별·월별 지출 데이터 필터링 및 Chart 라이브러리 활용 그래프 시각화',
      '스켈레톤 로딩 UI 및 그래프 애니메이션 적용으로 사용자 경험 개선',
    ],
    
    // 프로젝트 설명
    description: 'moneylog는 챗봇 기반의 스마트 지출 관리 애플리케이션으로, Flutter와 React를 활용한 크로스 플랫폼 서비스입니다. JWT 기반 인증, 지출/수입 관리, 카테고리별 통계 시각화 기능을 제공합니다.',
    
    // 주요 기능
    features: [
      {
        title: 'JWT 기반 인증',
        description: 'JWT 토큰을 로컬 스토리지에 저장하고, API 요청 시 헤더에 자동 포함하여 인증 상태를 유지했습니다.',
      },
      {
        title: '지출/수입 관리 CRUD',
        description: '지출/수입 데이터의 입력, 조회, 수정, 삭제 기능을 구현하고 백엔드 API와 연동했습니다.',
      },
      {
        title: '통계 시각화',
        description: '카테고리별·월별 지출 데이터를 Chart 라이브러리로 시각화하고, 스켈레톤 UI로 로딩 경험을 개선했습니다.',
      },
    ],
    
    // 기술적 고민과 해결
    challenges: [
      {
        issue: 'Flutter와 React 두 플랫폼 동시 개발의 효율성',
        solution: '공통 API 스펙을 먼저 정의하고, 각 플랫폼에서 동일한 데이터 구조로 통신하도록 설계했습니다. 이를 통해 백엔드 수정 없이 두 플랫폼을 동시에 개발할 수 있었습니다.',
      },
      {
        issue: '데이터 로딩 중 사용자 이탈 방지',
        solution: '스켈레톤 UI를 적용하여 데이터 로딩 중에도 화면 구조를 미리 보여주고, Chart 애니메이션으로 데이터 렌더링 시 부드러운 전환 효과를 제공했습니다.',
      },
      {
        issue: 'JWT 토큰 만료 시 재로그인 요구 문제',
        solution: 'Axios 인터셉터를 활용해 401 에러 발생 시 자동으로 로그인 페이지로 리디렉션하고, 토큰 만료 메시지를 사용자에게 명확히 전달했습니다.',
      },
    ],
    
    // 링크
    githubUrl: [
      'https://github.com/rkdtl1930-cell/moneylog-front',
      'https://github.com/ubzzang/moneylog_app'
    ],
    githubUrlBackend: 'https://github.com/rkdtl1930-cell/moneylog-back',
    notionUrl: 'https://www.notion.so/2cd979b744f080bfaa7efd6fdd1396fd',
    pdfs: [
      { title: '프로젝트 소개서', url: '/documents/moneylog.pdf' },
    ],
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
    ],
  },

  {
    // 기본 정보
    id: 'slow-mode',
    slug: 'slow-mode',
    title: '저속노화 습관트래커',
    type: 'PERSONAL',
    tech: ['React', 'Spring boot'],
    image: 'images/dv02.png',
    shortDescription: 'Spring Boot + React 풀스택 습관 관리 서비스',
    tags: '#Spring boot #React #JWT #MySQL #풀스택',
    
    // 프로젝트 정보
    period: '2024.11.28 ~ 2024.12.12',
    teamSize: 1,
    
    // 기술 스택
    techStack: {
      backend: 'Spring Boot, Spring Security(JWT), Spring Data JPA, Hibernate, MySQL',
      frontend: 'React, JavaScript(ES6+), Axios, Styled-components, React Router, Swiper, GSAP',
      tools: 'Git, GitHub'
    },
    
    // 담당 역할
    responsibilities: [
      '서비스 기획, UI/UX 디자인 및 도메인 모델링, 시스템 아키텍처 설계',
      'Spring Boot 기반 REST API 설계 및 구현',
      'Spring Security + JWT 기반 회원가입/로그인 및 인증/인가 처리',
      'Habit / HabitLog / DailyScore 도메인 모델링 및 비즈니스 로직 설계',
      '일일 습관 체크 및 점수 누적 로직, 월간 통계(카테고리별 달성률·점수 집계) 계산 로직',
      'React UI 개발, Axios를 통한 프론트-백엔드 통신, 반응형 웹 및 애니메이션 구현',
    ],
    
    // 프로젝트 설명
    description: 'Spring Boot 기반의 백엔드와 React 프론트엔드를 직접 설계·구현한 풀스택 프로젝트입니다. 사용자의 일일 습관을 체크하고 월간 통계를 제공하는 습관 관리 서비스로, 서비스 구조 이해와 데이터 흐름 설계에 집중했습니다.',
    
    // 주요 기능
    features: [
      {
        title: 'JWT 기반 인증/인가',
        description: 'Spring Security를 활용해 회원가입/로그인 시 JWT를 발급하고, 이후 API 요청 시 토큰 검증을 통해 인가 처리를 구현했습니다.',
      },
      {
        title: '습관 체크 및 점수 누적',
        description: 'Habit(습관) 단위로 일별 체크(HabitLog)를 기록하고, 날짜별 점수(DailyScore)를 누적하여 월간 통계에 활용했습니다.',
      },
      {
        title: '월간 통계 집계',
        description: '선택한 년·월의 HabitLog와 DailyScore를 조회해 카테고리별 달성률과 점수를 계산하여 시각화했습니다.',
      },
    ],
    
    // 기술적 고민과 해결
    challenges: [
      {
        issue: '도메인 설계: 습관 체크 데이터를 어떻게 저장하고 집계할 것인가',
        solution: 'Habit(습관), HabitLog(일별 체크 기록), DailyScore(날짜별 점수)를 분리하여 설계했습니다. 이를 통해 일일 체크는 HabitLog에 기록하고, 통계 조회 시에는 DailyScore를 집계하여 쿼리 성능을 최적화했습니다.',
      },
      {
        issue: '월간 통계 계산의 효율성',
        solution: '매번 전체 HabitLog를 조회하여 계산하는 대신, DailyScore 테이블에 날짜별 점수를 미리 누적 저장하여 통계 조회 시 빠르게 응답할 수 있도록 했습니다.',
      },
      {
        issue: '프론트-백 통신 시 인증 토큰 관리',
        solution: 'Axios 인터셉터를 설정하여 모든 API 요청에 자동으로 JWT 토큰을 헤더에 포함시키고, 401 에러 발생 시 자동으로 로그인 페이지로 리디렉션하도록 처리했습니다.',
      },
      {
        issue: '개인 프로젝트로서의 전체 개발 범위 관리',
        solution: '초기 기획 단계에서 핵심 기능(습관 체크, 월간 통계)에 집중하고, 부가 기능(소셜 기능, 알림 등)은 우선순위를 낮춰 2주 내에 MVP를 완성했습니다.',
      },
    ],
    
    // 링크
    githubUrl: 'https://github.com/ubzzang/slow_mode_app',
    githubUrlBackend: 'https://github.com/ubzzang/slow_mode',
    notionUrl: 'https://www.notion.so/2cd979b744f080bfaa7efd6fdd1396fd',
    pdfs: [
      { title: '프로젝트 소개서', url: '/documents/slowmode.pdf' },
    ],
  },

  {
    // 기본 정보
    id: 'bookkok',
    slug: 'bookkok',
    title: '책콕',
    type: 'TEAM',
    tech: ['Spring boot'],
    image: 'images/dv01.png',
    shortDescription: '중고책 거래 플랫폼',
    tags: '#Spring boot #Thymeleaf #Swiper #GSAP',
    
    // 프로젝트 정보
    period: '2024.10.30 ~ 2024.11.12',
    teamSize: 4,
    
    // 기술 스택
    techStack: {
      backend: 'Spring Boot, Spring Security, JPA/Hibernate, MySQL',
      frontend: 'HTML, CSS, JavaScript, Thymeleaf, Swiper, GSAP',
      tools: 'Git, GitHub'
    },
    
    // 담당 역할
    responsibilities: [
      '전체 서비스 레이아웃 설계 및 UI/UX 디자인, 반응형 웹 구현',
      '장바구니 관리 및 주문/결제 시스템 백엔드 개발',
      '장바구니 결제·바로구매 통합 처리 로직 설계 및 구현',
      '결제 수단 등록/수정 및 판매 완료 알림 기능 구현',
      'Spring Boot, JPA 기반 트랜잭션 관리 및 비즈니스 로직 개발',
    ],
    
    // 프로젝트 설명
    description: 'Spring Boot + Thymeleaf 기반의 중고책 거래 플랫폼 팀 프로젝트입니다. 서비스 전반 UI/UX·퍼블리싱 총괄, 장바구니·결제·알림 화면 및 로직 구현을 담당했습니다.',
    
    // 주요 기능
    features: [
      {
        title: '장바구니 관리',
        description: '장바구니 추가 시 중복 체크, 수량 조절, 선택 삭제 기능을 구현하고 결제 시스템과 연동했습니다.',
      },
      {
        title: '통합 결제 시스템',
        description: '장바구니 결제와 바로구매를 하나의 메서드로 통합 처리하여 코드 중복을 제거하고 유지보수성을 높였습니다.',
      },
      {
        title: '판매 완료 알림',
        description: '주문 완료 시 판매자에게 자동으로 알림을 생성하여 거래 현황을 실시간으로 확인할 수 있도록 했습니다.',
      },
    ],
    
    // 기술적 고민과 해결
    challenges: [
      {
        issue: '장바구니 결제와 바로구매, 두 가지 결제 방식의 중복 코드',
        solution: '장바구니 결제와 바로구매를 하나의 메서드(completeOrder)로 통합했습니다. cartIds와 productId를 파라미터로 받아 분기 처리하되, 공통 로직(결제 수단 확인, 주문 번호 생성, 알림 전송)은 재사용하여 코드 중복을 최소화했습니다.',
      },
      {
        issue: '결제 프로세스 중 데이터 정합성 보장',
        solution: '@Transactional을 활용하여 주문 생성, 재고 업데이트(isSold 상태 변경), 알림 생성, 장바구니 삭제를 하나의 트랜잭션으로 묶었습니다. 이를 통해 중간에 오류 발생 시 전체 롤백되어 데이터 일관성을 유지했습니다.',
      },
      {
        issue: '디자인-개발 협업 시 커뮤니케이션 비용',
        solution: '디자이너이자 개발자로서 직접 UI를 설계하고 퍼블리싱한 후, 백엔드 로직까지 구현했습니다. 이를 통해 디자인 의도가 개발 과정에서 손실되지 않고, 팀 내 커뮤니케이션 비용을 크게 줄일 수 있었습니다.',
      },
      {
        issue: '팀 프로젝트에서 UI 일관성 유지',
        solution: '공통 CSS 변수와 컴포넌트 스타일 가이드를 초기에 정의하고, 팀원들과 공유했습니다. 이를 통해 각자 작업한 화면들이 일관된 디자인 시스템을 유지할 수 있었습니다.',
      },
    ],
    
    // 링크
    githubUrl: 'https://github.com/applause000000-jpg/WebProject',
    notionUrl: 'https://www.notion.so/2cd979b744f080a3aabde8c5838cc140',
    pdfs: [
      { title: '프로젝트 소개서', url: '/documents/chakkok.pdf' },
    ],
  },
];