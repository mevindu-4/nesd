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
                        <Image src="https://ik.imagekit.io/qetpsnccs/Neski%20web/L2.png" alt="Neski Logo" width={100} height={40} style={{ objectFit: 'contain' }} />
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
                    <Button variant="primary" size="md">Get 14 Days Free Trial</Button>
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
                        <Button variant="primary" fullWidth onClick={() => setIsOpen(false)}>Get 14 Days Free Trial</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
