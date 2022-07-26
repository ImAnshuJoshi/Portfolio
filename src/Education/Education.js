import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'

function education() {
  return (
    <div>
           <div class="nameOwn centerit2" style={{marginBotton:"200px"}}>
            <ul className="Name__list" data-aos=" fade-right">
              <li className="dot1">.</li>
              <li>E</li>
              <li className="dot2">.</li>
              <li>D</li>
              <li className="dot3">.</li>
              <li>U</li>
              <li className="dot4">.</li>
              <li>C</li>
              <li className='dot2'>.</li>
              <li>A</li>
              <li className="dot1">.</li>
              <li>T</li>
              <li className="dot3">.</li>
              <li>I</li>
              <li className="dot4">.</li>
              <li>O</li>
              <li className="dot1">.</li>
              <li>N</li>
            </ul>
          </div>
          <div style={{color:'white'}}>
      </div>
        <div className="VerticalLine"></div>
      <VerticalTimeline className="vertical_timeline .vertical-timeline .vertical-timeline-custom-line" lineColor="#151921">
        {/* ::before */}
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2021-Present"
    iconStyle={{ background: 'yellow', color: 'yellow' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title centerit3" style={{color:"yellow"}}>First sem passed </h3>
    <h4 className="vertical-timeline-element-subtitle centerit3">CGPA:8.48</h4>
    <p className="centerit3">
      Btech in CSE from ABV-IIITM , Gwalior
    </p>
  </VerticalTimelineElement> 
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2019-2021"
    iconStyle={{ background: 'maroon', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title centerit3" style={{color:"red"}}>12th Passed </h3>
    <h4 className="vertical-timeline-element-subtitle centerit3">93.2%</h4>
    <p className="centerit3">
      Passed out from St.joseph public school,Kota.
    </p>
  </VerticalTimelineElement>  
  <VerticalTimelineElement
    className="vertical-timeline-element--work vertical-timeline-element-second"
    contentStyle={{ background: 'white', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid white' }}
    date="2009-2019"
    iconStyle={{ background: 'lightblue', color: '#151921' }}

    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title centerit3" style={{ color: 'rgb(0, 255, 251)' }}>10th passed </h3>
    <h4 className="vertical-timeline-element-subtitle centerit3">96.2%</h4>
    <p className="centerit3">
      Passed from DAV Public school,Jharsuguda.
    </p>
  </VerticalTimelineElement>  
  </VerticalTimeline>
    </div>
  )
}

export default education
