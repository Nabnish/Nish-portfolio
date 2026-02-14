import TiltedCard from "./components/card";


import './App.css'
import logo from './assets/Gemini_Generated_Image_xzxxkixzxxkixzxx-removebg-preview.png';

function App() {

  const WhatsApp = () => {
    window.location.href = 'https://wa.me/919042215853';
  }

  const Info=[
    {
      Title:"Weight-Loss",
      Details:"Sustainable fat loss using realistic Indian meals, habit-based changes, and long-term consistency"
    },
    {
      Title:"PCOD / PCOS",
      Details:"Hormone-supportive nutrition to reduce symptoms, manage cravings, and improve cycle regularity."
    },
    {
      Title:"Diabetes",
      Details:"Blood sugar-friendly Indian meals without extreme food restrictions or fear."
    },
    {
      Title:"Thyroid",
      Details:"Nutrition that supports metabolism, energy levels, and gradual weight balance."
    }
];




  return (
    <>
      <section className="bg-[#ffe5d9] border sm:text-xs lg:text-sm pb-20 ">

        <img src={logo} alt="Realistic Nutrition Logo" className="h-auto max-h-30 mx-auto mt-10 " />
        <h1 className='text-3xl font-bold text-[#D2691E] text-balck mb-6 mt-10 '>Simple Nutrition. Sustainable Results.</h1>
        <p className="text-black mb-10 text-lg " >Personalized diet plans for weight loss, PCOD, diabetes & metabolic health — without crash dieting.</p>
        <button type="button" className="text-white bg-[#FF8C61] p-3 rounded-3xl hover:bg-[#ff7644] pr-6 pl-6 " onClick={WhatsApp}>Start on WhatsApp</button>
      </section>


      <section className="py-16 px-6 bg-[#fff7f2]">
        <h2 className="text-3xl text-[#D2691E] font-bold  ">We Help You With</h2>
        <div className="flex flex-wrap gap-8 justify-center pt-15 ">
          {Info.map((item, index) => (
            <TiltedCard
              key={index}
              title={item.Title}
              details={item.Details}
            />
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>Real Client Results – Weight Loss</h2>

        <div className="carousel">
          <div className="carousel-track">
            <div className="testimonial-card">
              <img src="testimonial1.jpg" alt="Testimonial 1" />
            </div>
            <div className="testimonial-card">
              <img src="testimonial2.jpg" alt="Testimonial 2" />
            </div>
            <div className="testimonial-card">
              <img src="testimonial3.jpg" alt="Testimonial 3" />
            </div>
          </div>

          <div className="carousel-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>


      <section className="section about">
        <h2>About Me</h2>
        <p>I’m a nutrition professional and certified diabetic educator with a strong foundation in clinical and evidence-based nutrition, working closely with real-life Indian lifestyles. My approach focuses on understanding metabolism, routine, medical history, and food habits — not quick fixes or generic diet charts.</p>
        <p>I work with individuals dealing with weight struggles, PCOD, diabetes, and thyroid concerns, helping them build sustainable eating patterns that actually fit their daily life. The goal is long-term health, consistency, and clarity — without fear of food or extreme restriction.</p>
        <p>Learn more about my professional background on <a href="https://www.instagram.com/reel/DSc2SDtjSb1/?igsh=MTZqYWZrdzloOXZubw==" target="_blank">LinkedIn</a></p>
      </section>


      <section className="book-consultation">
        <h2>Book Your 1:1 Nutrition Consultation</h2>
        <p>Not sure where to start? Schedule a personalized session to understand what your body actually needs.</p>
        <p>
          ✔ Detailed lifestyle & food analysis<br />
          ✔ Metabolic & symptom discussion<br />
          ✔ Clear next-step guidance<br />
          <strong>Duration:</strong>
          30 minutes (WhatsApp / Call)
        </p>
        <a href="https://wa.me/919042215853?text=Hi%20I%20want%20to%20book%20a%201:1%20nutrition%20consultation" className="cta">Book Consultation</a>
      </section>


      <section className="section contact">
        <h2>Start Your 7-Day Healthy Journey</h2>
        <p>Start with my <strong>7-Day Realistic Indian Meal Guide</strong> designed for busy lifestyles. No starvation • No fancy ingredients • Easy home food</p>
        <a href="https://wa.me/919042215853?text=Hi%20I%20want%20the%20free%207-day%20meal%20guide" className="cta">Get Free Guide on WhatsApp</a>
      </section>


      <a className="whatsapp" href="https://wa.me/919042215853">WhatsApp</a>


    </>
  )
}

export default App;
