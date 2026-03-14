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
      { path: "*", Component: NotFound },
    ],
  },
]);