// import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto">
          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-4 sm:pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0 text-xs sm:text-sm text-gray-400">
              <div>
                <p>© 2025 Autoškola Falář. Všechna práva vyhrazena.</p>
              </div>
              <div>
                <p>
                  Webové stránky vytvořila společnost{" "}
                  <a 
                    href="https://www.zephyron.tech/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 transition-colors underline"
                    title="Appitect - Tvorba webových stránek a aplikací"
                  >
                    Zephyron
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
