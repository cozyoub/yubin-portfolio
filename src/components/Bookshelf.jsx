import { useState, useEffect, useRef } from 'react';
import { books } from '../constants/books';
import BookOpen from './BookOpen';

const Bookshelf = () => {
  const [openBook, setOpenBook] = useState(null);
  const [hoveredBook, setHoveredBook] = useState(null);
  const wordRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = openBook ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [openBook]);

  // 이메일 글자 애니메이션 (마운트 시 실행)
  useEffect(() => {
    if (!wordRef.current) return;
    const content = wordRef.current.textContent;
    wordRef.current.innerHTML = '';

    const letters = [];
    for (let i = 0; i < content.length; i++) {
      const letter = document.createElement('span');
      letter.className = 'letter';
      letter.textContent = content.charAt(i);
      wordRef.current.appendChild(letter);
      letters.push(letter);
    }

    letters.forEach((letter, i) => {
      setTimeout(() => {
        letter.classList.add('on');
      }, 600 + i * 80);
    });
  }, []);

  return (
    <>
      <div className="bookshelf">
        {/* 왼쪽: 자기소개 + Contact */}
        <div className="bookshelf__left">
          <div className="bookshelf__profile">
            <h1 className="bookshelf__name">Yubin Portfolio</h1>
            <p className="bookshelf__desc">
              사용자의 경험을 고민해온 퍼블리셔에서,<br />
              구조와 동작을 설계하는 개발자로 성장하고 있습니다.
            </p>
          </div>

          {/* Contact */}
          <div className="bookshelf__contact-section">
            <h2 className="bookshelf__contact-title">Contact</h2>
            <p className="bookshelf__lead">
              함께 고민하고 성장할 사람을 찾고 계신가요?
            </p>
            <div className="bookshelf__email">
              <p className="word" ref={wordRef}>
                cozyoub@gmail.com
              </p>
            </div>
            <div className="bookshelf__actions">
              <a href="mailto:cozyoub@gmail.com" className="bookshelf__action-btn">
                메일 보내기 →
              </a>
            </div>
            <footer className="bookshelf__footer">
              <p>© 2025 youbeanlee</p>
              <div className="bookshelf__footer-links">
                <a href="https://github.com/cozyoub" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://github.com/ubzzang" target="_blank" rel="noopener noreferrer">Dev GitHub</a>
              </div>
            </footer>
          </div>
        </div>

        {/* 오른쪽: 책장 */}
        <div className="bookshelf__right">
          <div className="bookshelf__shelf">
            {/* 안내 문구 / 호버 시 책 설명 */}
            <div className="bookshelf__guide" key={hoveredBook?.id || 'default'}>
              {hoveredBook ? (
                <div className="bookshelf__guide-detail">
                  <p className="bookshelf__guide-title">{hoveredBook.title}</p>
                  <p className="bookshelf__guide-sub">{hoveredBook.subtitle}</p>
                  {hoveredBook.content?.body && (
                    <p className="bookshelf__guide-body">
                      {hoveredBook.content.body.replace(/\n/g, ' ')}
                    </p>
                  )}
                  {hoveredBook.content?.tech && (
                    <div className="bookshelf__guide-meta">
                      <div className="bookshelf__guide-tech">
                        {hoveredBook.content.tech.split(' · ').map((t, i) => (
                          <span key={i} className="bookshelf__guide-tag">{t}</span>
                        ))}
                      </div>
                      <div className="bookshelf__guide-info">
                        {hoveredBook.content.period && <span>{hoveredBook.content.period}</span>}
                        {hoveredBook.content.team && <span>{hoveredBook.content.team}</span>}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <p className="bookshelf__guide-text">Choose a book.</p>
                  <div className="bookshelf__guide-line" />
                  <img src="images/down-arrow.png" alt="" style={{maxHeight: '50px'}}/>
                </>
              )}
            </div>

            {/* 책들 */}
            <div className="bookshelf__books">
              {books.map((book) => (
                <button
                  key={book.id}
                  className={`book-item book-item--${book.id}`}
                  onClick={() => setOpenBook(book)}
                  onMouseEnter={() => setHoveredBook(book)}
                  onMouseLeave={() => setHoveredBook(null)}
                  aria-label={`${book.title} 열기`}
                >
                  <img
                    src={book.spineImage}
                    alt={book.title}
                    className="book-item__img"
                    draggable={false}
                  />
                  <div className="book-item__overlay">
                    <span className="book-item__num">{book.number}</span>
                    <span className="book-item__title">{book.title}</span>
                    <span className="book-item__sub">{book.subtitle}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* 책장 이미지 */}
            <img
              src="images/shelf.png"
              alt=""
              className="bookshelf__shelf-img"
              draggable={false}
            />
          </div>
        </div>
      </div>

      {openBook && (
        <BookOpen book={openBook} onClose={() => setOpenBook(null)} />
      )}
    </>
  );
};

export default Bookshelf;
