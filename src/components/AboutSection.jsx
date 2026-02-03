import { DEV_SKILLS, DESIGN_SKILLS } from '../constants/skills';

const RESUME_URL = 'https://www.notion.so/21e979b744f08038996adc881440d12d?source=copy_link';
const CAREER_LINKS = [
  { url: 'https://www.notion.so/21e979b744f08028851ed16bc3609b7b?source=copy_link', company: '(주)이타즈' },
  { url: 'https://www.notion.so/21e979b744f08085aafdc63ad74cecd2?source=copy_link', company: '(주)록스' },
  { url: 'https://www.notion.so/21e979b744f08058aa39ee5ad2911d98?source=copy_link', company: '아이오랩' },
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
              <p>안녕하세요! 프론트엔드 개발자로 전환 중인 이유빈입니다.</p>
              <p>
                6년간 웹 퍼블리셔로 다양한 프로젝트를 경험하며
                탄탄한 마크업 기초와 사용자 경험에 대한 이해를 쌓았습니다.
              </p>
              <p>
                단순히 보이는 화면을 만드는 것을 넘어, 실제로 작동하는 서비스를 구현하고 싶어
                React와 JavaScript를 학습하며 Spring Boot와 연동하는 프로젝트를 진행했습니다.
              </p>
              <p>
                웹 표준과 접근성을 기반으로 한 UI 구현 경험을 바탕으로,
                사용자 중심의 인터랙션과 효율적인 코드 구조를 고민합니다.
              </p>
              <p className="mb40">
                새로운 기술을 배우는 것을 즐기며, 맡은 일에 책임감을 가지고 끝까지 완성도를 높입니다.
                <br />
                함께 성장하며 더 나은 제품을 만들어가는 개발자가 되고 싶습니다.
              </p>
              <a
                href={RESUME_URL}
                className="shortcut__arrow"
                target="_blank"
                rel="noopener noreferrer"
              >
                경력기술서 바로가기 <i className="fa-solid fa-circle-chevron-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="about__box container-md career">
          <div data-aos="fade-up" data-aos-duration="500">
            <h3>WORK EXPERIENCE</h3>
            <ul className="about__txt">
              <li>
                2022.04 - 2025.05 (주)이타즈{' '}
                <a href={CAREER_LINKS[0].url} target="_blank" rel="noopener noreferrer">
                  경력기술서 바로가기
                </a>
              </li>
              <li>
                2019.12 - 2022.04 (주)록스{' '}
                <a href={CAREER_LINKS[1].url} target="_blank" rel="noopener noreferrer">
                  경력기술서 바로가기
                </a>
              </li>
              <li>
                2019.03 - 2019.11 아이오랩{' '}
                <a href={CAREER_LINKS[2].url} target="_blank" rel="noopener noreferrer">
                  경력기술서 바로가기
                </a>
              </li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <h3>EDUCATION</h3>
            <ul className="about__txt">
              <li>2025.07 - 2026.02 AI&빅데이터 분석 활용 풀스택 서비스 개발 수료예정 - 부산IT교육센터</li>
              <li>2018.07 - 2018.11 스마트기기 UX/UI디자인(디지털디자인) 수료 - 그린컴퓨터아카데미</li>
              <li>2013.03 - 2017.08 경성대학교 컴퓨터공학과 졸업</li>
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
