"use strict";

import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import * as search from "./search.js";

import config from "./configs/config.js";

import * as lyrBackground from "./layer/background.js";
import * as lyrHillshade from "./layer/topo-hillshade.js";
import * as lyrBoundary from "./layer/boundary.js";
import * as lyrCotours from "./layer/topo-contours.js";
import * as lyrWater from "./layer/water.js";
import * as lyrBuilding from "./layer/buildings.js";
import * as lyrLandcover from "./layer/landcover.js";
import * as lyrRFcoverage from "./layer/radio-transmitters.js";
import * as lyrPoi from "./layer/poi.js";

/*
 This is a list of the layers in the OpenRadioMap style, from bottom to top.
*/
var ormLayers = [];

ormLayers.push(
  lyrBackground.base,
  lyrHillshade.hillShade
);

ormLayers.push(
  lyrLandcover.grass,
  lyrLandcover.snow,
  lyrLandcover.scrub,
  lyrLandcover.forest
);

ormLayers.push(
  lyrBoundary.countyCasing,
  lyrBoundary.stateCasing,
  lyrBoundary.countryCasing,
  lyrBoundary.city,
  lyrBoundary.county,
  lyrBoundary.state,
  lyrBoundary.country
);

ormLayers.push(
  lyrWater.water,
  lyrWater.waterway,
  lyrWater.waterwayIntermittent
);



ormLayers.push(
  lyrCotours.contourIndex,
  lyrCotours.contourLines,
  lyrCotours.contourLabel
);

ormLayers.push(lyrBuilding.building);
ormLayers.push(lyrPoi.poi);

ormLayers.push(lyrRFcoverage.rfCoverageLine);
ormLayers.push(lyrRFcoverage.rfCoverageLabel);
ormLayers.push(lyrRFcoverage.rfTransmitters);


var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.host + getUrl.pathname;


var style = {
  id: "topographical",
  name: "OpenRadioMap",
  glyphs: "https://fonts.openmaptiles.org/{fontstack}/{range}.pbf",
  layers: ormLayers,
  terrain: {
    source: "terrainSource",
    exaggeration: 1.3,
  },
  sources: {
    openmaptiles: {
      type: "vector",
      url: config.OPENMAPTILES_URL,
    },
    contourSource: {
      type: "vector",
      url: config.CONTOURS_URL,
    },
    terrainSource: {
      type: "raster-dem",
      tilesize: 256,
      url: config.TERRAIN_URL,
    },
    landcover: {
      type: "vector",
      url: config.LANDCOVER_URL,
    },
    rfcoverage: {
      type: "vector",
      url: config.RFCOVERAGE_URL,
    },
    rfContourLine: {
      type: "vector",
      url: config.RFCONTOUR_URL,
    },
  },
  sprite: new URL("sprites/sprite", baseUrl).href,
  light: {
    anchor: "viewport",
    color: "white",
    intensity: 0.12,
  },
  version: 8,
};


var map = (window.map = new maplibregl.Map({
  container: "map",
  hash: true,
  antialias: true,
  style: style,
  center: [-119, 48.5],
  zoom: 6,
  pitch: 52,
  cooperativeGestures: true,
  attributionControl: false,  
}));

let attributionConfig = {
  customAttribution: "",
};

if (config.ATTRIBUTION_TEXT != undefined) {
  attributionConfig = {
    customAttribution: config.ATTRIBUTION_TEXT,
  };
}

map.addControl(new maplibregl.AttributionControl(attributionConfig));

if (config.ATTRIBUTION_LOGO != undefined) {
  document.getElementById("attribution-logo").innerHTML =
    config.ATTRIBUTION_LOGO;
}

map.addControl(new search.PhotonSearchControl(), "top-left");
map.addControl(new maplibregl.GeolocateControl({
  positionOptions:
  {
    enableHighAccuracy: true
  },
  trackUserLocation: true
}));

map.addControl(new maplibregl.NavigationControl(
  {
    visualizePitch: true,
    showZoom: true,
    showCompass: true
  }), "top-left"
);

map.addControl( new maplibregl.TerrainControl(
  {
    source: 'terrainSource',
    exaggeration: 1.3
  }), "top-left");

map.getCanvas().focus();
