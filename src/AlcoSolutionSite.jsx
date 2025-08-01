import React, { useRef, useState } from 'react';

function AlcoSolutionSite() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    // Formulaire inactif pour l’instant — à activer avec EmailJS plus tard
    setSent(true);
  };

  return (
    <div className="font-sans">
      {/* Hero section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216')" }}
      >
        <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Alco Solution</h1>
          <p className="text-xl mb-6">Des idées simples, des résultats puissants</p>
          <a href="#contact">
            <button className="bg-white text-black px-6 py-2 rounded-full shadow hover:bg-gray-200">
              En savoir plus
            </button>
          </a>
        </div>
      </section>

      {/* À propos */}
      <section className="py-20 px-6 md:px-20 bg-gray-100 text-gray-800">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Qui sommes-nous ?</h2>
            <p className="text-lg leading-relaxed">
              Alco Solution accompagne les entrepreneurs, les PME et les travailleurs autonomes dans l'optimisation de leurs opérations. Notre force : transformer vos idées en résultats concrets.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="bureau professionnel"
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Nos services</h2>

        {/* Consultation */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <img src="https://images.unsplash.com/photo-1581090700227-1e8a1a9f59b0" alt="consultation" className="rounded-xl shadow-xl" />
          <div>
            <h3 className="text-2xl font-semibold mb-2">Consultation d'affaires</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Création d'entreprise et planification stratégique</li>
              <li>Analyse du modèle d'affaires</li>
              <li>Accompagnement pour financement</li>
            </ul>
          </div>
        </div>

        {/* Optimisation */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Optimisation des processus</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Automatisation avec Zapier, Make</li>
              <li>Facturation numérique avec QuickBooks</li>
              <li>Réduction des coûts et des tâches manuelles</li>
            </ul>
          </div>
          <img src="https://images.unsplash.com/photo-1611974789855-9c1b0b13b6fd" alt="optimisation" className="rounded-xl shadow-xl" />
        </div>

        {/* Numérique */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="https://images.unsplash.com/photo-1559027615-cdcb0f5f0c1e" alt="numérique" className="rounded-xl shadow-xl" />
          <div>
            <h3 className="text-2xl font-semibold mb-2">Stratégie numérique</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Création de sites Web modernes</li>
              <li>Optimisation SEO et automatisation marketing</li>
              <li>Intégration de CRM, chatbot, e-mailing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="py-16 px-6 md:px-20 bg-blue-900 text-white text-center">
        <p className="text-2xl italic max-w-3xl mx-auto">
          « Une stratégie claire transforme les ambitions en réalités. Avec Alco Solution, prenez une longueur d'avance. »
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-gray-100 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">Nous contacter</h2>
        {sent ? (
          <p className="text-green-600 text-center text-xl">Merci pour votre message !</p>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto grid gap-6">
            <input type="text" name="user_name" placeholder="Votre nom" required className="p-3 border rounded" />
            <input type="email" name="user_email" placeholder="Votre adresse courriel" required className="p-3 border rounded" />
            <textarea name="message" placeholder="Votre message" rows="5" required className="p-3 border rounded"></textarea>
            <button type="submit" className="bg-blue-700 text-white py-3 rounded hover:bg-blue-800">Envoyer</button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-xl font-semibold mb-2">Alco Solution</h4>
            <p>Consultation stratégique et accompagnement professionnel.</p>
          </div>
          <div className="text-right">
            <p>info@alcosolution.com</p>
            <p>Montréal, QC</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} Alco Solution. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AlcoSolutionSite;
