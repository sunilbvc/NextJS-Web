import Hero from '../components/Hero'
import BrandsSlider from '../components/BrandsSlider'
import Services from '../components/Services'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import EmailSubscription from '../components/EmailSubscription'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BrandsSlider />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <ContactForm />
      <EmailSubscription />
      <Footer />
    </main>
  )
} 