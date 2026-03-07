import React from 'react';
import Section from './ui/Section';
import styles from './Mission.module.css';

export default function Mission() {
    return (
        <Section id="mission" className={styles.missionSection} background="default">
            <div className={styles.contentWrapper}>
                <h3 className={styles.subtitle}>Our Mission</h3>
                <p className={styles.content}>
                    To empower Sri Lankan landlords and property managers with world-class automation, transforming manual, error-prone tasks into seamless digital workflows.
                </p>
            </div>
        </Section>
    );
}
