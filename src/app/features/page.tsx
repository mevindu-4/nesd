import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import styles from "../page.module.css"; // Ensure styles can be used for the main layout layout

export default function FeaturesPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div style={{ paddingTop: '100px', width: '100%' }}>
                <Features />
            </div>
            <Footer />
        </main>
    );
}
