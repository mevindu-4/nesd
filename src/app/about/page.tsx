import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import styles from "../page.module.css";

export default function AboutPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            {/* The About component already has internal padding to accommodate the hero overlap, so less padding here */}
            <div style={{ paddingTop: '0px', width: '100%' }}>
                <About />
            </div>
            <Footer />
        </main>
    );
}
