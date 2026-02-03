import { Link } from 'react-router-dom';

/**
 * 프로젝트/작업 상세(서브) 페이지 공통 레이아웃
 * - 뒤로가기 버튼, 제목, 설명 블록, 주요 정보 및 링크 정보(dl)
 * @param {string} backTo - 뒤로가기 링크 (기본: /project)
 * @param {Array<{ label: string, value?: string | string[], href?: string, links?: Array<{ text: string, href: string }> }>} linkInfo - 주요 정보 (value 배열이면 ul/li, links면 링크 버튼 여러 개)
 * @param {Array<{ title: string, url?: string, embedUrl?: string, videoUrl?: string }>} videos - 시연 영상 목록 (url: YouTube/Vimeo 링크, embedUrl: 임베드 URL, videoUrl: 직접 비디오 파일 경로)
 */
function ProjectSubLayout({
  title,
  description,
  backTo = '/project',
  backLabel = '목록으로',
  linkInfo = [],
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
              <h2 className="project-sub__info-title">주요 정보 및 링크 정보</h2>
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
