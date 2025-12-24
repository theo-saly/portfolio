import { useState } from "react";
import { FaLinkedinIn, FaEnvelope, FaPhone, FaDownload, FaGithub } from "react-icons/fa6";
import { SiMalt } from "react-icons/si";

export default function Intro() {
    const [showCV, setShowCV] = useState(true);

    const handleMouseEnter = () => {
        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            setShowCV(false);
        }
    };
    const handleMouseLeave = () => {
        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            setShowCV(true);
        }
    };

    return (
        <>
            <section className="md:min-h-70 xl:min-h-62 flex flex-col justify-between bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-bordercolor m-[2vw] md:m-[1.5vw] xl:m-[1vw]">
                <p className="text-2xl nohemi font-extralight">
                    <img src="/emojys/emojy-hand.png" alt="Salut" className="inline w-6 h-6 mr-2 align-text-bottom mb-0.5 animatewave pointer-events-auto" />
                    <span className="font-bold" >Salut</span>, moi c&apos;est <span className="font-bold" >Théo</span> ! Je suis <span className="font-bold" >développeur web</span> sur Strasbourg, spécialisé depuis <span className="font-bold" >5 ans</span> dans la <span className="font-bold" >création de sites</span> & <span className="font-bold" >d&apos;applications web</span> sur mesure.
                </p>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex justify-between items-center gap-2">
                        <a
                            href="mailto:contact@theo-saly.com"
                            className="mail group flex items-center justify-start w-9 hover:w-48 transition-all duration-300 rounded-full border border-bordercolor bg-mediumgray pointer-events-auto pl-[9px] h-9 overflow-hidden"
                            aria-label="Envoyer un email à contact@theo-saly.com"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="w-9 h-9 flex items-center justify-start transition-all duration-300">
                                <FaEnvelope />
                            </div>
                            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-sm flex-shrink-0 -ml-2.5">
                                contact@theo-saly.com
                            </span>
                        </a>
                        
                        {/* 
                        <a
                            href="tel:0771874197"
                            className="mail group flex items-center justify-start w-9 hover:w-35 transition-all duration-300 rounded-full border border-bordercolor bg-mediumgray pointer-events-auto pl-[9px] h-9 overflow-hidden"
                            aria-label="Appeler le 07 71 87 41 97"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="w-9 h-9 flex items-center justify-start transition-all duration-300">
                                <FaPhone />
                            </div>
                            <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-sm flex-shrink-0 -ml-2.5">
                                07 71 87 41 97
                            </span>
                        </a>
                        */}

                        <a href="https://www.linkedin.com/in/theo-saly" target="_bank"
                            className="rounded-full border border-bordercolor p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto"
                            aria-label="LinkedIn">
                            <FaLinkedinIn/>
                        </a>
                        <a href="https://www.malt.fr/profile/theosaly" target="_bank"
                            className="rounded-full border border-bordercolor p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto"
                            aria-label="Malt">
                            <SiMalt/>
                        </a>
                        <a href="https://github.com/theo-saly" target="_bank"
                            className="rounded-full border border-bordercolor p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto"
                            aria-label="GitHub">
                            <FaGithub/>
                        </a>
                    </div>
                    <div
                        className={`flex justify-between items-center gap-2 transition-opacity duration-300 ${
                            showCV ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                    >
                        <a href="download/cv-theo-saly.pdf" target="_blank"
                            className="cv rounded-full border border-bordercolor py-2 px-4 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto flex items-center justify-center gap-2"
                            aria-label="Télécharger le CV">
                            <FaDownload/>
                            <p className="text-sm">CV</p>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}