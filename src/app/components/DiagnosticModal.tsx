import { X } from "lucide-react";
import { useEffect } from "react";

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  content: React.ReactNode;
}

export function DiagnosticModal({
  isOpen,
  onClose,
  title,
  icon: Icon,
  content,
}: DiagnosticModalProps) {
  // Empêcher le scroll quand le modal est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Fermer avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 backdrop-blur-md transition-opacity"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
        onClick={onClose}
      />
      <div
        className="relative bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-6 text-white flex items-center justify-between"
          style={{ background: "linear-gradient(to right, #818958, #6b7148)" }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center bg-white"
            >
              <Icon className="h-6 w-6" style={{ color: '#818958' }} />
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors"
            aria-label="Fermer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="text-gray-700 leading-relaxed">{content}</div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg font-semibold text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: "#818958" }}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}