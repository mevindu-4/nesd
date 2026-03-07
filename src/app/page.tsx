import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Mission />
      <Features />
      <Pricing />
      <Analytics />
      <Footer />
    </main>
  );
}
