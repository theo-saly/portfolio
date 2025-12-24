"use client";

//import { ShaderFx } from "./Background/ShaderFx";
//import { Playground } from "./Background/Playground";
import SplashCursor from './Background/SplashCursor'


import { useDeviceType } from "./hooks/useDeviceType"
import { motion } from "framer-motion";
import React from "react";

// Components Section
import Intro from "./sections/Intro";
import Propos from "./sections/Propos";
import Technologies from "./sections/Technologies";
import Git from "./sections/Git";
import Profile from "./sections/Profile";
import Certifications from "./sections/Certifications";
import Recommandations from "./sections/Recommandations";
import Musique from "./sections/Musique";
import Experience from "./sections/Experience";
import Logos from "./sections/Logos";
import Formations from "./sections/Formations";
import Photos from "./sections/Photos";
import Map from "./sections/Map";
import Contact from "./sections/Contact";

// Components Projets
import Digitallia from "./projets/Digitallia";
import Meteor from "./projets/Meteor";
import Quantium from "./projets/Quantium";
import Salink from "./projets/Salink";
import Backrooms from "./projets/Backrooms";
import Aquabion from "./projets/Aquabion";
import Cuxdesign from "./projets/Cuxdesign";
import Nathanmaurer from "./projets/Nathanmaurer";
import Theosaly from "./projets/Theosaly";
import Xtremdrift from "./projets/Xtremdrift";



/**
 * Page d'accueil du portfolio.
 * Affiche différentes sections selon le type d'appareil (desktop, tablette, mobile).
 * Gère également un effet de scroll horizontal automatique pour la section projets.
 */
