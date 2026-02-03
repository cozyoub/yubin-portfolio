import { useState, useEffect } from 'react';

const ReturnTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const element = document.getElementById('main');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <a
      className="return-top"
      href="#main"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <span className="hidden">RETURN TOP</span>
      <i className="fa-solid fa-arrow-up-long"></i>
    </a>
  );
};

export default ReturnTop;
