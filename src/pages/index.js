import React from "react";
// import Navbar from "@/structure/Navbar";
import Footer from "@/structure/Footer";
import Cover from "@/home/Cover";
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import Technology from "@/home/Technology";
import Space from "@/home/Space";
import Staff from "@/home/Staff";
function Home() {
  return (
    <>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
      <FramerNavbar />
      <Cover />
      <Technology/>
      <Space/>
 <Staff/>
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
