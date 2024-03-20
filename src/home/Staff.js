import React from "react";
import styled from "styled-components";
import { SectionLinks, H2, H3, Section, Container } from "../styles/styles";
import Link from "next/link";
import Image from "next/image";
import arrow from "../../public/assets/arrows/small-black.svg";


function Staff() {
  return (
    <>
      <StaffSection>
        <StaffContainer>
          <Top>
            <H3>Staff</H3>
            <p>
              Formamos un equipo médico de alto nivel, con gran experiencia en
              esta rama de la medicina y garantizamos una capacitación continua
              en cada uno de los integrantes del staff.
            </p>
            <Link href="/about">
              <StaffLink>
                <h6>Conocé más sobre el staff</h6>
                <Image src={arrow} alt="arrow" />
              </StaffLink>
            </Link>
            
          </Top>
     
        </StaffContainer>
      </StaffSection>
    </>
  );
}

const StaffSection = styled(Section)`
  height: 100vh;
  background-color: #ece8e5;
`;

const StaffContainer = styled(Container)`
`;

const Top = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
`;

const StaffLink = styled(SectionLinks)`
  h6 {
    color: #281a0f;
    font-size: 15px;
  }
`;

export default Staff;
