import { Link } from 'react-router-dom';
import { projects } from '../constants/projects';

const ProjectShowcase = () => {
  // 메인에 표시할 프로젝트 (최대 3개)
  const showcaseProjects = projects.slice(0, 3);

  return (
    <section className="project-showcase">
      <div className="project-showcase__inner">
        <div className="project-showcase__header">
          <h2 data-aos="fade-in">Featured Projects</h2>
        </div>

        <div className="project-showcase__list">
          {showcaseProjects.map((project, index) => (
            <Link
              to={`/project/${project.slug}`}
              key={project.id}
              className="project-showcase__item group"
              data-aos="fade-up"
              data-aos-delay={150 + index * 100}
            >
              <div className="project-showcase__content">
                <div className="project-showcase__meta">
                  <span className="project-showcase__number">NO. {String(index + 1).padStart(2, '0')}</span>
                  <div className="project-showcase__divider"></div>
                  <span className="project-showcase__info">
                    {project.type === 'TEAM' ? '팀 프로젝트' : '1인 프로젝트'} · {project.period}
                  </span>
                </div>

                <h3 className="project-showcase__title">
                  {project.title.split(' ').map((word, i) => (
                    <span key={i} className="project-showcase__title-word">{word}</span>
                  ))}
                </h3>

                <p className="project-showcase__desc">{project.shortDescription}</p>

                <div className="project-showcase__tags">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="project-showcase__tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-showcase__image-wrap">
                <div className="project-showcase__image-bg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-showcase__image"
                  />
                </div>
                <div className="project-showcase__image-overlay"></div>
                <div className="project-showcase__cta">
                  <span className="project-showcase__cta-text">Case Study</span>
                  <div className="project-showcase__cta-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </div>
                </div>
                <div className="project-showcase__cta-mobile">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="project-showcase__more" data-aos="fade-up">
          <Link to="/project" className="project-showcase__more-btn">
            모든 프로젝트 보기
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
