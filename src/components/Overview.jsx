import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <div id="overview" className="overview">
        <div className="overview__inner">
            <h2 data-aos="fade-in">Overview</h2>
            <p className="sub-title" data-aos="fade-up" data-aos-duration="500">
                Project 페이지에는 프론트엔드 개발자로 전향하며 진행한
                개인 및 팀 프로젝트를 담았습니다.

                기능 구현 과정에서 마주한 문제와 고민,
                이를 해결하기 위한 설계 과정과 학습 기록,
                그리고 실제로 구현한 기능들을 통해
                기술 스택과 문제 해결 방식을 확인하실 수 있습니다.
            </p>
            <p className="sub-title">
                Work 페이지에는 퍼블리싱 및 디자인 중심의 실무 작업물을 담았습니다.
웹 표준과 접근성을 고려한 마크업, 반응형 레이아웃 구현,
디자인 시안 기반의 UI 구현 경험을 통해
사용자 경험과 화면 완성도를 책임졌던 작업들을 확인하실 수 있습니다.

이 경험은 이후 프론트엔드 개발로 확장하는 데 있어
탄탄한 기반이 되었습니다.
            </p>
        <section className="card-wrap">
            <div className="card project" data-aos="fade-up" data-aos-duration="500" data-aos-delay="150">
                <Link to="/project">
                     <h2>Project</h2>
                    <p>프로젝트 소개, 관련 공부 기록</p>
                <button className="circle-btn gray">
                <img src="/images/arrow.svg" alt="Project 페이지로 이동"></img>
                </button>
                </Link>
            </div>

            <div className="card about" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
                <Link to="/work">
                    <h2 className="underline">Work</h2>
                <p>프론트엔드 확장에 대한 탄탄한 기반</p>

                <button className="circle-btn green">
                <img src="/images/arrow.svg" alt="About 페이지로 이동"></img>
                </button>
                </Link>
            </div>
        </section>
        </div>
    </div>
  );
};

export default Overview;
