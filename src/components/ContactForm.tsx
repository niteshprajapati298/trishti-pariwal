"use client";

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    return (
        <section className={styles.section}>
            <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
                <div className="gradient-line" style={{ margin: '0 auto 1.5rem' }}></div>
                <h2 className={styles.heading}>Your Content Partner</h2>

                <div className={styles.contactDetails} style={{ marginTop: '2rem' }}>
                    <div className={styles.contactItem} style={{ marginBottom: '1rem' }}>
                        <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: 'bold' }}>Email</span>
                        <a href="mailto:trishti22@gmail.com" className={styles.link} style={{ fontSize: '1.5rem', color: 'var(--coral)' }}>trishti22@gmail.com</a>
                    </div>

                    <div className={styles.contactItem}>
                        <span style={{ display: 'block', fontSize: '1.25rem', fontWeight: 'bold' }}>WhatsApp</span>
                        <a href="https://wa.me/919911641759" className={styles.link} style={{ fontSize: '1.5rem', color: 'var(--coral)' }}>+91 99116 41759</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
