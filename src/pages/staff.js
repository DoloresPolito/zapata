import styled from "styled-components";
import { Section, Container } from "../styles/styles";
import Navbar from "@/structure/Navbar";
import Footer from "@/structure/Footer";
import { motion } from "framer-motion";

function Staff() {


  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar />
        <AboutSection>
          <AboutContainer>
            <p>STAFF</p>
          </AboutContainer>
        </AboutSection>
     
        <Footer />
        </motion.div>
 
    </>
  );
}
const AboutSection = styled(Section)`
  height: 100vh;
  background-color: white;
`;

const AboutContainer = styled(Container)``;


export default Staff;
