import React from "react";
import { Container } from "react-bootstrap";
import NewsSlider from "../components/News-Slider";

export default function Frontpage() {
  return (
    <Container>
      <div>
        <h1>Vi realiserer potentialet i socialt arbejde</h1>
        <p>
          Metodecentret arbejder sammen med kommuner og regioner for at styrke
          kvaliteten af sociale indsatser til gavn for udsatte borgere og
          samfundet.
        </p>
      </div>
      <NewsSlider>
        
      </NewsSlider>
      <div>
        Method Slider
      </div>
      <div>
        Themes Slider
      </div>
    </Container>
  );
}
