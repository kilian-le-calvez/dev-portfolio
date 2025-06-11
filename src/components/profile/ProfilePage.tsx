import React, { useEffect } from "react";
import { Navbar } from "../Navbar";
import { translations } from "./ProfilePage.translate";
import { useLocale } from "../context/LocaleContext";

const ProfilePage = () => {
  const { locale } = useLocale();

  // Optional: sync locale changes to localStorage if you want to add a toggle later
  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const t = translations[locale];

  return (
    <main className="max-w-3xl mx-auto p-6 pt-24 text-foreground">
      <Navbar />

      <div className="flex items-center space-x-6 mb-8">
        <img
          src="image/photo-profile.jpeg"
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-1 border-neon-blue shadow-neon-blue-glow"
          style={{
            boxShadow:
              "0 0 8px 2px hsl(var(--neon-blue) / 0.8), 0 0 15px 6px hsl(var(--neon-blue) / 0.3)",
          }}
        />
        <div>
          <h1 className="text-3xl font-extrabold tracking-wide neon-text-neon-blue mb-1">
            {t.title}
          </h1>
          <p className="text-muted-foreground text-lg font-semibold uppercase">
            {t.subtitle}
          </p>
        </div>
      </div>

      <section className="mb-10 glass p-6 rounded-2xl shadow-lg border border-muted/30">
        <h2 className="text-xl font-semibold mb-4 neon-text-neon-purple">
          {t.contactTitle}
        </h2>
        <ul className="text-sm space-y-3 text-muted-foreground font-mono">
          <li>
            📧{" "}
            <a
              href={`mailto:${t.contact.email}`}
              className="text-neon-blue hover:text-neon-purple underline transition-colors"
            >
              {t.contact.email}
            </a>
          </li>
          <li>
            📞{" "}
            <span className="text-foreground font-semibold">
              {t.contact.phone}
            </span>
          </li>
          <li>
            💼{" "}
            <a
              href="https://linkedin.com/in/kilian-le-calvez-link/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-green hover:text-neon-blue underline transition-colors"
            >
              {t.contact.linkedin}
            </a>
          </li>
          <li>
            📄{" "}
            <a
              href="/CV_XR_VR_GameDev_Kilian_Le_Calvez_2025.pdf"
              download
              className="text-neon-purple hover:text-neon-green underline transition-colors"
            >
              {t.contact.cv}
            </a>
          </li>
        </ul>
      </section>

      <section className="glass p-6 rounded-2xl shadow-lg border border-muted/30">
        <h2 className="text-xl font-semibold mb-4 neon-text-neon-green">
          {t.aboutTitle}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed font-sans">
          {t.aboutDescription}
        </p>
      </section>
    </main>
  );
};

export default ProfilePage;
