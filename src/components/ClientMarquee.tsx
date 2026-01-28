import Image from 'next/image';
import styles from './ClientMarquee.module.css';

interface Client {
    name: string;
    handle: string;
    image: string;
    link: string;
}

const clients: Client[] = [
    { name: "Sarah Jenkins", handle: "@sarah_j", image: "/assets/team_avatars_1769577549967.png", link: "#" },
    { name: "Mike Ross", handle: "@mikeross_design", image: "/assets/team_avatars_1769577549967.png", link: "#" },
    { name: "Jessica Pearson", handle: "@jpearson_biz", image: "/assets/team_avatars_1769577549967.png", link: "#" },
    // Duplicate for seamless scroll if needed, or we map repeatedly in render
];

// Duplicate list for seamless marquee effect
const marqueeList = [...clients, ...clients, ...clients, ...clients];

export default function ClientMarquee() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className="gradient-line" style={{ margin: '0 auto 1.5rem' }}></div>
                <h2 className={styles.heading}>Social Media</h2>
            </div>

            <div className={styles.marqueeWrapper}>
                <div className={styles.track}>
                    {marqueeList.map((client, index) => (
                        <a href={client.link} key={index} className={styles.card}>
                            <div className={styles.imageFrame}>
                                {/* Using placeholder until generation succeeds, or file presence check */}
                                <Image
                                    src={client.image}
                                    alt={client.name}
                                    width={80}
                                    height={80}
                                    className={styles.avatar}
                                />
                            </div>
                            <div className={styles.info}>
                                <h4 className={styles.name}>{client.name}</h4>
                                <p className={styles.handle}>{client.handle}</p>
                                <span className={styles.linkText}>Follow &rarr;</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
