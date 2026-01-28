import styles from './StatsSection.module.css';

interface StatItem {
    value: string;
    description: string;
}

const stats: StatItem[] = [
    { value: '500+', description: 'Eget ante nunc venenatis tristique sit rutrum purus in penatibus quam.' },
    { value: '280', description: 'Cubilia luctus ac viverra donec euismod. Proto at dis proto proto elit.' },
    { value: '98%', description: 'Orci phasellus in col aliquam blandit. Libero mi tortor natoque cras.' },
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
