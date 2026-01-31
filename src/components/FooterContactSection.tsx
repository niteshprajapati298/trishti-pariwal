import styles from './FooterContactSection.module.css';

export default function FooterContactSection() {
    return (
        <footer className={styles.section}>
            <div className={styles.container}>
                {/* Left Column */}
                <div className={styles.leftColumn}>
                    <div className={styles.branding}>
                        Trishti Pariwal
                    </div>

                    <div className={styles.contactInfo}>
                        <a href="tel:+919911641759" className={styles.contactItem}>+91 99116 41759</a>
                        <a href="mailto:trishti22@gmail.com" className={styles.contactItem}>trishti22@gmail.com</a>

                        <address className={styles.address}>
                            New Delhi, India<br />
                            Available for Remote Work
                        </address>

                        <div className={styles.socials}>
                            {/* Simple placeholders or SVGs for now */}
                            {/* LinkedIn */}
                            <a href="#" className={styles.socialIcon} style={{ background: 'black', display: 'block' }}></a>
                            {/* Instagram */}
                            <a href="#" className={styles.socialIcon} style={{ background: 'black', display: 'block' }}></a>
                            {/* Twitter */}
                            <a href="#" className={styles.socialIcon} style={{ background: 'black', display: 'block' }}></a>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className={styles.rightColumn}>
                    <div className={styles.formHeader}>
                        <h2 className={styles.formTitle}>Your Content Partner</h2>
                        <div className={styles.icon}>*</div> {/* Orange icon placeholder */}
                    </div>

                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email" className={styles.label}>Email *</label>
                            <input type="email" id="email" className={styles.input} required />
                        </div>

                        <div className={styles.checkboxGroup}>
                            <input type="checkbox" id="subscribe" className={styles.checkbox} />
                            <label htmlFor="subscribe" className={styles.checkboxLabel}>Yes, subscribe me to your newsletter. *</label>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Submit
                        </button>
                    </form>

                    <div className={styles.footerLinks}>
                        <span>Privacy Policy</span>
                        <span>Accessibility Statement</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
