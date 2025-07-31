import React, { useState } from "react";

export default function AlcoSolutionSite() {
  const [lang, setLang] = useState("fr");
  const [submitted, setSubmitted] = useState(false);

  const localeData = {
    fr: {
      nav: ["Services", "À propos", "Contact"],
      heroTitle: "Solutions d'affaires innovantes",
      heroText:
        "Alco Solution propulse votre entreprise grâce à des services professionnels, efficaces et sur mesure.",
      heroBtn: "Parlez à un expert",
      servicesTitle: "Nos services",
      services: [
        {
          title: "Consultation stratégique",
          desc: "Accompagnement personnalisé pour optimiser vos opérations et votre rentabilité."
        },
        {
          title: "Création de sites web",
          desc: "Sites modernes, responsives et adaptés à votre marque."
        },
        {
          title: "Soutien administratif",
          desc: "Gestion de facturation, rédaction, conformité et soutien virtuel."
        }
      ],
      aboutTitle: "À propos d'Alco Solution",
      aboutText:
        "Fondée par des passionnés de gestion, Alco Solution est une jeune entreprise québécoise dédiée à fournir des outils concrets et accessibles aux entrepreneurs. Notre approche est humaine, rigoureuse et axée sur les résultats.",
      contactTitle: "Contactez-nous",
      contactText: "Faites le premier pas vers une transformation professionnelle.",
      contactFields: ["Nom complet", "Courriel", "Votre message..."],
      contactBtn: "Envoyer",
      confirmation: "Merci pour votre message. Nous vous contacterons bientôt.",
      footer: "Tous droits réservés."
    },
    en: {
      nav: ["Services", "About", "Contact"],
      heroTitle: "Innovative Business Solutions",
      heroText:
        "Alco Solution propels your business forward with professional, efficient, and customized services.",
      heroBtn: "Talk to an expert",
      servicesTitle: "Our Services",
      services: [
        {
          title: "Strategic Consulting",
          desc: "Personalized guidance to optimize your operations and profitability."
        },
        {
          title: "Website Creation",
          desc: "Modern, responsive sites tailored to your brand."
        },
        {
          title: "Administrative Support",
          desc: "Billing, writing, compliance, and virtual support."
        }
      ],
      aboutTitle: "About Alco Solution",
      aboutText:
        "Founded by management enthusiasts, Alco Solution is a young Quebec company dedicated to providing concrete and accessible tools to entrepreneurs. Our approach is human-centered, rigorous, and results-oriented.",
      contactTitle: "Contact Us",
      contactText: "Take the first step toward a professional transformation.",
      contactFields: ["Full Name", "Email", "Your message..."],
      contactBtn: "Send",
      confirmation: "Thank you for your message. We will be in touch soon.",
      footer: "All rights reserved."
    }
  };

  const langData = localeData[lang];

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Alco Solution</h1>
          <nav className="space-x-6 text-sm">
            {langData.nav.map((item, i) => (
              <a key={i} href={['#services', '#about', '#contact'][i]} className="hover:underline">
                {item}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="ml-4 px-2 py-1 rounded bg-white text-blue-900 hover:underline"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>
          </nav>
        </div>
      </header>

      <section className="bg-gray-50 py-20 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">{langData.heroTitle}</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">{langData.heroText}</p>
        <a href="#contact" className="bg-blue-700 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-800 transition">
          {langData.heroBtn}
        </a>
      </section>

      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-10">{langData.servicesTitle}</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {langData.services.map((service, i) => (
              <div key={i} className="shadow rounded-2xl p-6 border">
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                <p className="text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">{langData.aboutTitle}</h3>
          <p className="text-base md:text-lg">{langData.aboutText}</p>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">{langData.contactTitle}</h3>
          <p className="mb-8 text-sm md:text-base">{langData.contactText}</p>
          {submitted ? (
            <p className="text-green-700 text-lg font-semibold">{langData.confirmation}</p>
          ) : (
            <form
              action="https://formspree.io/f/xdkddblo"
              method="POST"
              className="space-y-4 text-left"
              onSubmit={() => setSubmitted(true)}
            >
              <input
                type="text"
                name="name"
                placeholder={langData.contactFields[0]}
                className="w-full p-3 rounded border"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={langData.contactFields[1]}
                className="w-full p-3 rounded border"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder={langData.contactFields[2]}
                className="w-full p-3 rounded border"
                required
              />
              <input type="text" name="_gotcha" className="hidden" />
              <button
                type="submit"
                className="bg-blue-700 text-white px-6 py-3 rounded-2xl hover:bg-blue-800 transition"
              >
                {langData.contactBtn}
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="bg-blue-900 text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} Alco Solution. {langData.footer}
      </footer>
    </main>
  );
}