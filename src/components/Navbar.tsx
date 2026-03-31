"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/Button';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src="https://ik.imagekit.io/qetpsnccs/Neski/Untitled%20design-11.png" alt="Neski Logo" width={150} height={40} style={{ objectFit: 'contain' }} />
                    </Link>
                </div>

                {/* Desktop Menu - Centered Links */}
                <div className={styles.navLinks}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/features" className={styles.link}>Features</Link>
                    <Link href="/pricing" className={styles.link}>Pricing</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                </div>

                {/* CTA Button - Right Aligned */}
                <div className={styles.navActions}>
                    <a href="https://forms.gle/3zGogPRswFTmXrNo8" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>
                        <Button variant="outline" size="md">Fill and Win</Button>
                    </a>
                    <Button variant="primary" size="md">Get 45 Days Free Trial</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.hamburger}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                    <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
                </button>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${isOpen ? styles.show : ''}`}>
                    <Link href="/" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/features" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Features</Link>
                    <Link href="/pricing" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Pricing</Link>
                    <Link href="/about" className={styles.mobileLink} onClick={() => setIsOpen(false)}>About</Link>
                    <div className={styles.mobileBtn}>
                        <a href="https://forms.gle/3zGogPRswFTmXrNo8" target="_blank" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '1rem' }}>
                            <Button variant="outline" fullWidth onClick={() => setIsOpen(false)}>Fill and Win</Button>
                        </a>
                        <Button variant="primary" fullWidth onClick={() => setIsOpen(false)}>Get 45 Days Free Trial</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
