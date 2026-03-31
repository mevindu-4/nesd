"use client";

import { useEffect, useRef } from 'react';
import styles from './About.module.css';

const About = () => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.revealed);
                }
            });
        }, observerOptions);

        if (timelineRef.current) {
            observer.observe(timelineRef.current);
        }

        itemRefs.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.title}>Redefining Rental Management in Sri Lanka</h2>

                <div className={styles.section}>
                    <h3 className={styles.subtitle}>Our Mission</h3>
                    <p className={styles.content}>
                        To empower Sri Lankan landlords and property managers with world-class automation, transforming manual, error-prone tasks into seamless digital workflows.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.subtitle}>The Problem We Solve</h3>
                    <p className={styles.content}>
                        In university hubs and urban centers like Colombo, managing boarding houses and apartments has traditionally been a manual struggle. Property owners face daily hurdles in tracking payments, managing furniture inventory, and organizing tenant records. As students, we validated these challenges through direct research in local university towns and set out to build a solution that actually fits the local context.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.subtitle}>What We Offer</h3>
                    <div className={styles.grid}>
                        <div className={styles.gridItem}>
                            <h4 className={styles.itemTitle}>Hostel-Type Management</h4>
                            <p className={styles.itemText}>Specialized tools for room assignments, automated SMS notifications for due dates, and detailed furniture inventory.</p>
                        </div>
                        <div className={styles.gridItem}>
                            <h4 className={styles.itemTitle}>Full-Property Rentals</h4>
                            <p className={styles.itemText}>Streamlined systems for apartments and houses, including subscription-based multi-unit management.</p>
                        </div>
                        <div className={styles.gridItem}>
                            <h4 className={styles.itemTitle}>Data-Driven Insights</h4>
                            <p className={styles.itemText}>Analytics that provide clear financial and occupancy overviews to help owners grow their business.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.section} style={{ borderBottom: 'none' }}>
                    <h3 className={styles.subtitle}>Our Journey</h3>
                    
                    <div ref={timelineRef} className={styles.timeline}>
                        {/* 1. Business Spark 2026 */}
                        <div 
                            ref={(el) => { itemRefs.current[0] = el; }} 
                            className={`${styles.timelineItem} ${styles.left}`}
                        >
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <div className={styles.itemYear}>March – April 2026</div>
                                <h4 className={styles.itemHeading}>Business Spark 2026</h4>
                                <p><b>Overview:</b> A premier startup competition organized by the Rotaract Club of the Faculty of Management and Finance, University of Colombo.</p>
                                <p><b>The Achievement:</b> Neski was selected for the Top 8 in March 2026, advancing to Round 2 for a detailed business plan submission and a high-stakes 1-on-1 discussion scheduled for April 4, 2026.</p>
                                <p><b>Significance:</b> Being vetted and mentored by MiddleWay Ventures focuses heavily on our operational scalability and the long-term economic viability of our model.</p>
                            </div>
                        </div>

                        {/* 2. KDU Startup Today '26 */}
                        <div 
                            ref={(el) => { itemRefs.current[1] = el; }} 
                            className={`${styles.timelineItem} ${styles.right}`}
                        >
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <div className={styles.itemYear}>January 2026</div>
                                <h4 className={styles.itemHeading}>KDU Startup Today '26</h4>
                                <p><b>Overview:</b> An annual entrepreneurship competition hosted by the General Sir John Kotelawala Defence University (KDU).</p>
                                <p><b>The Achievement:</b> Neski secured the 1st Runner-Up position in January 2026 after a competitive pitch session against innovative student-led startups from across the island.</p>
                                <p><b>Significance:</b> This win provided early-stage validation for our mission to digitize the rental market and proved that our business case resonates with academic and industry judges.</p>
                            </div>
                        </div>

                        {/* 3. Venture Engine 2025 */}
                        <div 
                            ref={(el) => { itemRefs.current[2] = el; }} 
                            className={`${styles.timelineItem} ${styles.left}`}
                        >
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <div className={styles.itemYear}>2025</div>
                                <h4 className={styles.itemHeading}>Venture Engine 2025</h4>
                                <p><b>Overview:</b> Recognized as Sri Lanka’s foremost startup funding platform, founded by the Lankan Angel Network (LAN).</p>
                                <p><b>The Achievement:</b> Neski was named a Top 50 Finalist during the 2025 competition cycle, selected from a massive pool of national applicants.</p>
                                <p><b>Significance:</b> Reaching the Top 50 is a "stamp of approval" from industry leaders, signifying that Neski has undergone a rigorous filtering process and aligns with global best practices for fundable businesses.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.subtitle}>The Team</h3>
                    <div className={styles.grid}>
                        <div className={styles.gridItem}>
                            <h4 className={styles.itemTitle}>Mithila Dhanundara</h4>
                            <p className={styles.itemRole}>Growth & Strategy Lead</p>
                        </div>
                        <div className={styles.gridItem}>
                            <h4 className={styles.itemTitle}>Mevindu Basnayake</h4>
                            <p className={styles.itemRole}>Technical & Security Lead</p>
                        </div>
                        <div className={styles.gridItem}>
                            <h4 className={styles.itemTitle}>Charith Fonseka</h4>
                            <p className={styles.itemRole}>Operations & Systems Architect</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
