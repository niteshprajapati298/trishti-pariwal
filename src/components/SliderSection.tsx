"use client"; // Client component needed for state/effects

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './SliderSection.module.css';

interface SlideData {
    title: string;
    description: string[];
    imageSrc: string;
    buttonText: string;
    link: string;
}

const originalSlides: SlideData[] = [
    {
        title: "Content Management Lead",
        description: [
            "Applore Technologies (Aug 2024 - Present)",
            "Led content across web and social with clear brand direction",
            "Managed and guided a 5–7 member content team",
            "Defined and executed content strategy aligned with business goals",
            "Partnered with internal stakeholders and external clients",
            "Owned social media presence end-to-end"
        ],
        imageSrc: "/applore-tech.png",
        buttonText: "View Content",
        link: "https://www.apploretechnologies.com/"
    },
    {
        title: "Technical Content Lead",
        description: [
            "Sociogreek (May 2024 - Present)",
            "Writing SEO optimized content for external clients",
            "Comprehensive research and analysis of keywords",
            "Developed engaging, keyword-optimized content for blogs, websites, and social media",
            "Managing technical website and social media content for B2B (SAAS) clients"
        ],
        imageSrc: "/socio-greek.png",
        buttonText: "View Content",
        link: "https://sociogreek.com/"
    },
    {
        title: "Senior Content Writer",
        description: [
            "Seeds of Innocens (July 2023 - April 2024)",
            "Website Content Management - Hindi and English",
            "Handling social media platforms, creating and curating content (Online & Offline)",
            "Develop and implement a content calendar as per marketing goals",
            "Managing coordination for offline campaigns related to designs or marketing materials"
        ],
        imageSrc: "/seed-ivf.png",
        buttonText: "View Content",
        link: "https://www.seedsofinnocens.com/"
    },
    {
        title: "Content Writer",
        description: [
            "TaCa Healthcare (June 2022 - June 2023)",
            "Web page, Social media specific and SEO friendly content",
            "Conducting training sessions and managing social media promotion calendars",
            "Overseeing the design and implementation of new brand concepts",
            "Record management of media coverage and social media handles",
            "Planning & promoting corporate event"
        ],
        imageSrc: "/taca-healthcare.png",
        buttonText: "View Content",
        link: "https://tacahealthcare.com/"
    },
    {
        title: "Executive Program Associate",
        description: [
            "Visual Eyez (Feb 2021 - May 2022)",
            "Worked on RFPs & website content",
            "Planning and management of Community Eye health program",
            "Data management of the project",
            "Researching for competitors in the market",
            "Handling management of the organization"
        ],
        imageSrc: "/visual-eyez.png",
        buttonText: "View Content",
        link: "https://visualeyezindia.com/"
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
        }, 5000); // Increased duration to allow reading (3s -> 5s)

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
                                            width={800}
                                            height={800}
                                            className={styles.image}
                                        />
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <div className="gradient-line"></div>
                                    <h2 className={styles.title}>{slide.title}</h2>
                                    <ul className={styles.description}>
                                        {slide.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                    <a
                                        href={slide.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        {slide.buttonText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
