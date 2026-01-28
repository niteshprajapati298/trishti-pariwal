import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>
                        Content Strategy <br />
                        & Data Insights
                    </h1>
                    <p className={styles.subheading}>
                        Detail-oriented professional aiming to enhance content strategy with exceptional SEO skills and analytical precision using PowerBI & Tableau.
                    </p>
                    <button className="btn btn-primary">
                        View Experience &darr;
                    </button>
                </div>
                <div className={styles.imageWrapper}>
                    <div className={styles.imageFrame}>
                        <Image
                            src="/assets/hero_workspace_1769575183849.png"
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
