/* global google */
import { GoogleMap, HeatmapLayer, useLoadScript } from '@react-google-maps/api';
import { Result, Spin } from 'antd';
import React from 'react';

const libraries = ['visualization'];

const mapContainerStyle = {
  height: 'calc(100vh - 66px)', // subtract height of the header
  width: '100vw',
};

const center = {
  lat: 37.774546,
  lng: -122.433523,
};

const onLoad = (heatmapLayer) => {
  console.log('HeatmapLayer onLoad heatmapLayer: ', heatmapLayer);
};

const onUnmount = (heatmapLayer) => {
  console.log('HeatmapLayer onUnmount heatmapLayer: ', heatmapLayer);
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries,
    preventGoogleFonts: true,
  });

  if (loadError) {
    return <Result status="warning" title="The map could not be loaded. Please try again." />;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      // required
      zoom={13}
      // required
      center={center}
    >
      <HeatmapLayer
        // optional
        onLoad={onLoad}
        // optional
        onUnmount={onUnmount}
        // required
        data={[
          new google.maps.LatLng(37.782, -122.447),
          new google.maps.LatLng(37.782, -122.445),
          new google.maps.LatLng(37.782, -122.443),
          new google.maps.LatLng(37.782, -122.441),
          new google.maps.LatLng(37.782, -122.439),
          new google.maps.LatLng(37.782, -122.437),
          new google.maps.LatLng(37.782, -122.435),
          new google.maps.LatLng(37.785, -122.447),
          new google.maps.LatLng(37.785, -122.445),
          new google.maps.LatLng(37.785, -122.443),
          new google.maps.LatLng(37.785, -122.441),
          new google.maps.LatLng(37.785, -122.439),
          new google.maps.LatLng(37.785, -122.437),
          new google.maps.LatLng(37.785, -122.435),
        ]}
      />
    </GoogleMap>
  ) : (
    <Spin />
  );
};

export default Map;
