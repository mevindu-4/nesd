import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Contact Us | Neski',
  description: 'Gget in touch with the Neski team for property management solutions.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
