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
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.33.30.jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.41.30 (1).jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.41.30 (2).jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.41.30 (3).jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.41.30.jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.41.31 (1).jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.41.31 (2).jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.41.31 (3).jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.41.31.jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.41.32 (1).jpeg",
    "/assets/sliding-2/WhatsApp Image 2026-01-31 at 13.41.32.jpeg"
];

// Duplicate for continuous scroll
const marqueeImages = [...sliderImages, ...sliderImages];

export default function ImageFeatureSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                    <div className="gradient-line"></div>

                    <h2 className={styles.heading}>Social Media Posts & Reels</h2>
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
            </div>
        </section>
    );
}
