import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import WhyChooseUs from '../components/WhyChooseUs'
import TechnologyStack from '../components/TechnologyStack'
import BrandsSlider from '../components/BrandsSlider'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import EmailSubscription from '../components/EmailSubscription'
import Footer from '../components/Footer'
import LetsConnect from '../components/LetsConnect'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <WhyChooseUs />
      <TechnologyStack />
      <BrandsSlider />
      <About />
      <Portfolio />
      <Testimonials />
      <ContactForm />
      <EmailSubscription />
      <LetsConnect />
      <Footer />
    </main>
  )
} 