export default function Page() {
   const device = useDeviceType();

   // --- Références et états pour le scroll horizontal automatique ---
   const scrollContainerRef = React.useRef<HTMLDivElement>(null);
   const [isHovered, setIsHovered] = React.useState(false);
   const [hasScrolled, setHasScrolled] = React.useState(false);

   // --- Effet pour gérer le scroll automatique de la section projets ---
   React.useEffect(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      let scrollInterval: number | null = null;
      let scrollTimeout: number | null = null;

      const startScroll = () => {
         if (scrollInterval) return;
         scrollInterval = window.setInterval(() => {
         if (!isHovered && container.scrollLeft < container.scrollWidth - container.clientWidth) {
            container.scrollLeft += 1;
         } else if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            stopScroll();
         }
         }, 5);
      };

      const stopScroll = () => {
         if (scrollInterval) {
         clearInterval(scrollInterval);
         scrollInterval = null;
         }
      };

      const handleScrollTrigger = () => {
         if (!hasScrolled) {
         scrollTimeout = window.setTimeout(() => {
            setHasScrolled(true);
            startScroll();
         }, 1000);
         } else {
         startScroll();
         }
      };

      if (device === "desktop" || device === "tablet") {
         const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
               handleScrollTrigger();
               }
            });
         },
         { threshold: 0.1 }
         );

         if (container) observer.observe(container);

         return () => {
         stopScroll();
         if (scrollTimeout) clearTimeout(scrollTimeout);
         if (container) observer.unobserve(container);
         };
      } else {
         handleScrollTrigger();
         return () => {
         stopScroll();
         if (scrollTimeout) clearTimeout(scrollTimeout);
         };
      }
   }, [isHovered, hasScrolled, device]);

   // --- Rendu conditionnel selon le type d'appareil ---
   // Chaque bloc (desktop, tablette, mobile) adapte la disposition des sections pour une expérience utilisateur optimale.
   return (
   <>
   {/* Desktop */}
   {/* Affichage en 3 colonnes, fond animé, scroll horizontal automatique sur les projets */}
   {device === "desktop" && (
   <>
      <div className="pointer-events-none z-0" style={{
         position: "fixed",
         width: "100vw",
         height: "100svh",
      }}>
         <SplashCursor />
         {/* <ShaderFx>
            <Playground />
         </ShaderFx> */}   
      </div>
      <div
         className="flex flex-row justify-between items-start w-full h-full text-white pointer-events-none overflow-y-auto overflow-x-hidden px-[2vw] md:px-[1.5vw] xl:px-[1vw] pt-[2vw] md:pt-[1.5vw] xl:pt-[1vw]">
         <div className="flex w-1/3 flex-col">
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0 }}>
               <Intro />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.45 }}>
               <Propos />
            </motion.div>
         </div>

         <div className="flex w-1/3 flex-col">
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.15 }}>
               <Profile />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.6 }}>
               <Recommandations />
            </motion.div>
         </div>

         <div className="flex w-1/3 flex-col">
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}>
               <Experience />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.75 }}>
               <Logos />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.9 }}>
               <Formations />
            </motion.div>
         </div>
      </div>

      <div
         ref={scrollContainerRef}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         className="relative w-full px-[2vw] md:px-[1.5vw] xl:px-[1vw] overflow-x-auto whitespace-nowrap scroll-smooth pointer-events-auto scrollbar-custom"
         >
         <div className="flex flex-row w-max w-[100vw] overflow-y-hidden">
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0 }} viewport={{ once: true, amount: 0.1 }}>
               <Digitallia />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 , delay: 0.15 }} viewport={{ once: true, amount: 0.1 }}>
               <Meteor />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true, amount: 0.1 }}>
               <Quantium />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.45 }} viewport={{ once: true, amount: 0 }}>
               <Salink />
            </motion.div>

            <Backrooms />
            <Aquabion />
            <Cuxdesign />
            <Nathanmaurer />
            <Xtremdrift />
            <Theosaly />
         </div>
      </div>

      <div
         className="flex flex-row justify-between items-start w-full h-full text-white pointer-events-none overflow-y-hidden overflow-x-hidden px-[2vw] md:px-[1.5vw] xl:px-[1vw] pb-[2vw] md:pb-[1.5vw] xl:pb-[1vw]">
         <div className="flex w-1/3 flex-col">
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Technologies />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Photos />
            </motion.div>
         </div>

         <div className="flex w-1/3 flex-col">
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Certifications />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Musique />
            </motion.div>
         </div>

         <div className="flex w-1/3 flex-col">
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Contact />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Git />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Map />
            </motion.div>
         </div>
      </div>
   </>
   )}
   {/* Tablet */}
   {/* Affichage en 2 colonnes, fond animé, scroll horizontal automatique sur les projets */}
   {device === "tablet" && (
   <>
      <div className="pointer-events-none z-0" style={{
         position: "fixed",
         width: "100vw",
         height: "100svh",
      }}>
         <ShaderFx>
            <Playground />
         </ShaderFx>
      </div>
      <div
         className="flex border-bordercolor flex-row justify-center items-start w-full h-full text-white pointer-events-auto overflow-y-auto overflow-x-hidden px-[2vw] md:px-[1.5vw] xl:px-[1vw] pt-[2vw] md:pt-[1.5vw] xl:pt-[1vw]">
         <div className="flex flex-col w-1/2">
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0 }}>
               <Profile />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}>
               <Intro />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.6 }}>
               <Propos />
            </motion.div>
         </div>

         <div className="flex flex-col w-1/2">
            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.15 }}>
               <Experience />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.45 }}>
               <Logos />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.75 }}>
               <Formations />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.9 }}>
               <Recommandations />
            </motion.div>
         </div>
      </div>

      <div
         ref={scrollContainerRef}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         onTouchStart={() => setIsHovered(true)}
         onTouchEnd={() => setIsHovered(false)}
         onTouchCancel={() => setIsHovered(false)}
         className="w-full px-[2vw] md:px-[1.5vw] xl:px-[1vw] overflow-x-auto whitespace-nowrap scroll-smooth pointer-events-auto"
      >
         <div className="flex flex-row w-max w-[100vw] overflow-y-hidden">
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0 }} viewport={{ once: true, amount: 0.1 }}>
               <Digitallia />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 , delay: 0.15 }} viewport={{ once: true, amount: 0.1 }}>
               <Meteor />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true, amount: 0 }}>
               <Quantium />
            </motion.div>

            <Salink />
            <Backrooms />
            <Aquabion />
            <Cuxdesign />
            <Nathanmaurer />
            <Xtremdrift />
            <Theosaly />
         </div>
      </div>

      <div
         className="flex flex-row justify-center items-start w-full h-full text-white pointer-events-auto overflow-y-hidden overflow-x-hidden px-[2vw] md:px-[1.5vw] xl:px-[1vw] pb-[2vw] md:pb-[1.5vw] xl:pb-[1vw]">
         <div className="flex flex-col w-1/2">
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Technologies />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Certifications />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Git />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Photos />
            </motion.div>
         </div>

         <div className="flex flex-col w-1/2">
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Contact />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Map />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Musique />
            </motion.div>

         </div>
      </div>
   </>
   )}
   {/* Mobile */}
   {/* Affichage en colonne unique, scroll horizontal sur les projets */}
   {device === "mobile" && (
   <>
      
      <div
         className="flex flex-col w-full text-white pointer-events-auto overflow-y-hidden overflow-x-hidden px-[2vw] md:px-[1.5vw] xl:px-[1vw] pt-[2vw] md:pt-[1.5vw] xl:pt-[1vw]">
         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }} viewport={{ once: true, amount: 0 }}>
            <Intro />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }} viewport={{ once: true, amount: 0 }}>
            <Profile />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }} viewport={{ once: true, amount: 0 }}>
            <Propos />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Experience />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Logos />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Formations />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Recommandations />
         </motion.div>
      </div>

         <div
         className="relative w-full px-[2vw] md:px-[1.5vw] xl:px-[1vw] overflow-x-auto whitespace-nowrap scroll-smooth pointer-events-auto"
         >
         <div className="flex flex-row w-max w-[100vw] overflow-y-hidden">
            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5}} viewport={{ once: true, amount: 0.1 }}>
               <Digitallia />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.15 }} viewport={{ once: true, amount: 0 }}>
               <Meteor />
            </motion.div>

            <Quantium />
            <Salink />
            <Backrooms />
            <Aquabion />
            <Cuxdesign />
            <Nathanmaurer />
            <Xtremdrift />
            <Theosaly />
         </div>
      </div>

      <div
         className="flex flex-col w-full text-white pointer-events-auto overflow-y-hidden overflow-x-hidden px-[2vw] md:px-[1.5vw] xl:px-[1vw] pb-[2vw] md:pb-[1.5vw] xl:pb-[1vw]">
         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Technologies />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Contact />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Map />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Certifications />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Git />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Musique />
         </motion.div>

         <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5}}
            viewport={{ once: true, amount: 0.1 }}>
            <Photos />
         </motion.div>
      </div>
   </>
   )}
</>
);
}