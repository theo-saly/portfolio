'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination} from 'swiper/modules';

import { IoPerson } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";


export default function SwiperRecommandation() {
return (
<Swiper pagination={{
                clickable: true,
                }} speed={500} modules={[Pagination]} className="h-100%">
    <SwiperSlide>
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
                <div className="rounded-full border p-2 border-bordercolor bg-mediumgray" aria-label="Envoyer un email">
                    <IoPerson />
                </div>
                <div>
                    <h3 className="text-sm font-semibold">Margaux B</h3>
                    <p className="text-sm text-lightgray">Directrice artistique - Marketify</p>
                </div>
            </div>
            <a href="https://www.linkedin.com/in/theo-saly" target='_blank'
                className="rounded-full border border-bordercolor p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto"
                aria-label="Envoyer un email">
                <FaLink />
            </a>
        </div>
        <hr className="text-border my-2" />
        <p className="text-center text-sm relative mb-18">
            <span className="absolute left-0 top-0 text-5xl font-bold text-white leading-none">“</span>
            <span className="text-lightgray block mx-6 py-4">
                J’ai eu la chance de travailler avec Théo pendant son stage en tant que développeur au sein de l&apos;agence
                Marketify.
                Il a rapidement pris en main nos outils et a contribué de manière significative aux projets. Théo a une
                capacité à
                apprendre vite, à être sérieux, combinée à une attitude proactive, ce qui le rend vraiment prometteur
                dans le domaine
                du développement. Il a démontré des compétences techniques solides et une grande force d’adaptation. Je
                vous le recommande
                chaleureusement.
            </span>
            <span className="absolute right-0 -bottom-6 text-5xl font-bold text-white leading-none">”</span>
        </p>
    </SwiperSlide>

    <SwiperSlide>
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
                <div className="rounded-full border p-2 border-bordercolor bg-mediumgray" aria-label="Envoyer un email">
                    <IoPerson />
                </div>
                <div>
                    <h3 className="text-sm font-semibold">Juliette K</h3>
                    <p className="text-sm text-lightgray">Responsable - Levi&apos;s Store</p>
                </div>
            </div>
            <a href="https://www.linkedin.com/in/theo-saly" target='_blank' 
                className="rounded-full border border-bordercolor p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto"
                aria-label="Envoyer un email">
                <FaLink />
            </a>
        </div>
        <hr className="text-border my-2" />
        <p className="text-center text-sm relative">
            <span className="absolute left-0 top-0 text-5xl font-bold text-white leading-none">“</span>
            <span className="text-lightgray block mx-6 py-6">
                J’ai eu la chance d’avoir Théo dans mon équipe. C’est une personne pleine de vie, avec beaucoup de réflexions et l’envie de toujours vouloir progresser.
                En plus de ses questionnements et de son intéressement dans tout ce qu’il entreprend; il parvient toujours à trouver ce dont les prospects ont besoin. La compréhension de la demande client, l’acheminement vers la vente, la fidélisation de celui-ci et les feedbacks reçus ont juste démontrer à quel point c’est un bon élément dans une équipe. Je suis vraiment heureuse d’avoir pu collaborer avec lui et vous le recommande vivement. 
            </span>
            <span className="absolute right-0 -bottom-6 text-5xl font-bold text-white leading-none">”</span>
        </p>
    </SwiperSlide>

    <SwiperSlide>
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
                <div className="rounded-full border p-2 border-bordercolor bg-mediumgray" aria-label="Envoyer un email">
                    <IoPerson />
                </div>
                <div>
                    <h3 className="text-sm font-semibold">Said L</h3>
                    <p className="text-sm text-lightgray">Fondateur - Digitallia</p>
                </div>
            </div>
            <a href="https://www.malt.fr/profile/theosaly" target='_blank'
                className="rounded-full border border-bordercolor p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto"
                aria-label="Envoyer un email">
                <FaLink />
            </a>
        </div>
        <hr className="text-border my-2" />
        <p className="text-center text-sm relative">
            <span className="absolute left-0 top-0 text-5xl font-bold text-white leading-none">“</span>
            <span className="text-lightgray block mx-6 py-6">
                Théo a passé quelques mois chez nous, et ses compétences nous ont pleinement convaincus. Son savoir-faire en développement web est indéniable. Il a travaillé à la fois sur des sites sur mesure sans CMS et sur des projets utilisant WordPress / WooCommerce. Par la suite, il a réalisé le site web digitallia.fr pour nous en tant que freelance, entièrement sur mesure, et nous sommes très satisfaits du résultat. Je le recommande vivement pour vos projets web.
            </span>
            <span className="absolute right-0 -bottom-6 text-5xl font-bold text-white leading-none">”</span>
        </p>
    </SwiperSlide>

    <SwiperSlide>
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
                <div className="rounded-full border p-2 border-bordercolor bg-mediumgray" aria-label="Envoyer un email">
                    <IoPerson />
                </div>
                <div>
                    <h3 className="text-sm font-semibold">Nathan M</h3>
                    <p className="text-sm text-lightgray">Photographe & Vidéaste</p>
                </div>
            </div>
            <a href="https://www.linkedin.com/in/theo-saly" target='_blank'
                className="rounded-full border border-bordercolor p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto"
                aria-label="Envoyer un email">
                <FaLink />
            </a>
        </div>
        <hr className="text-border my-2" />
        <p className="text-center text-sm relative">
            <span className="absolute left-0 top-0 text-5xl font-bold text-white leading-none">“</span>
            <span className="text-lightgray block mx-6 py-6">
                Collaborer avec Théo a été un réel plaisir. Il a rapidement compris ma demande et a conçu un site web au
                design moderne, parfaitement adapté à mes services de photographie et vidéographie. Je le recommande
                vivement à tout professionnel souhaitant booster sa visibilité en ligne.
            </span>
            <span className="absolute right-0 -bottom-6 text-5xl font-bold text-white leading-none">”</span>
        </p>
    </SwiperSlide>

    <SwiperSlide>
        <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
                <div className="rounded-full border p-2 border-bordercolor bg-mediumgray" aria-label="Envoyer un email">
                    <IoPerson />
                </div>
                <div>
                    <h3 className="text-sm font-semibold">Cyriac K</h3>
                    <p className="text-sm text-lightgray">UX/UI Designer</p>
                </div>
            </div>
            <a href="https://www.linkedin.com/in/theo-saly" target='_blank'
                className="rounded-full border border-bordercolor p-2 hover:border-lightgray bg-mediumgray transition-colors duration-300 pointer-events-auto"
                aria-label="Envoyer un email">
                <FaLink />
            </a>
        </div>
        <hr className="text-border my-2" />
        <p className="text-center text-sm relative">
            <span className="absolute left-0 top-0 text-5xl font-bold text-white leading-none">“</span>
            <span className="text-lightgray block mx-6 py-6">
                J’ai eu le plaisir de travailler avec Theo, qui a réalisé mon site internet pour mon activité
                d’auto-entrepreneur. Il a su de manière très efficace comprendre ma demande et mes besoins afin de
                concevoir un site ergonomique au design soigné.
                Je le recommande vivement pour tous vos projets web. C’est toujours agréable de travailler avec des
                personnes qui font preuve de professionnalisme et d’un sens du relationnel.
            </span>
            <span className="absolute right-0 -bottom-6 text-5xl font-bold text-white leading-none">”</span>
        </p>
    </SwiperSlide>

</Swiper>
);
}