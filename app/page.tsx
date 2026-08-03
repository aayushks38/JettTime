import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import SearchBar from '@/components/SearchBar'
import PopularDestinations from '@/components/PopularDestinations'
import TravelPackages from '@/components/TravelPackages'
import CustomerReviews from '@/components/CustomerReviews'
import AboutUs from '@/components/AboutUs'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <HeroBanner />
      <SearchBar />
      <PopularDestinations />
      <TravelPackages />
      <CustomerReviews />
      <AboutUs />
      <ContactForm />
      <Footer />
    </main>
  )
}
