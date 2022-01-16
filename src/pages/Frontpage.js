import React from "react";
import { Container } from "react-bootstrap";
import NewsSlider from "../components/News-Slider";
import MethodSlider from "../components/Method-Slider";
import ThemesSlider from "../components/Themes-Slider";
import "../css/Frontpage.css";

export default function Frontpage() {
  return (
    <div>
      <div className="front-container">
        <Container>
          <h1 className="front-header">Vi realiserer potentialet i socialt arbejde</h1>
          <p className="front-text">
            Metodecentret arbejder sammen med kommuner og regioner for at styrke
            kvaliteten af sociale indsatser til gavn for udsatte borgere og
            samfundet.
          </p>
        </Container>
      </div>
      <NewsSlider />
      <MethodSlider />
      <ThemesSlider />
    </div>
  );
}
