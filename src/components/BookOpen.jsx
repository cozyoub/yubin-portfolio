import { useState, useEffect, useCallback, useMemo } from 'react';
import { projects } from '../constants/projects';
import { works } from '../constants/work';
import { DEV_SKILLS, DESIGN_SKILLS } from '../constants/skills';
import {
  htmlIcon, cssIcon, jsIcon,
  reactIcon, flutterIcon, axiosIcon, androidIcon,
  springIcon, djangoIcon, pythonIcon,
  mysqlIcon, oracleIcon, gitIcon,
} from '../assets/icons';

/* helpers */
function toEmbed(url) {
  if (!url) return '';
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : url;
}

/* data */
const CAREER_DOC = 'https://www.notion.so/_-22a979b744f08058a767c28298296217?source=copy_link';
const CAREER = [
  { period: '2022.04 - 2025.05', company: '(주)이타즈' },
  { period: '2019.12 - 2022.04', company: '(주)록스' },
  { period: '2019.03 - 2019.11', company: '아이오랩' },
];
const SKILLS = [
  { cat: 'Language', items: [
    { n: 'HTML5', i: htmlIcon, d: '시멘틱 마크업, 웹 접근성' },
    { n: 'CSS', i: cssIcon, d: '반응형 레이아웃, 애니메이션' },
    { n: 'JavaScript', i: jsIcon, d: 'ES6+, 비동기 처리' },
  ]},
  { cat: 'FrontEnd', items: [
    { n: 'React', i: reactIcon, d: '컴포넌트 설계, SPA' },
    { n: 'Flutter', i: flutterIcon, d: '크로스 플랫폼 앱' },
    { n: 'Axios', i: axiosIcon, d: 'API 통신, interceptors' },
    { n: 'Android Studio', i: androidIcon, d: 'Android 앱 개발' },
  ]},
  { cat: 'BackEnd', items: [
    { n: 'Spring Boot', i: springIcon, d: 'REST API, JPA, Security' },
    { n: 'Django', i: djangoIcon, d: '학습 및 실습' },
    { n: 'Python', i: pythonIcon, d: '데이터 처리, 자동화' },
  ]},
  { cat: 'Database', items: [
    { n: 'MySQL', i: mysqlIcon, d: '스키마 설계, 쿼리' },
    { n: 'Oracle', i: oracleIcon, d: '학습 및 실습' },
  ]},
  { cat: 'ETC', items: [
    { n: 'Git', i: gitIcon, d: '버전 관리, 브랜치 전략' },
  ]},
];

/*
  Page 구조:
  cover → { layout:'cover', image, content }        첫장: 사진(좌) / 글(우)
  spread → { layout:'spread', left, right }          나머지: 글(좌) / 글(우)
*/

