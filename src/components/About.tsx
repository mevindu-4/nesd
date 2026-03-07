import styles from './About.module.css';

const About = () => {
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

                <div className={styles.section}>
                    <h3 className={styles.subtitle}>Our Journey from Concept to Top 50</h3>
                    <p className={styles.content} style={{ marginBottom: '3rem' }}>
                        Neski is more than just an app; it is a vetted business model backed by Sri Lanka's foremost startup funding platform. Our selection for the <a href="https://ventureengine.lk" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>Venture Engine</a> 2025 Top 50 validates our mission to modernize property management.
                    </p>
                    <div className={styles.grid}>
                        <div className={styles.gridItem}>
                            <h4 className={styles.itemTitle}>Vetted Innovation</h4>
                            <p className={styles.itemText}>Reaching the Top 50 signifies that our platform has undergone a rigorous filtering process by industry leaders.</p>
                        </div>
                        <div className={styles.gridItem}>
                            <h4 className={styles.itemTitle}>Strategic Growth</h4>
                            <p className={styles.itemText}>Through high-level workshops in branding and financial planning, we have bridged the gap between a technical idea and a fundable business.</p>
                        </div>
                        <div className={styles.gridItem}>
                            <h4 className={styles.itemTitle}>Industry Recognition</h4>
                            <p className={styles.itemText}>Pitching to the <a href="https://lankanangelnetwork.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>Lankan Angel Network (LAN)</a> has allowed us to align our vision with global best practices and local needs.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.subtitle}>The Team</h3>
                    <div className={styles.grid}>
                        <div className={styles.gridItem}>
                            <h4 className={styles.itemTitle}>Mithila Dhanundara</h4>
                            <p className={styles.itemRole}>Growth & Strategy Lead</p>
                            <p className={styles.itemText}>Electronics and Computer Science Undergraduate.</p>
                        </div>
                        <div className={styles.gridItem}>
                            <h4 className={styles.itemTitle}>Mevindu Basnayake</h4>
                            <p className={styles.itemRole}>Technical & Security Lead</p>
                            <p className={styles.itemText}>Electronics and Computer Science Undergraduate.</p>
                        </div>
                        <div className={styles.gridItem}>
                            <h4 className={styles.itemTitle}>Charith Fonseka</h4>
                            <p className={styles.itemRole}>Operations & Systems Architect</p>
                            <p className={styles.itemText}>Management and Information Technology Undergraduate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
