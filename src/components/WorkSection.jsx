const WorkSection = () => {
  const projects = [
    {
      id: 1,
      title: '부산교육대학교 리뉴얼',
      description: 'Web | 디자인 · 퍼블리싱 · 기획',
      image: 'images/pj07.png',
      link: 'https://www.notion.so/21e979b744f08034a81fe7636ea75ff4?source=copy_link',
    },
    {
      id: 2,
      title: '김해문화재단 리뉴얼',
      description: 'Web | 디자인 · 퍼블리싱 · 기획',
      image: 'images/pj01.jpg',
      link: 'https://www.notion.so/21e979b744f0818187f9f95d54386641?source=copy_link',
    },
    {
      id: 3,
      title: 'OK저축은행',
      description: 'App | 디자인 · 퍼블리싱 · 기획',
      image: 'images/pj02.jpg',
      link: 'https://www.notion.so/OK-App-21e979b744f0817f96dbeef93d35cf5c?source=copy_link',
    },
    {
      id: 4,
      title: '델타티서비스',
      description: 'Web | 디자인 · 퍼블리싱 · 기획',
      image: 'images/pj03.jpg',
      link: 'https://www.notion.so/21e979b744f08172ae42ecbf01553d61?source=copy_link',
    },
    {
      id: 5,
      title: '호서대학교 학과 개편',
      description: 'Web | 디자인 · 퍼블리싱 · 기획',
      image: 'images/pj04.jpg',
      link: 'https://www.notion.so/21e979b744f081aca841dbdc2f008c28?source=copy_link',
    },
    {
      id: 6,
      title: '당뇨병 관리 시스템',
      description: 'App | 디자인 · 퍼블리싱',
      image: 'images/pj05.jpg',
      link: 'https://www.notion.so/21e979b744f081cca40aec85ebf8d229?source=copy_link',
    },
    {
      id: 7,
      title: '투표시스템',
      description: 'Web | 디자인 · 퍼블리싱 · 기획',
      image: 'images/pj06.jpg',
      link: 'https://www.notion.so/21e979b744f0808396c6f90a7f1af337?source=copy_link',
    },
  ];

  return (
    <section id="work" className="work__wrap">
      <div className="section__inner">
        <h2 data-aos="fade-in">Project</h2>
        <div>
          <ul className="work__list">
            {projects.map((project, index) => (
              <li key={project.id} data-aos="fade-up" data-aos-duration="500" data-aos-delay={index * 50}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} />
                </a>
                <div className="work__txt">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="https://www.notion.so/21e979b744f08028ba7bd433e058c2af?v=21e979b744f08191b211000c634bf14f&source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="more__btn"
        >
          More
        </a>
      </div>
    </section>
  );
};

export default WorkSection;
