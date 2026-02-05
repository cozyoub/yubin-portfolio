import { Link } from 'react-router-dom';
import { projects } from '../constants/projects';

const ProjectShowcase = () => {
  const showcaseProjects = projects.slice(0, 3);

  return (
    <section className="ke-section ke-section--projects">
      <div className="ke-projects">
        <div className="ke-projects__header">
          <p className="ke-label" data-aos="fade-up" data-aos-duration="800">PROJECTS</p>
          <h2 className="ke-title" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            프로젝트
          </h2>
        </div>

        <div className="ke-projects__list">
          {showcaseProjects.map((project, index) => (
            <Link
              to={`/project/${project.slug}`}
              key={project.id}
              className="ke-project-item"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              <div className="ke-project-item__img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="ke-project-item__info">
                <span className="ke-project-item__num">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="ke-project-item__title">{project.title}</h3>
                <p className="ke-project-item__desc">{project.shortDescription}</p>
                <span className="ke-project-item__type">
                  {project.type === 'TEAM' ? 'Team Project' : 'Personal Project'}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="ke-projects__cta" data-aos="fade-up" data-aos-duration="800">
          <Link to="/project" className="ke-btn ke-btn--outline">
            전체 프로젝트 보기
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
