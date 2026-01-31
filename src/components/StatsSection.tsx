import Image from 'next/image';
import styles from './StatsSection.module.css';

interface PillarItem {
    label: string;
    imageSrc: string;
}

const pillars: PillarItem[] = [
    {
        label: 'Brand Storytelling',
        imageSrc: '/assets/Brand-Storytelling.png'
    },
    {
        label: 'Content Visibility',
        imageSrc: '/assets/Content-visiblity.png'
    },
    {
        label: 'Growth Insights',
        imageSrc: '/assets/growth-insights.png'
    },
];

export default function StatsSection() {
    return (
        <section className={`section-padding ${styles.section}`}>
            <div className={`container ${styles.grid}`}>
                {pillars.map((pillar, index) => (
                    <div key={index} className={styles.statItem}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={pillar.imageSrc}
                                alt={pillar.label}
                                width={120}
                                height={120}
                                className={styles.image}
                            />
                        </div>
                        <h3 className={styles.label}>{pillar.label}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
