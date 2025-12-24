"use client";

// Importation des styles globaux et spécifiques à certaines fonctionnalités
import "./globals.css";
import "./css/main.css";
import "./css/loader.css";
import "./css/hand-animation.css";
import "./css/slider.css";
import "./css/scrollbar.css";
import "./css/map.css";
import "./css/git.css";

// Importation du composant Loader et du hook useState de React
import Loader from "./loader/Loader";
import { useState } from "react";

// Composant principal de layout de l'application
export default function RootLayout({ children }: { children: React.ReactNode }) {
   // État pour gérer l'affichage du loader
   const [isLoaded, setIsLoaded] = useState(false);

   return (
      // Structure HTML principale avec langue, thème et options d'accessibilité
      <html lang="fr" className="bg-darkgray touch-none select-none">
         <head>
            {/* Métadonnées pour le SEO et l'accessibilité */}
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Bienvenue sur mon portfolio interactif. Découvrez mes projets web, mes compétences, mes expériences et les technologies que j'utilise." />
            <meta name="author" content="Théo Saly" />
            <meta name="keywords" content="theo saly portfolio bento" />
            <title>Théo Saly | Portfolio</title>
            <link rel="icon" href="/favicon.ico" />
         </head>
         <body className="scroll-smooth overflow-x-hidden bg-darkgray">
            {/* Affiche le loader tant que la page n'est pas chargée */}
            {!isLoaded && <Loader onFinish={() => setIsLoaded(true)} />}
            {/* Affiche le contenu principal une fois le chargement terminé */}
            {isLoaded && (
               <main className="overflow-y-auto overflow-x-hidden bg-darkgray">
                  {children}
               </main>
            )}
         </body>
      </html>
   );
}
