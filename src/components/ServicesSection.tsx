import styles from './ServicesSection.module.css';

const services = [
    "Website Content",
    "Blog Posts",
    "Social Media Updates/Copywriting",
    "SEO Optimized Content",
    "Editing Content",
    "Content Strategy"
];

export default function ServicesSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className="gradient-line"></div>

                <h2 className={styles.heading}>What Can I Bring To The Table?</h2>

                <p className={styles.description}>
                    I specialize in crafting compelling digital narratives that drive engagement and growth.
                    From SEO-optimized blog posts to strategic social media campaigns, I ensure every piece of content serves a purpose.
                </p>

                <ul className={styles.servicesList}>
                    {services.map((service, index) => (
                        <li key={index} className={styles.serviceItem}>
                            <span className={styles.bullet}>•</span>
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