/* ── About ── */
function aboutPages(book) {
  const allSkills = [...DEV_SKILLS, ...DESIGN_SKILLS];
  return [
    {
      layout: 'cover', image: book.image,
      content: (
        <>
          <h1 className="lBook__title">사용자의 눈으로,<br />개발자의 손으로.</h1>
          <p className="lBook__paragraph">
            퍼블리셔로 시작해 '보이는 것'을 만들었고,
            개발자로 성장하며 '작동하는 것'을 설계합니다.
          </p>
          <hr className="lBook__hr" />
          <small className="lBook__attention">퍼블리셔 경력 6년 · 풀스택 전환 · 정보처리기사</small>
          <div className="lBook__more">
            <a href={CAREER_DOC} target="_blank" rel="noopener noreferrer" className="lBook__more-link">경력기술서 보기 →</a>
          </div>
        </>
      ),
    },
    // ── Magazine (spread: 핵심 키워드) ──
    {
      layout: 'spread',
      left: (
        <>
          <h2 className="lBook__section">About Yubin</h2>
          <div className="lBook__magazine">
            <article className="lBook__magazine-item">
              <span className="lBook__magazine-num">01</span>
              <h4 className="lBook__magazine-keyword">Convergence</h4>
              <p className="lBook__magazine-body">
                6년의 디자인 실무와 컴퓨터공학 전공의 유기적 결합.
                시각적 감각과 기술적 집요함으로 최상의 UX를 설계합니다.
              </p>
            </article>
            <article className="lBook__magazine-item">
              <span className="lBook__magazine-num">02</span>
              <h4 className="lBook__magazine-keyword">Bridge</h4>
              <p className="lBook__magazine-body">
                디자이너의 언어와 개발자의 로직을 완벽히 이해하는 소통가.
                제품의 시작과 끝을 책임지는 올라운더입니다.
              </p>
            </article>
          </div>
        </>
      ),
      right: (
        <>
          <h2 className="lBook__section">&nbsp;</h2>
          <div className="lBook__magazine">
            <article className="lBook__magazine-item">
              <span className="lBook__magazine-num">03</span>
              <h4 className="lBook__magazine-keyword">Value</h4>
              <p className="lBook__magazine-body">
                비즈니스의 목적을 이해하고 사용자 중심의 가치를 코드로 증명합니다.
                끊임없이 고민하며 동료와 함께 성장합니다.
              </p>
            </article>
          </div>
        </>
      ),
    },
    // ── Skills (spread: 카테고리별 카드) ──
    {
      layout: 'spread',
      left: (
        <>
          <h2 className="lBook__section">Skills</h2>
          {SKILLS.slice(0, 3).map((cat) => (
            <div className="lBook__skill-category" key={cat.cat}>
              <h3 className="lBook__skill-cat">{cat.cat}</h3>
              <div className="lBook__skill-grid">
                {cat.items.map((s, j) => (
                  <div className="lBook__skill-card" key={j}>
                    <img src={s.i} alt={s.n} />
                    <div>
                      <strong>{s.n}</strong>
                      <span>{s.d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      ),
      right: (
        <>
          <h2 className="lBook__section">&nbsp;</h2>
          {SKILLS.slice(3).map((cat) => (
            <div className="lBook__skill-category" key={cat.cat}>
              <h3 className="lBook__skill-cat">{cat.cat}</h3>
              <div className="lBook__skill-grid">
                {cat.items.map((s, j) => (
                  <div className="lBook__skill-card" key={j}>
                    <img src={s.i} alt={s.n} />
                    <div>
                      <strong>{s.n}</strong>
                      <span>{s.d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <hr className="lBook__hr" />
          <div className="lBook__badges">
            {allSkills.map((s, i) => (
              <span className="lBook__badge" key={i}><img src={s.src} alt={s.alt} /> {s.alt}</span>
            ))}
          </div>
        </>
      ),
    },
    // ── Experience (spread) ──
    {
      layout: 'spread',
      left: (
        <>
          <h2 className="lBook__section">Experience</h2>
          <div className="lBook__info-block">
            <h3 className="lBook__info-label">경력</h3>
            {CAREER.map((c, i) => (
              <div className="lBook__info-row" key={i}>
                <span className="lBook__info-dt">{c.period}</span>
                <span className="lBook__info-dd">{c.company}</span>
              </div>
            ))}
          </div>
          <hr className="lBook__hr" />
          <div className="lBook__info-block">
            <h3 className="lBook__info-label">학력</h3>
            <div className="lBook__info-row">
              <span className="lBook__info-dt">2025.07 - 2026.02</span>
              <span className="lBook__info-dd">AI&amp;빅데이터 풀스택 개발 수료</span>
            </div>
            <div className="lBook__info-row">
              <span className="lBook__info-dt">2013.03 - 2017.08</span>
              <span className="lBook__info-dd">경성대학교 컴퓨터공학과</span>
            </div>
          </div>
        </>
      ),
      right: (
        <>
          <h2 className="lBook__section">&nbsp;</h2>
          <div className="lBook__info-block">
            <h3 className="lBook__info-label">자격증</h3>
            <div className="lBook__info-row"><span className="lBook__info-dd">정보처리기사</span></div>
          </div>
        </>
      ),
    },
  ];
}

/* ── Project ── */
function projectPages(book) {
  const pj = projects.find((p) => p.slug === book.slug);
  if (!pj) return [{ layout: 'cover', image: book.image, content: <h1 className="lBook__title">{book.title}</h1> }];

  const pages = [];

  // 1) cover (가로 이미지): 위 사진 + 아래 글
  pages.push({
    layout: 'cover', image: pj.image, wide: true,
    content: (
      <>
        <h1 className="lBook__title">{pj.title}</h1>
        <p className="lBook__paragraph">{pj.description}</p>
        <hr className="lBook__hr" />
        <small className="lBook__attention">
          {pj.period} · {pj.type === 'PERSONAL' ? '개인 프로젝트' : `팀 프로젝트 (${pj.teamSize}명)`}
        </small>
      </>
    ),
  });

  // 2) spread: 주요 정보(좌) + 주요 기능(우)
  {
    const info = [];
    if (pj.techStack && typeof pj.techStack === 'object') {
      Object.entries(pj.techStack).forEach(([k, v]) => info.push({ label: k, value: v }));
    }
    if (pj.responsibilities?.length) info.push({ label: '담당 업무', value: pj.responsibilities });

    const links = [];
    if (pj.githubUrl) (Array.isArray(pj.githubUrl) ? pj.githubUrl : [pj.githubUrl]).forEach(u => links.push({ label: 'GitHub', href: u }));
    if (pj.githubUrlBackend) links.push({ label: 'Backend', href: pj.githubUrlBackend });
    if (pj.notionUrl) links.push({ label: 'Notion', href: pj.notionUrl });

    pages.push({
      layout: 'spread',
      left: (
        <>
          <h2 className="lBook__section">주요 정보 및 링크</h2>
          <div className="lBook__dl">
            {info.map((item, i) => (
              <div className="lBook__dl-row" key={i}>
                <dt>{item.label}</dt>
                <dd>{Array.isArray(item.value)
                  ? <ul className="lBook__ul">{item.value.map((v, j) => <li key={j}>{v}</li>)}</ul>
                  : item.value
                }</dd>
              </div>
            ))}
          </div>
          {links.length > 0 && (
            <div className="lBook__link-chips" style={{ marginTop: '1.5vh' }}>
              {links.map((l, i) => (
                <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="lBook__chip">{l.label} ↗</a>
              ))}
            </div>
          )}
        </>
      ),
      right: pj.features?.length ? (
        <>
          <h2 className="lBook__section">주요 기능</h2>
          {pj.features.map((f, i) => (
            <div className="lBook__feature" key={i}>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </>
      ) : null,
    });
  }

  // 3) ERD + Use Case — 한 페이지에 위아래로
  if (pj.erdImage || pj.usecaseImage) {
    pages.push({
      layout: 'spread',
      left: (
        <div className="lBook__diagrams">
          {pj.erdImage && (
            <div className="lBook__diagram-item">
              <div className="lBook__diagram-img">
                <img src={pj.erdImage} alt="ERD" loading="lazy" />
              </div>
              <h3 className="lBook__screen-title">ERD</h3>
            </div>
          )}
          {pj.usecaseImage && (
            <div className="lBook__diagram-item">
              <div className="lBook__diagram-img">
                <img src={pj.usecaseImage} alt="Use Case" loading="lazy" />
              </div>
              <h3 className="lBook__screen-title">Use Case</h3>
            </div>
          )}
        </div>
      ),
      right: pj.architectureImage ? (
        <div className="lBook__screen">
          <div className="lBook__screen-img">
            <img src={pj.architectureImage} alt="Architecture" loading="lazy" />
          </div>
          <h3 className="lBook__screen-title">시스템 도식화</h3>
          <p className="lBook__screen-desc">전체 시스템의 구조와 데이터 흐름을 나타낸 아키텍처 다이어그램입니다.</p>
        </div>
      ) : null,
    });
  }

  // 5) 화면 설명 (2개씩 spread: 왼쪽 화면 + 오른쪽 화면)
  if (pj.screens?.length) {
    for (let i = 0; i < pj.screens.length; i += 2) {
      const sL = pj.screens[i];
      const sR = pj.screens[i + 1];

      const renderScreen = (s) => (
        <div className="lBook__screen">
          <div className="lBook__screen-img">
            <img src={s.image} alt={s.title} loading="lazy" />
          </div>
          <h3 className="lBook__screen-title">{s.title}</h3>
          <p className="lBook__screen-desc">{s.description}</p>
        </div>
      );

      pages.push({
        layout: 'spread',
        left: renderScreen(sL),
        right: sR ? renderScreen(sR) : null,
      });
    }
  }

  // 6) spread: 기술적 고민(좌) + 시연영상·PDF(우)
  {
    const hasChallenge = pj.challenges?.length > 0;
    const hasPdf = pj.pdfs?.length > 0;
    const hasVid = pj.videos?.length > 0;

    if (hasChallenge || hasPdf || hasVid) {
      // 비디오 그룹핑
      const grouped = {};
      if (hasVid) {
        pj.videos.forEach(v => {
          const cat = v.category || '영상';
          if (!grouped[cat]) grouped[cat] = [];
          grouped[cat].push(v);
        });
      }

      pages.push({
        layout: 'spread',
        _videos: hasVid ? pj.videos : null,
        left: hasChallenge ? (
          <>
            <h2 className="lBook__section">기술적 고민과 해결</h2>
            {pj.challenges.map((c, i) => (
              <div className="lBook__challenge" key={i}>
                <strong>{c.issue}</strong>
                <p>{c.solution}</p>
              </div>
            ))}
          </>
        ) : null,
        right: (hasPdf || hasVid) ? (
          <>
            {hasVid && (
              <>
                <h2 className="lBook__section">시연 영상</h2>
                {Object.entries(grouped).map(([cat, vids]) => (
                  <div className="lBook__video-group" key={cat}>
                    <h3 className="lBook__video-cat">{cat}</h3>
                    <p className="lBook__video-links">
                      {vids.map((v, i) => (
                        <span key={i}>
                          {i > 0 && ' · '}
                          <button type="button" className="lBook__video-btn" data-video-idx={`${cat}-${i}`}>{v.title}</button>
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </>
            )}
            {hasPdf && (
              <>
                {hasVid && <hr className="lBook__hr" />}
                <h2 className="lBook__section">관련 자료</h2>
                <div className="lBook__pdf-list">
                  {pj.pdfs.map((pdf, i) => (
                    <button key={i} type="button" className="lBook__pdf-btn lBook__chip" data-pdf-url={pdf.url} data-pdf-title={pdf.title}>{pdf.title}</button>
                  ))}
                </div>
              </>
            )}
          </>
        ) : null,
      });
    }
  }

  return pages;
}

/* ── Work ── */
function workPages(book) {
  const pages = [];
  // cover
  pages.push({
    layout: 'cover', image: book.image,
    content: (
      <>
        <h1 className="lBook__title">퍼블리싱 실무</h1>
        <p className="lBook__paragraph">
          6년간의 웹 퍼블리싱 및 디자인 실무 작업물.<br />
          웹 표준, 반응형 레이아웃, 디자인 시안 기반 UI 구현 경험.
        </p>
      </>
    ),
  });

  // 각 work: 왼쪽 사진 + 오른쪽 글
  works.forEach((w) => {
    pages.push({
      layout: 'spread',
      left: (
        <div className="lBook__work-photo">
          <img src={w.image} alt={w.title} loading="lazy" />
          {w.deployUrl && (
            <a href={w.deployUrl} target="_blank" rel="noopener noreferrer" className="lBook__work-visit">사이트 방문 ↗</a>
          )}
        </div>
      ),
      right: (
        <>
          <h2 className="lBook__section">{w.title}</h2>
          <span className="lBook__work-type">{w.type}</span>
          <p className="lBook__paragraph">{w.detailDescription || w.shortDescription}</p>
          <div className="lBook__dl">
            {w.period && <div className="lBook__dl-row"><dt>기간</dt><dd>{w.period}</dd></div>}
            {w.contribution && <div className="lBook__dl-row"><dt>기여</dt><dd>{w.contribution}</dd></div>}
            {w.role && <div className="lBook__dl-row"><dt>역할</dt><dd>{w.role}</dd></div>}
            {w.techStack && <div className="lBook__dl-row"><dt>기술</dt><dd>{w.techStack}</dd></div>}
          </div>
          {w.relatedLinks?.length > 0 && (
            <>
              <hr className="lBook__hr" />
              <div className="lBook__link-chips">
                {w.relatedLinks.slice(0, 5).map((l, j) => (
                  <a key={j} href={l.url} target="_blank" rel="noopener noreferrer" className="lBook__chip">{l.text} ↗</a>
                ))}
              </div>
            </>
          )}
          {w.notionUrl && (
            <div className="lBook__more">
              <a href={w.notionUrl} target="_blank" rel="noopener noreferrer" className="lBook__more-link">상세 보기 →</a>
            </div>
          )}
        </>
      ),
    });
  });
  return pages;
}

/* ── Contact ── */
function contactPages(book) {
  return [{
    layout: 'spread',
    left: (
      <>
        <h2 className="lBook__section">Contact</h2>
        <p className="lBook__paragraph">새로운 도전을 함께할 팀을 찾고 있습니다.<br />편하게 연락 주세요.</p>
      </>
    ),
    right: (
      <>
        <h2 className="lBook__section">Info</h2>
        <div className="lBook__dl">
          <div className="lBook__dl-row"><dt>Email</dt><dd><a href={`mailto:${book.content.email}`} className="lBook__text-link">{book.content.email}</a></dd></div>
          <div className="lBook__dl-row"><dt>Phone</dt><dd>{book.content.phone}</dd></div>
          <div className="lBook__dl-row"><dt>GitHub</dt><dd><a href={book.content.github} target="_blank" rel="noopener noreferrer" className="lBook__text-link">github.com/ubzzang</a></dd></div>
          <div className="lBook__dl-row"><dt>GitHub 2</dt><dd><a href={book.content.github2} target="_blank" rel="noopener noreferrer" className="lBook__text-link">github.com/cozyoub</a></dd></div>
        </div>
      </>
    ),
  }];
}

function buildPages(book) {
  switch (book.type) {
    case 'about': return aboutPages(book);
    case 'project': return projectPages(book);
    case 'work': return workPages(book);
    case 'contact': return contactPages(book);
    default: return [{ layout: 'spread', left: <h2 className="lBook__section">{book.title}</h2>, right: null }];
  }
}

/* ═══ BookOpen ═══ */
const BookOpen = ({ book, onClose }) => {
  const [current, setCurrent] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activePdf, setActivePdf] = useState(null);

  const pages = useMemo(() => buildPages(book), [book]);
  const total = pages.length;
  const page = pages[current];

  const goNext = useCallback(() => { if (current < total - 1) setCurrent(c => c + 1); }, [current, total]);
  const goPrev = useCallback(() => { if (current > 0) setCurrent(c => c - 1); }, [current]);

  // 비디오/PDF 버튼 클릭
  const handleClick = useCallback((e) => {
    // PDF 버튼
    const pdfBtn = e.target.closest('.lBook__pdf-btn');
    if (pdfBtn) {
      e.preventDefault();
      const url = pdfBtn.getAttribute('data-pdf-url');
      const title = pdfBtn.getAttribute('data-pdf-title');
      if (url) setActivePdf({ url, title });
      return;
    }
    // 비디오 버튼
    const btn = e.target.closest('.lBook__video-btn');
    if (!btn) return;
    const videos = page._videos;
    if (!videos) return;
    const idx = btn.getAttribute('data-video-idx');
    if (!idx) return;
    const [cat, i] = idx.split('-');
    const grouped = {};
    videos.forEach(v => { const c = v.category || '영상'; if (!grouped[c]) grouped[c] = []; grouped[c].push(v); });
    const vid = grouped[cat]?.[parseInt(i)];
    if (vid) setActiveVideo(vid);
  }, [page]);

  useEffect(() => {
    const h = (e) => {
      if (e.key === 'Escape') { if (activeVideo) setActiveVideo(null); else if (activePdf) setActivePdf(null); else onClose(); }
      if (!activeVideo && !activePdf && e.key === 'ArrowRight') goNext();
      if (!activeVideo && !activePdf && e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose, goNext, goPrev, activeVideo]);

  return (
    <div className="lBook">
      <div className="lBook__inner">
        <div className={`lBook__body ${page.layout === 'cover' ? (page.wide ? 'lBook__body--cover-wide' : 'lBook__body--cover') : 'lBook__body--spread'}`} key={current}>

          {/* 페이지 번호 */}
          <div className="lBook__index">
            <span className="lBook__index-cur">{String(current + 1).padStart(2, '0')}</span>
            <span className="lBook__index-tot">{String(total).padStart(2, '0')}</span>
          </div>

          {page.layout === 'cover' ? (
            <>
              {/* cover: 사진(좌) + 글(우) */}
              <div className="lBook__thumbnail">
                <div className="lBook__thumbnail-img">
                  <img src={page.image} alt="" loading="lazy" />
                </div>
              </div>
              <div className="lBook__content">{page.content}</div>
            </>
          ) : (
            <>
              {/* spread: 글(좌) + 글(우) */}
              <div className="lBook__page lBook__page--left" onClick={handleClick}>
                {page.left}
              </div>
              <div className="lBook__spine" />
              <div className="lBook__page lBook__page--right" onClick={handleClick}>
                {page.right}
              </div>
            </>
          )}
        </div>

        {/* Navigation */}
        <div className="lBook__navigation">
          {current > 0 && (
            <button className="lBook__nav-item lBook__nav-item--prev" onClick={goPrev}>
              <svg className="lBook__nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6" /></svg>
              <span className="lBook__nav-text">PREV</span>
            </button>
          )}
          {current < total - 1 && (
            <button className="lBook__nav-item lBook__nav-item--next" onClick={goNext}>
              <span className="lBook__nav-text">NEXT</span>
              <svg className="lBook__nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          )}
          <button className="lBook__nav-item lBook__nav-item--back" onClick={onClose}>CLOSE</button>
        </div>
      </div>

      {/* YouTube 팝업 */}
      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div className="video-modal__content" onClick={e => e.stopPropagation()}>
            <button type="button" className="video-modal__close" onClick={() => setActiveVideo(null)}>✕</button>
            <h3 className="video-modal__title">{activeVideo.title}</h3>
            <div className="video-modal__wrapper">
              <iframe src={`${toEmbed(activeVideo.url)}?autoplay=1`} title={activeVideo.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="video-modal__iframe" />
            </div>
          </div>
        </div>
      )}

      {/* PDF 팝업 */}
      {activePdf && (
        <div className="pdf-modal" onClick={() => setActivePdf(null)}>
          <div className="pdf-modal__content" onClick={e => e.stopPropagation()}>
            <div className="pdf-modal__header">
              <h3 className="pdf-modal__title">{activePdf.title}</h3>
              <div className="pdf-modal__actions">
                <a href={activePdf.url} target="_blank" rel="noopener noreferrer" className="pdf-modal__open-btn">새 탭에서 열기 ↗</a>
                <button type="button" className="pdf-modal__close" onClick={() => setActivePdf(null)}>✕</button>
              </div>
            </div>
            <div className="pdf-modal__body">
              <embed src={`${activePdf.url}#toolbar=1&navpanes=0`} type="application/pdf" className="pdf-modal__embed" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookOpen;
