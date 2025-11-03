import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* <div className="container mx-auto px-4 py-8"> */}
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          {/* <div className="grid md:grid-cols-3 gap-8 mb-8"> */}
            {/* Company Info */}
            {/* <div>
              <h3 className="text-lg font-bold mb-4 text-skoda-dynamic-blue">
                Autoškola Falář
              </h3>
              <div className="space-y-1 text-sm text-gray-400">
                <p>1. máje 194/15, 385 01 Vimperk II</p>
                <p>Tel: +420 606 050 530</p>
                <p>info@autoskola-falar.cz</p>
              </div>
            </div> */}

            {/* Quick Links */}
            {/* <div>
              <h4 className="text-lg font-semibold mb-4">Rychlé odkazy</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-skoda-dynamic-blue transition-colors">
                    O nás
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-gray-400 hover:text-skoda-dynamic-blue transition-colors">
                    Kurzy
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-400 hover:text-skoda-dynamic-blue transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-skoda-dynamic-blue transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div> */}

            {/* Legal */}
            {/* <div>
              <h4 className="text-lg font-semibold mb-4">Právní dokumenty</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/gdpr" className="text-gray-400 hover:text-skoda-dynamic-blue transition-colors">
                    GDPR
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-400 hover:text-skoda-dynamic-blue transition-colors">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="/obchodni-podminky" className="text-gray-400 hover:text-skoda-dynamic-blue transition-colors">
                    Obchodní podmínky
                  </Link>
                </li>
              </ul>
            </div> */}
          {/* </div> */}

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-2">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400">
              <div>
                <p>© 2025 Autoškola Falář. Všechna práva vyhrazena.</p>
              </div>
              <div>
                <p>
                  Webové stránky vytvořila společnost{" "}
                  <a 
                    href="https://www.appitect.eu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 transition-colors underline"
                    title="Appitect - Tvorba webových stránek a aplikací"
                  >
                    Appitect
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
