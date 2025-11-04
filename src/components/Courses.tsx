"use client";

import Image from 'next/image';

export default function Courses() {
  const handleCourseClick = (e: React.MouseEvent<HTMLAnchorElement>, course: string) => {
    e.preventDefault();
    
    // Scroll to contact section
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      const navbarHeight = 80;
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Set the URL hash with course parameter
    window.location.hash = `contact?course=${course}`;
  };

  return (
    <section id="courses" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Nabídka kurzů
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-skoda-dynamic-blue mx-auto mb-3 sm:mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Specializujeme se na výuku řízení osobních automobilů s moderním
              přístupem.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {/* Course 1 - Skupina B */}
            <div className="bg-gray-50 rounded-xl p-5 sm:p-6 lg:p-8 border-2 border-transparent hover:border-skoda-dynamic-blue transition-all duration-300 hover:shadow-lg">
              <div className="mb-5 sm:mb-6">
                <div className="inline-flex items-center space-x-2 bg-skoda-dynamic-blue text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  <Image
                    src="/car.png"
                    alt="Skupina B"
                    width={20}
                    height={20}
                    className="brightness-0 invert"
                  />
                  <span>Skupina B</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Řidičský průkaz skupiny B
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                  Kompletní kurz pro řízení osobních automobilů do 3,5 tuny.
                  Zahrnuje teoretickou přípravu, praktické hodiny řízení a
                  přípravu na zkoušky.
                </p>
              </div>

              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-skoda-dynamic-blue rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Teoretická příprava (11 hodin)
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-skoda-dynamic-blue rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Praktické hodiny řízení (min. 28 hodin)
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-skoda-dynamic-blue rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Elektronická evidence pokroku
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-skoda-dynamic-blue rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Moderní vozový park Škoda
                  </span>
                </div>
              </div>

              <div className="border-t pt-5 sm:pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                  <div className="mb-3 sm:mb-0">
                    <span className="text-2xl sm:text-3xl font-bold text-skoda-dynamic-blue">
                      22 000 Kč
                    </span>
                  </div>
                </div>
                <a 
                  href="#contact?course=skupina-b"
                  onClick={(e) => handleCourseClick(e, 'skupina-b')}
                  className="block w-full bg-skoda-dynamic-blue hover:bg-blue-hover text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] text-center text-sm sm:text-base"
                >
                  Začít kurz skupiny B
                </a>
              </div>
            </div>

            {/* Course 2 - L17 */}
            <div className="bg-gray-50 rounded-xl p-5 sm:p-6 lg:p-8 border-2 border-transparent hover:border-skoda-dynamic-blue transition-all duration-300 hover:shadow-lg">
              <div className="mb-5 sm:mb-6">
                <div className="inline-flex items-center space-x-2 bg-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  <Image
                    src="/student.png"
                    alt="L17"
                    width={20}
                    height={20}
                    className="brightness-0 invert"
                  />
                  <span>L17</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Řízení od 17 let (L17)
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
                  Speciální kurz pro mladé řidiče od 17 let. Možnost získat
                  řidičský průkaz dříve s podmínkou doprovodu zkušeného řidiče.
                </p>
              </div>

              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-skoda-dynamic-blue rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Teoretická příprava (11 hodin)
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-skoda-dynamic-blue rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Praktické hodiny řízení (min. 28 hodin)
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-skoda-dynamic-blue rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">
                    Zvláštní příprava pro mladé řidiče
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-skoda-dynamic-blue rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-gray-700">Poradenství pro rodiče</span>
                </div>
              </div>

              <div className="border-t pt-5 sm:pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                  <div className="mb-3 sm:mb-0">
                    <span className="text-2xl sm:text-3xl font-bold text-skoda-dynamic-blue">
                      22 000 Kč
                    </span>
                  </div>
                </div>
                <a 
                  href="#contact?course=l17"
                  onClick={(e) => handleCourseClick(e, 'l17')}
                  className="block w-full bg-skoda-dynamic-blue hover:bg-blue-hover text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] text-center text-sm sm:text-base"
                >
                  Začít kurz L17
                </a>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600 mb-6">
              Máte otázky nebo si chcete rezervovat kurz?
            </p>
            <a
              href="#contact?course=konzultace"
              onClick={(e) => handleCourseClick(e, 'konzultace')}
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
            >
              Kontaktujte nás
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
