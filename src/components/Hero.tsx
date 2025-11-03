import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-white relative overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero.jpg"
          alt=""
          title="Autoškola Falář - Profesionální výuka řízení ve Vimperku"
          fill
          className="object-cover filter brightness-75 contrast-110 saturate-110"
          priority
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-display font-bold text-white mb-6 tracking-tight leading-none">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2">
              AUTOŠKOLA
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-skoda-dynamic-blue">
              VIMPERK
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            Profesionální výuka řízení s moderním přístupem a zkušenými instruktory v individuálním režimu. Získejte řidičský průkaz rychle a bezpečně.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-skoda-dynamic-blue hover:bg-blue-hover text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Začít kurz
            </a>
            <a
              href="#courses"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Více informací
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
