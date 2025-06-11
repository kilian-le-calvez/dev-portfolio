import React, { createContext, useContext, useState, useEffect } from "react";

type Locale = "fr" | "en";

interface LocaleContextType {
  locale: Locale;
  changeLocale: (newLocale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem("locale");
    return saved === "fr" || saved === "en" ? (saved as Locale) : "fr";
  });

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale === "fr" || savedLocale === "en") {
      setLocale(savedLocale);
    }
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

// Custom hook for consuming the locale context
export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
