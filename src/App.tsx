

import './App.css'

function App() {
  

  return (
    <>
      <section className="hero">

        <img src="realistic-nutrition-logo.png" alt="Realistic Nutrition Logo"/>
          <h1>Simple Nutrition. Sustainable Results.</h1>
          <p>Personalized diet plans for weight loss, PCOD, diabetes & metabolic health — without crash dieting.</p>
          <a href="https://wa.me/919042215853" className="cta">Start on WhatsApp</a>
      </section>


      <section className="section">
        <h2>We Help You With</h2>
        <div className="cards">
          <div className="card">
            <img src="weight-loss-icon.png" alt="Weight Loss"/>
              <strong>Weight Loss</strong>
              <p>Sustainable fat loss using realistic Indian meals, habit-based changes, and long-term consistency.</p>
          </div>
          <div className="card">
            <img src="pcod-icon.png" alt="PCOD/PCOS"/>
              <strong>PCOD / PCOS</strong>
              <p>Hormone-supportive nutrition to reduce symptoms, manage cravings, and improve cycle regularity.</p>
          </div>
          <div className="card">
            <img src="diabetes-icon.png" alt="Diabetes"/>
              <strong>Diabetes</strong>
              <p>Blood sugar-friendly Indian meals without extreme food restrictions or fear.</p>
          </div>
          <div className="card">
            <img src="thyroid-icon.png" alt="Thyroid"/>
              <strong>Thyroid</strong>
              <p>Nutrition that supports metabolism, energy levels, and gradual weight balance.</p>
          </div>
        </div>
      </section>


      <section className="testimonials">
        <h2>Real Client Results – Weight Loss</h2>

        <div className="carousel">
          <div className="carousel-track">
            <div className="testimonial-card">
              <img src="testimonial1.jpg" alt="Testimonial 1"/>
            </div>
            <div className="testimonial-card">
              <img src="testimonial2.jpg" alt="Testimonial 2"/>
            </div>
            <div className="testimonial-card">
              <img src="testimonial3.jpg" alt="Testimonial 3"/>
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
