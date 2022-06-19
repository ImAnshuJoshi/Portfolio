import React from 'react';
import './Home.css'
// import { Typewriter } from 'react-simple-typewriter';
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';

function Home() {
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
    strings: ['eveloper ;', 'esigner*__*','edicated Person'],
    autoStart: true,
    loop: true,
  }}
/>
        </span>
      </main>
      <div style={{ color: 'white' }}>
        Hi
      </div>
    </div>
  )
}
export default Home
