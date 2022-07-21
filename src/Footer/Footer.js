import React from 'react'
import {useState} from 'react'
import './Footer.css'
import Picker from 'emoji-picker-react';

function Footer() {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  return (
    <div>
        <div className="foot" style={{color:"red"}}>
      <span style={{color:"white"}}>
       Made with 
      </span>
       &nbsp;&#9829;&nbsp;
       <span style={{color:"white"}}>

      by Anshu Joshi
       </span>
        </div>
    </div>
  )
}

export default Footer
