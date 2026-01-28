"use client";

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', description: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section className={styles.section}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <div className="gradient-line" style={{ margin: '0 auto 1.5rem' }}></div>
                <h2 className={styles.heading}>Get in Touch</h2>
                <p className={styles.subtext}>We'd love to hear from you. Send us a message!</p>

                {status === 'success' ? (
                    <div className={styles.successMessage}>
                        <h3>Message Sent! 🎉</h3>
                        <p>Thank you for reaching out. We'll get back to you shortly.</p>
                        <button onClick={() => setStatus('idle')} className={styles.resetBtn}>Send another</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.group}>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className={styles.input}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className={styles.input}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="description" className={styles.label}>Description</label>
                            <textarea
                                id="description"
                                required
                                rows={5}
                                className={styles.textarea}
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={`btn btn-primary ${styles.submitBtn}`}
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'error' && (
                            <p className={styles.errorMessage}>Something went wrong. Please try again.</p>
                        )}
                    </form>
                )}
            </div>
        </section>
    );
}
