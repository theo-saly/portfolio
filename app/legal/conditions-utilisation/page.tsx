"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ConditionsUtilisation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-darkgray to-black text-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="text-white mb-8 inline-block transition-colors"
          >
            ← Retour à l'accueil
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-8 nohemi">
            Conditions d'Utilisation
          </h1>

          <p className="text-gray-300 mb-8">
            En vigueur au 01/01/2025<br />
            Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par Théo Saly et de définir les conditions d’accès et d’utilisation des services par « l'Utilisateur ».<br />
            Les présentes CGU sont accessibles sur le site à la rubrique « CGU ».
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Article 1 : Mentions légales</h2>
            <p className="text-gray-300 leading-relaxed mb-2">
              L’édition et la direction de la publication du site https://theo-saly.com est assurée par Théo Saly, domicilié 2a Rue de l'école, Hoenheim, France.
            </p>
            <p className="text-gray-300 leading-relaxed mb-2">
              Adresse e-mail : contact@theo-saly.com
            </p>
            <p className="text-gray-300 leading-relaxed">
              L'hébergeur du site est Hostinger International Ltd, 61 Rue Lordou Vironos, 6023, Larnaca, Chypre. Pour les contacter : <a href="https://www.hostinger.fr/contact" className="text-blue-400 underline">https://www.hostinger.fr/contact</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Article 2 : Accès au site</h2>
            <p className="text-gray-300 leading-relaxed mb-2">
              Le site https://theo-saly.com permet à l'Utilisateur un accès gratuit aux services suivants :
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2 mb-4">
              <li>Conception et développement de sites web</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Article 3 : Collecte des données</h2>
            <p className="text-gray-300 leading-relaxed mb-2">
              Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.
            </p>
            <p className="text-gray-300 leading-relaxed mb-2">
              L'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles, qu'il peut exercer par mail à l'adresse : contact@theo-saly.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Article 4 : Propriété intellectuelle</h2>
            <p className="text-gray-300 leading-relaxed mb-2">
              Les marques, logos, signes ainsi que tous les contenus du site (textes, images, sons...) sont protégés par le Code de la propriété intellectuelle et le droit d'auteur.
            </p>
            <p className="text-gray-300 leading-relaxed mb-2">
              L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication ou copie des différents contenus. Toute utilisation à des fins commerciales est strictement interdite.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Toute représentation totale ou partielle du site sans autorisation constitue une contrefaçon. L'Utilisateur doit citer l'auteur et la source.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Article 5 : Responsabilité</h2>
            <p className="text-gray-300 leading-relaxed">
              Les sources des informations diffusées sur le site sont réputées fiables mais le site ne garantit pas qu’il soit exempt d’erreurs. Les informations sont présentées à titre indicatif et général sans valeur contractuelle. Le site ne peut être tenu responsable de l’interprétation ou de l’utilisation des informations, ni de l’apparition de virus ou de dommages liés à l’accès au site. La responsabilité ne peut être engagée en cas de force majeure ou d’un tiers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Article 6 : Liens hypertextes</h2>
            <p className="text-gray-300 leading-relaxed">
              Des liens peuvent être présents sur le site. L’Utilisateur est informé qu’en cliquant sur ces liens, il sortira du site. Le site n’a pas de contrôle sur ces pages et décline toute responsabilité.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Article 7 : Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              Lors de ses visites sur le site, un cookie peut s’installer automatiquement sur le logiciel de navigation de l’Utilisateur. Les cookies sont nécessaires à l’utilisation du site, ne contiennent pas d’informations personnelles et améliorent l’expérience utilisateur. L’Utilisateur peut les désactiver via les paramètres de son navigateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Article 8 : Droit applicable et juridiction compétente</h2>
            <p className="text-gray-300 leading-relaxed">
              La législation française s'applique. En cas de litige, les tribunaux français seront compétents. Pour toute question relative à l’application des présentes CGU, contactez l’éditeur aux coordonnées indiquées à l’Article 1.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm mb-2">
              © 2025 theo-saly.com, Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm mb-2">
              Dernière mise à jour : 24/12/2025
            </p>
            <p className="text-gray-400 text-sm">
              <Link href="/mentions-legales" className="underline mr-2">Mentions légales</Link>
              <Link href="/conditions-utilisation" className="underline mr-2">CGU</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}