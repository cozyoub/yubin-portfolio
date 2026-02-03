import { Link } from 'react-router-dom';

/**
 * 퍼블리싱 작업 상세 페이지 레이아웃
 */
function WorkSubLayout({
  title,
  description,
  workInfo = [],
  responsibilities = [],
  achievements = [],
  relatedLinks = []
}) {
  return (
    <div className="wrap work-sub">
      <main className="work-sub__main">
        <div className="work-sub__inner">
          <Link to="/work" className="work-sub__back" aria-label="작업 목록으로">
            <span className="work-sub__back-icon" aria-hidden>
              <img src='/images/back.webp' alt="" />
            </span>
          </Link>

          <h1 className="work-sub__title">{title}</h1>

          {/* 간략한 소개 */}
          <div className="work-sub__desc-block">
            {typeof description === 'string' ? (
              <p className="work-sub__desc-text">{description}</p>
            ) : (
              <div className="work-sub__desc-text">{description}</div>
            )}
          </div>

          {/* 주요 정보 */}
          {workInfo.length > 0 && (
            <section className="work-sub__info">
              <h2 className="work-sub__info-title">주요 정보 및 링크 정보</h2>
              <dl className="work-sub__info-list">
                {workInfo.map((item, i) => (
                  <div key={i} className="work-sub__info-item">
                    <dt className="work-sub__info-dt">{item.label}</dt>
                    <dd className="work-sub__info-dd">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-sub__info-link"
                        >
                          {item.value ?? '링크 바로가기'}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {/* 담당 업무 */}
          {responsibilities.length > 0 && (
            <section className="work-sub__section">
              <h2 className="work-sub__section-title">담당 업무</h2>
              <ul className="work-sub__list">
                {responsibilities.map((item, i) => (
                  <li key={i} className="work-sub__list-item">{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* 주요 성과 */}
          {achievements.length > 0 && (
            <section className="work-sub__section">
              <h2 className="work-sub__section-title">주요 성과</h2>
              <ul className="work-sub__list">
                {achievements.map((item, i) => (
                  <li key={i} className="work-sub__list-item">{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* OVERVIEW - 관련 링크 */}
          {relatedLinks.length > 0 && (
            <section className="work-sub__overview">
              <h2 className="work-sub__overview-title">OVERVIEW</h2>
              <div className="work-sub__links-grid">
                {relatedLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-sub__link-card"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default WorkSubLayout;