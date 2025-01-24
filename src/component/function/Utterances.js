import React, { useEffect, useRef } from 'react';

const Utterances = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('repo', 'nolda-wh/React_EmbersPromotionSite');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-dark');

    containerRef.current.appendChild(script);
  }, []);

  return <div ref={containerRef} />;
};

export default Utterances;
