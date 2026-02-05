// 이력서
const RESUME_URL = 'https://www.notion.so/21e979b744f08038996adc881440d12d?source=copy_link';
// 경력기술서
const CAREER_DOC_URL = 'https://www.notion.so/_-22a979b744f08058a767c28298296217?source=copy_link';

const AboutSection = () => {
  return (
    <section id="about" className="ke-section ke-section--about">
      <div className="ke-about">
        <div className="ke-about__left">
          <p className="ke-label" data-aos="fade-up" data-aos-duration="800">ABOUT</p>
          <h2 className="ke-title" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            경험이<br />
            <span className="ke-accent">가치</span>가 되는 순간
          </h2>
        </div>
        <div className="ke-about__right">
          <div className="ke-about__content" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <p className="ke-about__text">
              6년간 웹 퍼블리셔로 일하며 수많은 화면을 만들었습니다.<br />
              그 과정에서 "왜 이렇게 동작하지?"라는 궁금증이 생겼고,<br />
              결국 개발 공부를 시작했습니다.
            </p>
            <p className="ke-about__text">
              이제는 화면 설계부터 서버 구현까지,<br />
              서비스 전체를 이해하고 만들 수 있습니다.
            </p>
          </div>
          <div className="ke-about__stats" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <div className="ke-stat">
              <strong className="ke-stat__num">6+</strong>
              <span className="ke-stat__label">Years Experience</span>
            </div>
            <div className="ke-stat">
              <strong className="ke-stat__num">3</strong>
              <span className="ke-stat__label">Projects</span>
            </div>
          </div>
          <div className="ke-about__cta" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            <a href={RESUME_URL} className="ke-btn" target="_blank" rel="noopener noreferrer">
              이력서 보기
            </a>
            <a href={CAREER_DOC_URL} className="ke-btn ke-btn--ghost" target="_blank" rel="noopener noreferrer">
              경력기술서
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
