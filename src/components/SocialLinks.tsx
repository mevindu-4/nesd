import React from 'react';
import styles from './SocialLinks.module.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTiktok } from 'react-icons/fa6';

type SocialLink = {
    name: string;
    href: string;
    icon: React.ReactNode;
};

const socialLinks: SocialLink[] = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/share/1KtoM9NC8P/?mibextid=wwXIfr',
        icon: <FaFacebookF aria-hidden="true" focusable="false" />,
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/neski.lk?igsh=c25hN2lzcXB5NGV0&utm_source=qr',
        icon: <FaInstagram aria-hidden="true" focusable="false" />,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/neski-lk/',
        icon: <FaLinkedinIn aria-hidden="true" focusable="false" />,
    },
    {
        name: 'WhatsApp',
        href: 'https://wa.me/94703766861',
        icon: <FaWhatsapp aria-hidden="true" focusable="false" />,
    },
    {
        name: 'TikTok',
        href: 'https://www.tiktok.com/@neski.lk',
        icon: <FaTiktok aria-hidden="true" focusable="false" />,
    },
];

type SocialLinksProps = {
    className?: string;
};

export default function SocialLinks({ className }: SocialLinksProps) {
    return (
        <div className={`${styles.socialLinks} ${className ?? ''}`.trim()}>
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={styles.socialLink}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
}
