import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * 프로젝트/작업 상세(서브) 페이지 공통 레이아웃
 * - coreFlows: { title, steps[] } 주요 기능 (features에서 변환)
 * - keyLogic: { title, content } 기술적 고민과 해결 (challenges에서 변환)
 */
function ProjectSubLayout({
  title,
  description,
  backTo = '/project',
  backLabel = '목록으로',
  linkInfo = [],
  coreFlows = [],
  keyLogic = [],
  pdfs = [],
  videos = [],
}) {
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideo = useCallback((video) => {
    setActiveVideo(video);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeVideo = useCallback(() => {
    setActiveVideo(null);
    document.body.style.overflow = '';
  }, []);

  // ESC 키로 닫기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeVideo) closeVideo();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideo, closeVideo]);
  return (
    <div className="wrap project-sub">
      <main className="project-sub__main">
        <div className="project-sub__inner">
          <Link to={backTo} className="project-sub__back" aria-label={backLabel}>
            <span className="project-sub__back-icon" aria-hidden>←</span>
            <span className="project-sub__back-text">{backLabel}</span>
          </Link>

          <h1 className="project-sub__title">{title}</h1>

          <div className="project-sub__desc-block">
            {typeof description === 'string' ? (
              <p className="project-sub__desc-text">{description}</p>
            ) : (
              <div className="project-sub__desc-text">{description}</div>
            )}
          </div>

          {linkInfo.length > 0 && (
            <section className="project-sub__info">
              <h2 className="project-sub__info-title">주요 정보 및 링크</h2>
              <dl className="project-sub__info-list">
                {linkInfo.map((item, i) => (
                  <div key={i} className="project-sub__info-item">
                    <dt className="project-sub__info-dt">{item.label}</dt>
                    <dd className="project-sub__info-dd">
                      {item.links?.length ? (
                        <div className="project-sub__info-links">
                          {item.links.map((link, j) => (
                            <a
                              key={j}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-sub__info-link"
                            >
                              {link.text}
                            </a>
                          ))}
                        </div>
                      ) : item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-sub__info-link"
                        >
                          {item.value ?? '링크'}
                        </a>
                      ) : Array.isArray(item.value) ? (
                        <ul className="project-sub__info-ul">
                          {item.value.map((line, j) => (
                            <li key={j}>{line}</li>
                          ))}
                        </ul>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {coreFlows.length > 0 && (
            <section className="project-sub__flows">
              <h2 className="project-sub__flows-title">주요 기능</h2>
              <div className="project-sub__flows-grid">
                {coreFlows.map((flow, i) => (
                  <div key={i} className="project-sub__flow-item">
                    <h3 className="project-sub__flow-title">{flow.title}</h3>
                    <ol className="project-sub__flow-steps">
                      {(flow.steps || []).map((step, j) => (
                        <li key={j}>{step}</li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </section>
          )}

          {keyLogic.length > 0 && (
            <section className="project-sub__logic">
              <h2 className="project-sub__logic-title">기술적 고민과 해결</h2>
              <ul className="project-sub__logic-list">
                {keyLogic.map((item, i) => (
                  <li key={i} className="project-sub__logic-item">
                    <strong className="project-sub__logic-label">{item.title}</strong>
                    <p className="project-sub__logic-content">{item.content}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {pdfs.length > 0 && (
            <section className="project-sub__pdfs">
              <h2 className="project-sub__pdfs-title">관련 자료 (PDF)</h2>
              <ul className="project-sub__pdfs-list">
                {pdfs.map((pdf, i) => (
                  <li key={i} className="project-sub__pdf-item">
                    <a
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-sub__pdf-link"
                    >
                      <span className="project-sub__pdf-link-text">{pdf.title}</span>
                      <span className="project-sub__pdf-link-icon">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {videos.length > 0 && (() => {
            // category별로 그룹핑
            const grouped = {};
            videos.forEach(v => {
              const cat = v.category || '영상';
              if (!grouped[cat]) grouped[cat] = [];
              grouped[cat].push(v);
            });
            const categories = Object.keys(grouped);
            const hasCategories = categories.length > 1 || categories[0] !== '영상';

            return (
              <section className="project-sub__videos">
                <h2 className="project-sub__videos-title">시연 영상</h2>
                {hasCategories ? (
                  categories.map(cat => (
                    <div key={cat} className="project-sub__video-group">
                      <h3 className="project-sub__video-group-label">{cat}</h3>
                      <p className="project-sub__video-inline">
                        {grouped[cat].map((video, i) => (
                          <span key={i}>
                            {i > 0 && <span className="project-sub__video-sep"> · </span>}
                            <button
                              type="button"
                              className="project-sub__video-link"
                              onClick={() => openVideo(video)}
                            >{video.title}</button>
                          </span>
                        ))}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="project-sub__video-inline">
                    {videos.map((video, i) => (
                      <span key={i}>
                        {i > 0 && <span className="project-sub__video-sep"> · </span>}
                        <button
                          type="button"
                          className="project-sub__video-link"
                          onClick={() => openVideo(video)}
                        >{video.title}</button>
                      </span>
                    ))}
                  </p>
                )}
              </section>
            );
          })()}

        </div>
      </main>

      {/* 유튜브 팝업 모달 */}
      {activeVideo && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-modal__content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="video-modal__close"
              onClick={closeVideo}
              aria-label="닫기"
            >
              ✕
            </button>
            <h3 className="video-modal__title">{activeVideo.title}</h3>
            <div className="video-modal__wrapper">
              {activeVideo.embedUrl ? (
                <iframe
                  src={`${activeVideo.embedUrl}?autoplay=1`}
                  title={activeVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-modal__iframe"
                />
              ) : activeVideo.url ? (
                <iframe
                  src={`${activeVideo.url}?autoplay=1`}
                  title={activeVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-modal__iframe"
                />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectSubLayout;
