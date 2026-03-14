/**
 * MDIAGNOSTIC - Application principale
 * Site web professionnel de diagnostic immobilier
 * Soustons, Landes (40)
 */
import { RouterProvider } from "react-router";
import { router } from "./routes";
import "../styles/index.css";
import { useEffect } from "react";
import { autoCleanupCheck } from "../lib/autoCleanup";

export default function App() {
  // Lancer la vérification du nettoyage automatique au chargement
  useEffect(() => {
    // Délai de 3 secondes pour ne pas ralentir le chargement initial
    const timer = setTimeout(() => {
      autoCleanupCheck();
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return <RouterProvider router={router} />;
}