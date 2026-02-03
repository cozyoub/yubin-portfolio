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
      <div className="blur"></div>
      <div className="blur"></div>
      <div className="blur"></div>
      <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
        YOUBIN'S<br />WEB PORTFOLIO
      </h1>
     <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
        안녕하세요. <br />
        프론트엔드 개발자로 전환 중인 이유빈입니다. <br />
        6년간의 퍼블리싱 경험을 바탕으로 React와 JavaScript를 학습하며 실제 작동하는 서비스를 구현하고 있습니다. <br />
        함께 고민하고, 함께 성장하며 더 나은 제품을 만들어가고 싶습니다.
      </p>
    </section>
  );
};

export default MainSection;
