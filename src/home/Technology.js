import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { SectionLinks, H2, H3,Section, Container } from "../styles/styles";
import Image from "next/image";
import arrow from "../../public/assets/arrows/small-black.svg";
import picture from "../../public/assets/home/technology-home.png";


function Technology() {
  return (
    <>
      <TechnologySection>
        <TechnologyContainer>
          <Top>
            <H3>Tecnología</H3>
            <H2>
              La máxima calidad en los resultados es nuestro objetivo en cada
              caso, y para alcanzarla utilizamos las técnicas modernas de mínimo
              riesgo y rápida recuperación.
            </H2>
          </Top>
          <Bottom>
            <div className="image-container">
            <Image src={picture} alt="technology"/>
          
            </div>
            <div className="text-container">
              <p>
                Contamos con un área quirúrgica de tecnología de vanguardia,
                actualizada constantemente. La excelencia médica, tanto en lo
                técnico, como en lo humano, son nuestros principales objetivos y
                tanto en lo estético como en lo reconstructivo nuestros
                resultados y trayectoria nos respaldan.
              </p>
              <p>
                Nuestro área quirúrgica cuenta con tecnología de última
                generación para realizar todos los procedimientos que el Dr.
                Federico Zapata ofrece, estando la misma habilitada bajo la
                reglamentacion y requerimientos del Ministerio de Salud de la
                Nación y del Gobierno de la Ciudad Autónoma de Buenos Aires.
              </p>

              <Link href="/space">
                  <TechnologyLink>
                    <h6>Contactanos</h6>
                    <Image src={arrow} alt="arrow" />
                  </TechnologyLink>
                </Link>

         
            </div>
          </Bottom>
        </TechnologyContainer>
      </TechnologySection>
    </>
  );
}

const TechnologySection = styled(Section)`
  height: 110vh;
  background-color: #ece8e5;
`;

const TechnologyContainer = styled(Container)`
`;

const Top = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  width: 100%;
  height: 70%;

  display: flex;

  .image-container {
    height: 100%;
    width: 50%;
  }

  .text-container {
    height: 100%;
    width: 50%;
  }
`;

const TechnologyLink = styled(SectionLinks)`
  border-bottom: 0.8px solid #281A0F;
h6{
  color:#281A0F;
  font-size: 15px;
}

`

export default Technology;
