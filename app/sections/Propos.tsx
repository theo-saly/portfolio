export default function Propos() {
return (
<>
    <section className="md:min-h-158 xl:min-h-140 flex flex-col justify-between bg-mediumgray bg-opacity-60 backdrop-blur-md p-4 rounded-2xl border-1 border-bordercolor m-[2vw] md:m-[1.5vw] xl:m-[1vw]">
        <h2 className="text-xl mb-2 nohemi font-medium">À propos de moi</h2>
        <p className="text-base text-lightgray mb-3">
            Salut, je m’appelle
            <span className="text-white"> Théo</span>, je suis âgé de
            <span className="text-white"> 21 ans</span> basé à
            <span className="text-white"> Strasbourg</span> et passionné par le
            <span className="text-white"> web</span> et les
            <span className="text-white"> nouvelles technologies</span>. J’ai eu l’opportunité de travailler sur de
            nombreux
            <span className="text-white"> projets variés</span> dans des
            <span className="text-white"> secteurs divers</span>. Mon expérience m’a permis de collaborer avec des
            <span className="text-white"> entreprises</span> de tailles différentes, allant des
            <span className="text-white"> startups</span> aux
            <span className="text-white"> grandes structures</span>, pour proposer des
            <span className="text-white"> solutions sur mesure</span> et
            <span className="text-white"> efficaces</span>.
        </p>
        
        <p className="text-base text-lightgray">
            Toujours
            <span className="text-white"> souriant</span>,
            <span className="text-white"> motivé</span> et
            <span className="text-white"> curieux</span>, je combine
            <span className="text-white"> créativité</span> et
            <span className="text-white"> rigueur</span> pour relever chaque défi. Mon
            <span className="text-white"> organisation</span> et mon
            <span className="text-white"> dynamisme</span> me permettent de m’adapter rapidement aux besoins des
            projets. Mon objectif est de continuer à évoluer dans le domaine du
            <span className="text-white"> développement web</span>, en mettant mes compétences au service d’initiatives
            <span className="text-white"> innovantes</span> et
            <span className="text-white"> inspirantes</span>.
        </p>
        
        <br />
        <img className="w-40 mt-2" src="/autres/signature.png" alt="" />
    </section>
</>
);
}