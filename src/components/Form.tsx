"use client";

import { useState, useEffect } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Auto-fill course from URL parameter
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.split('?')[1]);
      const courseParam = params.get('course');
      
      if (courseParam) {
        setFormData(prev => ({
          ...prev,
          course: courseParam
        }));
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', course: '', message: '' });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      // Log the error for debugging and retain user-facing error state
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Přihlášení do kurzu
            </h2>
            <div className="w-24 h-1 bg-skoda-dynamic-blue mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zaregistrujte se do našeho kurzu nebo nás kontaktujte s jakýmkoli
              dotazem.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Kontaktní formulář
            </h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                <p className="text-green-800 font-semibold">
                  ✓ Děkujeme! Vaše zpráva byla odeslána.
                </p>
                <p className="text-green-700 text-sm mt-1">
                  Ozveme se vám co nejdříve.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Jméno a příjmení *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-skoda-dynamic-blue focus:border-skoda-dynamic-blue transition-colors duration-200 text-gray-700 placeholder:text-gray-500"
                    placeholder="Zadejte vaše jméno"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-skoda-dynamic-blue focus:border-skoda-dynamic-blue transition-colors duration-200 text-gray-700 placeholder:text-gray-500"
                    placeholder="vas.email@example.com"
                  />
                </div>
              </div>

              {/* Row 2: Phone and Course */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-skoda-dynamic-blue focus:border-skoda-dynamic-blue transition-colors duration-200 text-gray-700 placeholder:text-gray-500"
                    placeholder="+420 xxx xxx xxx"
                  />
                </div>

                {/* Course Selection */}
                <div>
                  <label
                    htmlFor="course"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Zájem o kurz
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-skoda-dynamic-blue focus:border-skoda-dynamic-blue transition-colors duration-200 text-gray-700"
                  >
                    <option value="">Vyberte kurz</option>
                    <option value="skupina-b">
                      Skupina B - Osobní auto (22 000 Kč)
                    </option>
                    <option value="l17">
                      L17 - Řízení od 17 let (22 000 Kč)
                    </option>
                    <option value="konzultace">Jen konzultace</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Message (full width) */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-skoda-dynamic-blue focus:border-skoda-dynamic-blue transition-colors duration-200 resize-vertical text-gray-700 placeholder:text-gray-500"
                  placeholder="Napište nám vaše dotazy nebo poznámky..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-skoda-dynamic-blue hover:bg-blue-hover hover:cursor-pointer disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Odesílám..." : "Odeslat formulář"}
              </button>

              <p className="text-xs text-gray-600 text-center">
                * Povinná pole. Vaše údaje budou zpracovány v souladu s GDPR.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
