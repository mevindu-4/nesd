import React from 'react';
import Section from './ui/Section';
import styles from './Blog.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export default function Blog() {
    return (
        <Section id="blog" className={styles.blogSection}>
            <div className={styles.header}>
                <h2 className={styles.title}>Neski Updates</h2>
                <p className={styles.subtitle}>
                    Insights, news, and key milestones on our journey to transform property management.
                </p>
            </div>

            <div className={styles.grid}>
                {blogPosts.map((post) => (
                    <div key={post.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image 
                                src={post.image} 
                                alt={post.title} 
                                layout="fill" 
                                className={styles.postImage}
                                unoptimized
                            />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.meta}>
                                <span className={styles.category}>{post.category}</span>
                                <span className={styles.date}>{post.date}</span>
                            </div>
                            <h3 className={styles.postTitle}>{post.title}</h3>
                            <p className={styles.excerpt}>{post.excerpt}</p>
                            <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                Read More <span>→</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
