import { useEffect, useState, createContext, useContext } from "react";

type language = "EN" | "HIN";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<language>("EN");

  const toggleLanguage = () => {
    if (language === "EN") {
      setLanguage("HIN");
      window.localStorage.setItem("language", "HIN");
      document.documentElement.classList.add("HIN");
    } else {
      setLanguage("EN");
      window.localStorage.setItem("language", "EN");
      document.documentElement.classList.remove("HIN");
    }
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(
      "language"
    ) as language | null;

    if (localLanguage) {
      setLanguage(localLanguage);

      if (localLanguage === "HIN") {
        document.documentElement.classList.add("HIN");
      }
    } else if (window.matchMedia("(prefers-color-scheme: HIN)").matches) {
      setLanguage("HIN");
      document.documentElement.classList.add("HIN");
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }

  return context;
}
