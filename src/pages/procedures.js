import styled from "styled-components";
// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Section, Container } from "../styles/styles";
import Navbar from "@/structure/Navbar";
import Footer from "@/structure/Footer";

function Procedures() {
//   const { t: translate } = useTranslation("procedures");

  return (
    <>

        <Navbar />
   
        <ProceduresSection>
          <ProceduresContainer>
            <p>PROCEDIMIENTOS</p>
  
          </ProceduresContainer>
        </ProceduresSection>

        <Footer />

    </>
  );
}

const ProceduresSection = styled(Section)`
  height: 100vh;
  background-color: white;
`;

const ProceduresContainer = styled(Container)``;


export default Procedures;