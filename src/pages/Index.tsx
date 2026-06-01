import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import SelectedWorks from "../components/SelectedWorks";
import Skills from "../components/Skills";
import Explorations from "../components/Explorations";
import Achievements from "../components/Achievements";
import Leadership from "../components/Leadership";
import Education from "../components/Education";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        className="relative"
      >
        <Navbar />
        <Hero />
        <Experience />
        <SelectedWorks />
        <Skills />
        <Explorations />
        <Achievements />
        <Leadership />
        <Education />
        <Stats />
        <Footer />
      </motion.main>
    </>
  );
}
