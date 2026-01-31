import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>
                        Content Strategist & Manager
                    </h1>
                    <p className={styles.subheading}>
                        A skilled content writer with a passion for storytelling and a background in healthcare & research. My writing style is marked by clarity, conciseness, and attention to detail. With experience in creating content for various industries, I have excelled in crafting engaging and informative articles, blog posts, and social media updates. I am dedicated to continuous learning and growth, staying up-to-date with industry trends to deliver impactful content that drives results.
                    </p>
                    <button className="btn btn-primary">
                        View Experience &darr;
                    </button>
                </div>
                <div className={styles.imageWrapper}>
                    <div className={styles.imageFrame}>
                        <Image
                            src="/assets/content-writeer.png"
                            alt="Workspace"
                            width={600}
                            height={500}
                            priority
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
