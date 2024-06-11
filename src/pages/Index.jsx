import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Container } from "@chakra-ui/react";

const buildingIcon = new L.Icon({
  iconUrl: require('../assets/building-pin.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const generateRandomCoordinates = () => {
  const coordinates = [];
  for (let i = 0; i < 10; i++) {
    const latitude = Math.random() * (59.95 - 59.85) + 59.85;
    const longitude = Math.random() * (10.8 - 10.7) + 10.7;
    coordinates.push([latitude, longitude]);
  }
  return coordinates;
};

const Index = () => {
  const [buildings, setBuildings] = useState(generateRandomCoordinates());

  return (
    <Container maxW="container.xl" p={0}>
      <MapContainer center={[59.9139, 10.7522]} zoom={13} style={{ height: '100vh', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {buildings.map((building, index) => (
          <Marker key={index} position={building} icon={buildingIcon}>
            <Popup>
              <div>
                <h2>Building {index + 1}</h2>
                <p>Temperature: {Math.random() * 10 + 18}°C</p>
                <p>Humidity: {Math.random() * 50 + 30}%</p>
                <p>Occupancy: {Math.floor(Math.random() * 10) + 10} people</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Container>
  );
};

export default Index;