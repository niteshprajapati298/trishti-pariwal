"use client"; // Client component needed for state/effects

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './SliderSection.module.css';

interface SlideData {
    title: string;
    description: string;
    imageSrc: string;
    buttonText: string;
}

const originalSlides: SlideData[] = [
    {
        title: "SEO Technical Content Writer",
        description: "Sociogreek (May 2024 - Present). Writing SEO optimized content, conducting comprehensive keyword research, and developing engaging B2B SAAS strategies.",
        imageSrc: "/assets/pencils_cup_1769575198083.png",
        buttonText: "See SEO Work"
    },
    {
        title: "Senior Content Writer",
        description: "Seeds of Innocens (July 2023 - April 2024). Managed website content (Blogs, Landing Pages) and implemented social media content calendars.",
        imageSrc: "/assets/desk_setup_1769575212232.png",
        buttonText: "View Strategy"
    },
    {
        title: "Content Coordinator",
        description: "TaCa Healthcare (June 2022 - June 2023). Managed social media handles, planned corporate events, and created SEO-friendly web content.",
        imageSrc: "/assets/orange_lamp_1769577532378.png",
        buttonText: "View Projects"
    }
];

// Clone the first slide to the end for seamless looping
const slides = [...originalSlides, originalSlides[0]];

export default function SliderSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Check if we've reached the cloned last slide
        if (currentIndex === slides.length - 1) {
            // Disable transition and snap back to 0 after the slide animation completes
            const timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 500); // Must match CSS transition duration

            return () => clearTimeout(timeout);
        }

        // Checking if we are at 0 and transition is off (snapped back)
        if (currentIndex === 0 && !isTransitioning) {
            // Re-enable transitions for the next slide opacity/movement
            // Use double RAF to ensure DOM has painted the snap
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransitioning(true);
                });
            });
        }
    }, [currentIndex, isTransitioning]);

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.sliderContainer}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                            style={{
                                transform: `translateX(${(index - currentIndex) * 100}%)`,
                                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
                            }}
                        >
                            <div className={styles.grid}>
                                <div className={styles.imageWrapper}>
                                    <div className={styles.imageFrame}>
                                        <Image
                                            src={slide.imageSrc}
                                            alt={slide.title}
                                            width={500}
                                            height={500}
                                            className={styles.image}
                                        />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <div className="gradient-line"></div>
                                    <h2 className={styles.title}>{slide.title}</h2>
                                    <p className={styles.description}>{slide.description}</p>
                                    <button className="btn btn-primary">{slide.buttonText}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
