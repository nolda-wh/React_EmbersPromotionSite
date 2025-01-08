import React, { useState, useEffect } from 'react';
import banner from '../images/devnote.png';
import Utterances from './function/Utterances';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Blog_Parse from './function/Blog_Parse';

function Devnote() {

  return (
    <div className='bg-white pb-5'>
      <Helmet><title>개발 기록 | 잉걸불</title></Helmet>
      <div className='patchnote'>
        <div className='justify-content-center position-absolute top-50 start-50 translate-middle bg-blur rounded-1 p-4'>
          <div className='font-11 fs-1 text-black text-center px-4 fw-bold container no-enter'>개발 기록</div>
          <div className='font-11 fs-6 text-black text-center px-4 container'>세상에 펼치기 위한 여정에 대한 기록</div>
        </div>
        <img className="patchnote_banner" src={banner} alt="Banner"/>
      </div>

      <div className='container-sm'>
        <div className="row align-items-center justify-content-between pt-5">
          <div className=''>
              <Blog_Parse/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Devnote;
