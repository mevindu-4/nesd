import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import styles from "../page.module.css";

export default function PricingPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div style={{ paddingTop: '100px', width: '100%' }}>
                <Pricing />
            </div>
            <Footer />
        </main>
    );
}
