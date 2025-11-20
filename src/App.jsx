import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CoursePreview from './components/CoursePreview'
import Testimonials from './components/Testimonials'
import Teams from './components/Teams'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CoursePreview />
        <Testimonials />
        <Teams />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
