/*
    조우현 - Woohyun Cho
    tlrmsjtm77@gmail.com
    https://nolda.site
*/

import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function Blog_Parse() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);  // 로딩 상태 추가
  let currentIndex = 0;

  const corsProxies = [
    'https://corsproxy.io/?',
    'https://vercel-cors-proxy-puce.vercel.app/?url=',
    //프록시추가가능
  ];

  const nextProxy = () => {
    currentIndex = (currentIndex + 1) % corsProxies.length;
    return corsProxies[currentIndex];
  };

  useEffect(() => {
    fetch(nextProxy() + 'https://api.velog.io/rss/@usfree')
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        const items = xml.querySelectorAll('item');
        let postsArray = Array.from(items).map(item => {
          const description = item.querySelector('description').textContent;
          // Create a temporary DOM element to parse HTML
          const tempElement = document.createElement('div');
          tempElement.innerHTML = description;
          const firstImage = tempElement.querySelector('img');
          const imageUrl = firstImage ? firstImage.getAttribute('src') : null;
          const cleanDescription = tempElement.textContent || tempElement.innerText || '';
  
          return {
            title: item.querySelector('title').textContent,
            link: item.querySelector('link').textContent,
            description: cleanDescription,
            imageUrl: imageUrl,
            pubDate: item.querySelector('pubDate').textContent,
          };
        });
  
        // '잉걸불'이 제목에 포함된 글만 필터링
        postsArray = postsArray
          .filter(post => post.title.includes('잉걸불'))
          .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate)) // 날짜 기준 정렬
          .slice(0, 6); // 최대 6개로 제한
  
        setPosts(postsArray);
        setLoading(false); // 데이터 로드 완료 후 로딩 상태 false로 설정
      })
      .catch(error => {
        console.error('Error fetching the RSS feed:', error);
        setLoading(true); // 에러 발생 시에도 로딩 true
      });
  }, []);
  

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="container-sm">
      <div className="row gx-5 justify-content-center">
        <div className='mb-5'>
          {loading ? (  // 로딩 상태일 때 로딩 메시지 표시
            <div className="font-11 text-black fs-5 justify-content-center d-grid pt-7">
              <div className="justify-content-center d-flex mb-3">
                <div class="ui-loader loader-blk">
                    <svg viewBox="22 22 44 44" class="multiColor-loader">
                        <circle cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6" class="loader-circle loader-circle-animation"></circle>
                    </svg>
                </div>
              </div>
              <span className="text-center mt-2 vh-100">글 목록을 불러오는 중입니다.<br/>잠시만 기다려주세요.</span>
              </div>
          ) : (
            <div className="row row-cols-1 row-cols-lg-1 align-items-stretch g-4">
              {posts.map((post, index) => {
                const formattedDate = format(new Date(post.pubDate), 'yyyy. MM. dd.');
                const truncatedTitle = truncateText(post.title, 35);
                const truncatedDescription = truncateText(post.description, 200);

                return (
                    <div className="col">
                      <a href={post.link}>
                          <div key={index} className="card rounded-0"> 
                              <div className="text-black">
                                  <div className="row row-cols-lg-1">
                                    <div className='col-lg-7 order-lg-1 order-2 p-4 pb-0'>
                                        <div className="mb-3 fs-4 fw-bold font-11 mx-3 text-black p-2">{truncatedTitle}</div>
                                        <div className='mx-3 fs-6 font-11 p-2 pb-0'><span className="text-black">{truncatedDescription}</span></div>
                                        <ul className="list-unstyled mt-auto">
                                            <li className="d-flex align-items-center me-3 mx-3 mt-3">
                                                <span className="fs-7 p-2 font-11 pt-5 pb-0">{formattedDate}</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-lg-5 order-lg-2 order-1'>
                                        <div className='card-border-0 card-relative'>
                                        {post.imageUrl && <img className="card-image-main" src ={post.imageUrl} alt="Post thumbnail" ></img>}
                                        </div>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </a>
                  </div>
                );
            })}
            </div>

          )}
        </div>
      </div>
    </div>
  );
}

export default Blog_Parse;
