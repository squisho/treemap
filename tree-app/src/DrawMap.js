import logo from './logo.svg';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Map, {Source, Layer} from "react-map-gl";
import data from "./data/DATA.json";

mapboxgl.accessToken = 'pk.eyJ1Ijoic3F1aXNobyIsImEiOiJjbGkxeHU2cnMwYWRqM3NudDEyajNycjJiIn0.lFUtNuCGMS3D_HaZpHiLAg';

function DrawMap() {

const layerStyle = {
  id:"cutblock",
  type:"fill",
  paint:{
    "fill-color":"blue"
  }
}

  return (
    <div className="App">

    <Map initialViewState={{
    //latitude: 48.45,
    //longitude: -123.4,
    latitude: 52.7083,
    longitude: -121.9573,
      zoom: 8
    }}
    mapStyle="mapbox://styles/mapbox/light-v9"
    mapboxAccessToken={mapboxgl.accessToken}
    style={{width: 900, height:400}}
    className="map-container" >

      <Source type="geojson" data={data}>
        <Layer {...layerStyle} />
      </Source>

      </Map>
    </div>
      );
    }

export default DrawMap;
