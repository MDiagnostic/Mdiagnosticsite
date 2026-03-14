import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity"
          style={{ color: '#818958' }}
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l'accueil
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8" style={{ color: '#818958' }}>
            Mentions Légales
          </h1>

          <div className="space-y-8 text-gray-700">
            {/* Éditeur du site */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                1. Éditeur du site
              </h2>
              <p className="mb-2">
                Le site <strong>www.mdiagnostic.fr</strong> est édité par :
              </p>
              <ul className="list-none space-y-1 ml-4">
                <li><strong>Raison sociale :</strong> MDIAGNOSTIC</li>
                <li><strong>Forme juridique :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)</li>
                <li><strong>Capital social :</strong> 1 000,00 €</li>
                <li><strong>SIREN :</strong> 100 486 927</li>
                <li><strong>SIRET :</strong> 100 486 927 00013</li>
                <li><strong>RCS :</strong> Dax 100 486 927 (inscrit le 29/01/2026)</li>
                <li><strong>Numéro de TVA :</strong> FR22100486927</li>
                <li><strong>Adresse du siège social :</strong> Soustons (40140), Landes</li>
                <li><strong>Email :</strong> contact.mdiagnostic@gmail.com</li>
                <li><strong>Téléphone :</strong> 07 77 78 26 59</li>
              </ul>
            </section>

            {/* Directeur de publication */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                2. Directeur de publication
              </h2>
              <p>
                Le directeur de la publication du site est Marine DUFFOURG, 
                en qualité de responsable de MDIAGNOSTIC.
              </p>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                3. Hébergement du site
              </h2>
              <p className="mb-2">
                Le site est hébergé par :
              </p>
              <ul className="list-none space-y-1 ml-4">
                <li><strong>Hébergeur :</strong> Vercel Inc.</li>
                <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#818958' }}>vercel.com</a></li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                <strong>Base de données et stockage :</strong> Supabase Inc., 970 Toa Payoh North #07-04, Singapore 318992
              </p>
            </section>

            {/* Certifications professionnelles */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                4. Certifications professionnelles
              </h2>
              <p className="mb-2">
                Conformément à la réglementation en vigueur, MDIAGNOSTIC dispose des certifications suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Organisme certificateur :</strong> LCP Organisme de certifications
                </li>
                <li>
                  <strong>Numéro de certification :</strong> 3340
                </li>
                <li>
                  <strong>Assurance Responsabilité Civile Professionnelle :</strong> Allianz
                </li>
                <li>
                  <strong>Numéro de contrat RCP :</strong> 64715683
                </li>
                <li>
                  <strong>Coordonnées de l'assureur :</strong> Allianz France - 1 cours Michelet, 92800 Puteaux
                </li>
                <li>
                  <strong>Portée géographique :</strong> France métropolitaine
                </li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                Conformément à l'article L271-6 du Code de la Construction et de l'Habitation, 
                ces informations garantissent la couverture de notre responsabilité professionnelle.
              </p>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                5. Propriété intellectuelle
              </h2>
              <p className="mb-2">
                L'ensemble des contenus présents sur le site www.mdiagnostic.fr (textes, images, graphismes, 
                logo, icônes, sons, logiciels, etc.) est la propriété exclusive de MDIAGNOSTIC, à l'exception 
                des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
              </p>
              <p>
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication, 
                même partielle, de ces différents éléments est strictement interdite sans l'accord exprès 
                par écrit de MDIAGNOSTIC. Cette représentation ou reproduction, par quelque procédé que ce soit, 
                constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la 
                propriété intellectuelle.
              </p>
            </section>

            {/* Données personnelles */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                6. Protection des données personnelles (RGPD)
              </h2>
              <p className="mb-2">
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au 
                Règlement Général sur la Protection des Données (RGPD) du 27 avril 2016, vous disposez 
                d'un droit d'accès, de rectification, de portabilité, d'effacement, de limitation du 
                traitement et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="mb-2">
                Les données collectées via les formulaires de contact et de devis sont utilisées 
                uniquement dans le cadre de la relation commerciale et ne sont jamais transmises à des tiers.
              </p>
              <p>
                Pour exercer vos droits, vous pouvez nous contacter à l'adresse : 
                <strong> contact.mdiagnostic@gmail.com</strong>
              </p>
              <p className="mt-2">
                Pour plus d'informations, consultez notre{" "}
                <Link 
                  to="/politique-confidentialite" 
                  className="underline hover:opacity-80"
                  style={{ color: '#818958' }}
                >
                  Politique de confidentialité
                </Link>.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                7. Cookies
              </h2>
              <p className="mb-2">
                Le site www.mdiagnostic.fr peut utiliser des cookies pour améliorer l'expérience 
                utilisateur et analyser la fréquentation du site. Un cookie est un petit fichier 
                texte stocké sur votre ordinateur lors de la visite d'un site.
              </p>
              <p className="mb-2">
                Vous pouvez paramétrer votre navigateur pour refuser les cookies. Cependant, certaines 
                fonctionnalités du site pourraient être altérées.
              </p>
              <p>
                Les cookies utilisés sur ce site sont uniquement des cookies techniques nécessaires 
                au bon fonctionnement du site et des cookies de mesure d'audience anonymisés.
              </p>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                8. Limitation de responsabilité
              </h2>
              <p className="mb-2">
                MDIAGNOSTIC s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées 
                sur ce site. Toutefois, MDIAGNOSTIC ne peut garantir l'exactitude, la précision ou 
                l'exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p>
                MDIAGNOSTIC décline toute responsabilité en cas d'interruption du site, de survenance 
                de bugs, ou de dommages résultant d'une intrusion frauduleuse d'un tiers.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                9. Droit applicable et juridiction compétente
              </h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige et 
                à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de 
                Dax (40) conformément aux règles de compétence en vigueur.
              </p>
            </section>

            {/* Médiation de la consommation */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                10. Médiation de la consommation
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="mb-4">
                  Conformément à <strong>l'article L612-1 du Code de la consommation</strong>, en cas de litige 
                  non résolu à l'amiable avec MDIAGNOSTIC, vous pouvez recourir <strong>gratuitement</strong> à 
                  un médiateur de la consommation.
                </p>
                
                <p className="text-sm text-blue-800 font-semibold">
                  <strong>Informations à venir :</strong> MDIAGNOSTIC est en cours d'adhésion à un service de médiation agréé. 
                  Les coordonnées du médiateur seront communiquées prochainement.
                </p>
              </div>
            </section>

            {/* Date de mise à jour */}
            <section>
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                11. Mise à jour
              </h2>
              <p>
                <strong>Date de dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}