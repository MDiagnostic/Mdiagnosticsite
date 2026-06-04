import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Vente } from "./components/Vente";
import { Location } from "./components/Location";
import { Copropriete } from "./components/Copropriete";
import { AutresPrestations } from "./components/AutresPrestations";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { PolitiqueConfidentialite } from "./components/PolitiqueConfidentialite";
import { MentionsLegales } from "./components/MentionsLegales";
import { ZoneIntervention } from "./components/ZoneIntervention";
import { NotFound } from "./components/NotFound";
import { GestionCookies } from "./components/GestionCookies";
import { CGV } from "./components/CGV";
import { Certifications } from "./components/Certifications";
import * as VillePages from "./components/VillePageFactory";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "vente", Component: Vente },
      { path: "location", Component: Location },
      { path: "copropriete", Component: Copropriete },
      { path: "autres-prestations", Component: AutresPrestations },
      { path: "services", Component: Services },
      { path: "zone-intervention", Component: ZoneIntervention },
      { path: "a-propos", Component: About },
      { path: "certifications", Component: Certifications },
      { path: "contact", Component: Contact },
      { path: "politique-confidentialite", Component: PolitiqueConfidentialite },
      { path: "mentions-legales", Component: MentionsLegales },
      { path: "gestion-cookies", Component: GestionCookies },
      { path: "cgv", Component: CGV },

      // Pages locales SEO - Landes (40)
      { path: "diagnostic-immobilier-hossegor", Component: VillePages.Hossegor },
      { path: "diagnostic-immobilier-capbreton", Component: VillePages.Capbreton },
      { path: "diagnostic-immobilier-dax", Component: VillePages.Dax },
      { path: "diagnostic-immobilier-soustons", Component: VillePages.Soustons },
      { path: "diagnostic-immobilier-saint-paul-les-dax", Component: VillePages.SaintPaulLesDax },
      { path: "diagnostic-immobilier-seignosse", Component: VillePages.Seignosse },
      { path: "diagnostic-immobilier-labenne", Component: VillePages.Labenne },
      { path: "diagnostic-immobilier-ondres", Component: VillePages.Ondres },
      { path: "diagnostic-immobilier-tarnos", Component: VillePages.Tarnos },
      { path: "diagnostic-immobilier-vieux-boucau-les-bains", Component: VillePages.VieuxBoucauLesBains },
      { path: "diagnostic-immobilier-messanges", Component: VillePages.Messanges },
      { path: "diagnostic-immobilier-moliets-et-maa", Component: VillePages.MolietsEtMaa },
      { path: "diagnostic-immobilier-leon", Component: VillePages.Leon },
      { path: "diagnostic-immobilier-tosse", Component: VillePages.Tosse },
      { path: "diagnostic-immobilier-azur", Component: VillePages.Azur },
      { path: "diagnostic-immobilier-saint-vincent-de-tyrosse", Component: VillePages.SaintVincentDeTyrosse },
      { path: "diagnostic-immobilier-linxe", Component: VillePages.Linxe },
      { path: "diagnostic-immobilier-peyrehorade", Component: VillePages.Peyrehorade },
      { path: "diagnostic-immobilier-biscarrosse", Component: VillePages.Biscarrosse },
      { path: "diagnostic-immobilier-parentis-en-born", Component: VillePages.ParentisEnBorn },
      { path: "diagnostic-immobilier-mimizan", Component: VillePages.Mimizan },
      { path: "diagnostic-immobilier-lit-et-mixe", Component: VillePages.LitEtMixe },
      { path: "diagnostic-immobilier-saint-geours-de-maremne", Component: VillePages.SaintGeoursDeMaremne },

      // Pages locales SEO - Pyrénées-Atlantiques (64)
      { path: "diagnostic-immobilier-bayonne", Component: VillePages.Bayonne },
      { path: "diagnostic-immobilier-anglet", Component: VillePages.Anglet },
      { path: "diagnostic-immobilier-biarritz", Component: VillePages.Biarritz },
      { path: "diagnostic-immobilier-bidart", Component: VillePages.Bidart },
      { path: "diagnostic-immobilier-guethary", Component: VillePages.Guethary },
      { path: "diagnostic-immobilier-saint-jean-de-luz", Component: VillePages.SaintJeanDeLuz },
      { path: "diagnostic-immobilier-ciboure", Component: VillePages.Ciboure },
      { path: "diagnostic-immobilier-hendaye", Component: VillePages.Hendaye },
      { path: "diagnostic-immobilier-urrugne", Component: VillePages.Urrugne },
      { path: "diagnostic-immobilier-ustaritz", Component: VillePages.Ustaritz },
      { path: "diagnostic-immobilier-cambo-les-bains", Component: VillePages.CamboLesBains },

      // Nouvelles villes ajoutées - Côte Nord
      { path: "diagnostic-immobilier-bias", Component: VillePages.Bias },
      { path: "diagnostic-immobilier-sanguinet", Component: VillePages.Sanguinet },
      { path: "diagnostic-immobilier-aureilhan", Component: VillePages.Aureilhan },
      { path: "diagnostic-immobilier-saint-girons-plage", Component: VillePages.SaintGironsPlage },
      { path: "diagnostic-immobilier-saint-julien-en-born", Component: VillePages.SaintJulienEnBorn },

      // Nouvelles villes ajoutées - Agglomération Dacquoise
      { path: "diagnostic-immobilier-pontonx-sur-l-adour", Component: VillePages.PontonxSurLAdour },
      { path: "diagnostic-immobilier-narrosse", Component: VillePages.Narrosse },

      // Nouvelles villes ajoutées - Intérieur
      { path: "diagnostic-immobilier-castets", Component: VillePages.Castets },
      { path: "diagnostic-immobilier-magescq", Component: VillePages.Magescq },
      { path: "diagnostic-immobilier-tartas", Component: VillePages.Tartas },
      { path: "diagnostic-immobilier-saint-martin-de-seignanx", Component: VillePages.SaintMartinDeSeignanx },

      // Nouvelles villes ajoutées - Secteur Élargi
      { path: "diagnostic-immobilier-mont-de-marsan", Component: VillePages.MontDeMarsan },
      { path: "diagnostic-immobilier-saint-pierre-du-mont", Component: VillePages.SaintPierreDuMont },
      { path: "diagnostic-immobilier-hagetmau", Component: VillePages.Hagetmau },
      { path: "diagnostic-immobilier-aire-sur-l-adour", Component: VillePages.AireSurLAdour },
      { path: "diagnostic-immobilier-saint-vincent-de-paul", Component: VillePages.SaintVincentDePaul },
      { path: "diagnostic-immobilier-orthevielle", Component: VillePages.Orthevielle },

      { path: "*", Component: NotFound },
    ],
  },
]);