import Header from "../components/Header";
import ProgramSection from "../components/ProgramSection";
import GallerySection from "../components/GallerySection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import LeadersSection from "../components/LeadersSection";
import CTASection from "../components/CTASection";   // ⬅️ baru
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero */}
      <section className="pt-32 md:pt-40 flex flex-col items-center text-center px-6">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-40 w-auto md:h-56 mb-6 object-contain"
        />
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Karang Taruna Unit 03
        </h1>
        <p className="max-w-2xl text-gray-300 text-sm md:text-base mb-6">
          Ruang kreasi, aksi, dan solidaritas pemuda. Bergabunglah untuk
          berkontribusi bagi lingkungan dan pengembangan pemuda lokal.
        </p>
        <div className="flex gap-4">
          <a
            href="#gabung"
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg"
          >
            Gabung dengan kami
          </a>
          <a
            href="#program"
            className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800"
          >
            Program
          </a>
        </div>
      </section>
      <ProgramSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      <LeadersSection />
      <CTASection /> 
      <Footer />
    </>
  );
}
