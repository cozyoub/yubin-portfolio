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
    <section id="contact" className="contact-section">
      <div className="section__inner">
        <h2 data-aos="fade-up">Contact</h2>
        <p className="contact-section__lead" data-aos="fade-up" data-aos-delay="100">
          함께 고민하고 성장할 사람을 찾고 계신가요?
        </p>
        <div className="contact-section__email">
          <p className="word" ref={wordRef}>
            cozyoub@gmail.com
          </p>
        </div>
        <div className="contact-section__actions" data-aos="fade-up" data-aos-delay="200">
          <a href="mailto:cozyoub@gmail.com" className="contact-section__btn">
            메일 보내기 →
          </a>
        </div>
        <footer className="contact-section__footer">
          <p>© 2025 youbeanlee</p>
          <div className="contact-section__links">
            <a href="https://github.com/cozyoub" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://github.com/ubzzang" target="_blank" rel="noopener noreferrer">Dev GitHub</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
