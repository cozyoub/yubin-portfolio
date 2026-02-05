const MainSection = () => {
  return (
    <section id="main" className="ke-section ke-section--hero">
      <div className="ke-hero">
        <h1 className="ke-hero__title">
          <span className="ke-hero__line" data-aos="fade-up" data-aos-duration="800">
            디자인과 개발의
          </span>
          <span className="ke-hero__line ke-hero__line--accent" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            경계를 넘어
          </span>
        </h1>
        <p className="ke-hero__desc" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          6년의 퍼블리싱 경험 위에 개발 역량을 쌓은<br />
          풀스택 개발자 이유빈입니다
        </p>
      </div>
      <div className="ke-scroll" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <span>SCROLL</span>
      </div>
    </section>
  );
};

export default MainSection;
