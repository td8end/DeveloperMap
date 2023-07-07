import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppContext } from './App';
import Map from './Map';
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
  const { display , setDisplay } = useState([])

  return (
    <>
    <div className='userContainer'>
      <Map />
    </div>
    <div >
          <div className='groupContainer '>
          {markers.map(marker => (
                    // <div key={marker.id} className="characterTile" onClick={() => setDisplay(marker)}>
                    <div className='singleContainer' onClick={() => alert(`${marker.name} was just clicked`)}>
                      <h3 className='nameStyle'>{marker.name}</h3>
                      <p className='pstyle'>Location: {marker.geocode}</p>
                      <p className='pstyle'>Detials: {marker.popUp}</p>
                      <p className='pstyle'>Authorized: {marker.authorized}</p>
                    </div>
  
                    ))}
          </div>
          <div>
          <table>
                    <tr>
                      <th>Name</th>
                      <th>Lat/Long</th>
                      <th>PopUp</th>
                      <th>Authorized</th>
                    </tr>
                    {markers.map(marker => (
                    // <div key={marker.id} className="characterTile" onClick={() => setDisplay(marker)}>
                    <tr>
                      <td>{marker.name}</td>
                      <td>{marker.geocode}</td>
                      <td>{marker.popUp}</td>
                      <td>{marker.authorized}</td>
                    </tr>
                    ))}
                  </table>
          </div>

      </div>
    {/* </div> */}
    </>


  )
}