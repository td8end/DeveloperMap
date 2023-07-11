
import { Link, Routes, Route } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import './Admin.css';
import { AppContext } from '../../App';


function Admin() {
  const navigate = useNavigate();
  const [ searchText, setSearchText ] = useState("")
  const [ data, setData ] = useState([])
  const [ username, setName ] = useState('')
  const [ userGeocode, setGeocode ] = useState('')
  const [ userClearance, setClearance ] = useState('')
  const [ userArrivedOnStation, setArrivedOnStation ] = useState('')
  const [ userBase, setBase ] = useState('')
  const [ userCoder, setCoder ] = useState('')
  const [ userCivilian, setUserCivilian ] = useState('')
  const [ userRank, setRank ] = useState('')
  const [ userEmail, setEmail ] = useState('')
  const userMos = null
  const MGRS = null
  const BranchID = null
  const UnitID = null
  const userPhoto = "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/336.jpg"

  const markers = useContext(AppContext)


  const handleSubmit = (e) => {
    // e.preventDefault();
    const AdminUpdate = { username, userClearance, userCoder,userArrivedOnStation, userCivilian, userMos, userRank, userEmail, userGeocode, MGRS, BranchID, UnitID, userBase, userPhoto};
    console.log(AdminUpdate);
  }

  const AllData = (markers) => {
    setData(markers)
    setName(markers.name)
    setGeocode(markers.geocode)
    setClearance(markers.clearance)
    setArrivedOnStation(markers.arrived_on_station)
    setBase(markers.installation_id)
    setCoder(markers.has_skill_identifier)
    setUserCivilian(markers.is_civilian)
    setRank(markers.rank)
    setEmail(markers.email)

  }

  return (
    <>
      <div className='AdminStyle' id='header'>
            <h1 className='UserView' id='UserView' onClick={() => navigate('/user')}>UserView</h1>
      </div>
        <div className='AdminWhole'>
          <div className='AdminLeft'>
            <div className='AdminsearchContainer'id="searchContainer>">
                <input className='AdminsearchInput' id="searchInput" type="text" name="search" 
                    placeholder="Search For Coder..." onChange={()=>{setSearchText(document.getElementById("searchInput").value)}}></input>
            </div>
            <div className='AdmingroupContainer '>
              {/* {markers.filter(marker=>marker.name.toLowerCase().startsWith(searchText) || marker.base.toLowerCase().startsWith(searchText)  ) */}
              {markers.filter(marker=>marker.name.toLowerCase().startsWith(searchText))

                .map(marker => (
                      <div className='AdminsingleContainer' onClick={() => AllData(marker)}>
                      <h3 className='nameStyle'>{marker.name}</h3>
                      <img src= {marker.photo} alt='img' width="90" height="90"/>
                      <p className='Adminpstyle'>Location: {marker.geocode}</p>
                      <p className='Adminpstyle'>Clearance: {marker.clearance}</p>
                      <p className='Adminpstyle'>arrived_on_station: {marker.arrived_on_station}</p>
                      <p className='Adminpstyle'>Base: {marker.installation_id}</p>
                      <p className='Adminpstyle'>Coder?: {marker.has_skill_identifier.toString()}</p>
                      <p className='Adminpstyle'>Civilian?: {marker.is_civilian.toString()}</p>
                      <p className='Adminpstyle'>Rank: {marker.rank}</p>
                      <p className='Adminpstyle'>Email: {marker.email}</p>
                      </div>
                      ))}
              </div>
          </div>
          <div className='FormInput'>
                  <div className='FormHeader'>
                    <h1 className='FormTitle'>Details for: {data.name}</h1>
                  </div>
                  <div className='FormDetails'>

                      <form id='myForm' onSubmit = {handleSubmit}>
                            <label> Name:  </label> 
                            <input
                              type='text'
                              value={ username }
                              onChange={(e) => setName(e.target.value)}
                              />

                            <label> Location: </label> 
                            <input
                              type='text'
                              value={userGeocode}
                              onChange={(e) => setGeocode(e.target.value)}
                              />

                            <label> Clearance: </label> 
                            <input
                              type='text'
                              value={ userClearance }
                              onChange={(e) => setClearance(e.target.value)}
                              />

                            <label> Arrived On Station: </label> 
                            <input
                              type='text'
                              value={userArrivedOnStation}
                              onChange={(e) => setArrivedOnStation(e.target.value)}
                              />

                             <label> Coder? :  </label> 
                            <input
                              type='text'
                              value={ userCoder }
                              onChange={(e) => setCoder(e.target.value)}
                              />

                            <label> Civilian? : </label> 
                            <input
                              type='text'
                              value={userCivilian}
                              onChange={(e) => setUserCivilian(e.target.value)}
                              />

                            <label> Rank: </label> 
                            <input
                              type='text'
                              value={ userRank }
                              onChange={(e) => setRank(e.target.value)}
                              />

                            <label> Email </label> 
                            <input
                              type='text'
                              value={userEmail}
                              onChange={(e) => setEmail(e.target.value)}
                              />
                      </form>
                            
                  </div>
                  <div className='Footer'>
                    <button className='UpdateBtn' onClick={() => {handleSubmit()}}>UPDATE USER</button>
                    <button className='AddBtn' onClick={() => setData([])}>ADD USER</button>
                    <button className='DeleteBtn' onClick={() => setData([])}>DELETE USER</button>
                  </div>
          </div>
        </div>
    </>
  );
}

export default Admin;