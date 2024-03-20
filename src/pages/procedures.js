import React from "react";
import styled from "styled-components";
// import { useTranslation } from "next-i18next";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Section, Container } from "../styles/styles";
import Navbar from "@/structure/Navbar";
import Footer from "@/structure/Footer";
import { motion } from "framer-motion";

function Procedures() {
  //   const { t: translate } = useTranslation("procedures");

  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar />

        <ProceduresSection>
          <ProceduresContainer>
            <p>PROCEDIMIENTOS</p>
          </ProceduresContainer>
        </ProceduresSection>
  
      <Footer />
      </motion.div>
    </>
  );
}

const ProceduresSection = styled(Section)`
  height: 100vh;
  background-color: white;
`;

const ProceduresContainer = styled(Container)``;

export default Procedures;
