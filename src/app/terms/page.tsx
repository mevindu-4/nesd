import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalContent from "@/components/LegalContent";
import styles from "../page.module.css";

const termsSections = [
    {
        title: "Acceptance of Terms",
        content: "By using Neski, you agree to these Terms of Service. If you do not agree to these terms, please do not use our services."
    },
    {
        title: "Description of Service",
        content: "Neski is a software-as-a-service (SaaS) platform designed for rental management, including property tracking, rental agreements, and tenant communications."
    },
    {
        title: "User Accounts",
        content: [
            "We may require you to register for an account to use certain features.",
            "You are responsible for maintaining the confidentiality of your account information.",
            "You must notify us immediately of any unauthorized use of your account.",
            "We reserve the right to suspend or terminate accounts that violate these terms."
        ]
    },
    {
        title: "Use of the Service",
        content: [
            "You must use the service only for lawful purposes.",
            "You must not attempt to disrupt or interfere with the service's security or performance.",
            "You must not use the service for unauthorized marketing or spamming.",
            "You must respect the intellectual property of others."
        ]
    },
    {
        title: "Intellectual Property",
        content: "The content, features, and functionality of our platform are the exclusive property of Neski and its licensors. You may not reproduce, distribute, or create derivative works from our content without our express permission."
    },
    {
        title: "Fees and Payment",
        content: "You agree to pay the fees associated with your chosen subscription plan. All fees are non-refundable unless otherwise specified."
    },
    {
        title: "Termination",
        content: "We may terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our platform."
    },
    {
        title: "Governing Law",
        content: "These Terms shall be governed by and construed in accordance with the laws of Sri Lanka, without regard to its conflict of law provisions."
    },
    {
        title: "Contact Information",
        content: "If you have any questions about these Terms, please contact us at support@neski.oceaniq.tech."
    }
];

export default function TermsPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div style={{ paddingTop: '80px', width: '100%' }}>
                <LegalContent 
                    title="Terms of Service"
                    lastUpdated="March 31, 2026"
                    sections={termsSections}
                />
            </div>
            <Footer />
        </main>
    );
}
