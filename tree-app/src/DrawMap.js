import React, { useCallback, useState } from 'react'; 
import 'mapbox-gl/dist/mapbox-gl.css';
import { NavigationControl } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import Map, {Source, Layer} from "react-map-gl";
import data from "./data/CUT_BLOCK_SINCE_2018.json";
import comb_data from "./data/PARKS_COMBINED_POLY.geojson";
import InfoCard from './InfoCard';

function DrawMap() {
  
  mapboxgl.accessToken = 'pk.eyJ1Ijoic3F1aXNobyIsImEiOiJjbGkxeHU2cnMwYWRqM3NudDEyajNycjJiIn0.lFUtNuCGMS3D_HaZpHiLAg';



// const [map, setMap] = useState(null);

// useEffect(()=>{
//   console.log("MAP OBJ: ", map)
// }, [map])
// const onMapLoad = (map) => {
//   setMap(map);
// }
// var tileIndex =  geojsonvt(data);
// console.log(tileIndex.getTile(0, 0, 0))
// const getTile = (z, x, y) => {
//   return tileIndex.getTile(z, x, y).features || null;
// }

const [hoverInfo, setHoverInfo] = useState(null);
const [selected, setSelected] = useState(false);

const layerStyle = {
  id:"cutblock",
  type:"fill",
  paint:{
    "fill-color":[
      "match", ['get', "LIFE_CYCLE_STATUS_CODE"],
      "ACTIVE",'red',
      "RETIRED", 'black',
      "#FFF"
    ],
    "fill-opacity":0.5
  }
}

const layerOutlineStyle = {
  id:"cutblock_outlines",
  type:"line",
  paint:{
    "line-color":[
      "match", ['get', "LIFE_CYCLE_STATUS_CODE"],
      "ACTIVE",'red',
      "RETIRED", 'red',
      "#FFF"
    ],
    "line-opacity":1,
    "line-width":2
  }
}

const parkLayerStyle = {
  id:"parks",
  type:"fill",
  paint:{
    "fill-color":"lightgreen",
    "line-width": 4,
    "fill-opacity":0.2,
    "fill-outline-color": "lightgreen"
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
});

const onClick = () => {
  hoverInfo && setSelected(hoverInfo);
}



  return (
<>
    <Map initialViewState={{
    //latitude: 48.45,
    //longitude: -123.4,
    latitude: 48.473604,
    longitude: -124.101219,
      zoom: 12
    }}
    mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
    mapboxAccessToken={mapboxgl.accessToken}
    style={{width: "100vw", height:"100vh"}}
    className="map-container"
    interactiveLayerIds={['cutblock']}
    onMouseMove={onHover}
    onClick={onClick}
    >

      <NavigationControl position="top-right" visualizePitch={true}/>

      <Source type="geojson" data={comb_data}>
        <Layer {...parkLayerStyle}/>
      </Source>
      <Source type="geojson" data={data}>
        <Layer {...layerStyle} />
        <Layer {...layerOutlineStyle} />
      </Source>
      {hoverInfo && (
        <div className="tooltip" style={{left:hoverInfo.x, top:hoverInfo.y}}>
          <div> CLIENT: {hoverInfo.feature.properties.CLIENT_NAME}</div>
          <div> PLANNED LOGGING DATE: {hoverInfo.feature.properties.PLANNED_HARVEST_DATE}</div>
          <div> LOGGING: {hoverInfo.feature.properties.LIFE_CYCLE_STATUS_CODE + " " + (hoverInfo.feature.properties.DISTURBANCE_END_DATE || "")}</div>
        </div>
      )}

      </Map>
      <InfoCard data={{selected}}></InfoCard>
      </>
      );
    }

export default DrawMap;
