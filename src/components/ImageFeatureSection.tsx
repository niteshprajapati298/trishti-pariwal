import Image from 'next/image';
import styles from './ImageFeatureSection.module.css';

export default function ImageFeatureSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className="gradient-line"></div>

                <h2 className={styles.heading}>What Can I Bring To The Table?</h2>

                <p className={styles.topText}>
                    I specialize in crafting compelling digital narratives that drive engagement and growth.
                    From SEO-optimized blog posts to strategic social media campaigns, I ensure every piece of content serves a purpose.
                </p>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/assets/desk_setup_1769575212232.png"
                        alt="Workspace Setup"
                        width={1200}
                        height={600}
                        className={styles.image}
                    />
                </div>

                <p className={styles.bottomText}>
                    My approach combines creative storytelling with data-driven insights.
                    Whether it's managing a content team or executing a solo project, I bring dedication, precision, and a fresh perspective to every task.
                </p>

                <button className={styles.button}>
                    View Services <span>&rarr;</span>
                </button>
            </div>
        </section>
    );
}
