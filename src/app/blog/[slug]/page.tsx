import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug } from '@/lib/blog-data';
import styles from './BlogPost.module.css';
import { notFound } from 'next/navigation';

interface Props {
    params: {
        slug: string;
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: 'var(--nav-height)' }}>
                <article className={styles.article}>
                    <Link href="/blog" className={styles.backLink}>
                        <span>←</span> Back to Updates
                    </Link>

                    <header className={styles.header}>
                        <div className={styles.meta}>
                            <span className={styles.category}>{post.category}</span>
                            <span className={styles.date}>{post.date}</span>
                        </div>
                        <h1 className={styles.title}>{post.title}</h1>
                    </header>

                    <div className={styles.imageWrapper}>
                        <Image 
                            src={post.image} 
                            alt={post.title} 
                            layout="fill" 
                            className={styles.featuredImage}
                            priority
                            unoptimized
                        />
                    </div>

                    <div className={styles.content}>
                        <div className={styles.section}>
                            <h2 className={styles.sectionHeading}>Overview</h2>
                            <p className={styles.sectionText}>{post.content.overview}</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionHeading}>The Achievement</h2>
                            <p className={styles.sectionText}>{post.content.achievement}</p>
                        </div>

                        <div className={styles.section}>
                            <h2 className={styles.sectionHeading}>Significance</h2>
                            <p className={styles.sectionText}>{post.content.significance}</p>
                        </div>
                    </div>

                    {post.gallery && post.gallery.length > 0 && (
                        <div className={styles.gallery}>
                            {post.gallery.map((image, index) => (
                                <div key={index} className={styles.galleryImageWrapper}>
                                    <Image 
                                        src={image} 
                                        alt={`${post.title} gallery ${index + 1}`} 
                                        layout="fill" 
                                        className={styles.galleryImage}
                                        unoptimized
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </article>
            </main>
            <Footer />
        </>
    );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    const { blogPosts } = await import('@/lib/blog-data');
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}
