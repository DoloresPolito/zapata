import React from "react";
import styled from "styled-components";
import { SectionLinks, H1, H3 } from "../styles/styles";
import Link from "next/link";
import Image from "next/image";
import arrow from "../../public/assets/arrows/small-blue.svg";

function Cover() {
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
                <p>carousel links</p>
              </div>
            </Left>
            <Right>
              <div className="carousel-container"></div>
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

  .carousel-container {
    height: 200px;
    background-color: #ece8e5;
    width: 100%;
  }
`;

const CoverH3 = styled(H3)`
  color: #182e50;
`;

export default Cover;