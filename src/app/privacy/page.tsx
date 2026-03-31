import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalContent from "@/components/LegalContent";
import styles from "../page.module.css";

const privacySections = [
    {
        title: "Introduction",
        content: "At Neski, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our rental management platform. Please read this privacy policy carefully."
    },
    {
        title: "Information We Collect",
        content: [
            "Personal Data: Name, email address, phone number, and mailing address provided during registration.",
            "Property Data: Information about properties, units, and rental agreements managed through our platform.",
            "Usage Data: Information on how you interact with our service, including log files and device information.",
            "Payment Data: Billing information and transaction history related to your Neski subscription."
        ]
    },
    {
        title: "How We Use Your Information",
        content: [
            "To provide, maintain, and improve our services.",
            "To communicate with you about updates, features, and support.",
            "To process and manage your subscription and payments.",
            "To ensure the security and integrity of our platform.",
            "To comply with legal obligations."
        ]
    },
    {
        title: "Sharing Your Information",
        content: "We do not sell your personal information. We may share information with third-party service providers (such as hosting and payment processors) who perform services on our behalf, or when required by law to protect our rights or the safety of others."
    },
    {
        title: "Data Security",
        content: "We implement robust security measures to protect your data. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
    },
    {
        title: "Your Rights",
        content: "Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete your information. Contact us for any requests related to your data."
    },
    {
        title: "Contact Us",
        content: "If you have any questions or concerns about this Privacy Policy, please reach out to us at support@neski.oceaniq.tech."
    }
];

export default function PrivacyPage() {
    return (
        <main className={styles.main}>
            <Navbar />
            <div style={{ paddingTop: '80px', width: '100%' }}>
                <LegalContent 
                    title="Privacy Policy"
                    lastUpdated="March 31, 2026"
                    sections={privacySections}
                />
            </div>
            <Footer />
        </main>
    );
}
