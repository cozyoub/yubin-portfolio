import { Link } from 'react-router-dom';

/**
 * 프로젝트/작업 상세(서브) 페이지 공통 레이아웃
 * - coreFlows: { title, steps[] } 핵심 플로우 3~5개
 * - keyLogic: { title, content } 로직 설명 3~5개
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
              <h2 className="project-sub__flows-title">핵심 플로우</h2>
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
              <h2 className="project-sub__logic-title">로직 설명</h2>
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

          {videos.length > 0 && (
            <section className="project-sub__videos">
              <h2 className="project-sub__videos-title">시연 영상</h2>
              <div className="project-sub__videos-grid">
                {videos.map((video, i) => (
                  <div key={i} className="project-sub__video-item">
                    <h3 className="project-sub__video-title">{video.title}</h3>
                    <div className="project-sub__video-wrapper">
                      {video.embedUrl ? (
                        <iframe
                          src={video.embedUrl}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="project-sub__video-embed"
                        />
                      ) : video.videoUrl ? (
                        <video
                          src={video.videoUrl}
                          controls
                          className="project-sub__video-player"
                        >
                          브라우저가 비디오 태그를 지원하지 않습니다.
                        </video>
                      ) : video.url ? (
                        <a
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-sub__video-link"
                        >
                          <span className="project-sub__video-link-text">영상 보기</span>
                          <span className="project-sub__video-link-icon">↗</span>
                        </a>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>
    </div>
  );
}

export default ProjectSubLayout;
