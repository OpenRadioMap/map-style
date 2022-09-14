import * as label from "../constants/label.js";

export const rfCoverageLine = {
  id: "rfcontourline",
  type: "line",
  source: "rfContourLine",
  "source-layer": "public.contours",
  minzoom: 9,
  filter: [
    "all",
    ["<","value",254],
    [">","value",118],
  ],
  layout: {"visibility": "visible"},
  paint: {
    "line-color": "rgba(174, 22, 77, 1)",
    "line-width": 0.8,
    "line-opacity": {"stops": [[10, 0.2], [14, 0.2]]}
  }
};

export const rfCoverageLabel = {
  id: "rfcontourline_label",
  type: "symbol",
  metadata: {},
  source: "rfContourLine",
  "source-layer": "public.contours",
  minzoom: 12,
  filter: [
    "all",
    ["==", "$type", "LineString"],
    ["<","value",254],
    [">","value",118],
  ],
  layout: {
    "text-font": ["Metropolis Bold"],
    "text-size": {"base": 1, "stops": [[15, 9.5], [20, 12]]},
    "text-field": ["to-string", ["-", 254, ["to-number", ["get", "value"]]]],
    visibility: "visible",
    "text-padding": 10,
    "symbol-placement": "line",
    "symbol-avoid-edges": true,
    "text-allow-overlap": false,
    "text-ignore-placement": false,
    "text-rotation-alignment": "map"
  },
  paint: {
    "text-color": "rgba(145, 15, 100, 1)",
    "text-halo-blur": 1,
    "text-halo-color": "rgba(255, 254, 237, 1)",
    "text-halo-width": 0.5
  }
};

export const rfTransmitters = {
  id: "transmitters",
  type: "symbol",
  source: "rfcoverage",
  "source-layer": "public.transmitters",
  minzoom: 5,
  layout: {
    "visibility": "visible",
    "icon-image": "comm_tower",
    "icon-size": {
      stops: [[9,0.7],[14,1]]
    },
    "icon-anchor": "center",
    "text-field": "{callsign}",
    "text-font": ["Metropolis Bold"],
    "text-size": {
      "stops": [[7,9],[11,10],[13,14]]
    },
    "text-offset": [0,-1.5],
    "text-anchor": "top",
    "text-max-width": {"stops": [[12,4],[15,6]]}
  },
  "paint": {
    "text-color": {
      "stops": [
        [11,"rgba(69, 69, 69, 1)"],
        [15,"rgba(46, 46, 46, 1)"]
      ]
    },
    "text-halo-blur": {"stops": [[11,2],[15,0]]},
    "text-halo-color": {"stops": [[11,"rgba(255, 255, 255, 1)"],[15,"rgba(255, 255, 255, 0.56)"]]},
    "text-halo-width": {"stops": [[11,2],[15,1.3]]}
  }
};

export const rfServicePoly = {
  id: "ServiceContour",
  source: "rfPoloygons",
  "source-layer": "public.layer_polygon",
  minzoom: 5,
  type: "fill",
  paint: {
    "fill-color": "rgba(111, 238, 188, 1)",
    "fill-opacity": 0.25,
    "fill-antialias": true,
    "fill-translate": [1, 1]
  },
  layout: {
    visibility: "visible"
  },
};

