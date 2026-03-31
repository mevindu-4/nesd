"use client";

import React, { useEffect, useRef, useState } from 'react';
import Section from './ui/Section';
import styles from './Analytics.module.css';

interface CountUpProps {
    end: number;
    durationValue?: number;
    start: boolean;
    prefix?: string;
    suffix?: string;
}

const CountUp = ({ end, durationValue = 1500, start, prefix = '', suffix = '' }: CountUpProps) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / durationValue, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, durationValue, start]);

    return <span>{prefix}{count}{suffix}</span>;
}

export default function Analytics() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <Section
            id="analytics"
            className={`${styles.analyticsSection} ${isRevealed ? styles.revealed : ''}`}
            ref={sectionRef}
        >
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>Data-Driven Decisions made Simple.</h2>
                    <p className={styles.description}>
                        Track your financial health and occupancy rates in real-time.
                        Neski providing actionable insights to maximize your rental yield.
                    </p>

                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>
                                <CountUp end={98} start={isRevealed} suffix="%" />
                            </span>
                            <span className={styles.statLabel}>Occupancy Rate</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>
                                <CountUp end={24} start={isRevealed} prefix="+" suffix="%" />
                            </span>
                            <span className={styles.statLabel}>Revenue Growth</span>
                        </div>
                    </div>
                </div>

                <div className={styles.dashboardPreview}>
                    {/* Main Chart Card */}
                    <div className={styles.chartCard}>
                        <div className={styles.cardHeader}>
                            <span>Occupancy Trends</span>
                            <span className={styles.badge}>This Month</span>
                        </div>
                        <div className={styles.chartArea}>
                            {/* CSS Bar Chart */}
                            <div className={styles.barGroup}>
                                <div className={styles.bar} style={{ '--final-height': '40%' } as React.CSSProperties}></div>
                                <div className={styles.bar} style={{ '--final-height': '60%' } as React.CSSProperties}></div>
                                <div className={styles.bar} style={{ '--final-height': '50%' } as React.CSSProperties}></div>
                                <div className={styles.bar} style={{ '--final-height': '75%' } as React.CSSProperties}></div>
                                <div className={styles.barActive} style={{ '--final-height': '90%' } as React.CSSProperties}></div>
                                <div className={styles.bar} style={{ '--final-height': '65%' } as React.CSSProperties}></div>
                                <div className={styles.bar} style={{ '--final-height': '55%' } as React.CSSProperties}></div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Stats Card (Floating) */}
                    <div className={styles.pieCard}>
                        <div className={styles.cardHeader}>
                            <span>Revenue Source</span>
                        </div>
                        <div className={styles.donutChart}>
                            <div className={styles.donutSegment}></div>
                            <div className={styles.donutHole}>
                                <CountUp end={72} start={isRevealed} suffix="%" />
                            </div>
                        </div>
                        <div className={styles.legend}>
                            <div className={styles.legendItem}><span className={styles.dot1}></span>Rent</div>
                            <div className={styles.legendItem}><span className={styles.dot2}></span>Services</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
