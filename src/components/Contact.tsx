export default function Contact() {
  return (
    <section id="contact-info" className="py-8 lg:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Kontakt
            </h2>
            <div className="w-24 h-1 bg-skoda-dynamic-blue mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Navštivte nás nebo nás kontaktujte. Jsme tu pro vás.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Main Contact Card */}
              <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Autoškola Falář Vimperk
                </h3>
                
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-skoda-dynamic-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Adresa</p>
                      <p className="text-gray-600">1. máje 194/15</p>
                      <p className="text-gray-600">385 01 Vimperk II</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-skoda-dynamic-blue rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telefon</p>
                      <a href="tel:+420603173049" className="text-skoda-dynamic-blue hover:underline font-medium">
                        +420 603 173 049
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-skoda-dynamic-blue rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">E-mail</p>
                      <a href="mailto:info@autoskola-falar.cz" className="text-skoda-dynamic-blue hover:underline">
                        info@autoskola-falar.cz
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Otevírací doba
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Pondělí</span>
                    <span className="text-skoda-dynamic-blue font-semibold">8:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Úterý</span>
                    <span className="text-gray-500">Zavřeno</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Středa</span>
                    <span className="text-skoda-dynamic-blue font-semibold">12:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Čtvrtek</span>
                    <span className="text-gray-500">Zavřeno</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Pátek</span>
                    <span className="text-skoda-dynamic-blue font-semibold">8:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Sobota</span>
                    <span className="text-gray-500">Zavřeno</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-900">Neděle</span>
                    <span className="text-gray-500">Zavřeno</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-skoda-dynamic-blue">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">💡 Tip:</span> Doporučujeme si předem domluvit schůzku telefonicky.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Kde nás najdete
                </h3>
                
                {/* Map Container */}
                <div className="aspect-[4/3] rounded-lg overflow-hidden border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.8!2d13.77594!3d49.04361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b7c5e8b5c5e8b%3A0x1c5e8b5c5e8b5c5e!2s1.%20m%C3%A1je%20194%2F15%2C%20385%2001%20Vimperk%20II!5e0!3m2!1scs!2scz!4v1693920000000!5m2!1scs!2scz"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Autoškola Falář - 1. máje 194/15, Vimperk"
                  />
                </div>

                <div className="mt-4 text-sm text-gray-600 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span>🚗</span>
                    <span>Parkování dostupné přímo u budovy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🚌</span>
                    <span>Zastávka MHD: Náměstí (2 min. chůze)</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-skoda-dynamic-blue text-white rounded-xl p-6 lg:p-8">
                <h3 className="text-xl font-bold mb-4">Potřebujete pomoc?</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+420603173049"
                    className="w-full bg-white text-skoda-dynamic-blue font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center block"
                  >
                    📞 Zavolat nyní
                  </a>
                  <a
                    href="mailto:info@autoskola-falar.cz"
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-skoda-dynamic-blue font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center block"
                  >
                    📧 Napsat e-mail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
