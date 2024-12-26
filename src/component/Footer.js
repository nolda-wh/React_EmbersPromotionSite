import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import grade1 from '../images/grade1.png';
import grade2 from '../images/grade2.png';

function Footer() {
  return (
    <div className='bg-white footer d-flex flex-column pt-5'>
      <div className='d-flex justify-content-center'>
        {/* <div className='grade pe-1'>
          <img src={grade1} className=''/>
        </div>
        <div className='grade ps-1'>
          <img src={grade2}/>
        </div> */}
      </div>
      <div className=''>
        <ul class="navbar-nav d-flex flex-row justify-content-center font-11 pt-3">
          <li class="nav-item px-2 d-flex align-items-center">
            <Link exact='true' to="/" class="nav-link active text-black box-click"><span className='px-2'>메인</span></Link>
          </li>
          {/* <li class="nav-item px-2 d-flex align-items-center">
            <Link exact='true' to="/guide" className='nav-link text-light box-click'><span className='px-2'>가이드</span></Link>
          </li>
          <li class="nav-item px-2 d-flex align-items-center">
            <Link exact='true' to="/patchnote" className='nav-link text-light box-click'><span className='px-2'>패치노트</span></Link>
          </li>
          <li class="nav-item px-2 d-flex align-items-center">
            <Link exact='true' to="/comment" className='nav-link text-light box-click'><span className='px-2'>코멘트</span></Link>
          </li>
          <li class="nav-item px-2 d-flex align-items-center">
            <a href="https://store.onstove.com/ko/games/3783" target='_blank' className='text-light box-click nav-link'><span className='px-2'>스토어 <FontAwesomeIcon icon={faSquareArrowUpRight}/></span></a>
          </li> */}
        </ul>
      </div>
      <div className='font-11 d-flex justify-content-center text-black fs-7 pt-3'>&copy; Woohyun Cho(STARTING). All rights reserved.</div>

    </div>
  );
}

export default Footer;