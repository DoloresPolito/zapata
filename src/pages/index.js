import React, {useEffect} from "react";
import Navbar from "@/structure/Navbar";
import Footer from "@/structure/Footer";
import Cover from "@/home/Cover";
import { motion } from "framer-motion";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import FramerNavbar from "@/components/FramerNavbar/FramerNavbar";
import Technology from "@/home/Technology";
import Space from "@/home/Space";
import Staff from "@/home/Staff";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Inner from "@/components/Layout/Inner";


function Home() {

  const { locale, locales, push } = useRouter();

  useEffect(() => {


  }, [locale]);


  const { t: translate } = useTranslation("home");
  return (
    <>
<Inner backgroundColor={"#B0AD98"}>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      > */}
        <Navbar />
        <Cover translate={translate} />
        <Technology />
        <div>
          <h2> {translate("title")}</h2>
        </div>
        <Space />
        <Staff />
        <Footer />
      {/* </motion.div> */}
      </Inner>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar", "about", "home"])),
    },
  };
}

export default Home;
