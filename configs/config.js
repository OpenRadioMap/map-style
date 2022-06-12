"use strict";


/*
This style requires a vector tile server to run.
This configuration is for running with MapTiler Cloud.
Visit MapTiler Cloud and create an account/log in:
https://cloud.maptiler.com/maps/
Go to Account->Keys and create a key to paste here:
*/


const MAPTILER_KEY = "<yourAPIkey>";

const OPENMAPTILES_URL = `https://api.maptiler.com/tiles/v3-openmaptiles/tiles.json?key=${MAPTILER_KEY}`;
const CONTOURS_URL     = `https://api.maptiler.com/tiles/contours/tiles.json?key=${MAPTILER_KEY}`;
const LANDCOVER_URL    = `https://api.maptiler.com/tiles/landcover/tiles.json?key=${MAPTILER_KEY}`;
const TERRAIN_URL      = `https://api.maptiler.com/tiles/terrain-rgb/tiles.json?key=${MAPTILER_KEY}`;
const RFCOVERAGE_URL   = `https://api.openradiomap.com/tiles/transmitters/tiles.json`;

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
  ATTRIBUTION_LOGO,
  ATTRIBUTION_TEXT,
};
