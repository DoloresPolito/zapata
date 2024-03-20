import React, { useState } from "react";
import styled from "styled-components";
import { SectionLinks, H1, H3 } from "../styles/styles";
import Link from "next/link";
import Image from "next/image";
import arrow from "../../public/assets/arrows/small-blue.svg";
import picture1 from "../../public/assets/procedures/rostro.png";
// import picture2 from "../../public/assets/procedures/cuerpo.png";
// import picture3 from "../../public/assets/procedures/rostro.png";
// import picture4 from "../../public/assets/procedures/rostro.png";
import leftcarousel from "../../public/assets/arrows/left-carousel.svg";
import rightcarousel from "../../public/assets/arrows/right-carousel.svg";

function Cover() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
  };

  const items = [
    { id: 1, nombre: "Rostro", imagen: "picture1" },
    { id: 2, nombre: "Cuerpo", imagen: "picture2" },
    { id: 3, nombre: "Nariz", imagen: "picture3" },
    { id: 4, nombre: "Nariz", imagen: "picture3" },
    { id: 5, nombre: "Nariz", imagen: "picture3" },
    { id: 6, nombre: "Nariz", imagen: "picture3" },
  ];
  return (
    <>
      <CoverSection>
        <CoverContainer>
          <H1>
            Profesionalismo médico,
            <br /> atención personalizada y tecnología
            <br /> de vanguardia.
          </H1>
          <CarouselContainer>
            <Left>
              <div>
                <CoverH3>Procedimientos</CoverH3>
                <Link href="/procedures">
                  <SectionLinks>
                    <h6>Ver todos nuestros servicios</h6>
                    <Image src={arrow} alt="arrow" />
                  </SectionLinks>
                </Link>
              </div>
              <div>
                <ArrowContainer>
                  <div>
                    <Image
                      src={leftcarousel}
                      alt="leftcarousel"
                      onClick={handlePrev}
                      direction="prev"
                    />

                    <Image
                      src={rightcarousel}
                      alt="rightcarousel"
                      onClick={handleNext}
                      direction="next"
                      style={{ marginLeft: "5px" }}
                    />
                  </div>
                  <Scrollbar>
                    <ScrollbarIndicator
                      width={((currentIndex + 1) / items.length) * 100}
                    />
                  </Scrollbar>
                </ArrowContainer>
              </div>
            </Left>
            <Right>
              <CarouselCon>
                <CarouselTrack
                  style={{
                    transform: `translateX(-${currentIndex * (100 / 1.5)}%)`,
                  }}
                >
                  {items.map((item, index) => (
                    <CarouselItem key={index}>
                      <Image src={picture1} alt="picture" />
                      <h6>{item.nombre}</h6>
                    </CarouselItem>
                  ))}
                </CarouselTrack>
              </CarouselCon>

              <div>
                <p>
                  Ofrecemos una atención personalizada con máxima discreción,
                  brindando siempre información completa sobre nuestros
                  servicios, orientados al tratamiento estético y reparador
                </p>
              </div>
            </Right>
          </CarouselContainer>
        </CoverContainer>
      </CoverSection>
    </>
  );
}

const CoverSection = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/backgrounds/imagen-cover.png");
  background-size: cover;
  background-position: center;
`;

const CoverContainer = styled.div`
  height: 75%;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1600px;
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: #f0edf3;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  height: 90%;
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  justify-content: space-between;

  p {
    font-family: "Roboto", sans-serif;
    color: #182e50;
  }
`;

const Right = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: "Roboto", sans-serif;
    color: #182e50;
    font-size: 14px;
    padding: 20px 30px 0px 0px;
  }
`;

const CoverH3 = styled(H3)`
  color: #182e50;
`;

const CarouselCon = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #f0edf3;
  width: 100%;
`;

const CarouselTrack = styled.div`
  display: flex;
  transition: transform 1s ease !important; 
`;

const CarouselItem = styled.div`
  /* width: 90% !important; */
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  background-color: #ece8e5;
  margin-right: 30px;

  div{
    
  }

  img {
    padding: 5px;
  }
  h6 {
    margin-top: 10px;
    font-family: "Roboto", sans-serif;
    color: #182e50;
    font-size: 18px;
    font-weight: 400;
    margin-left: 30px;
  }
`;

const ArrowContainer = styled.div`
  width: 50%;
  position: relative;
  z-index: 10;
`;

const Scrollbar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #ccc;
  margin-top: 5px;
`;

const ScrollbarIndicator = styled.div`
  width: ${(props) => props.width}%;
  height: 100%;
  background-color: #182e50;
  transition: width 0.5s ease; 
`;

export default Cover;
