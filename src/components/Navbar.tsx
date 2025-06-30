import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Drawer } from "./Drawer";
import { useLocale } from "./context/LocaleContext";

const locales = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { locale, changeLocale } = useLocale();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        langDropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langDropdownOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background shadow-md">
      <nav className="flex items-center justify-between px-8 py-2 mx-auto">
        <Link to="/" className="text-lg font-semibold text-foreground">
          Kilian Le Calvez : Portfolio
        </Link>

        <div className="flex items-center space-x-4 relative">
          {/* Language Selector */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-muted text-xl"
              aria-label="Select language"
              type="button"
            >
              {locales.find((l) => l.code === locale)?.flag}
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-background border border-muted rounded-md shadow-lg z-50">
                {locales.map(({ code, label, flag }) => (
                  <button
                    key={code}
                    onClick={() => changeLocale(code as "fr" | "en")}
                    className={`flex items-center space-x-2 w-full px-3 py-2 hover:bg-muted ${
                      locale === code ? "font-bold" : ""
                    }`}
                    type="button"
                  >
                    <span className="text-xl">{flag}</span>
                    <span className="text-sm">{label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Drawer button */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-md hover:bg-muted"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        {/* Drawer content unchanged */}
        <div className="flex items-center space-x-3 mb-4">
          <img
            src="image/photo-profile.jpeg"
            alt="Me"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-foreground">Kilian Le Calvez</p>
            <p className="text-sm text-muted-foreground">
              XR / VR / Game Developper
            </p>
          </div>
        </div>

        <nav className="space-y-2 mb-4">
          <Link
            to="/"
            className="block text-sm font-medium text-foreground hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/profile"
            className="block text-sm font-medium text-foreground hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
          <a
            href="/CV_XR_VR_GameDev_Kilian_Le_Calvez_2025.pdf"
            download
            className="block text-sm font-medium text-foreground hover:underline"
          >
            {"Download CV"}
          </a>
          <div className="border-t border-muted my-4" />
        </nav>

        <div />
        <div className="text-sm space-y-1">
          <a
            href="mailto:kilianlecalvez.dev@gmail.com"
            className="text-muted-foreground block hover:underline"
          >
            kilianlecalvez.dev@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/kilian-le-calvez-link/"
            className="text-blue-500 hover:underline block"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </Drawer>
    </header>
  );
};
