import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import styles from './Pricing.module.css';

const tiers = [
    {
        name: 'Mini',
        limit: 'Up to 10 Units',
        price: 'LKR 999',
        period: '/mo',
        features: ['Basic Tenant Management', 'Rent Tracking', 'Email Support'],
        cta: 'Start Free Trial',
        variant: 'outline' as const,
    },
    {
        name: 'Plus',
        limit: 'Up to 50 Units',
        price: 'LKR 2,499',
        period: '/mo',
        features: ['Advanced Reporting', 'Automated SMS Alerts', 'Priority Support', 'Bank Integration'],
        cta: 'Start Free Trial',
        variant: 'primary' as const,
        popular: true,
    },
    {
        name: 'Pro',
        limit: 'Unlimited Units',
        price: 'LKR 4,999',
        period: '/mo',
        features: ['Dedicated Account Manager', 'Custom API Access', 'Multi-User Access', 'White-labeling'],
        cta: 'Contact Sales',
        variant: 'outline' as const,
    },
];

export default function Pricing() {
    return (
        <Section id="pricing" className={styles.pricingSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>Simple, Transparent Pricing.</h2>
                <p className={styles.subtitle}>Choose the plan that fits your property portfolio size.</p>
            </div>

            <div className={styles.grid}>
                {tiers.map((tier) => (
                    <div key={tier.name} className={`${styles.card} ${tier.popular ? styles.popular : ''}`}>
                        {tier.popular && <span className={styles.badge}>Most Popular</span>}
                        <h3 className={styles.tierName}>{tier.name}</h3>
                        <div className={styles.tierLimit}>{tier.limit}</div>
                        <div className={styles.priceRow}>
                            <span className={styles.price}>{tier.price}</span>
                            <span className={styles.period}>{tier.period}</span>
                        </div>

                        <ul className={styles.features}>
                            {tier.features.map((feature, idx) => (
                                <li key={idx}>
                                    <span className={styles.check}>✓</span> {feature}
                                </li>
                            ))}
                        </ul>

                        <div className={styles.cta}>
                            <Button variant={tier.variant} fullWidth>{tier.cta}</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
