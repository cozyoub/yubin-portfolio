import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Base path를 CSS 변수로 설정 (GitHub Pages용)
const basePath = import.meta.env.BASE_URL;
const style = document.documentElement.style;
style.setProperty('--base-path', basePath);
style.setProperty('--bg-image-1', `url(${basePath}images/bg-txt-gray-1.png)`);
style.setProperty('--bg-image-2', `url(${basePath}images/about/signature.svg)`);
style.setProperty('--bg-image-3', `url(${basePath}images/overview_box_shape.webp)`);
style.setProperty('--bg-image-4', `url(${basePath}images/overview_box_shape_hover1.webp)`);
style.setProperty('--bg-image-5', `url(${basePath}images/overview_box_shape_hover2.webp)`);
style.setProperty('--bg-image-6', `url(${basePath}images/texture_background.webp)`);

// AOS 초기화 (메인 화면 스크롤 애니메이션)
AOS.init({
  duration: 600,
  once: true,
  offset: 80,
  easing: 'ease-out-cubic',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
