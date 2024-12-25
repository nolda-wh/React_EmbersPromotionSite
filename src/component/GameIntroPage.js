import React, { useRef, useEffect, useState } from 'react';


// Import your images here
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';

const FullScreenSection = ({ title, description, backgroundImage, index }) => {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        setOffset(window.scrollY - top);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="full-screen-section"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundPositionY: `${offset * 0.5}px`
      }}
    >
      <div className="content" style={{ transform: `translateY(${offset * 0.2}px)` }}>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
    </section>
  );
};

const StickyImageSection = ({ images, title, description }) => {
  const sectionRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
        const scrollPercentage = Math.max(0, Math.min(1, -top / (height - window.innerHeight)));
        setScrollPercentage(scrollPercentage);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="sticky-section">
      <div className="sticky-content">
        {images.map((image, index) => (
          <div
            key={index}
            className="sticky-background-image"
            style={{
              backgroundImage: `url(${image})`,
              opacity: Math.max(0, Math.min(1, 1 - Math.abs(scrollPercentage * images.length - index))),
              transform: `scale(${1 + Math.abs(scrollPercentage * images.length - index) * 0.1})`,
            }}
          />
        ))}
        <div className="sticky-text" style={{ transform: `translateY(${scrollPercentage * 50}px)` }}>
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
        </div>
      </div>
    </section>
  );
};

const FadeInTextSection = ({ title, description }) => {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        setOffset(window.innerHeight - top);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.min(1, Math.max(0, offset / 300));
  const translateY = Math.max(0, 50 - (offset / 300) * 50);

  return (
    <section ref={sectionRef} className="fade-in-section">
      <div 
        className="fade-in-content"
        style={{ 
          opacity,
          transform: `translateY(${translateY}px)`
        }}
      >
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
    </section>
  );
};

const GameIntroPage = () => {
  return (
    <div className="game-intro-page">
      <FullScreenSection
        title="웰컴 투 판타지 월드"
        description="마법과 모험이 가득한 세계로 여러분을 초대합니다."
        backgroundImage={image1}
        index={0}
      />
      
      <StickyImageSection
        images={[image2, image3, image4]}
        title="다양한 세계를 경험하세요"
        description="스크롤하면서 변화하는 판타지 세계를 느껴보세요."
      />
      
      <FadeInTextSection
        title="영웅이 되어보세요"
        description="당신만의 캐릭터를 만들고 강력한 영웅으로 성장시키세요. 숨겨진 보물과 위험한 몬스터가 기다리는 광활한 세계를 탐험하세요."
      />
      
      <FullScreenSection
        title="지금 바로 시작하세요"
        description="판타지 월드에서 당신만의 이야기를 만들어가세요."
        backgroundImage={image5}
        index={1}
      />
    </div>
  );
};

export default GameIntroPage;