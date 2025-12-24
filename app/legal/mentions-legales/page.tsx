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
            <p className="text-gray-300 leading-relaxed">
              <strong>Adresse :</strong> France
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Propriété intellectuelle</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Tous les contenus présents sur ce site (textes, images, logos, vidéos,
              codes source) sont la propriété exclusive de Théo Saly ou sont utilisés avec
              autorisation. Toute reproduction, distribution ou utilisation sans autorisation
              est strictement interdite.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Responsabilité</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Théo Saly s'efforce de maintenir les informations à jour et exactes. Cependant,
              il ne peut être tenu responsable de toute inexactitude, erreur ou omission sur
              le site. L'utilisation des informations et contenus du site se fait à vos risques
              et périls.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Liens externes</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ce site peut contenir des liens vers des sites externes. Théo Saly n'est pas
              responsable du contenu de ces sites et décline toute responsabilité quant aux
              informations qu'ils contiennent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Données personnelles</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Les données personnelles collectées via le formulaire de contact sont traitées
              conformément à la Politique de Confidentialité et aux lois applicables. Elles
              ne sont jamais vendues ou partagées avec des tiers sans consentement préalable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur. En
              continuant à utiliser ce site, vous acceptez l'utilisation de cookies
              conformément à notre politique de confidentialité.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation de responsabilité</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Théo Saly ne sera pas responsable de tout dommage direct, indirect, spécial,
              accessoire ou consécutif résultant de l'accès ou de l'utilisation (ou de
              l'impossibilité d'accès ou d'utilisation) du site ou de ses contenus.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Modifications</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ces mentions légales peuvent être modifiées à tout moment sans préavis. Nous
              vous recommandons de les consulter régulièrement pour rester informé des
              modifications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Pour toute question ou remarque concernant ces mentions légales, veuillez nous
              contacter via le formulaire de contact du site.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
