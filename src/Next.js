import React from 'react'
import './Next.css'
import {useState , useEffect } from 'react';

function Next() {
    const [ShowComponent,setShowComponent]=useState(false);
    useEffect(()=>{
        setInterval(()=>{
            setShowComponent(true);
        },2000);
    },[])
  return (
    <a href='/Home'>
    <div>
        {
         ShowComponent &&   
        <button className="nextbtn" >
        Next
      </button>
    }
    </div>
    </a>
  )
}

export default Next
