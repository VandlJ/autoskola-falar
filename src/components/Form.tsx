"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", course: "", message: "" });
        setSubmitStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Přihlášení do kurzu
            </h2>
            <div className="w-24 h-1 bg-skoda-dynamic-blue mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Zaregistrujte se do našeho kurzu nebo nás kontaktujte s jakýmkoli dotazem.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Kontaktní formulář
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                  <p className="text-green-800 font-semibold">✓ Děkujeme! Vaše zpráva byla odeslána.</p>
                  <p className="text-green-700 text-sm mt-1">Ozveme se vám co nejdříve.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-skoda-dynamic-blue focus:border-skoda-dynamic-blue transition-colors duration-200 placeholder:text-gray-500"
                    placeholder="Zadejte vaše jméno"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-skoda-dynamic-blue focus:border-skoda-dynamic-blue transition-colors duration-200 placeholder:text-gray-500"
                    placeholder="vas.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-skoda-dynamic-blue focus:border-skoda-dynamic-blue transition-colors duration-200 placeholder:text-gray-500"
                    placeholder="+420 xxx xxx xxx"
                  />
                </div>

                {/* Course Selection */}
                <div>
                  <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
                    Zájem o kurz
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-skoda-dynamic-blue focus:border-skoda-dynamic-blue transition-colors duration-200"
                  >
                    <option value="">Vyberte kurz</option>
                    <option value="skupina-b">Skupina B - Osobní auto (18 500 Kč)</option>
                    <option value="l17">L17 - Řízení od 17 let (19 500 Kč)</option>
                    <option value="konzultace">Jen konzultace</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-skoda-dynamic-blue focus:border-skoda-dynamic-blue transition-colors duration-200 resize-vertical placeholder:text-gray-500"
                    placeholder="Napište nám vaše dotazy nebo poznámky..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-skoda-dynamic-blue hover:bg-[#005a75] disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Odesílám..." : "Odeslat přihlášku"}
                </button>

                <p className="text-xs text-gray-600 text-center">
                  * Povinná pole. Vaše údaje budou zpracovány v souladu s GDPR.
                </p>
              </form>
            </div>

            {/* Moje Autoškola Integration */}
            <div className="space-y-6">
              {/* Moje Autoškola */}
              <div className="bg-skoda-dynamic-blue text-white rounded-xl p-6 lg:p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">📱</div>
                  <div>
                    <h3 className="text-2xl font-bold">Moje autoškola</h3>
                    <p className="text-blue-100">Elektronická evidence</p>
                  </div>
                </div>
                <p className="mb-6 leading-relaxed">
                  Máte již přístup k systému &quot;Moje autoškola&quot;? Přihlaste se a sledujte svůj pokrok, 
                  rezervujte si hodiny a komunikujte s instruktory online.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-white text-skoda-dynamic-blue font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    Přihlásit se do systému
                  </button>
                  <button className="w-full border-2 border-white text-white hover:bg-white hover:text-skoda-dynamic-blue font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    Registrace nového žáka
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
