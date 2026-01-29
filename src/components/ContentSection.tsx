import styles from './ContentSection.module.css';

interface ContentSectionProps {
    title: string;
    text: string | string[];
}

export default function ContentSection({ title, text }: ContentSectionProps) {
    return (
        <section className={`section-padding ${styles.section}`}>
            <div className={`container ${styles.container}`}>
                <div className="gradient-line" style={{ margin: '0 auto 1.5rem' }}></div>
                <h2 className={styles.title}>{title}</h2>
                {Array.isArray(text) ? (
                    <ul className={styles.list}>
                        {text.map((item, index) => (
                            <li key={index} className={styles.listItem}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className={styles.text}>{text}</p>
                )}
            </div>
        </section>
    );
}
