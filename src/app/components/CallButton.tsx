import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

export function CallButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile sticky buttons */}
      <div className="md:hidden">
        {/* Call button */}
        <a
          href="tel:+33777782659"
          className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-xl transition-all duration-300 hover:scale-110 ${ 
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          style={{ backgroundColor: "#818958" }}
          aria-label="Appeler MDIAGNOSTIC"
        >
          <Phone className="h-7 w-7 text-white" />
        </a>
        
        {/* Facebook button */}
        <a
          href="https://www.facebook.com/share/1CS7PHnteq/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className={`fixed bottom-6 right-[4.75rem] z-50 flex items-center justify-center w-14 h-14 transition-all duration-300 hover:scale-110 ${ 
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          aria-label="Suivez-nous sur Facebook"
        >
          <svg className="w-14 h-14" viewBox="0 0 36 36" fill="none">
            <path d="M18 0C8.059 0 0 8.059 0 18C0 27.941 8.059 36 18 36C27.941 36 36 27.941 36 18C36 8.059 27.941 0 18 0Z" fill="#818958"/>
            <path d="M22.6777 18.75L23.2031 15.1406H19.7695V12.8203C19.7695 11.8242 20.2598 10.8516 21.8555 10.8516H23.3438V7.74609C23.3438 7.74609 21.8789 7.5 20.4844 7.5C17.5664 7.5 15.668 9.25781 15.668 12.3984V15.1406H12.5156V18.75H15.668V27.4219C16.3242 27.5273 16.9922 27.5859 17.6758 27.5859C18.3594 27.5859 19.0273 27.5273 19.6836 27.4219V18.75H22.6777Z" fill="white"/>
          </svg>
        </a>
      </div>

      {/* Desktop sticky buttons */}
      <div className="hidden md:block">
        {/* Call button */}
        <a
          href="tel:+33777782659"
          className={`fixed bottom-8 right-8 z-40 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${ 
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          style={{ backgroundColor: "#818958" }}
        >
          <Phone className="h-6 w-6 text-white" />
          <span className="font-bold text-lg text-white">07 77 78 26 59</span>
        </a>
        
        {/* Facebook button */}
        <a
          href="https://www.facebook.com/share/1CS7PHnteq/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className={`fixed bottom-8 right-64 z-40 flex items-center justify-center w-14 h-14 transition-all duration-300 hover:scale-110 ${ 
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          aria-label="Suivez-nous sur Facebook"
        >
          <svg className="w-14 h-14 drop-shadow-2xl" viewBox="0 0 36 36" fill="none">
            <path d="M18 0C8.059 0 0 8.059 0 18C0 27.941 8.059 36 18 36C27.941 36 36 27.941 36 18C36 8.059 27.941 0 18 0Z" fill="#818958"/>
            <path d="M22.6777 18.75L23.2031 15.1406H19.7695V12.8203C19.7695 11.8242 20.2598 10.8516 21.8555 10.8516H23.3438V7.74609C23.3438 7.74609 21.8789 7.5 20.4844 7.5C17.5664 7.5 15.668 9.25781 15.668 12.3984V15.1406H12.5156V18.75H15.668V27.4219C16.3242 27.5273 16.9922 27.5859 17.6758 27.5859C18.3594 27.5859 19.0273 27.5273 19.6836 27.4219V18.75H22.6777Z" fill="white"/>
          </svg>
        </a>
      </div>
    </>
  );
}