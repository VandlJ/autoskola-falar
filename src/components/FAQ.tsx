"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Jak probíhá registrace do autoškoly?",
      answer: "Registrace je velmi jednoduchá. Stačí nás kontaktovat telefonicky nebo osobně navštívit naši pobočku. Při registraci si domluvíme termín úvodního setkání, kde vám vysvětlíme celý průběh kurzu a předáme potřebné dokumenty."
    },
    {
      question: "Jak dlouho kurz trvá?",
      answer: "Délka kurzu závisí na vašem tempu učení a dostupnosti. Standardně trvá kurz skupiny B 2-4 měsíce. Teoretická část zahrnuje 12 hodin výuky, praktická část minimálně 24 hodin jízd. Termíny si domlouváte flexibilně podle svých možností."
    },
    {
      question: "Co je potřeba k přihlášení do kurzu?",
      answer: "K přihlášení potřebujete: platný občanský průkaz, lékařské potvrzení o zdravotní způsobilosti, fotografii na řidičský průkaz a poplatek za vystavení průkazu. Vše vám detailně vysvětlíme při registraci."
    },
    {
      question: "Kolik stojí řidičský průkaz skupiny B?",
      answer: "Kompletní kurz skupiny B stojí 21 900 Kč. Cena zahrnuje teoretickou přípravu, praktické hodiny řízení, elektronickou evidenci a přípravu na zkoušky. Kurz L17 pro mladé řidiče stojí 22 900 Kč."
    },
    {
      question: "Můžu si vybrat instruktora?",
      answer: "Ano, můžete si vybrat instruktora podle svých preferencí. Máme tým zkušených instruktorů s různými styly výuky. Pokud by vám některý instruktor nevyhovoval, můžeme vám přidělit jiného."
    },
    {
      question: "Jak funguje elektronická evidence 'Moje autoškola'?",
      answer: "Elektronická evidence vám umožňuje sledovat svůj pokrok online, rezervovat si hodiny jízd, kontrolovat docházku a komunikovat s instruktory. Přístup k systému získáte při registraci do kurzu."
    },
    {
      question: "Kde probíhají praktické jízdy?",
      answer: "Praktické jízdy probíhají ve Vimperku, Prachaticích a okolí. Postupně si vyzkoušíte jízdu ve městě, na silnicích i na dálnici. Trasy volíme podle vašich potřeb a úrovně řidičských dovedností."
    },
    {
      question: "Co když u zkoušky neuspěji?",
      answer: "Pokud u zkoušky neuspějete, připravíme vás na opakování zdarma. Analyzujeme společně chyby a zaměříme se na problematické oblasti. Naši žáci mají 95% úspěšnost, takže máte velmi dobré šance uspět napoprvé."
    },
    {
      question: "Můžu kurz přerušit nebo zrušit?",
      answer: "Ano, kurz můžete přerušit z vážných důvodů (nemoc, zaměstnání). V případě zrušení kurzu vám vrátíme poměrnou část platby za neodučené hodiny podle našich obchodních podmínek."
    },
    {
      question: "Jaká vozidla používáte pro výuku?",
      answer: "Pro výuku používáme moderní vozidla Škoda vybavená dvojitými pedály a dalšími bezpečnostními prvky. Všechna vozidla jsou pravidelně servisována a splňují nejpřísnější bezpečnostní normy."
    }
  ];

  return (
    <section id="faq" className="py-8 lg:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Často kladené otázky
            </h2>
            <div className="w-24 h-1 bg-skoda-dynamic-blue mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Odpovědi na nejčastější otázky o našich kurzech a službách.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg
                      className="w-5 h-5 text-skoda-dynamic-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
