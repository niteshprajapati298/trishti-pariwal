import Image from 'next/image';
import styles from './FeatureSection.module.css';

interface FeatureSectionProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    reversed?: boolean; // If true, image is on the right
}

export default function FeatureSection({
    title,
    description,
    imageSrc,
    imageAlt,
    reversed = false,
}: FeatureSectionProps) {
    return (
        <section className={`section-padding ${styles.section}`}>
            <div className={`container ${styles.grid} ${reversed ? styles.reversed : ''}`}>
                <div className={styles.imageWrapper}>
                    <div className={styles.imageFrame}>
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={500}
                            height={500}
                            className={styles.image}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className="gradient-line"></div>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
        </section>
    );
}
