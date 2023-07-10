import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppContext } from '../../App';
import Map from '../Map/Map';
import './user.css';

const markers = [
  {
    name: 'Fred',
    base: 'Schriever',
    geocode: [39.0997, -94.5786],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred2',
    base: 'Schriever',
    geocode: [39.0997, -94.5786],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {    
    name: 'Fred8',
    base: 'Vandenburg',
    geocode: [39.0997, -94.5786],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred8',
    base: 'Vandenburg',
    geocode: [39.0997, -94.5786],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred8',
    base: 'Vandenburg',
    geocode: [39.0997, -94.5786],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred6',
    base: 'Vandenburg',
    geocode: [39.0997, -94.5786],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred7',
    base: 'Peterson',
    geocode: [39.0997, -94.5786],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred8',
    base: 'Buckley',
    geocode: [39.0994, -94.40],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred9',
    base: 'Buckley',
    geocode: [39.0994, -94.40],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred10',
    base: 'Buckley',
    geocode: [31.0994, -94.40],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred11',
    base: 'Lackland',
    geocode: [31.0994, -94.40],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
  {
    name: 'Fred12',
    base: 'Lackland',
    geocode: [31.0994, -94.40],
    popUp: 'Hello i am marker 1',
    authorized: 10,
  },
]

export default function User() {
  const [ coord , setCoord ] = useState([])
  const [ searchText, setSearchText ] = useState("")


  return (
    <>
    <div className='userContainer'>
      <Map />
    </div>
    <div >
        <div className='SearchField'>
           <div className='searchContainer'id="searchContainer>">
              <input className='searchInput' id="searchInput" type="text" name="search" 
                  placeholder="Search For Coder or Base..." onChange={()=>{setSearchText(document.getElementById("searchInput").value)}}></input>
            </div>
        </div>
            {console.log(searchText)}
          <div className='groupContainer '>
             {markers.filter(marker=>marker.name.toLowerCase().startsWith(searchText) || marker.base.toLowerCase().startsWith(searchText)  )
                          // {markers.filter(marker=>marker.name.toLowerCase().startsWith(searchText) || marker.base.toLowerCase().startsWith(searchText)  )

              .map(marker => (
                    // <div key={marker.id} className="characterTile" onClick={() => setDisplay(marker)}>
                    <div className='singleContainer' onClick={() => setCoord(marker.geocode)}>
                      <h3 className='nameStyle'>{marker.name}</h3>
                      <p className='pstyle'>Location: {marker.geocode}</p>
                      <p className='pstyle'>Detials: {marker.popUp}</p>
                      <p className='pstyle'>Authorized: {marker.authorized}</p>
                      <p className='pstyle'>Base: {marker.base}</p>
                    </div>
                    ))}
          </div>
            {/* {console.log(coord)} */}
      </div>
    {/* </div> */}
    </>


  )
}