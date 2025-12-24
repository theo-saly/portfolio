import { useState } from "react";
import { FaLink } from "react-icons/fa6";

export default function Backrooms() {
const [showDetails, setShowDetails] = useState(false);
const isMobileTablet = typeof window !== "undefined" ? window.innerWidth < 1280 : false; const handleClick=()=> {
    if (isMobileTablet) {
    setShowDetails(!showDetails);
    }
    };

    return (
    <>
        <section onClick={handleClick}
            className="pointer-events-auto group min-w-[92.5vw] md:min-w-[45.6vw] xl:min-w-[30.7vw] h-90 rounded-2xl border border-bordercolor m-[2vw] md:m-[1.5vw] xl:m-[1vw] backdrop-blur-md relative overflow-hidden cursor-pointer">
            <div className={`absolute top-0 left-0 w-full h-full rounded-2xl z-5 transition-colors duration-700 ${
                (isMobileTablet && showDetails) ? "from-black/70 to-black/100 bg-gradient-to-b"
                : "from-black/0 to-black/100 group-hover:from-black/70 bg-gradient-to-b" }`} />
            <div className={`absolute top-4 left-6 right-6 z-10 text-white text-sm transition-opacity duration-700 ${
                (isMobileTablet && showDetails) ? "opacity-100" : "opacity-0" } md:group-hover:opacity-100`}>
                <p className="text-sm xl:text-base whitespace-normal break-words">
                    Jeu d’exploration développé sous Unity, inspiré de l’univers des Backrooms. Composé de 3 niveaux
                    avec des quêtes à accomplir, il plonge le joueur dans un environnement angoissant et labyrinthique.
                    Les objets et décors ont été modélisés en 3D avec Blender, renforçant l’immersion dans une ambiance
                    réaliste et oppressante.
                </p>
                <hr className="text-white opacity-20 my-2" />
                <div className="flex flex-wrap items-center gap-2 mt-2">
                    <div className="text-sm font-thin rounded-full border border-bordercolor py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        Unity
                    </div>
                    <div className="text-sm font-thin rounded-full border border-bordercolor py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        Blender
                    </div>
                    <div className="text-sm font-thin rounded-full border border-bordercolor py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        Modélisation
                    </div>
                    <div className="text-sm font-thin rounded-full border border-bordercolor py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        Design
                    </div>
                    <div className="text-sm font-thin rounded-full border border-bordercolor py-1 px-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                        aria-label="Visiter Digitallia.fr">
                        Gestion de projet
                    </div>
                </div>
            </div>

            <div className="absolute bottom-6 left-6 z-10">
                <h2 className="text-white text-2xl nohemi font-bold">Backrooms<span className="font-extralight">.exe</span></h2>
            </div>
            <div className="absolute bottom-6 right-6 z-10">
                <a href="https://youtu.be/xwfNkpjEYpc" target="_blank"
                    className="rounded-full border border-bordercolor p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto inline-flex items-center justify-center"
                    aria-label="Visiter Digitallia.fr">
                    <FaLink className="fill-white" />
                </a>
            </div>

            <img className="h-full object-cover object-top rounded-2xl w-full absolute top-0 left-0 opacity-80 z-0"
                src="images-projet/app-backrooms.jpg" alt="" />
        </section>
    </>
    );
    }