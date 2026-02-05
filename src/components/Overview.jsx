import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <section id="overview" className="ke-section ke-section--work">
      <div className="ke-work">
        <p className="ke-label" data-aos="fade-up" data-aos-duration="800">WORK</p>
        <h2 className="ke-title ke-title--large" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          실무 경험
        </h2>
        <p className="ke-work__desc" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          웹 표준, 접근성, 반응형 레이아웃<br />
          6년간의 퍼블리싱 작업물
        </p>
        <Link to="/work" className="ke-btn ke-btn--large" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          작업물 보기
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Overview;
