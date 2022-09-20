import React, { Component } from "react";
import CarItem from "./CarItem";

export class Cars extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>Classic car's top models</h2>
        <div className="row my-4">
          <div className="col-md-3">
            <CarItem
              title="Aston Martin DB5 1964"
              description="Brand: Aston Martin"
              imageUrl="https://cdn.luxe.digital/media/2021/11/26104812/best-classic-cars-vintage-Aston-Martin-DB5-1964-old-luxe-digital%402x.jpg.webp"
            />
          </div>
          <div className="col-md-3">
            <CarItem
              title="Ferrari 250 GTO 1962"
              description="Brand: Ferrari"
              imageUrl="https://cdn.luxe.digital/media/2021/11/26104851/best-classic-cars-vintage-Ferrari-250-GTO-1962-old-luxe-digital%402x.jpg.webp"
            />
          </div>
          <div className="col-md-3">
            <CarItem
              title="Jaguar E-Type 1961"
              description="Brand: Jaguar"
              imageUrl="https://cdn.luxe.digital/media/2021/11/26104913/best-classic-cars-vintage-Jaguar-E-Type-1961-old-luxe-digital%402x.jpg.webp"
            />
          </div>
          <div className="col-md-3">
            <CarItem
              title="Porsche 911 1963"
              description="Brand: Porsche"
              imageUrl="https://cdn.luxe.digital/media/2021/11/26104949/best-classic-cars-vintage-Porsche-911-1963-old-luxe-digital%402x.jpg.webp"
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-3">
            <CarItem
              title="Chevrolet El Camino SS 1970"
              description="Brand: Chevrolet"
              imageUrl="https://cdn.luxe.digital/media/2021/11/26104836/best-classic-cars-vintage-Chevrolet-El-Camino-SS-1970-old-luxe-digital%402x.jpg.webp"
            />
          </div>
          <div className="col-md-3">
            <CarItem
              title="Oldsmobile Starfire Convertible 1962"
              description="Brand: Oldsmobile"
              imageUrl="https://cdn.luxe.digital/media/2021/11/26104943/best-classic-cars-vintage-Oldsmobile-Starfire-Convertible-1962-old-luxe-digital%402x.jpg.webp"
            />
          </div>
          <div className="col-md-3">
            <CarItem
              title="British Motor Corporation Mini 1959"
              description="Brand: British Motor Corporation"
              imageUrl="https://cdn.luxe.digital/media/2021/11/26104822/best-classic-cars-vintage-British-Motor-Corporation-Mini-1959-old-luxe-digital%402x.jpg.webp"
            />
          </div>
          <div className="col-md-3">
            <CarItem
              title="Ford Mustang Shelby GT350 1965"
              description="Brand: Ford"
              imageUrl="https://cdn.luxe.digital/media/2021/11/26104902/best-classic-cars-vintage-Ford-Mustang-Shelby-GT350-1965-old-luxe-digital%402x.jpg.webp"
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-3">
            <CarItem
              title="Mercedes 300SL Gullwing 1954"
              description="Brand: Mercedes"
              imageUrl="https://cdn.luxe.digital/media/2021/11/26104932/best-classic-cars-vintage-Mercedes-300SL-Gullwing-1954-old-luxe-digital%402x.jpg.webp"
            />
          </div>
          <div className="col-md-3">
            <CarItem
              title="Chevrolet Corvette 1963"
              description="Brand: Chevrolet"
              imageUrl="https://cdn.luxe.digital/media/2021/11/26104831/best-classic-cars-vintage-Chevrolet-Corvette-1963-old-luxe-digital%402x.jpg.webp"
            />
          </div>
          <div className="col-md-3">
            <CarItem
              title="Bugatti Type 57 Atlantic 1938"
              description="Brand: Bugatti    "
              imageUrl="https://cdn.luxe.digital/media/2021/11/26104827/best-classic-cars-vintage-Bugatti-Type-57-Atlantic-1938-old-luxe-digital%402x.jpg.webp"
            />
          </div>
          <div className="col-md-3">
            <CarItem
              title="Rolls-Royce Dawn Drophead 1949"
              description="Brand: Rolls-Royce"
              imageUrl="https://cdn.luxe.digital/media/2021/11/26104954/best-classic-cars-vintage-Rolls-Royce-Dawn-Drophead-1949-old-luxe-digital%402x.jpg.webp"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cars;
