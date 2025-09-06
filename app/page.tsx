import dynamic from 'next/dynamic'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import WhyChooseUs from '../components/WhyChooseUs'
import TechnologyStack from '../components/TechnologyStack'
import About from '../components/About'
import Footer from '../components/Footer'
import WhatsAppChat from '../components/WhatsAppChat'

// Lazy load heavy components
const ContactForm = dynamic(() => import('../components/ContactForm'), {
  loading: () => <div className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"><div className="container-custom"><div className="text-center text-white">Loading...</div></div></div>
})
const EmailSubscription = dynamic(() => import('../components/EmailSubscription'), {
  loading: () => <div className="py-8 bg-gray-900"><div className="container-custom"><div className="text-center text-white">Loading...</div></div></div>
})
const LetsConnect = dynamic(() => import('../components/LetsConnect'), {
  loading: () => <div className="py-8 bg-gray-900"><div className="container-custom"><div className="text-center text-white">Loading...</div></div></div>
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <WhyChooseUs />
      <TechnologyStack />
      {/* <BrandsSlider /> */}
      <About />
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      <ContactForm />
      <EmailSubscription />
      <LetsConnect />
      <Footer />
      <WhatsAppChat />
    </main>
  )
} 