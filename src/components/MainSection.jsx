import { useEffect } from 'react';
import gsap from 'gsap';

const MainSection = () => {
  useEffect(() => {
    const randomX = random(-400, 400);
    const randomY = random(-200, 200);
    const randomTime = random(6, 12);
    const randomTime2 = random(5, 6);
    const randomAngle = random(-30, 150);

    const blurs = gsap.utils.toArray('.blur');

    blurs.forEach((blur) => {
      gsap.set(blur, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1),
      });

      moveX(blur, 1);
      moveY(blur, -1);
      rotate(blur, 1);
    });

    function rotate(target, direction) {
      gsap.to(target, randomTime2(), {
        rotation: randomAngle(direction),
        ease: 'sine.inOut',
        onComplete: rotate,
        onCompleteParams: [target, direction * -1],
      });
    }

    function moveX(target, direction) {
      gsap.to(target, randomTime(), {
        x: randomX(direction),
        ease: 'sine.inOut',
        onComplete: moveX,
        onCompleteParams: [target, direction * -1],
      });
    }

    function moveY(target, direction) {
      gsap.to(target, randomTime(), {
        y: randomY(direction),
        ease: 'sine.inOut',
        onComplete: moveY,
        onCompleteParams: [target, direction * -1],
      });
    }

    function random(min, max) {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    }
  }, []);

  return (
    <section id="main" className="main__wrap">
      {/* <div className="blur"></div>
      <div className="blur"></div>
      <div className="blur"></div> */}
      <div className="section__inner">
        <h1 data-aos="fade-up" data-aos-duration="500">
          사용자의 시선 <span class="icon-wrapper"></span>을 읽고<br />
          개발자의 기술 <span class="icon-wrapper"></span>로 구현하는<br />
          <span class="name-highlight">풀스택 개발자 이유빈</span>입니다.
        </h1>
        <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
          디자이너의 추상적인 언어를 기술적인 로직으로, 개발자의 복잡한 코드를 직관적인 화면으로 완벽하게 번역합니다.<br />
          6년 동안 수많은 프로젝트의 최전선에서 사용자 인터페이스(UI)를 고민해왔습니다. 이제는 그 고민을 코드라는 강력한 도구로 직접 실현합니다.<br />
          디자인 시스템의 구조를 누구보다 잘 이해하기에, 재사용 가능하고 유지보수가 쉬운 컴포넌트 설계를 지향합니다.
        </p>
      </div>
    </section>
  );
};

export default MainSection;
