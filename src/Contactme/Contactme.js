import React from 'react'
import './Contactme.css'
import phoneCall from '../assets/phone-call.png'
import email from '../assets/email.png'
import location from '../assets/location.png'
// import user from '../assets/user.png'

function Contactme() {
  return (
    <div>
        <div class="nameOwn centerit2" style={{ marginBotton: "200px" }}>
       <ul className="Name__list" data-aos=" fade-right">
          <li className="dot1">.</li>
          <li>C</li>
          <li className="dot2">.</li>
          <li>O</li>
          <li className="dot3">.</li>
          <li>N</li>
          <li className="dot4">.</li>
          <li>T</li>
          <li className='dot2'>.</li>
          <li>A</li>
          <li className="dot1">.</li>
          <li>C</li>
          <li className="dot3">.</li>
          <li>T</li>
          <li className="dot4">.</li>
          <li>M</li>
          <li className="dot">.</li>
          <li>E</li>
          <li className="dot1">.</li>
        </ul>
      </div>
      <div className="contact-box">
        <div className="details">
          <h2>Contact</h2>
          <p>Fill up the form to contact</p>
          <div className="con-details">
            <img src={phoneCall} className="contact-img" alt="" />+91-7008513816
            <li className='dot2'>.</li>
            <img src={email} className="contact-img" alt="" />anshu.aj.joshi@gmail.com
            <li className='dot1'>.</li>
            <img src={location} className="contact-img" alt="" />Odisha,India
          </div>
        </div>
        <div className="sendmsg">
          <div className="contact-right name-input">
          Your Name
          {/* <img src={user} alt="" className="contact-img" style={{position:'absolute'}}/> */}
          <input type="text" className="contact-right-input email-input" />
          Your email
          {/* <img src={email} alt="" className="contact-img" style={{position:'absolute'}}/> */}
          <input type="text" className="contact-right-input message-input" />
          Your message
          <textarea id="" cols="30" rows="10" style={{border:"1px solid lightblue"}}></textarea>
          <button className="contact-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactme
