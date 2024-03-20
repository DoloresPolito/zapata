import React from "react";
import Navbar from "@/structure/Navbar";
import Footer from "@/structure/Footer";
import Cover from "@/home/Cover";
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
function Home() {
  return (
    <>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
      <Navbar />
      <Cover />
 
      <Footer />
      </motion.div>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar", "about"])),
    },
  };
}

export default Home;
