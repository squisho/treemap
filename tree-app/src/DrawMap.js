import React, { useCallback, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
import Map, {Source, Layer} from "react-map-gl";
import data from "./data/CUT_BLOCK_SINCE_2018.json";
import comb_data from "./data/PARKS_COMBINED_POLY.geojson";


mapboxgl.accessToken = 'pk.eyJ1Ijoic3F1aXNobyIsImEiOiJjbGkxeHU2cnMwYWRqM3NudDEyajNycjJiIn0.lFUtNuCGMS3D_HaZpHiLAg';

function DrawMap() {

const [hoverInfo, setHoverInfo] = useState(null);

const layerStyle = {
  id:"cutblock",
  type:"fill",
  paint:{
    "fill-color":"red",
    "fill-opacity":0.5
  }
}

const parkLayerStyle = {
  id:"parks",
  type:"fill",
  paint:{
    "fill-color":"lightgreen",
    "fill-opacity":0.3
  }
}
const onHover = useCallback(event => {
  const {
    features,
    point: {x, y}
  } = event;
  const hoveredFeature = features && features[0];
  // console.log("feature",hoveredFeature);

  setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
  hoverInfo && console.log("HINFO",hoverInfo.feature.properties)
});
  return (
    <div className="App">

    <Map initialViewState={{
    //latitude: 48.45,
    //longitude: -123.4,
    latitude: 52.7083,
    longitude: -121.9573,
      zoom: 8
    }}
    mapStyle="mapbox://styles/mapbox/satellite-streets-v12"

    mapboxAccessToken={mapboxgl.accessToken}
    style={{width: "100vw", height:"100vh"}}
    className="map-container"
    interactiveLayerIds={['cutblock']}
    onMouseMove={onHover} >

{
      <Source type="geojson" data={comb_data}>
        <Layer {...parkLayerStyle}/>
      </Source> }
      <Source type="geojson" data={data}>
        <Layer {...layerStyle} />
      </Source>
      {hoverInfo && (
        <div className="tooltip" style={{left:hoverInfo.x, top:hoverInfo.y}}>
          <div> CLIENT: {hoverInfo.feature.properties.CLIENT_NAME}</div>
          <div> PLANNED LOGGING DATE: {hoverInfo.feature.properties.PLANNED_HARVEST_DATE}</div>
          <div> LOGGING: {hoverInfo.feature.properties.LIFE_CYCLE_STATUS_CODE + " " + (hoverInfo.feature.properties.DISTURBANCE_END_DATE || "")}</div>
        </div>
      )}
      </Map>
    </div>
      );
    }

export default DrawMap;
