import { motion, type Variants } from "framer-motion";
import "./App.css";

// ──────────────────────────────────────────────
// Motion variants
// Note: ease arrays use `as const` so TS infers the exact tuple type
// Framer Motion expects, instead of widening to number[].
// ──────────────────────────────────────────────
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const heroWord: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

function App() {
  const WhatsApp = () => {
    window.location.href = "https://wa.me/919042215853";
  };

  const services = [
    {
      Title: "Weight Management",
      Details:
        "No crash diets. No guilt. Just real Indian food, the right portions, and a plan that actually fits your life. So the weight stays off for good.",
    },
    {
      Title: "PCOD/PCOS",
      Details:
        "Your hormones are not your enemy. We work with your body, balancing insulin, reducing inflammation, and easing symptoms through food that feels familiar.",
    },
    {
      Title: "Diabetes",
      Details:
        "Living with diabetes doesn't mean giving up your favourite foods. We help you eat smarter, keeping blood sugar steady and your plate full of flavours.",
    },
    {
      Title: "Thyroid",
      Details:
        "A thyroid-supportive meal plan can change everything. Addressing the nutritional gaps that medication alone cannot fix for lasting results.",
    },
    {
      Title: "Fatty Liver",
      Details:
        "Fatty liver is reversible. We build a plan that reduces liver fat, improves your reports, and gets you back to feeling like yourself.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Patel",
      role: "Working Professional",
      text: "Lost 12kg without giving up Indian food. The meals are realistic and fit my busy schedule perfectly.",
    },
    {
      name: "Priya Sharma",
      role: "Entrepreneur",
      text: "Finally found someone who understands Indian nutrition. My blood sugar levels are stable now.",
    },
    {
      name: "Anjali Mehta",
      role: "Homemaker",
      text: "The personalized approach is game-changing. I feel confident about my health again.",
    },
  ];

  const marqueeItems = [
    "WEIGHT MANAGEMENT",
    "PCOD / PCOS",
    "DIABETES",
    "THYROID",
    "FATTY LIVER",
  ];

  return (
    <>
      {/* NAVIGATION */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tight text-white">
            Nishath<span className="text-[#D9A05B]">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
            {["Home", "Services", "About Me", "Testimonials", "Contact"].map(
              (label, i) => (
                <a
                  key={i}
                  href={`#${label.toLowerCase().replace(/\s/g, "")}`}
                  className="relative group text-white/70 hover:text-white transition"
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#D9A05B] transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={WhatsApp}
            className="hidden md:block bg-[#D9A05B] text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#e8b06e] transition"
          >
            Get Started
          </motion.button>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="bg-[#0A0A0A] pt-40 pb-16 px-6 overflow-hidden relative"
      >
        {/* ambient glow, signature element */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#D9A05B]/10 blur-[120px]" />

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#D9A05B] text-sm font-semibold tracking-[0.2em] uppercase mb-6"
            >
              Certified Diabetic Educator
            </motion.p>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] text-white mb-8 tracking-tight">
              <motion.span variants={heroWord} className="block">
                Sustainable
              </motion.span>
              <motion.span variants={heroWord} className="block">
                Nutrition,
              </motion.span>
              <motion.span variants={heroWord} className="block text-[#D9A05B]">
                Real Results.
              </motion.span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white/60 leading-relaxed mb-10 max-w-md"
            >
              Personalized diet plans designed for Indian lifestyles. No crash
              diets, no guilt—just evidence-based nutrition that actually
              works.
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={WhatsApp}
                className="bg-[#D9A05B] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#e8b06e] transition"
              >
                Book Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: "#ffffff", color: "#000" }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold transition"
              >
                Learn More
              </motion.button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-14 flex flex-wrap gap-x-10 gap-y-3">
              {["1000+ Clients Transformed", "Evidence-Based Approach", "Indian Food Focused"].map(
                (item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                    <span className="text-[#D9A05B]">✓</span>
                    <span>{item}</span>
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* MARQUEE RIBBON — signature element, echoes reference site's scrolling strip */}
        <div className="mt-24 border-y border-white/10 py-4 overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap text-white/30 text-sm font-semibold tracking-[0.15em] uppercase"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
              (item, i) => (
                <span key={i} className="flex items-center gap-8">
                  {item}
                  <span className="text-[#D9A05B]">●</span>
                </span>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-[#0A0A0A] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Services I Offer
            </h2>
            <p className="text-xl text-white/50 max-w-2xl">
              Evidence-based nutrition guidance designed for Indian lifestyles
              and real-world sustainability.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6, borderColor: "#D9A05B" }}
                transition={{ duration: 0.3 }}
                className="border border-white/10 rounded-2xl p-8 bg-white/[0.02]"
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.Title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {service.Details}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-[#0F0D0B] py-28 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              What My Clients Say
            </h2>
            <p className="text-xl text-white/50">
              Real transformations from people just like you
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#D9A05B]/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#D9A05B]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#D9A05B] font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-white/40">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="aboutme" className="bg-[#0A0A0A] py-28 px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#D9A05B]/10 blur-[120px]" />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                About Me
              </h2>

              <p className="text-lg text-white/60 leading-relaxed mb-6">
                I'm a nutrition professional and certified diabetic educator
                helping people build realistic eating habits without extreme
                diets.
              </p>

              <p className="text-lg text-white/60 leading-relaxed mb-6">
                My approach combines clinical nutrition expertise, metabolism
                understanding, and Indian lifestyle practicality to create
                plans that actually work long-term.
              </p>

              <p className="text-lg text-white/60 leading-relaxed mb-8">
                I specialize in weight management, PCOD, diabetes, and
                thyroid-related concerns through sustainable nutrition
                guidance and personalized meal planning.
              </p>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="https://linkedin.com/in/nishath-fathima-pasha-a91467199"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#D9A05B] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#e8b06e] transition"
              >
                View Professional Background →
              </motion.a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="bg-white/[0.03] rounded-3xl p-8 border border-white/10"
            >
              <div className="space-y-8">
                {[
                  {
                    title: "Personalized Guidance",
                    text: "Nutrition strategies designed around your lifestyle, schedule, and unique health needs.",
                  },
                  {
                    title: "Sustainable Weight Loss",
                    text: "No crash diets or unrealistic restrictions—just practical, evidence-based nutrition.",
                  },
                  {
                    title: "Indian Food Focused",
                    text: "Simple foods you already eat—balanced properly for the results you want.",
                  },
                  {
                    title: "Long-Term Results",
                    text: "Building habits that stick, not quick fixes that fade away.",
                  },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      <span className="text-[#D9A05B]">✓</span> {item.title}
                    </h3>
                    <p className="text-white/50">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="bg-[#0F0D0B] py-28 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl font-black leading-tight mb-8 text-white tracking-tight"
          >
            Ready to Transform
            <br />
            Your Health?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl text-white/50 mb-12 max-w-2xl mx-auto"
          >
            Book a 1:1 consultation to understand what your body actually
            needs. 30 minutes via WhatsApp or call.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="bg-white/[0.03] rounded-3xl p-12 mb-12 border border-white/10"
          >
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "Lifestyle Analysis",
                  text: "Detailed assessment of your eating patterns and daily routines",
                },
                {
                  title: "Personalized Plan",
                  text: "Custom nutrition strategy designed for your specific health goals",
                },
                {
                  title: "Clear Guidance",
                  text: "Actionable next steps to start your transformation immediately",
                },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <h3 className="font-bold text-lg mb-2 text-white">
                    <span className="text-[#D9A05B]">✓</span> {item.title}
                  </h3>
                  <p className="text-white/50">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={WhatsApp}
              className="bg-[#D9A05B] text-black px-10 py-4 rounded-full font-semibold hover:bg-[#e8b06e] transition"
            >
              Book Consultation on WhatsApp
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "#ffffff", color: "#000" }}
              whileTap={{ scale: 0.97 }}
              className="border border-white/30 text-white px-10 py-4 rounded-full font-semibold transition"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] text-white py-14 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-lg mb-4">Navigation</h3>
              <div className="space-y-2">
                <a href="#hero" className="block text-white/40 hover:text-[#D9A05B] transition">Home</a>
                <a href="#services" className="block text-white/40 hover:text-[#D9A05B] transition">Services</a>
                <a href="#aboutme" className="block text-white/40 hover:text-[#D9A05B] transition">About</a>
                <a href="#contact" className="block text-white/40 hover:text-[#D9A05B] transition">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <div className="space-y-2">
                <a href="https://linkedin.com/in/nishath-fathima-pasha-a91467199" target="_blank" rel="noreferrer" className="block text-white/40 hover:text-[#D9A05B] transition">LinkedIn</a>
                <a href="https://wa.me/919042215853" className="block text-white/40 hover:text-[#D9A05B] transition">WhatsApp</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <div className="space-y-2">
                <p className="text-white/40">Nutrition Consulting</p>
                <p className="text-white/40">Meal Planning</p>
                <p className="text-white/40">Lifestyle Coaching</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <p className="text-white/40 mb-2">Email: nishath@nutrition.com</p>
              <p className="text-white/40">WhatsApp: +91 9042215853</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/30">
            <p>&copy; 2025 Nishath Fathima. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
