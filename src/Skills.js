import React,{useEffect} from 'react'
import './Skills.css'
import Aos from "aos";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import git from './assets/git.png';
import html from './assets/html.png';
import css from './assets/css-3.png'
import js from './assets/js.png'
import nodejs from './assets/nodejs.png';
import react from './assets/react.png';
import mysql from './assets/mysql.png';
import postgre from './assets/postgre.png';
import cpp from   './assets/c-.png';
import github from './assets/github.png';
import figma from './assets/figma.png';
import photoshop from './assets/photoshop.png';
import premierepro from './assets/premiere-pro.png';
import bash from './assets/gnu-bash.png';

function Skills() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div>
       <div class="nameOwn centerit2" >
            <ul className="Name__list" data-aos=" fade-right">
              <li className="dot1">.</li>
              <li>S</li>
              <li className="dot2">.</li>
              <li>K</li>
              <li className="dot3">.</li>
              <li>I</li>
              <li className="dot4">.</li>
              <li>L</li>
              <li className='dot2'>.</li>
              <li>L</li>
              <li className="dot1">.</li>
              <li>S</li>
              <li className="dot2">.</li>
            </ul>
          </div>
          <div >
          <div className='skills_icons'>
          <div className='dot1'>.</div>
            <img src={html} alt="" className='icon html'/>
            <div className='dot2'>.</div>
            <img src={css} alt="" className='icon'/>
            <div className='dot3'>.</div>
            <img src={js} alt="" className='icon'/>
            <div className='dot4'>.</div>
            <img src={nodejs} alt="" className='icon'/>
            <div className='dot1'>.</div>
            <img src={react} alt="" className='icon'/>
            <div className='dot2'>.</div>
            <img src={mysql} alt="" className='icon'/>
            <div className='dot3'>.</div>
            <img src={postgre} alt="" className='icon'/>
            <div className='dot'>.</div>
            <img src={cpp} alt="" className='icon'/>
            <div className='dot2'>.</div>
            <img src={git} alt="" className='icon'/>
            <div className='dot3'>.</div>
            <img src={github} alt="" className='icon'/>
            <div className='dot3'>.</div>
            <img src={figma} alt="" className='icon'/>
            <div className='dot2'>.</div>
            <img src={photoshop} alt="" className='icon'/>
            <div className='dot1'>.</div>
            <img src={premierepro} alt="" className='icon'/>
            <div className='dot3'>.</div>
            <img src={bash} alt="" className='icon'/>
            <div className='dot4'>.</div>
          </div>
      </div>
    </div>
  )
}

export default Skills
