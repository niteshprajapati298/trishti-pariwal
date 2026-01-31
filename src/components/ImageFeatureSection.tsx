import Image from 'next/image';
import styles from './ImageFeatureSection.module.css';

const sliderImages = [
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.23.51.jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.23.52 (1).jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.23.52 (2).jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.23.52.jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.23.53 (1).jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.23.53 (2).jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.23.53.jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.30.55.jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.31.24.jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.33.04.jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.33.30.jpeg"
];

// Duplicate for continuous scroll
const marqueeImages = [...sliderImages, ...sliderImages];

export default function ImageFeatureSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                    <div className="gradient-line"></div>

                    <h2 className={styles.heading}>What Can I Bring To The Table?</h2>

                    <p className={styles.topText}>
                        I specialize in crafting compelling digital narratives that drive engagement and growth.
                        From SEO-optimized blog posts to strategic social media campaigns, I ensure every piece of content serves a purpose.
                    </p>
                </div>

                <div className={styles.sliderWrapper}>
                    <div className={styles.track}>
                        {marqueeImages.map((src, index) => (
                            <div key={index} className={styles.sliderImageWrapper}>
                                <Image
                                    src={src}
                                    alt={`Portfolio Work ${index + 1}`}
                                    width={600}
                                    height={500}
                                    className={styles.image}
                                    style={{ width: 'auto', height: '100%' }} // Maintain aspect ratio
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.contentContainer}>
                    <p className={styles.bottomText}>
                        My approach combines creative storytelling with data-driven insights.
                        Whether it's managing a content team or executing a solo project, I bring dedication, precision, and a fresh perspective to every task.
                    </p>

                    <button className={styles.button}>
                        View Services <span>&rarr;</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
