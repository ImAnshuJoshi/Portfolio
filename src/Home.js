import React,{useEffect} from 'react';
import './Home.css'
import {Link, useNavigate} from 'react-router-dom';
// import { Typewriter } from 'react-simple-typewriter';
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Contactme from './Contactme/Contactme';
import Aos from "aos";
import mypic from './assets/mypic.png'
function Home() {
  const navigation = useNavigate();
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div className="home">
      <nav>
        <div className="name">
          <div class="nameOwn">
            <ul className="Name__list">
              <li>A</li>
              <li className="dot1">.</li>
              <li>N</li>
              <li className="dot2">.</li>
              <li>S</li>
              <li className="dot3">.</li>
              <li>H</li>
              <li className="dot4">.</li>
              <li>U</li>
              <li className='dot2'>.</li>
              <li>J</li>
              <li className="dot1">.</li>
              <li>O</li>
              <li className="dot2">.</li>
              <li>S</li>
              <li className="dot3">.</li>
              <li>H</li>
              <li className="dot4">.</li>
              <li>I</li>
            </ul>
          </div>
          <div className='college not-res'>
            CURRENTLY STUDYING @ABV-IIITM , GWALIOR
          </div>
        </div>
      </nav>
      <main className="content">
        I am a&nbsp;<span className="me">
          {/* <span style={{ color: 'red' }}>&nbsp;D</span> */}
        <span style={{ color: 'red' }} >
        <Typewriter
  options={{
    strings: ['Developer ;', 'Designer*__*'],
    autoStart: true,
    loop: true,
  }}
/>
</span>
        </span>
          {/* <h1 class="title">
          I am a&nbsp;
        <div className="rotate-words">
          <span>UI Designer</span>
          <span >UX Designer</span>
          <span >Web Developer</span>
        </div>
          </h1> */}
      </main>
      <div  className="connect web-connect">
      <div className="dot4">.</div>
      <a href="https://www.instagram.com/imanshujoshi/" style={{ color: 'grey' }}>
      <InstagramIcon className="icon_connect"/>
      </a>
      <div className="dot1">.</div>
      <a href="https://www.linkedin.com/in/anshu-joshi-9080b6223/" style={{ color: 'grey' }}>
      <LinkedInIcon className="icon_connect"/>
      </a>
      <div className="dot3">.</div>
      <a href="https://github.com/ImAnshuJoshi" style={{ color: 'grey' }}>
      <GitHubIcon className="icon_connect"/>
      </a>
      <div className="dot2">.</div>
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="about_me">
      <div class="nameOwn centerit2" >
            <ul className="Name__list" data-aos=" fade-right">
              <li className="dot1">.</li>
              <li>A</li>
              <li className="dot2">.</li>
              <li>B</li>
              <li className="dot3">.</li>
              <li>O</li>
              <li className="dot4">.</li>
              <li>U</li>
              <li className='dot2'>.</li>
              <li>T</li>
              <li className="dot1">.</li>
              <li>M</li>
              <li className="dot2">.</li>
              <li>E</li>
              <li className="dot3">.</li>
            </ul>
          </div>
        <div className="about_content">
        {/* <div className="card" data-aos="fade-right"> */}
          <img src={mypic} data-aos="fade-up-right" className="mypic" alt="" />
        {/* </div> */}
        <div className="about__description" data-aos="fade-down-left">
            I am a web developer and experienced in front-end development which also makes me a UI designer. I am currently doing my BTech in computer-science from ABV-IIITM, Gwalior , Madhya Pradesh.I am currently in my 2nd year of Engineering.
        </div>
        </div>
      </div>
          <div className="responsive-card">
          <img src={mypic} className="mypic" alt="" />
          <div className="whatami-res">
            I am into web development and web designing.
          </div>
          <div className="connect-res-div">
          <a href="https://www.instagram.com/imanshujoshi/" style={{ color: 'grey' }} className="connect-res">
      <InstagramIcon className="icon_connect icon-connect-res" style={{fontSize:"20px"}}/>
      </a>
      <div className="dot1 dot-res">.</div>
      <a href="https://www.linkedin.com/in/anshu-joshi-9080b6223/" style={{ color: 'grey' }} className="connect-res">
      <LinkedInIcon className="icon_connect icon-connect-res" style={{fontSize:"20px"}}/>
      </a>
      <div className="dot3 dot-res">.</div>
      <a href="https://github.com/ImAnshuJoshi" style={{ color: 'grey' }} className="connect-res">
      <GitHubIcon className="icon_connect icon-connect-res" style={{fontSize:"20px"}}/>
      </a>
          </div>
            <a href="./assets/AnshuResume.pdf" 
            onclick="window.open('AnshuResume.pdf')"
            download="AnshuResume.pdf" style={{textDecoration: 'none'}}>
          <div className="btn-contact">
            <button navigation={<Contactme/>}>Resume</button>
          </div>
            </a>
          </div>
    </div>
  )
}
export default Home
