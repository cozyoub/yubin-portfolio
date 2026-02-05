import { DEV_SKILLS, DESIGN_SKILLS } from '../constants/skills';

// 이력서
const RESUME_URL = 'https://www.notion.so/21e979b744f08038996adc881440d12d?source=copy_link';
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
    <section id="about" className="about__wrap">
      <div className="about__inner">
        <h2 data-aos="fade-in">ABOUT ME</h2>
        <div className="about__box container-md mb80">
          <div className="img__box">
            <img
              className="img__emoji"
              src="images/profile.JPG"
              alt="Yoobean"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            />
          </div>
          <div className="about__txt__box">
            <div
              className="about__txt"
              data-aos="flip-right"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <p>안녕하세요. 웹 서비스 전반을 이해하며 개발하는 프론트엔드 개발자 이유빈입니다.</p>

              <p>
                6년간 웹 퍼블리셔로 근무하며 웹 구조와 사용자 경험에 대한 이해를 쌓았고,
                이후 개발 역량을 확장하기 위해 Python, React, Spring Boot를 학습했습니다.
              </p>

              <p>
                React와 JavaScript를 기반으로 사용자 인터페이스를 구현하고,
                Spring Boot로 구성된 백엔드와의 API 연동을 통해
                데이터 처리와 서비스 흐름을 고려한 개발 경험을 쌓았습니다.
              </p>

              <p>
                Python을 활용한 로직 구현과 데이터 처리 경험을 바탕으로
                단순 UI 구현을 넘어 기능 단위로 사고하며 문제를 해결하고자 합니다.
              </p>

              <p className="mb40">
                새로운 기술을 배우는 과정과 팀 협업을 중요하게 생각하며,
                신뢰할 수 있는 서비스를 만드는 개발자로 성장하고 싶습니다.
              </p>

              <a
                href={RESUME_URL}
                className="shortcut__arrow"
                target="_blank"
                rel="noopener noreferrer"
              >
                이력서 바로가기 <i className="fa-solid fa-circle-chevron-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="about__box container-md career">
          <div data-aos="fade-up" data-aos-duration="500">
            <h3>WORK EXPERIENCE</h3>
            <ul className="about__txt">
              {CAREER_LIST.map((item, i) => (
                <li key={i}>
                  {item.period} {item.company}
                </li>
              ))}
            </ul>
            <a
              href={CAREER_DOC_URL}
              className="shortcut__arrow"
              target="_blank"
              rel="noopener noreferrer"
            >
              경력기술서 바로가기 <i className="fa-solid fa-circle-chevron-right" />
            </a>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <h3>EDUCATION</h3>
            <ul className="about__txt">
              <li>2025.07 - 2026.02 AI&빅데이터 분석 활용 풀스택 서비스 개발 수료 - 부산IT교육센터</li>
              <li>2018.07 - 2018.11 스마트기기 UX/UI디자인(디지털디자인) 수료 - 그린컴퓨터아카데미</li>
              <li>2013.03 - 2017.08 경성대학교 컴퓨터공학과 졸업</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <h3>CERTIFICATE</h3>
            <ul className="about__txt">
              <li>정보처리기사</li>
              <li>보통 2종 면허</li>
            </ul>
          </div>
        </div>
      </div>

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
