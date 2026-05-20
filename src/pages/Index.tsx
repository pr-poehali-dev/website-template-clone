import { Navbar, Hero, About } from '@/components/barbershop/NavbarHeroAbout';
import { Services, Portfolio, Masters } from '@/components/barbershop/ServicesPortfolioMasters';
import { Booking, Contacts, Footer } from '@/components/barbershop/BookingContactsFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Masters />
      <Booking />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
