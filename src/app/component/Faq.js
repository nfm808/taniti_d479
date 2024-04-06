const faqs = [
  {
    question: "What is the voltage and power outlets?",
    answer: "Power outlets are 120 volts (the same as in the United States).",
  },
  {
    question: "When can I be served alcohol?",
    answer:
      "Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m.",
  },
  {
    question: "What is the legal drinking age?",
    answer:
      "The drinking age on Taniti is 18 and the drinking age is not strictly enforced.",
  },
  {
    question: "What is the spoken language?",
    answer:
      "Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by the older residents.",
  },
  {
    question: "Is it safe?",
    answer:
      "Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes. ",
  },
  {
    question: "What medical services are available?",
    answer:
      "There is one hospital and several clinics. The hospital has many multilingual employees.",
  },
  {
    question: "Are there any holidays observed?",
    answer:
      "Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on holidays, so visitors should plan accordingly.",
  },
  {
    question: "What is the currency used?",
    answer:
      "Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards.",
  },
  // More questions...
];

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map(faq => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
