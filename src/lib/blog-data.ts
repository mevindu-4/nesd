export interface BlogPostDetail {
    id: number;
    title: string;
    date: string;
    category: string;
    slug: string;
    excerpt: string;
    image: string;
    gallery?: string[];
    content: {
        overview: string;
        achievement: string;
        significance: string;
    }
}

export const blogPosts: BlogPostDetail[] = [
    {
        id: 1,
        title: "Business Spark 2026: Advancing to Round 2",
        date: "March - April 2026",
        category: "Achievement",
        slug: "business-spark-2026-round-2",
        excerpt: "Neski was selected for the Top 8 in the premier startup competition at the University of Colombo, advancing to high-stakes mentorship.",
        image: "https://ik.imagekit.io/qetpsnccs/Neski/WhatsApp%20Image%202026-03-27%20at%2018.23.36.jpeg",
        content: {
            overview: "A premier startup competition organized by the Rotaract Club of the Faculty of Management and Finance, University of Colombo.",
            achievement: "Neski was selected for the Top 8 in March 2026, advancing to Round 2 for a detailed business plan submission and a high-stakes 1-on-1 discussion scheduled for April 4, 2026.",
            significance: "Being vetted and mentored by MiddleWay Ventures focuses heavily on our operational scalability and the long-term economic viability of our model."
        }
    },
    {
        id: 2,
        title: "1st Runner-Up at KDU Startup Today '26",
        date: "January 2026",
        category: "Milestone",
        slug: "kdu-startup-today-26-runner-up",
        excerpt: "A major win providing early-stage validation for our mission to digitize the rental market after a competitive pitch session.",
        image: "https://ik.imagekit.io/qetpsnccs/Neski/WhatsApp%20Image%202026-03-31%20at%2017.46.13.jpeg",
        gallery: [
            "https://ik.imagekit.io/qetpsnccs/Neski/WhatsApp%20Image%202026-03-31%20at%2017.57.26.jpeg",
            "https://ik.imagekit.io/qetpsnccs/Neski/WhatsApp%20Image%202026-03-31%20at%2017.57.24.jpeg",
            "https://ik.imagekit.io/qetpsnccs/Neski/WhatsApp%20Image%202026-03-31%20at%2017.57.22.jpeg",
            "https://ik.imagekit.io/qetpsnccs/Neski/WhatsApp%20Image%202026-03-31%20at%2017.57.18.jpeg",
            "https://ik.imagekit.io/qetpsnccs/Neski/WhatsApp%20Image%202026-03-31%20at%2017.57.16.jpeg",
            "https://ik.imagekit.io/qetpsnccs/Neski/WhatsApp%20Image%202026-03-31%20at%2017.57.14.jpeg",
            "https://ik.imagekit.io/qetpsnccs/Neski/WhatsApp%20Image%202026-03-31%20at%2017.57.09.jpeg",
            "https://ik.imagekit.io/qetpsnccs/Neski/WhatsApp%20Image%202026-03-31%20at%2017.57.11.jpeg"
        ],
        content: {
            overview: "An annual entrepreneurship competition hosted by the General Sir John Kotelawala Defence University (KDU).",
            achievement: "Neski secured the 1st Runner-Up position in January 2026 after a competitive pitch session against innovative student-led startups from across the island.",
            significance: "This win provided early-stage validation for our mission to digitize the rental market and proved that our business case resonates with academic and industry judges."
        }
    },
    {
        id: 3,
        title: "Venture Engine 2025: Top 50 Finalist",
        date: "2025",
        category: "Recognition",
        slug: "venture-engine-2025-top-50",
        excerpt: "Recognized among Sri Lanka's foremost startups in a rigorous filtering process, aligning with global fundable business best practices.",
        image: "https://ik.imagekit.io/qetpsnccs/Neski/WhatsApp%20Image%202026-03-31%20at%2017.46.14.jpeg",
        gallery: [
            "https://ik.imagekit.io/qetpsnccs/Neski/WhatsApp%20Image%202026-03-31%20at%2017.53.23.jpeg",
            "https://ik.imagekit.io/qetpsnccs/Neski/WhatsApp%20Image%202026-03-31%20at%2017.53.22-2.jpeg",
            "https://ik.imagekit.io/qetpsnccs/Neski/WhatsApp%20Image%202026-03-31%20at%2017.53.22.jpeg"
        ],
        content: {
            overview: "Recognized as Sri Lanka’s foremost startup funding platform, founded by the Lankan Angel Network (LAN).",
            achievement: "Neski was named a Top 50 Finalist during the 2025 competition cycle, selected from a massive pool of national applicants.",
            significance: "Reaching the Top 50 is a 'stamp of approval' from industry leaders, signifying that Neski has undergone a rigorous filtering process and aligns with global best practices for fundable businesses."
        }
    }
];

export function getPostBySlug(slug: string) {
    return blogPosts.find(post => post.slug === slug);
}
