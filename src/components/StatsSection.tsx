import styles from './StatsSection.module.css';

interface StatItem {
    value: string;
    description: string;
}

const stats: StatItem[] = [
    { value: '4+', description: 'Years of Experience in Content Writing & Strategy' },
    { value: 'SEO', description: 'Expert in Keyword Research & Analytics' },
    { value: 'Tools', description: 'Proficient in PowerBI, Tableau, & MySQL' },
];

export default function StatsSection() {
    return (
        <section className={`section-padding ${styles.section}`}>
            <div className={`container ${styles.grid}`}>
                {stats.map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                        <div className={styles.value}>{stat.value}</div>
                        <p className={styles.description}>{stat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
