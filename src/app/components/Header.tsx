import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/vente", label: "Vente" },
    { path: "/location", label: "Location" },
    { path: "/copropriete", label: "Copropriété/Syndic" },
    { path: "/autres-prestations", label: "Autres prestations" },
    { path: "/a-propos", label: "À propos" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-14 w-14 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#818958' }}>
              <span className="text-white font-bold text-2xl">M</span>
            </div>
            <span className="font-bold text-xl text-gray-900">
              MDIAGNOSTIC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                key={`${item.path}-${item.label}-${index}`}
                to={item.path}
                className={`transition-colors ${
                  location.pathname === item.path
                    ? "font-semibold"
                    : "text-gray-700"
                }`}
                style={location.pathname === item.path ? { color: '#818958' } : {}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#818958'}
                onMouseLeave={(e) => {
                  if (location.pathname !== item.path) {
                    e.currentTarget.style.color = '';
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item, index) => (
              <Link
                key={`${item.path}-${item.label}-${index}`}
                to={item.path}
                className={`block py-2 transition-colors ${
                  location.pathname === item.path
                    ? "font-semibold"
                    : "text-gray-700"
                }`}
                style={location.pathname === item.path ? { color: '#818958' } : {}}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}