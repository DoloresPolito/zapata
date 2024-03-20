import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { SectionLinks } from "../styles/styles";
import Link from "next/link";
import arrow from "../../public/assets/arrows/small-white.svg";
import logo1 from "../../public/assets/footer/logo-footer-1.png";
import logo2 from "../../public/assets/footer/logo-footer-2.png";
import logo3 from "../../public/assets/footer/logo-footer-3.png";
import logo4 from "../../public/assets/footer/logo-footer-4.png";

function Footer() {
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <LeftContainer>
            <div className="top">
              <h4>
                Somos profesionalismo médico, atención personalizada y
                tecnología de vanguardia
              </h4>

              <Link href="/contact">
                <FooterLink>
                  <h6>Contactanos</h6>
                  <Image src={arrow} alt="arrow" />
                </FooterLink>
              </Link>
            </div>
            <div className="bottom">
              <p>©2024 Federico Zapata</p>
              <p>All rights reserved. Sitio por Vinte</p>
            </div>
          </LeftContainer>
          <RightContainer>
            <div className="columns-container">
              <div className="column">
                <p>Twitter</p>
                <p>Linkedin</p>
                <p>Instagram</p>
                <p>Facebook</p>
              </div>
              <div className="column">
                <p>
                  Austria 2630, CABA <br />
                  Buenos Aires
                  <br />
                  CP1425
                </p>
                <p>
                  +54 11 4807 4040
                  <br />
                  +54 11 4195 0768
                  <br />
                  info@federicozapata.com.ar
                </p>
              </div>
              <div className="column">
                <p>Procedimientos</p>
                <p>Staff</p>
                <p>Prensa</p>
                <p>Contacto</p>
              </div>
            </div>
            <div className="logos-container">
              <Image src={logo1} alt="logo1" />
              <Image src={logo2} alt="logo2" />
              <Image src={logo3} alt="logo3" />
              <Image src={logo4} alt="logo4" />
            </div>
          </RightContainer>
        </FooterContainer>
      </FooterSection>
    </>
  );
}

const FooterSection = styled.div`
  width: 100%;

  height: 400px;
  background-color: #0b0d1c;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterContainer = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  max-width: 1600px;
`;

const LeftContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    font-family: "Roboto", sans-serif;
    color: white;
    font-size: 20px;
  }
  p {
    font-family: "Roboto", sans-serif;
    color: white;
    font-size: 15px;
  }
`;

const RightContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .columns-container {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-self: flex-end;
  }

  .logos-container {
    display: flex;
    align-self: flex-end;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 50%;
    img {
      height: 55px;
      width: 65px;
    }
  }

  .column {
    display: flex;
    flex-direction: column;

    p {
      color: white;
    }
  }
`;

const FooterLink = styled(SectionLinks)`
  border-bottom: 0.8px solid white;
  h6 {
    color: white;
  }
`;
export default Footer;
