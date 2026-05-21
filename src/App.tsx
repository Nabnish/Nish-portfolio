import TiltedCard from "./components/card";

import "./App.css";
import logo from "./assets/Gemini_Generated_Image_xzxxkixzxxkixzxx-removebg-preview.png";

function App() {
  const WhatsApp = () => {
    window.location.href = "https://wa.me/919042215853";
  };

  const Info = [
    {
      Title: "Weight-Loss",
      Details:
        "Sustainable fat loss using realistic Indian meals, habit-based changes, and long-term consistency",
    },
    {
      Title: "PCOD / PCOS",
      Details:
        "Hormone-supportive nutrition to reduce symptoms, manage cravings, and improve cycle regularity.",
    },
    {
      Title: "Diabetes",
      Details:
        "Blood sugar-friendly Indian meals without extreme food restrictions or fear.",
    },
    {
      Title: "Thyroid",
      Details:
        "Nutrition that supports metabolism, energy levels, and gradual weight balance.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-[#ffe5d9] pb-24 px-6 text-center">
        <img
          src={logo}
          alt="Realistic Nutrition Logo"
          className="h-auto max-h-36 mx-auto pt-10"
        />

        <h1 className="text-4xl md:text-6xl font-bold text-[#D2691E] mt-10 leading-tight">
          Simple Nutrition.
          <br />
          Sustainable Results.
        </h1>

        <p className="text-[#5c2c10] text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-8">
          Personalized diet plans for weight loss, PCOD, diabetes &
          metabolic health — without crash dieting.
        </p>

        <button
          type="button"
          onClick={WhatsApp}
          className="mt-10 bg-[#FF8C61] hover:bg-[#ff7644] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition"
        >
          Start on WhatsApp
        </button>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-[#fff7f2] text-center">
        <h2 className="text-4xl font-bold text-[#D2691E]">
          We Help You With
        </h2>

        <p className="text-[#7a4b2f] mt-4 max-w-2xl mx-auto">
          Personalized nutrition guidance designed for realistic Indian lifestyles.
        </p>

        <div className="flex flex-wrap gap-8 justify-center pt-16">
          {Info.map((item, index) => (
            <TiltedCard
              key={index}
              title={item.Title}
              details={item.Details}
            />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#fff7f2] text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#5c2c10]">
          Real Client Results
        </h2>

        <p className="text-[#8b5e3c] mb-12">
          Sustainable fat loss with realistic Indian nutrition
        </p>

        <div className="overflow-hidden relative max-w-6xl mx-auto">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory">

            <div className="min-w-[300px] md:min-w-[350px] bg-[#fff1ea] rounded-3xl shadow-lg p-4 snap-center border border-[#ffd4c2]">
              <img
                src="testimonial1.jpg"
                alt="Testimonial 1"
                className="rounded-2xl w-full h-[450px] object-cover"
              />
            </div>

            <div className="min-w-[300px] md:min-w-[350px] bg-[#fff1ea] rounded-3xl shadow-lg p-4 snap-center border border-[#ffd4c2]">
              <img
                src="testimonial2.jpg"
                alt="Testimonial 2"
                className="rounded-2xl w-full h-[450px] object-cover"
              />
            </div>

            <div className="min-w-[300px] md:min-w-[350px] bg-[#fff1ea] rounded-3xl shadow-lg p-4 snap-center border border-[#ffd4c2]">
              <img
                src="testimonial3.jpg"
                alt="Testimonial 3"
                className="rounded-2xl w-full h-[450px] object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-[#ffe5d9]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          <div>
            <span className="bg-[#FFD6C7] text-[#D2691E] px-4 py-1 rounded-full text-sm font-medium">
              About Me
            </span>

            <h2 className="text-4xl font-bold mt-5 mb-6 leading-tight text-[#5c2c10]">
              Evidence-Based Nutrition That Fits Real Life
            </h2>

            <div className="space-y-5 text-[#7a4b2f] leading-8 text-lg">
              <p>
                I’m a nutrition professional and certified diabetic educator helping people build realistic eating habits without extreme diets.
              </p>

              <p>
                My approach combines clinical nutrition, metabolism understanding, and Indian lifestyle practicality to create plans that actually work long-term.
              </p>

              <p>
                I work with weight management, PCOD, diabetes, and thyroid-related concerns through sustainable nutrition guidance.
              </p>
            </div>

            <a
              href="https://linkedin.com/in/nishath-fathima-pasha-a91467199"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 bg-[#FF8C61] hover:bg-[#ff7644] text-white px-7 py-3 rounded-full transition hover:scale-105"
            >
              View Professional Background
            </a>
          </div>

          <div className="bg-[#fff1ea] rounded-[40px] p-10 shadow-xl border border-[#ffd4c2]">
            <div className="space-y-8">

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[#5c2c10]">
                  ✔ Personalized Guidance
                </h3>
                <p className="text-[#7a4b2f]">
                  Nutrition strategies designed around your lifestyle, schedule, and health needs.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[#5c2c10]">
                  ✔ Sustainable Weight Loss
                </h3>
                <p className="text-[#7a4b2f]">
                  No crash diets, detoxes, or unrealistic restrictions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-2 text-[#5c2c10]">
                  ✔ Indian Home Food Focus
                </h3>
                <p className="text-[#7a4b2f]">
                  Simple foods you already eat — balanced properly for results.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CONSULTATION */}
      <section className="py-24 bg-[#D2691E] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Book Your 1:1 Nutrition Consultation
          </h2>

          <p className="text-[#ffe5d9] text-lg mb-10">
            Understand what your body actually needs with a personalized consultation session.
          </p>

          <div className="bg-[#c45f1b] rounded-3xl p-10 text-left space-y-5 shadow-2xl">

            <div className="flex gap-4 items-start">
              <span className="text-[#ffe5d9] text-2xl">✔</span>
              <p>Detailed lifestyle & food analysis</p>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-[#ffe5d9] text-2xl">✔</span>
              <p>Metabolic & symptom discussion</p>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-[#ffe5d9] text-2xl">✔</span>
              <p>Clear next-step guidance</p>
            </div>

            <div className="pt-4 text-lg">
              <strong>Duration:</strong> 30 Minutes (WhatsApp / Call)
            </div>

          </div>

          <a
            href="https://wa.me/919042215853?text=Hi%20I%20want%20to%20book%20a%201:1%20nutrition%20consultation"
            className="inline-block mt-10 bg-[#fff7f2] text-[#D2691E] hover:bg-[#ffe5d9] transition px-10 py-4 rounded-full text-lg font-semibold hover:scale-105"
          >
            Book Consultation
          </a>

        </div>
      </section>

      {/* FREE GUIDE */}
      <section className="py-24 bg-[#fff7f2] text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-5xl font-bold mb-6 text-[#5c2c10]">
            Start Your 7-Day Healthy Journey
          </h2>

          <p className="text-[#7a4b2f] text-lg leading-8 mb-10">
            Get a realistic Indian meal guide made for busy lifestyles.
            No starvation • No fancy ingredients • Easy home food
          </p>

          <a
            href="https://wa.me/919042215853?text=Hi%20I%20want%20the%20free%207-day%20meal%20guide"
            className="inline-block bg-[#FF8C61] hover:bg-[#ff7644] text-white px-10 py-4 rounded-full transition hover:scale-105"
          >
            Get Free Guide on WhatsApp
          </a>

        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-4 rounded-full shadow-2xl z-50 font-semibold transition hover:scale-110"
        href="https://wa.me/919042215853"
      >
        WhatsApp
      </a>
    </>
  );
}

export default App;