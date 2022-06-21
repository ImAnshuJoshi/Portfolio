import React,{useEffect} from 'react'
import './Skills.css'
import Aos from "aos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Skills() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div>
       <div class="nameOwn centerit2" >
            <ul className="Name__list">
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
          <div style={{color:'white'}}>
        {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
        <FontAwesomeIcon icon="fa-brands fa-react" />
        <FontAwesomeIcon icon={faReact}/> */}
      </div>
    </div>
  )
}

export default Skills
