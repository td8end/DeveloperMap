import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppContext } from '../../App';
import Map from '../Map/Map';
import './user.css';

const markers = [
  {
    name: 'Fred',
    geocode: [39.0997, -94.5786],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred2',
    geocode: [39.0997, -94.5786],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {    
    name: 'Fred3',
    geocode: [39.0997, -94.5786],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred4',
    geocode: [39.0997, -94.5786],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred5',
    geocode: [39.0997, -94.5786],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred6',
    geocode: [39.0997, -94.5786],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred7',
    geocode: [39.0997, -94.5786],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred8',
    geocode: [39.0994, -94.40],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred9',
    geocode: [39.0994, -94.40],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred10',
    geocode: [31.0994, -94.40],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred11',
    geocode: [31.0994, -94.40],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred12',
    geocode: [31.0994, -94.40],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
]

export default function User() {
  const { coord , setCoord } = useState([])

  return (
    <>
    <div className='userContainer'>
      <Map />
    </div>
    <div >
          <div className='groupContainer '>
          {markers.map(marker => (
                    // <div key={marker.id} className="characterTile" onClick={() => setDisplay(marker)}>
                    <div className='singleContainer' onClick={() => setCoord(marker.geocode)}>
                      <h3 className='nameStyle'>{marker.name}</h3>
                      <p className='pstyle'>Location: {marker.geocode}</p>
                      <p className='pstyle'>Detials: {marker.popUp}</p>
                      <p className='pstyle'>Authorized: {marker.authorized}</p>
                    </div>
                    ))}
          </div>
            {console.log(coord)}
      </div>
    {/* </div> */}
    </>


  )
}