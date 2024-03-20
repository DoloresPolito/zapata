import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import picture from "../../../public/assets/home/technology-home.png";
const CarouselContainer = styled.div`
  width: 50%;
  overflow: hidden;

`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease;
 

`;

const CarouselItem = styled.div`

  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  transition: opacity 0.9s ease; /* Transición de opacidad para la imagen */

  img {
    width: 500px;
    height: 400px;
    padding-right: 60px;
    transition: transform 0.9s ease; /* Transición para la imagen */
  }
`;

const ArrowContainer = styled.div`
  width: 50%;
  position: relative;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 2;
  ${(props) => (props.direction === "prev" ? "left: 0;" : "right: 0;")}
  background-color: blue;
`;

const Scrollbar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #ccc;
`;

const ScrollbarIndicator = styled.div`
  width: ${(props) => props.width}%;
  height: 100%;
  background-color: #007bff;
  transition: width 0.3s ease; /* Transición suave en la propiedad width */
`;

const items = [1, 2, 3, 4, 5]; // Tus elementos del carrusel

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
  };

  return (
    <>
      <CarouselContainer>
        <CarouselTrack
          style={{ transform: `translateX(-${currentIndex * (100 / 1.5)}%)` }}
        >
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <Image src={picture} alt="picture" />
              {/* Contenido del carrusel */}
            </CarouselItem>
          ))}
        </CarouselTrack>
      </CarouselContainer>

      <ArrowContainer>
        <ArrowButton onClick={handlePrev} direction="prev">
          prev
        </ArrowButton>

        <ArrowButton onClick={handleNext} direction="next">
          next
        </ArrowButton>

        <Scrollbar>
          <ScrollbarIndicator
            width={((currentIndex + 1) / items.length) * 100}
          />
        </Scrollbar>
      </ArrowContainer>
    </>
  );
};

export default Carousel;
