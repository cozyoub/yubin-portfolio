import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <div id="overview" className="overview">
      <div className="section__inner">
        <h2 data-aos="fade-up">More Work</h2>
        <p className="sub-title" data-aos="fade-up" data-aos-delay="100">
          6년간의 퍼블리싱 및 디자인 실무 작업물을 담았습니다.<br />
          웹 표준, 반응형 레이아웃, 디자인 시안 기반 UI 구현 경험을 확인하실 수 있습니다.
        </p>
        <section className="card-wrap" data-aos="fade-up" data-aos-delay="200">
          <div className="card">
            <Link to="/work">
              <h2>Work →</h2>
              <p>퍼블리싱 · 디자인 실무 작업물</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Overview;
