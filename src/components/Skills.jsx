import { useState } from 'react';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  flutterIcon,
  axiosIcon,
  androidIcon,
  springIcon,
  djangoIcon,
  pythonIcon,
  mysqlIcon,
  oracleIcon,
  gitIcon,
} from "../assets/icons";



const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Language', 'FrontEnd', 'BackEnd', 'Database', 'ETC'];

  const skillsData = {
  Language: [
    {
      name: 'HTML5',
      icon: htmlIcon,
      description: '기본적인 HTML 태그를 사용할 수 있습니다.',
    },
    {
      name: 'CSS',
      icon: cssIcon,
      description: '순수 CSS만을 이용하여 레이아웃을 할 수 있습니다.',
    },
    {
      name: 'JavaScript',
      icon: jsIcon,
      description: 'ES6+ 문법을 활용하여 코드를 작성할 수 있습니다.',
    },
  ],

  FrontEnd: [
    {
      name: 'React',
      icon: reactIcon,
      description: 'React 프로젝트 경험',
    },
    {
      name: 'Flutter',
      icon: flutterIcon,
      description: '크로스 플랫폼 앱 개발 경험',
    },
    {
      name: 'Axios',
      icon: axiosIcon,
      description: 'interceptors 활용 경험',
    },
    {
      name: 'Android Studio',
      icon: androidIcon,
      description: 'Android 앱 개발 IDE',
    },
  ],

  BackEnd: [
    {
      name: 'Spring Boot',
      icon: springIcon,
      description: '학습 및 실습 경험',
    },
    {
      name: 'Django',
      icon: djangoIcon,
      description: '학습 및 실습 경험',
    },
    {
      name: 'Python',
      icon: pythonIcon,
      description: '학습 및 실습 경험',
    },
  ],

  Database: [
    {
      name: 'MySQL',
      icon: mysqlIcon,
      description: '학습 및 실습 경험',
    },
    {
      name: 'Oracle',
      icon: oracleIcon,
      description: '학습 및 실습 경험',
    },
  ],

  ETC: [
    {
      name: 'Git',
      icon: gitIcon,
      description: '버전 관리',
    },
  ],
};

  return (
    <section className="skills-section" id="skills">
      <div className="skills__inner">
        <div className="skills-container">
          <h2 data-aos="fade-in">이런 기술을 사용할 수 있습니다</h2>

          <div className="skills-content">
            {/* 탭 */}
            <div className="tab-list">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
              <div
                className="tab-indicator"
                style={{ transform: `translateY(${activeTab * 100}%)` }}
              />
            </div>

            {/* 컨텐츠 */}
            <div className="skill-content">
              <h3 className="content-title">
                Skill Stack <span className="highlight">@ {tabs[activeTab]}</span>
              </h3>

              <div className="skills-list">
                {skillsData[tabs[activeTab]].map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-icon">
                      <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                    </div>
                    <div className="skill-info">
                      <h3 className="skill-name">{skill.name}</h3>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
