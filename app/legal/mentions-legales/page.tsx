"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MentionsLegales() {
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
            Mentions Légales
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Informations générales</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Le site web portfolio est édité et géré par Théo Saly.
            </p>
            <p className="text-gray-300 leading-relaxed mb-2">
              <strong>Adresse :</strong> 2a Rue de l'école, 67800 Hoenheim, France
            </p>
            <p className="text-gray-300 leading-relaxed mb-2">
              <strong>Nationalité :</strong> Française
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>Email :</strong> contact@theo-saly.com
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
            <p className="text-gray-300 leading-relaxed">
              Le site est hébergé par Hostinger International LTD, dont le siège social est situé à 61 Rue Lordou Vironos, 6023, Larnaca, Chypre.
              <br />
              Pour les contacter : <a href="https://www.hostinger.fr/contact" className="text-blue-400 underline">https://www.hostinger.fr/contact</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Directeur de la publication</h2>
            <p className="text-gray-300 leading-relaxed">
              Le directeur de la publication du site est Théo Saly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Développement</h2>
            <p className="text-gray-300 leading-relaxed">
              La conception et le développement du site ont été réalisés par Théo Saly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Conditions d'utilisation</h2>
            <p className="text-gray-300 leading-relaxed">
              L'utilisation du site implique l'acceptation pleine et entière des conditions générales d'utilisation (CGU) accessibles à tout moment à l'URL suivante : <a href="https://theo-saly.com/cgu" className="text-blue-400 underline">https://theo-saly.com/cgu</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Propriété intellectuelle</h2>
            <p className="text-gray-300 leading-relaxed">
              Tous les contenus présents sur le site (textes, images, vidéos, graphiques, logos, icônes, etc.) sont protégés par le droit de la propriété intellectuelle. Toute reproduction ou représentation non autorisée constitue une contrefaçon passible de poursuites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Protection des données personnelles</h2>
            <p className="text-gray-300 leading-relaxed">
              Le traitement des données personnelles est effectué conformément à la réglementation en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD). Pour plus d'informations, consultez la politique de confidentialité du site.
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