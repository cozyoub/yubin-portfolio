import { useEffect, useState, useRef } from 'react';

const ContactSection = () => {
  const [animationExecuted, setAnimationExecuted] = useState(false);
  const wordRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const target = document.getElementById('contact');
      if (!target) return;

      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0 && !animationExecuted) {
        splitLetters();
        setAnimationExecuted(true);
      }
    };

    const splitLetters = () => {
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
        }, 350 + i * 80);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animationExecuted]);

  return (
    <section id="contact" className="footer__wrap">
      <footer className="contact__center">
        <div className="footer__inner">
          <div className="contact__txt_1">
            <p
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              함께 고민하고 성장할 사람을 찾고 계신가요?
            </p>
          </div>
          <div className="contact">
            <p className="word" ref={wordRef}>
              cozyoub@gmail.com
            </p>
          </div>
          <div
            className="contact__txt_2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <p className="mb20">
              저에게 궁금한 점이 있으시다면 연락해 주세요 :)
              <br className="m-block" />
              빠르게 답장 드리겠습니다!
            </p>
            <a href="mailto:cozyoub@gmail.com" className="shortcut__arrow">
              메일보내기 <i className="fa-solid fa-circle-chevron-right"></i>
            </a>
          </div>
          <div className="copyright">
            <p className="copyright__txt">© 2025 youbeanlee</p>
            <ul className="link__box">
              <li>
                <a
                  href="https://github.com/cozyoub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </a>
                <a
                  href="https://github.com/ubzzang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Develope GITHUB
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
