import React from 'react'
import './Contactme.css'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import {Marker} from 'react-leaflet';
import {Popup} from 'react-leaflet';   

function Contactme() {
  return (
    <div>
      <div class="nameOwn centerit2" style={{marginBotton:"200px"}}>
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
              <li className="dot2">.</li>
              <li>T</li>
              <li className="dot3">.</li>
              <li>M</li>
              <li className="dot4">.</li>
              <li>E</li>
              <li className="dot1">.</li>
            </ul>
          </div>
          <div style={{color:'white'}}>
      </div>
      <div className='maps'>
        <MapContainer center={[51.505, -0.09]} zoom={50} scrollWheelZoom={false}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />
  <Marker position={[26.218287, 78.182831]}>
  </Marker>
</MapContainer>
      </div>
    </div>
  )
}

export default Contactme
