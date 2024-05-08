import styled from "styled-components";
import { Section, Container } from "../styles/styles";
import Navbar from "@/structure/Navbar";
import Footer from "@/structure/Footer";
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Inner from "@/components/Layout/Inner";

function Staff() {

  const { t: translate } = useTranslation("about");
  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      > */}
      <Inner>
        <Navbar />
        <AboutSection>
          <AboutContainer>
            <p>STAFF</p>
            <p>
            {translate("text")}
            </p>
          </AboutContainer>
        </AboutSection>
     
        <Footer />
        </Inner>
        {/* </motion.div> */}
 
    </>
  );
}
const AboutSection = styled(Section)`
  height: 100vh;
  background-color: white;
`;

const AboutContainer = styled(Container)``;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar", "about"])),
    },
  };
}


export default Staff;
