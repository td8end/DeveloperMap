
import './Map.css';
import { useContext } from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster';
import {Icon, divIcon} from "leaflet";
import styled from 'styled-components';
import { AppContext } from '../../App';


export default function Map(props) {
  const markers = useContext(AppContext)
  // console.log(markers.geocode)
console.log(props.coord)
console.log(props.zoom)

  const StyledPop = styled(Popup)`
  background-color: red;
  border-radius: 0;
  .leaflet-popup-content-wrapper {
    border-radius: 0;
  }

  .leaflet-popup-tip-container {
    visibility: hidden;
  }
`;

  // CREATES CUSTOM ICON FOR INDIVIDUAL
  const customIcon = new Icon ({
    iconUrl: require('../.././img/user.png'),
    iconSize: [38,38]
  })


  // CREATES CUSTOM ICON FOR GROUP
const createCustomClusterIcon = (cluster) => {
  return new divIcon({
    html: `<div class='cluster-icon'>${cluster.getChildCount()}</div`,
    className: 'custom-marker-cluster',

  });
}


  return (
    <>
        <MapContainer center={props.coord} zoom={props.zoom}>

          {/* This sets up the tiles */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* This section sets up the cluster groups */}
          <MarkerClusterGroup 
            chunkedLoading 
            iconCreateFunction={createCustomClusterIcon}>
              {markers.map(marker => (
                <Marker position={JSON.parse(marker.geocode)} icon={customIcon}>
                  <StyledPop>
                  <div className='popupView'>
                      <img src= {marker.photo} alt='img' width="80" height="80"/>
                      {marker.name}
                      <p className="pPop"> Rank: {marker.rank}</p>
                      <p className="pPop"> Email: {marker.email}</p>
                      <p className="pPop"> Rank: {marker.rank}</p>
                      <p className="pPop"> Coder?: {marker.has_skill_identifier.toString()}</p>
                  </div>
                </StyledPop>
                </Marker>
              ))}
            </MarkerClusterGroup>
        </MapContainer>
    </>

  )
}