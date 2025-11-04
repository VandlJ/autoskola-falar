import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              O nás
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-skoda-dynamic-blue mx-auto mb-3 sm:mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Moderní autoškola ve Vimperku, Prachaticích a Volarech.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center relative">
            {/* Left Column - SEO Content */}
            <div className="relative z-10 order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                Autoškola Vimperk a Prachatice
              </h3>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                Autoškola Falář poskytuje kvalitní výuku řízení ve Vimperku,
                Prachaticích, Volarech a okolí. Kombinujeme moderní přístup s
                ověřenými metodami výuky.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Naše autoškola se specializuje na výuku řízení osobních
                automobilů (skupina B) s vysokou úspěšností u zkoušek a
                elektronickou evidencí &quot;Moje autoškola&quot;.
              </p>

              {/* Key Features - Condensed */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-skoda-dynamic-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Instruktoři s dlouholetými zkušenostmi
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-skoda-dynamic-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Elektronická evidence &quot;Moje autoškola&quot;
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-skoda-dynamic-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">
                    Vysoká úspěšnost u teoretických i praktických zkoušek
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Large Fabia Image */}
            <div className="relative lg:-ml-8 xl:-ml-12 order-1 lg:order-2">
              <Image
                src="/fabia.png"
                alt="Škoda Fabia - vozidlo autoškoly Falář"
                width={500}
                height={600}
                className="w-full h-auto object-contain drop-shadow-2xl scale-90 sm:scale-100 lg:scale-75 xl:scale-90"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
