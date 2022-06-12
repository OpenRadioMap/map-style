"use strict";
import * as Colour from "../constants/colour.js";
import * as Fonts from "../constants/fonts.js";

export const contourLines = {
  id: "contours",
  type: "line",
  source: "contourSource",
  "source-layer": "contour",
  minzoom: 11,
  filter: [
    "all", 
    ["!in", "nth_line", 10, 5], 
    [">", "height", 0]
  ],
  layout: {
    visibility: "visible"
  },
  paint: {
    "line-color": Colour.countourLine,
    "line-width": 0.8,
    "line-opacity": {
      stops: [
        [10, 0.2], 
        [14, 0.2]
      ]
    }
  }
}

export const contourIndex = {
  id: "contours_index",
  type: "line",
  source: "contourSource",
  "source-layer": "contour",
  minzoom: 10,
  filter: [
    "all",
    ["in", "nth_line", 10, 5], 
    [">", "height", 0]
  ],
  layout: {
    visibility: "visible"
  },
  paint: {
    "line-color": Colour.countourLine,
    "line-width": {
      stops: [
        [10, 0.8], 
        [14, 1.3]
      ]
    },
    "line-opacity": {
      stops: [
        [10, 0.3],
        [14, 0.25]
      ]
    }
  }
};

export const contourLabel = {
  id: "contours_label",
  type: "symbol",
  metadata: {},
  source: "contourSource",
  "source-layer": "contour",
  filter: [
    "all",
    ["==", "$type", "LineString"],
    ["in", "nth_line", 10, 5],
    [">", "height", 0]
  ],
  layout: {
    "text-font": Fonts.contours,
    "text-size": {
      "base": 1, 
      "stops": [
        [15, 9.5], [20, 12]
      ]
    },
    "text-field": "{height}",
    visibility: "visible",
    "text-padding": 10,
    "symbol-placement": "line",
    "symbol-avoid-edges": true,
    "text-allow-overlap": false,
    "text-ignore-placement": false,
    "text-rotation-alignment": "map"
  },
  paint: {
    "text-color": Colour.countourLine,
    "text-halo-blur": 1,
    "text-halo-color": "rgba(255, 254, 237, 1)",
    "text-halo-width": 0.5
  }
};

