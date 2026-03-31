import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <Section id="contact" className={styles.contactSection} background="white">
            <div className={styles.header}>
                <h1 className={styles.title}>Let’s Connect.</h1>
                <p className={styles.subtitle}>
                    Have questions about Neski? Our team is here to help you transform your property management experience.
                </p>
            </div>

            <div className={styles.grid}>
                {/* Contact Form */}
                <div className={styles.formWrapper}>
                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="name">Full Name</label>
                            <input type="text" id="name" className={styles.input} placeholder="John Doe" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="email">Email Address</label>
                            <input type="email" id="email" className={styles.input} placeholder="john@example.com" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="message">How can we help?</label>
                            <textarea id="message" className={styles.textarea} placeholder="Tell us about your property..." required></textarea>
                        </div>
                        <Button variant="primary" size="lg" fullWidth type="submit">
                            Send Message
                        </Button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className={styles.infoWrapper}>
                    <div className={styles.infoItem}>
                        <div className={styles.icon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        </div>
                        <div className={styles.infoText}>
                            <h4>Email Us</h4>
                            <p>info@neski.lk</p>
                            <p>support@neski.lk</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.icon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        </div>
                        <div className={styles.infoText}>
                            <h4>Call Us</h4>
                            <p>+94 70 376 6861</p>
                            <p>+94 76 894 0393</p>
                            <p>+94 78 256 7430</p>
                            <p>Mon - Fri, 9am - 6pm</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.icon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <div className={styles.infoText}>
                            <h4>Visit Us</h4>
                            <p>53/1/A</p>
                            <p>Jagath Ranaviru Mawatha,</p>
                            <p>Wattala.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
