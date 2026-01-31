import Image from 'next/image';
import styles from './ClientMarquee.module.css';

interface Client {
    name: string;
    url: string;
    image: string;
}

const clients: Client[] = [
    { name: "SquadXP", url: "https://www.squadxp.com/", image: "/assets/squad-logo.webp" },
    { name: "Caller Digital", url: "https://www.caller.digital/", image: "/assets/caller-digital.webp" },
    { name: "CSL Finance", url: "https://www.cslfinance.in/", image: "/assets/csl.png" },
    { name: "CSL Foundation", url: "https://cslfoundation.in/", image: "/assets/csl.png" },
    { name: "Nirantara", url: "https://www.nirantara.solutions/esg", image: "/assets/nirantara.png" },
    { name: "Vbet", url: "https://www.vbet.com/", image: "/assets/vbet.svg" },
    { name: "Tanmantras", url: "https://tanmantras.in/", image: "/assets/tamanas.avif" },
    { name: "Followers Rich", url: "https://followersrich.com/", image: "/assets/followers-rich.jpg" },
    { name: "Sociofire", url: "https://sociofire.com/", image: "/assets/Socio-Fire-Logo.png" },
    { name: "Victory EV India", url: "https://victoryevindia.com/", image: "/assets/victory.png" },
    { name: "Yatharth Hospitals", url: "https://www.yatharthhospitals.com/", image: "/assets/yatharth.png" },
    { name: "Chocomohh", url: "https://chocomohh.com/", image: "/assets/Chocomoh.png" },
    { name: "Caffe Sicily", url: "https://www.caffesicily.in/", image: "/assets/cafe-sicilic.jpg" },
    { name: "Yes Germany", url: "https://www.yesgermany.com/", image: "/assets/yes-germany.png" },
];

// Duplicate list for seamless marquee effect
const marqueeList = [...clients, ...clients];

export default function ClientMarquee() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className="gradient-line" style={{ margin: '0 auto 1.5rem' }}></div>
                <h2 className={styles.heading}>My Clientele</h2>
            </div>

            <div className={styles.marqueeWrapper}>
                <div className={styles.track}>
                    {marqueeList.map((client, index) => (
                        <a
                            href={client.url}
                            key={index}
                            className={styles.card}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className={styles.logoWrapper}>
                                {client.image ? (
                                    <Image
                                        src={client.image}
                                        alt={client.name}
                                        width={180}
                                        height={120}
                                        className={styles.logo}
                                        style={{ objectFit: 'contain' }}
                                    />
                                ) : (
                                    <div className={styles.initials}>
                                        {client.name.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <div className={styles.info}>
                                {/* Name removed as per request */}
                                <span className={styles.linkText}>Visit Website &rarr;</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
