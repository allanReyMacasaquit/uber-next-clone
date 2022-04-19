import React from "react";
import mapboxgl from "!mapbox-gl";
import tw from "tailwind-styled-components";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWxsYW5yZXkiLCJhIjoiY2wxenh1amswMHI2eDNjcWRycGs5MDF1bCJ9.bBmnKcojP1tfuC9C-KITVw";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-79.6857955901, 43.4669381322],
      zoom: 4,
    });

    if (props.pickUpCoordinates) {
      addToMap(map, props.pickUpCoordinates);
    }
    if (props.dropOffCoordinates) {
      addToMap(map, props.dropOffCoordinates);
    }
    if (props.pickUpCoordinates && props.dropOffCoordinates) {
      map.fitBounds([props.pickUpCoordinates, props.dropOffCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickUpCoordinates, props.dropOffCoordinates]);

  const addToMap = (map, coordinates) => {
    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Mapcss id="map"></Mapcss>;
};

export default Map;

export const Mapcss = tw.div`
  flex-1
  h-1/2
`;
