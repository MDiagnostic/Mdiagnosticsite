import { Link, useLocation } from "react-router";
import { ChevronRight, Home } from "lucide-react";
import { useEffect, useMemo } from "react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

export function Breadcrumbs() {
  const location = useLocation();

  // Map paths to readable labels
  const pathMap: Record<string, string> = {
    "/": "Accueil",
    "/services": "Nos Services",
    "/vente": "Diagnostics pour la Vente",
    "/location": "Diagnostics pour la Location",
    "/copropriete": "Diagnostics en Copropriété",
    "/autres-prestations": "Autres Prestations",
    "/contact": "Contact & Devis",
    "/a-propos": "À Propos",
    "/mentions-legales": "Mentions Légales",
    "/politique-confidentialite": "Politique de Confidentialité",
  };

  // Generate breadcrumb items
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = location.pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Accueil", path: "/" }];

    let currentPath = "";
    paths.forEach((path) => {
      currentPath += `/${path}`;
      const label = pathMap[currentPath] || path;
      breadcrumbs.push({ label, path: currentPath });
    });

    return breadcrumbs;
  };

  const breadcrumbs = useMemo(() => generateBreadcrumbs(), [location.pathname]);

  // Generate Schema.org BreadcrumbList
  // ⚠️ IMPORTANT: useEffect DOIT être appelé AVANT tout return conditionnel (règle des Hooks)
  useEffect(() => {
    // Ne pas générer de schema si on est sur la page d'accueil
    if (location.pathname === "/") {
      return;
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `https://www.mdiagnostic.fr${item.path}`,
      })),
    };

    // Remove existing breadcrumb schema if any
    const existingSchema = document.querySelector('script[data-schema="breadcrumb"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new schema
    const scriptElement = document.createElement("script");
    scriptElement.setAttribute("type", "application/ld+json");
    scriptElement.setAttribute("data-schema", "breadcrumb");
    scriptElement.textContent = JSON.stringify(structuredData);
    document.head.appendChild(scriptElement);

    // Cleanup on unmount
    return () => {
      const schema = document.querySelector('script[data-schema="breadcrumb"]');
      if (schema) {
        schema.remove();
      }
    };
  }, [location.pathname, breadcrumbs]);

  // Don't show breadcrumbs on home page
  // ⚠️ Ce return doit être APRÈS tous les Hooks
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav aria-label="Fil d'Ariane" className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <li key={item.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
                )}
                {isLast ? (
                  <span className="text-gray-700 font-medium" aria-current="page">
                    {index === 0 ? <Home className="h-4 w-4" /> : item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-500 hover:text-gray-700 transition-colors flex items-center"
                  >
                    {index === 0 ? <Home className="h-4 w-4" /> : item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}