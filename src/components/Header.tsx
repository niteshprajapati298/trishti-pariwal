import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.logo}>Trishti Pariwal</h1>
            </div>
        </header>
    );
}
