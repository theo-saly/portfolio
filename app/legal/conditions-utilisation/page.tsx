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

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptation des conditions</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              En accédant et en utilisant ce site, vous acceptez d'être lié par ces conditions
              d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser
              ce site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Utilisation autorisée</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Vous vous engagez à utiliser ce site de manière légale et conforme à ces
              conditions. Vous ne devez pas :
            </p>
            <ul className="text-gray-300 leading-relaxed list-disc list-inside space-y-2 mb-4">
              <li>Accéder ou utiliser le site de manière abusive ou malveillante</li>
              <li>Télécharger, copier ou modifier le contenu sans autorisation</li>
              <li>Utiliser des robots ou des scripts pour accéder au site</li>
              <li>Tenter de contourner les mesures de sécurité</li>
              <li>Diffuser du contenu illégal ou offensant via le site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Contenu utilisateur</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Si vous soumettez du contenu via ce site (formulaires, commentaires, etc.),
              vous garantissez que ce contenu est exact et ne viole aucun droit de tiers.
              Théo Saly se réserve le droit de supprimer tout contenu jugé inapproprié ou
              offensant.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Tout le contenu du site, y compris les textes, images, logos, graphiques et
              code, est la propriété exclusive de Théo Saly ou de ses contributeurs. Vous
              n'avez pas le droit de reproduire, distribuer ou transmettre ce contenu sans
              autorisation écrite préalable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Liens externes</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ce site peut contenir des liens vers des sites externes. Théo Saly ne contrôle
              pas ces sites et n'est pas responsable de leur contenu, disponibilité ou
              pratiques. L'utilisation de liens externes se fait à vos risques et périls.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation de responsabilité</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              LE SITE EST FOURNI "EN L'ÉTAT" SANS GARANTIE D'AUCUNE SORTE. THÉO SALY NE SERA
              PAS RESPONSABLE DE TOUT DOMMAGE DIRECT, INDIRECT, SPÉCIAL, ACCESSOIRE OU
              CONSÉCUTIF RÉSULTANT DE L'UTILISATION OU DE L'INCAPACITÉ À UTILISER LE SITE OU
              SES CONTENUS.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Exonération de garantie</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Les informations et contenus du site sont fournis à titre informatif. Bien que
              nous nous efforçions de maintenir l'exactitude, aucune garantie explicite ou
              implicite n'est donnée concernant l'exactitude, l'exhaustivité ou l'utilité du
              contenu.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Données personnelles</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              L'utilisation du site et la collecte de données personnelles sont régies par
              notre Politique de Confidentialité. En utilisant ce site, vous acceptez nos
              pratiques en matière de confidentialité.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Disponibilité du site</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bien que nous nous efforcions de maintenir la disponibilité du site, nous ne
              garantissons pas une disponibilité continue. Théo Saly se réserve le droit
              d'interrompre le service à tout moment sans préavis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Modifications des conditions</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ces conditions d'utilisation peuvent être modifiées à tout moment. Les
              modifications seront effectives dès leur publication sur le site. Nous vous
              recommandons de les consulter régulièrement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Droit applicable</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Ces conditions d'utilisation sont régies par le droit français. Tout différend
              relatif à ce site sera soumis à la juridiction des tribunaux français.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Pour toute question concernant ces conditions d'utilisation, veuillez nous
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
