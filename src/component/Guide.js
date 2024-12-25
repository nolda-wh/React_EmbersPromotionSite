import React, { useState, useEffect } from 'react';
import banner from '../images/image9.jpg';
import Utterances from './function/Utterances';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faGamepad, faGlobe, faKeyboard, faNetworkWired, faPlay, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import keyGuide from '../images/keyGuide.png';
import single_01 from '../images/single_01.png';
import single_02 from '../images/single_02.png';
import multi_01 from '../images/multi_01.png';
import multi_02 from '../images/single_02.png';

function Guide() {

  return (
    <div className='bg-dark pb-5'>
      <Helmet><title>가이드 | 오르빗</title></Helmet>
      <div className='patchnote'>
        <div className='justify-content-center position-absolute top-50 start-50 translate-middle'>
          <div className='font-11 fs-0 text-white text-shadow text-center'>가이드</div>
          <div className='font-11 fs-6 text-white text-shadow-1'>게임을 진행하기 위한 정보를 확인하세요!</div>
        </div>
        <img className="patchnote_banner" src={banner} alt="Banner"/>
      </div>

      <div className='container-md'>
        <div className='pt-5'>

          <div className="card-header font-11 fw-bold text-white fs-4 p-4 rounded-4 mb-4 border-0 shadow-md">
            <div className='mb-4'>
              <FontAwesomeIcon icon={faPlay} className='pe-3'/><span className=''>싱글플레이</span>
            </div>
            <div className='fs-6 fw-normal'>
                <p>여러분은 AI 몬스터에 맞서 싸워야합니다. 전장의 몬스터를 처치하고 몬스터가 움직이는 원동력인 <span className='highlight2 fw-bold'>아레테</span>를 파괴하고, 구역을 해방하며, <span className='highlight2 fw-bold'>온전한 칩</span>을 획득하세요.</p>
                <p>각 구역의 <span className='highlight2 fw-bold'>여신상</span>을 통해 <span className='highlight2 fw-bold'>아레테</span>가 위치한 던전에 입장할 수 있습니다. 또한 이 근처에는 <span className='highlight2 fw-bold'>온전한 칩</span>을 사용하여 새로운 무기를 구매하여 사용할 수 있는 NPC가 위치합니다.</p>
                <div className='center mb-4'>
                  <img className='w-25 pe-4' src={single_02}></img>
                  <img className='w-25' src={single_01}></img>
                </div>
                <p>몬스터를 처치하고, 구역을 해방하며, 무기를 업그레이드하여 AI에게 지배당한 세상을 구해주세요.</p>
            </div>
          </div>

          <div className="card-header font-11 fw-bold text-white fs-4 p-4 rounded-4 mb-4 border-0 shadow-md">
            <div className='mb-4'>
              <FontAwesomeIcon icon={faNetworkWired} className='pe-3'/><span className=''>멀티플레이</span>
            </div>
            <div className='fs-6 fw-normal'>
                <p>싱글플레이에서 최초 3레벨 이상을 달성하면 멀티플레이를 이용하실 수 있습니다.</p>
                <div className='center mb-4'>
                  <img className='w-50 pe-4' src={multi_01}></img>
                </div>
                <p>멀티플레이는 한 플레이어가 호스트 역할을, 나머지 플레이어는 클라이언트로 접속하게 됩니다. 방을 만들 호스트는 <span className='highlight2 fw-bold'>방 만들기</span>를 눌러 방을 생성하고, 자신의 IP와 게임 내에 표시되는 PORT 번호를 나머지 플레이어에게 알려주세요. (로딩 창 / 게임 내 ESC키를 눌러 나오는 메뉴 / 채팅창에 포트번호가 표시됩니다.)</p>
                <p>호스트가 만든 방에 입장하고 싶다면, <span className='highlight2 fw-bold'>방 참여하기</span>를 눌러 호스트의 IP와 PORT번호를 입력하면 접속할 수 있습니다.</p>
                <p>회원가입을 통해 등록된 데이터는 중앙 서버에 암호화되어 보관됩니다. 어디서 접속하든지 동일한 데이터를 이용하실 수 있습니다.</p>
                <div className='card-danger rounded-4 p-2 px-4'>
                  <div className='fs-5 mb-2 mt-2'><FontAwesomeIcon icon={faCircleQuestion} className='pe-2'/>멀티플레이 접속에 어려움을 겪으시나요?</div>
                  <div className='fw-light'>
                    <p>오르빗의 멀티플레이는 중앙 서버에 접속하는 것이 아닌 플레이어끼리 연결하는 것이기 때문에 호스트는 호스트의 조건이 만족되어야 합니다.<br/>
                      호스트에게 외부에서 접속하기 위해 고정 IP를 사용하거나 포트포워딩 또는 하마치 등의 사설 VPN을 사용해야 합니다.<br/>
                      고정 IP 설정이 불가능한 경우, 하마치를 이용하는 것을 권장합니다.<br/>
                      호스트와 클라이언트 모두 하마치를 설치한 후 같은 네트워크 방(room)에 가입한 후 클라이언트가 호스트의 하마치IP를 입력하면 접속할 수 있습니다.<br/>
                      또는 포트포워딩을 통해 하마치 설치 없이 접속할 수 있습니다. 다만, 오르빗의 멀티플레이 포트는 매 접속시마다 변경되므로 참고하시기 바랍니다.
                    </p>
                  </div>
                </div>
            </div>
          </div>

          <div className="card-header font-11 fw-bold text-white fs-4 p-4 rounded-4 mb-4 border-0 shadow-md">
            <div className='mb-3'>
              <FontAwesomeIcon icon={faKeyboard} className='pe-3'/><span className=''>키세팅</span>
            </div>
            <div className='fs-6 fw-normal'>
                <img className='w-100' src={keyGuide}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
