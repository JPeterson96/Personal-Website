import React from 'react';
import './hexagon.css'; // Create this CSS file to style the hexagons

function Hexagon({ children }) {
  return <div className="hexagon">{children}</div>;
}

function HexagonContent({ children }) {
  return <div className="hexagon-content">{children}</div>;
}

function HexagonIcon({ children }) {
  return <div className="hexagon-icon">{children}</div>;
}

export { Hexagon, HexagonContent, HexagonIcon };