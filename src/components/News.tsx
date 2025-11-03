import Image from "next/image";

export default function News() {
  // Důležitá upozornění/alerty
  const alerts = [
    {
      id: 1,
      type: "warning", // "warning", "info", "success"
      title: "Nepřítomnost v kanceláři",
      message: "Kancelář bude uzavřena 10. - 12. listopadu z důvodu školení. V naléhavých případech volejte +420 603 173 049.",
      date: "10. - 12. listopadu 2025",
      active: true // true = zobrazit, false = skrýt
    }
  ];

  const events = [
    {
      id: 1,
      title: "Úvodní kurz",
      description:
        "Zahájení kurzu pro nové žáky skupiny B. Seznámení s pravidly silničního provozu a organizace výuky.",
      date: "15. listopadu 2025",
      time: "17:00",
      location: "Autoškola Falář, 1. máje 194/15, Vimperk",
      category: "Kurz",
      color: "bg-skoda-dynamic-blue",
    },
    {
      id: 2,
      title: "Zdravověda",
      description:
        "Povinná přednáška o první pomoci a základech zdravovědy pro všechny žáky.",
      date: "20. listopadu 2025",
      time: "18:00",
      location: "Autoškola Falář, 1. máje 194/15, Vimperk",
      category: "Přednáška",
      color: "bg-orange-500",
    },
  ];

  return (
    <section id="news" className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Události
            </h2>
            <div className="w-24 h-1 bg-skoda-dynamic-blue mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aktuální termíny kurzů a důležitých přednášek pro naše žáky.
            </p>
          </div>

          {/* Alerts/Important Notices */}
          {alerts.filter(alert => alert.active).map((alert) => (
            <div
              key={alert.id}
              className={`mb-8 rounded-xl p-6 border-l-4 ${
                alert.type === 'warning' 
                  ? 'bg-orange-50 border-orange-500' 
                  : alert.type === 'info'
                  ? 'bg-blue-50 border-blue-500'
                  : 'bg-green-50 border-green-500'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    alert.type === 'warning'
                      ? 'bg-orange-500'
                      : alert.type === 'info'
                      ? 'bg-blue-500'
                      : 'bg-green-500'
                  }`}>
                    <Image
                      src={
                        alert.type === 'warning'
                          ? '/warning.png'
                          : alert.type === 'info'
                          ? '/info.png'
                          : '/check.png'
                      }
                      alt={alert.type}
                      width={20}
                      height={20}
                      className="brightness-0 invert"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {alert.title}
                    </h3>
                    {/* <span className="text-sm text-gray-600 font-medium">
                      {alert.date}
                    </span> */}
                  </div>
                  <p className={`text-base leading-relaxed ${
                    alert.type === 'warning'
                      ? 'text-orange-900'
                      : alert.type === 'info'
                      ? 'text-blue-900'
                      : 'text-green-900'
                  }`}>
                    {alert.message}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-gray-50 rounded-xl p-6 lg:p-8 border-2 border-transparent hover:border-skoda-dynamic-blue transition-all duration-300 hover:shadow-lg"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block ${event.color} text-white px-4 py-1 rounded-full text-sm font-semibold`}
                  >
                    {event.category}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>

                {/* Event Description */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 border-t border-gray-200 pt-4">
                  {/* Date */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-skoda-dynamic-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/calendar.png"
                        alt="Datum"
                        width={20}
                        height={20}
                        className="brightness-0 invert"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Datum</p>
                      <p className="font-semibold text-gray-900">
                        {event.date}
                      </p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-skoda-dynamic-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/clock.png"
                        alt="Čas"
                        width={20}
                        height={20}
                        className="brightness-0 invert"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Čas</p>
                      <p className="font-semibold text-gray-900">
                        {event.time}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-skoda-dynamic-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/location.png"
                        alt="Místo"
                        width={20}
                        height={20}
                        className="brightness-0 invert"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Místo konání</p>
                      <p className="font-semibold text-gray-900">
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
