import { DEV_SKILLS, DESIGN_SKILLS } from '../constants/skills';

// 경력기술서
const CAREER_DOC_URL = 'https://www.notion.so/_-22a979b744f08058a767c28298296217?source=copy_link';
const CAREER_LIST = [
  { period: '2022.04 - 2025.05', company: '(주)이타즈' },
  { period: '2019.12 - 2022.04', company: '(주)록스' },
  { period: '2019.03 - 2019.11', company: '아이오랩' },
];

const AboutSection = () => {
  const skills = [...DEV_SKILLS, ...DESIGN_SKILLS];

  return (
    <section id="about" className="about">
      <div className="section__inner">
        <h2 data-aos="fade-up">About</h2>

        {/* 프로필 + 소개 좌우 배치 */}
        <div className="about__hero" data-aos="fade-up" data-aos-delay="100">
          <div className="about__photo">
            <img src="images/profile.JPG" alt="이유빈" />
          </div>
          <div className="about__intro">
            <h3 className="about__catchphrase">
              사용자의 눈으로,<br />
              개발자의 손으로.
            </h3>
            <p className="about__bio">
              6년간 웹 퍼블리셔로 근무하며 웹 구조와 사용자 경험에 대한 이해를 쌓았고,
              이후 개발 역량을 확장하기 위해 React, Spring Boot, Python을 학습했습니다.
              단순 UI 구현을 넘어 기능 단위로 사고하며 문제를 해결합니다.
            </p>
            <a
              href={CAREER_DOC_URL}
              className="about__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              경력기술서 보기 →
            </a>
          </div>
        </div>

        {/* 잡지형 강점 3컬럼 */}
        <div className="magazine" data-aos="fade-up" data-aos-delay="200">
          <article className="magazine__item">
            <span className="magazine__number">01</span>
            <h4 className="magazine__keyword">Convergence</h4>
            <p className="magazine__body">
              6년의 디자인 실무와 컴퓨터공학 전공의 유기적 결합.
              시각적 감각과 기술적 집요함으로 최상의 UX를 설계합니다.
            </p>
          </article>
          <article className="magazine__item">
            <span className="magazine__number">02</span>
            <h4 className="magazine__keyword">Bridge</h4>
            <p className="magazine__body">
              디자이너의 언어와 개발자의 로직을 완벽히 이해하는 소통가.
              제품의 시작과 끝을 책임지는 올라운더입니다.
            </p>
          </article>
          <article className="magazine__item">
            <span className="magazine__number">03</span>
            <h4 className="magazine__keyword">Value</h4>
            <p className="magazine__body">
              비즈니스의 목적을 이해하고 사용자 중심의 가치를 코드로 증명합니다.
              끊임없이 고민하며 동료와 함께 성장합니다.
            </p>
          </article>
        </div>

        {/* 경력 / 학력 / 자격증 - 구분선 기반 */}
        <div className="about__career" data-aos="fade-up" data-aos-delay="300">
          <div className="about__career-col">
            <h3>Experience</h3>
            <ul>
              {CAREER_LIST.map((item, i) => (
                <li key={i}>
                  <span className="about__career-period">{item.period}</span>
                  <span className="about__career-company">{item.company}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="about__career-col">
            <h3>Education</h3>
            <ul>
              <li>
                <span className="about__career-period">2025.07 - 2026.02</span>
                <span className="about__career-company">AI&빅데이터 풀스택 개발 수료</span>
              </li>
              <li>
                <span className="about__career-period">2013.03 - 2017.08</span>
                <span className="about__career-company">경성대학교 컴퓨터공학과</span>
              </li>
            </ul>
          </div>
          <div className="about__career-col">
            <h3>Certificate</h3>
            <ul>
              <li>정보처리기사</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 마키 */}
      <div className="marquee">
        <div className="marquee__group">
          {[...skills, ...skills].map((skill, index) => (
            <img key={index} src={skill.src} alt={skill.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
