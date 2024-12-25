import React, { useState, useEffect } from 'react';
import banner from '../images/image8.png';
import Utterances from './function/Utterances';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Comment() {

  return (
    <div className='bg-dark pb-5'>
      <Helmet><title>코멘트 | 오르빗</title></Helmet>
      <div className='patchnote'>
        <div className='justify-content-center position-absolute top-50 start-50 translate-middle'>
          <div className='font-11 fs-0 text-white text-shadow text-center'>코멘트</div>
          <div className='font-11 fs-6 text-white text-shadow-1'>건의할 사항을 적어주시면 적극 반영하겠습니다.</div>
        </div>
        <img className="patchnote_banner" src={banner} alt="Banner"/>
      </div>

      <div className='container-md'>
        <div className='pt-5'>
          <div className='card top-50 start-50 translate-middle'>
            <div className='card-cover-blog rounded-3 py-2 text-center font-11'>코멘트를 작성하기 위해서는 <Link to="https://github.com" target='_blank' className='text-white'>Github <FontAwesomeIcon icon={faSquareArrowUpRight}/> 계정</Link>이 필요합니다.</div></div>
          <Utterances/>
        </div>
      </div>
    </div>
  );
}

export default Comment;
