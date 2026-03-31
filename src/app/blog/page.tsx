import Navbar from "@/components/Navbar";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import styles from "../page.module.css";

export default function BlogPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div style={{ paddingTop: '80px', width: '100%', minHeight: '80vh' }}>
                <Blog />
            </div>
            <Footer />
        </main>
    );
}
