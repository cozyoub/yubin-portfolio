import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { works } from '../constants/work.jsx';

function WorkPage() {
  return (
    <div className="wrap project-page">
      <Header />
      <main className="project-page__main">
        <div className="project-page__inner">
          <h1 className="project-page__title">
            PUBLISHING WORK
            <span className="project-page__title-icon" aria-hidden></span>
          </h1>
          <p className="project-page__desc">
            실무에서 진행한 퍼블리싱 작업들입니다.
          </p>

          {/* 작업 카드 그리드 */}
          <section className="project-page__grid">
            {works.length > 0 ? (
              works.map((work) => (
                <Link
                  key={work.id}
                  to={`/work/${work.slug}`}
                  className="project-page__card"
                >
                  <div className="project-page__card-img-box">
                    {work.image && (
                      <img
                        src={work.image}
                        alt=""
                        className="project-page__card-img"
                      />
                    )}
                  </div>
                  <div className="project-page__card-text">
                    <h3 className="project-page__card-title">{work.title}</h3>
                    <p className="project-page__card-desc">{work.shortDescription}</p>
                    <span className="project-page__card-arrow" aria-hidden>→</span>
                  </div>
                </Link>
              ))
            ) : (
              <p className="project-page__empty">등록된 작업이 없습니다.</p>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

export default WorkPage;