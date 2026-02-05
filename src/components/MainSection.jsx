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
        YUBIN'S<br />WEB PORTFOLIO
      </h1>
     <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
        안녕하세요. 풀스택 개발자 이유빈입니다. <br />
        컴퓨터공학 전공과 6년간의 디자인 실무 경험을 결합하여  <br />
        사용자 관점과 기술적 관점을 모두 갖춘 서비스를 설계하고 구현합니다. <br />
        사용자 경험과 기술적 완성도를 모두 고민하며, 
        함께 성장하고 더 나은 제품을 만들어가고 싶습니다.
      </p>
    </section>
  );
};

export default MainSection;
