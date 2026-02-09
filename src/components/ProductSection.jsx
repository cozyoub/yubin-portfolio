import { useState, useEffect, useRef } from 'react';

const ProductSection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [activeImage, setActiveImage] = useState(null);
  const [showCursor, setShowCursor] = useState(false);
  const cursorRef = useRef(null);

  const products = [
    {
      id: 1,
      title: '저속노화 습관트래커',
      tags: '#Spring boot #React',
      description: '개인프로젝트',
      image: 'images/dv02.png',
      imageId: 'img5',
      link: 'https://www.notion.so/2cd979b744f080bfaa7efd6fdd1396fd?source=copy_link',
    },
    {
      id: 2,
      title: '크롤링데이터 기반 중고책 거래 플랫폼',
      tags: '#Spring boot',
      description: '팀프로젝트',
      image: 'images/dv01.png',
      imageId: 'img4',
      link: 'https://www.notion.so/2cd979b744f080a3aabde8c5838cc140?source=copy_link',
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMouseEnter = (imageId) => {
    setActiveImage(imageId);
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setActiveImage(null);
    setShowCursor(false);
  };

  return (
    <>
      <section id="product" className="product_wrap">
        <div className="section__inner">
          <h2 data-aos="fade-in">DEVELOPMENT</h2>
          <h5 data-aos="fade-in">
            Spring Boot 기반의 백엔드와 React 프론트엔드를 연동하여
            <br />
            서비스 구조 설계부터 기능 구현까지 직접 개발한 프로젝트입니다.
          </h5>
          <div>
            <ul className="product__list">
              {products.map((product) => (
                <li key={product.id} data-aos="fade-up">
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => handleMouseEnter(product.imageId)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <figure className="img__box">
                      <img src={product.image} alt={product.title} />
                    </figure>
                    <div className="product__text">
                      <h5>{product.title}</h5>
                      <p className="hash">
                        {product.tags.split(' ').map((tag, index) => (
                          <span key={index}>{tag}</span>
                        ))}
                      </p>
                      <p className="desc">{product.description}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 커서 이미지 박스 */}
      <div className="cursor">
        <div
          className={`img-box ${showCursor ? 'on' : ''}`}
          ref={cursorRef}
          style={{
            top: `${cursorPosition.y}px`,
            left: `${cursorPosition.x}px`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.imageId}
              id={product.imageId}
              className={`image ${activeImage === product.imageId ? 'on' : ''}`}
            >
              <img src={product.image} alt={product.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
