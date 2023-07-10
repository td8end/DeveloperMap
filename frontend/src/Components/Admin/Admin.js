
import { Link, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './Admin.css';

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

function Admin() {
  const navigate = useNavigate();
  const [ searchText, setSearchText ] = useState("")
  const [ data, setData ] = useState([])

  const getInitialState = () => {
    const value = [];
    return value;
  };


  return (
    <>
      <div className='AdminStyle' id='header'>
            <h1 className='UserView' id='UserView' onClick={() => navigate('/user')}>UserView</h1>
      </div>
        <div className='AdminWhole'>
          <div className='AdminLeft'>
            <div className='AdminsearchContainer'id="searchContainer>">
                <input className='AdminsearchInput' id="searchInput" type="text" name="search" 
                    placeholder="Search For Coder or Base..." onChange={()=>{setSearchText(document.getElementById("searchInput").value)}}></input>
            </div>
            <div className='AdmingroupContainer '>
              {markers.filter(marker=>marker.name.toLowerCase().startsWith(searchText) || marker.base.toLowerCase().startsWith(searchText)  )
                            // {markers.filter(marker=>marker.name.toLowerCase().startsWith(searchText) || marker.base.toLowerCase().startsWith(searchText)  )

                .map(marker => (
                      // <div key={marker.id} className="characterTile" onClick={() => setDisplay(marker)}>
                      <div className='AdminsingleContainer' onClick={() => setData(marker)}>
                        <h3 className='nameStyle'>{marker.name}</h3>
                        <p className='Adminpstyle'>Location: {marker.geocode}</p>
                        <p className='Adminpstyle'>Detials: {marker.popUp}</p>
                        <p className='Adminpstyle'>Authorized: {marker.authorized}</p>
                        <p className='Adminpstyle'>Base: {marker.base}</p>
                      </div>
                      ))}
              </div>
          </div>
          <div className='FormInput'>
                  <div className='FormHeader'>
                    <h1 className='FormTitle'>Details for: {data.name}</h1>
                    {/* <div className='AdminsingleContainer' onClick={() => setData(marker)}> */}
                    {/* <button className='ClearBtn' onClick={() => reload()}>CLEAR FORM</button> */}
                  </div>
                  <div className='FormDetails'>
                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                        {/* <button className='Edit' onClick={() => value="user"}>Edit</button> */}

                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>

                      <span>                    
                        <label for='UserName'>NAME: </label>
                        <input id="UserName" name="UserName" placeholder="Name" type="text" value={data.name}/>
                      </span>

                      <span>
                        <label for='UserBase'>Duty Location: </label>
                        <input id="UserBase" name="UserBase" placeholder="Base" type="text" value={data.base}/>
                      </span>
                  </div>
                  <div className='Footer'>
                    <button className='UpdateBtn' onClick={() => setData([])}>UPDATE USER</button>
                    <button className='AddBtn' onClick={() => setData([])}>ADD USER</button>
                    <button className='DeleteBtn' onClick={() => setData([])}>DELETE USER</button>
                  </div>
          </div>
        </div>
    </>
  );
}

export default Admin;