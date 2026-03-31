"use client";

import React, { useState, useEffect } from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
    const fullText = "We’ve Got the Keys.";
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setDisplayedText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <Section className={styles.heroSection}>
            <div className={styles.heroCard}>
                <div className={styles.content}>
                    <h1 className={styles.headline}>
                        Keep Calm.<br />
                        <span className={styles.highlight}>
                            {displayedText}
                            <span className={styles.cursor}>|</span>
                        </span>
                    </h1>
                    
                    <div className={styles.heroCta}>
                        <Button variant="primary" size="lg">Get Started</Button>
                    </div>

                    <p className={styles.subheadline}>
                        Automating rental management for hostels and full properties.
                        Experience the future of property management with Neski.
                    </p>
                </div>

                <div className={styles.visuals}>
                    {/* Floating Widget 1: Occupancy */}
                    <div className={`${styles.widget} ${styles.widgetLeft}`}>
                        <span className={styles.widgetLabel}>Occupancy</span>
                        <span className={styles.widgetValue}>98%</span>
                        <div className={styles.miniChart}></div>
                    </div>

                    {/* Floating Widget 2: Revenue */}
                    <div className={`${styles.widget} ${styles.widgetRight}`}>
                        <span className={styles.widgetLabel}>Revenue</span>
                        <span className={styles.widgetValue}>+24%</span>
                        <span className={styles.widgetTag}>This Month</span>
                    </div>

                    {/* Central Mobile Mockup (Focus on mobile-first for modern reference vibe) */}
                    <div className={styles.mobile}>
                        <div className={styles.notch}></div>
                        <div className={styles.mobileScreen}>
                            <div className={styles.mobileHeader}></div>
                            <div className={styles.mobileCard}></div>
                            <div className={styles.mobileCard}></div>
                            <div className={styles.floatingBtn}></div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
