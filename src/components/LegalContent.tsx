import React from 'react';
import styles from './LegalContent.module.css';

interface LegalSection {
    title: string;
    content: string | string[];
}

interface LegalContentProps {
    title: string;
    lastUpdated: string;
    sections: LegalSection[];
}

const LegalContent = ({ title, lastUpdated, sections }: LegalContentProps) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.lastUpdated}>Last Updated: {lastUpdated}</p>

            {sections.map((section, index) => (
                <div key={index} className={styles.section}>
                    <h2 className={styles.sectionTitle}>{section.title}</h2>
                    {Array.isArray(section.content) ? (
                        <ul className={styles.list}>
                            {section.content.map((item, idx) => (
                                <li key={idx} className={styles.listItem}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className={styles.text}>{section.content}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default LegalContent;
