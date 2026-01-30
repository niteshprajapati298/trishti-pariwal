import styles from './ParallaxCards.module.css';

interface CardData {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    id: number;
}

const cards: CardData[] = [
    {
        id: 1,
        title: "Website Content",
        subtitle: "Engage & Convert",
        description: "Crafting compelling website copy that speaks directly to your audience's needs and drives conversions. From landing pages to about sections, every word is improved for impact.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Blog Posts",
        subtitle: "Inform & Inspire",
        description: "High-quality, well-researched blog posts that establish authority and keep your readers coming back for more. Topics range from industry insights to lifestyle features.",
        image: "https://images.unsplash.com/photo-1499750310159-52f896d34e83?q=80&w=2088&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Social Media",
        subtitle: "Connect & Grow",
        description: "Strategic social media copywriting that amplifies your brand voice across platforms. Engaging captions and updates designed to foster community and increase reach.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "SEO Content",
        subtitle: "Search & Rank",
        description: "Optimized content strategies that improve visibility on search engines without sacrificing readability. Keywords are naturally integrated to drive organic traffic.",
        image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=2080&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Editing Content",
        subtitle: "Polish & Perfect",
        description: "Comprehensive editing and proofreading services to ensure your existing content is flawless, professional, and clear. Turning good drafts into great publications.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop"
    }
];

export default function ParallaxCards() {
    return (
        <section className={styles['c-hotels']}>
            <h2 className={styles['c-hotels__title']}>
                What Can I Bring To The Table?
            </h2>

            <ul className={styles['c-hotels__list']}>
                {cards.map((card) => (
                    <li key={card.id} className={styles['c-hotels__item']}>
                        <article>
                            <figure className={styles['c-hotels__item-figure']}>
                                <img src={card.image} alt={card.title} />
                            </figure>

                            <div className={styles['c-hotels__item-info']}>
                                <h3 className={styles['c-hotels__item-title']}>
                                    {card.title}
                                </h3>

                                <p className={styles['c-hotels__item-subtitle']}>
                                    {card.subtitle}
                                </p>

                                <p className={styles['c-hotels__item-excerpt']}>
                                    {card.description}
                                </p>

                                <a href="#" className={styles['c-hotels__item-link']}>
                                    View More
                                </a>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
}