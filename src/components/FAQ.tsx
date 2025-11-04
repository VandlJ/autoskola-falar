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
      answer:
        "Registrace je velmi jednoduchá. Stačí nás kontaktovat telefonicky nebo osobně navštívit naši pobočku. Při registraci si domluvíme termín úvodního setkání, kde vám vysvětlíme celý průběh kurzu a předáme potřebné dokumenty.",
    },
    {
      question: "Jak dlouho kurz trvá?",
      answer:
        "Délka kurzu závisí na vašem tempu učení a dostupnosti. Standardně trvá kurz skupiny B 2-4 měsíce. Teoretická část zahrnuje 11 hodin výuky, praktická část standardně 28 hodin jízd. Termíny domlouvá administrativa autoškoly a popřípadě instruktor.",
    },
    {
      question: "Co je potřeba k přihlášení do kurzu?",
      answer:
        "K přihlášení potřebujete: platný občanský průkaz a lékařské potvrzení o zdravotní způsobilosti. Vše vám detailně vysvětlíme při registraci.",
    },
    {
      question: "Kolik stojí řidičský průkaz skupiny B?",
      answer:
        "Kompletní kurz skupiny B stojí 22 000 Kč. Cena zahrnuje teoretickou přípravu, praktické hodiny řízení, elektronickou evidenci a přípravu na zkoušky. Kurz L17 pro mladé řidiče stojí také 22 000 Kč.",
    },
    {
      question: "Jak funguje elektronická evidence \"Moje autoškola\"?",
      answer:
        "Systém \"Moje autoškola\" slouží jako moderní elektronická evidence žáků. Po registraci do kurzu zde vidíte přehled svých naplánovaných jízd, teoretické výuky a administrativních záznamů spojených s kurzem.",
    },

    {
      question: "Kde probíhají praktické jízdy?",
      answer:
        "Praktické jízdy probíhají ve Vimperku, Prachaticích, Volarech a okolí. Postupně si vyzkoušíte jízdu ve městě, na silnicích i na dálnici. Trasy volíme podle vašich potřeb a úrovně řidičských dovedností.",
    },
    {
      question: "Můžu kurz přerušit nebo zrušit?",
      answer:
        "Ano, kurz můžete přerušit z vážných důvodů (nemoc, zaměstnání). V případě zrušení kurzu vám vrátíme poměrnou část platby za neodučené hodiny podle našich obchodních podmínek.",
    },
    {
      question: "Jaká vozidla používáte pro výuku?",
      answer:
        "Pro výuku používáme moderní vozidla Škoda vybavená dvojitými pedály a dalšími bezpečnostními prvky. Všechna vozidla jsou pravidelně servisována a splňují nejpřísnější bezpečnostní normy.",
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Často kladené otázky
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-skoda-dynamic-blue mx-auto mb-3 sm:mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Odpovědi na nejčastější otázky o našich kurzech a službách.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-3 sm:pr-4 hover:cursor-pointer">
                    {faq.question}
                  </h3>
                  <div
                    className={`transform transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
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
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                    <div className="border-t border-gray-100 pt-3 sm:pt-4">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
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
