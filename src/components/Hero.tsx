import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>
                        Sapien interdum <br />
                        amet venenatis
                    </h1>
                    <p className={styles.subheading}>
                        Erat sapien luctus placerat hendrerit auctor ut sem accumsan ante convallis non sit massa et curae sed lacinia rhoncus praesent posuere.
                    </p>
                    <button className="btn btn-primary">
                        Lorem mollis &darr;
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
