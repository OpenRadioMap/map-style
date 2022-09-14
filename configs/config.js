"use strict";


/*
This style requires a vector tile server to run.
This configuration is for running with MapTiler Cloud.
Visit MapTiler Cloud and create an account/log in:
https://cloud.maptiler.com/maps/
Go to Account->Keys and create a key to paste here:
*/


const MAPTILER_KEY = "<yourMapTilerKey>";
const OMT_HOST     = "https://demo.maptiler.com";
const RF_HOST      = "http://api.openradiomap.com";
const OPENMAPTILES_URL = `${OMT_HOST}/tiles/v3-openmaptiles/tiles.json?key=${MAPTILER_KEY}`;
const CONTOURS_URL     = `${OMT_HOST}/tiles/contours/tiles.json?key=${MAPTILER_KEY}`;
const LANDCOVER_URL    = `${OMT_HOST}/tiles/landcover/tiles.json?key=${MAPTILER_KEY}`;
const TERRAIN_URL      = `${OMT_HOST}/tiles/terrain-rgb/tiles.json?key=${MAPTILER_KEY}`;
const RFCOVERAGE_URL   = `${RF_HOST}/tiles/transmitters/tiles.json`;
const RFCONTOUR_URL    = `${RF_HOST}/tiles/contours/tiles.json`;
//const RFPOLYGON_URL    = `${RF_HOST}/tiles/polygons/tiles.json`;
const RFPOLYGON_URL    = false;

const ATTRIBUTION_LOGO = `
<a href="https://www.maptiler.com/">
  <img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo"/>
</a>`;
const ATTRIBUTION_TEXT =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a>';

export default {
  OPENMAPTILES_URL,
  CONTOURS_URL,
  TERRAIN_URL,
  LANDCOVER_URL,
  RFCOVERAGE_URL,
  RFCONTOUR_URL,
  RFPOLYGON_URL,
  ATTRIBUTION_LOGO,
  ATTRIBUTION_TEXT,
};
