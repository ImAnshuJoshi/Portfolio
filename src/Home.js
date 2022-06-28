import React,{useEffect} from 'react';
import './Home.css'
// import { Typewriter } from 'react-simple-typewriter';
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Aos from "aos";
import mypic from './assets/mypic.png'

function Home() {
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
          <div className='college'>
            CURRENTLY STUDYING @ABV-IIITM , GWALIOR
          </div>
        </div>
      </nav>
      <main className="content">
        I am a <span style={{ color: 'red' }}>&nbsp;D</span>
        <span style={{ color: 'red' }} >
        <Typewriter
  options={{
    strings: ['eveloper ;', 'esigner*__*'],
    autoStart: true,
    loop: true,
  }}
/>
        </span>
      </main>
      <div  className="connect">
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
      <div className="name">
          <div class="nameOwn">
      <ul className="Name__list centerit" data-aos="flip-left">
              <li className="dot4 alpha">.</li>
              <li className="alpha">A</li>
              <li className="dot1 alpha">.</li>
              <li className="alpha">B</li>
              <li className="dot2 alpha">.</li>
              <li className="alpha">O</li>
              <li className="dot3 alpha">.</li>
              <li className="alpha ">U</li>
              <li className="dot4 alpha">.</li>
              <li className="alpha ">T</li>
              <li className='dot2 alpha'>.</li>
              <li className="alpha">M</li>
              <li className="dot1 alpha">.</li>
              <li className="alpha">E</li>
              <li className="dot4 alpha">.</li>
            </ul>
            </div>
            </div>
        <div className="about_content">
        {/* <div className="card" data-aos="fade-right"> */}
          <img src={mypic} data-aos="fade-right" className="mypic" alt="" />
        {/* </div> */}
        <div className="about__description" data-aos="fade-left">
            I am a web developer and experienced in front-end development which also makes me a UI designer. I am currently doing my BTech in computer-science from ABV-IIITM, Gwalior , Madhya Pradesh.I am currently in my 2nd year of Engineering.
        </div>
        </div>
      </div>
    </div>
  )
}
export default Home
