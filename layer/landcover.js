"use strict";

export const grass = {
  id: "landcover_grass",
  type: "fill",
  "metadata": {},
  source: "landcover",
  "source-layer": "globallandcover",
  filter: [
    "any",
    ["==", "class", "grass"]
  ],
  layout: {
    visibility: "visible"
  },
  paint: {
    "fill-color": "rgba(139, 204, 72, 1)",
    "fill-opacity": 0.15,
    "fill-antialias": false
  }
};

export const forest = {
  id: "landcover_forest",
  type: "fill",
  "metadata": {},
  source: "landcover",
  "source-layer": "globallandcover",
  filter: [
    "any",
    ["==", "class", "forest"]
  ],
  layout: {
    visibility: "visible"
  },
  paint: {
    "fill-color": {
      "stops": [
        [6, "rgba(211, 238, 188, 1)"],
        [16, "rgba(179, 216, 162, 1)"]
      ]
    },
    "fill-opacity": 0.15,
    "fill-antialias": true,
    "fill-translate": [1, 1]
  }
};

export const snow = {
  id: "landcover_snow",
  type: "fill",
  metadata: {},
  source: "landcover",
  "source-layer": "globallandcover",
  filter: [
    "all", 
   ["==", "class", "snow"]
  ],
  layout: {
    visibility: "visible"
  },
  paint: {
    "fill-color": "rgba(255, 255, 255, 1)",
    "fill-opacity": 0.15,
    "fill-antialias": false
  }
};
export const scrub = {
  id: "landcover_scrub",
  type: "fill",
  metadata: {},
  source: "landcover",
  "source-layer": "globallandcover",
  filter: [
    "all", 
    ["in", "class", "scrub"]
  ],
  layout: {
    visibility: "visible"
  },
  paint: {
    "fill-color": "rgba(249, 248, 152, 1)",
    "fill-opacity": 0.15,
    "fill-antialias": false
  }
};
