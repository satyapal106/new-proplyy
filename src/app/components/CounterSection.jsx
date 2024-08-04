'use client'; // Ensure this code runs on the client-side

import { useState, useEffect, useRef } from 'react';
import './CounterSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// Counter Component
const Counter = ({ endValue, duration, isInView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const start = 0;
        const end = endValue;
        const stepTime = Math.abs(Math.floor(duration / (end - start)));
        let current = start;

        const updateCount = () => {
            current += 1;
            setCount((prevCount) => (prevCount < end ? current : end));

            if (current >= end) {
                clearInterval(timer);
            }
        };

        const timer = setInterval(updateCount, stepTime);

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, [isInView, endValue, duration]);

    return (
        <div className="counter-value">
            {count}
        </div>
    );
};

// CounterSection Component
const CounterSection = () => {
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.unobserve(entry.target); // Use entry.target instead of sectionRef.current
                    }
                });
            },
            { threshold: 0.1 } // Adjust threshold as needed
        );

        const currentSectionRef = sectionRef.current; // Capture ref in a variable

        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
        };
    }, []);

    return (
        <div className="counter-section" ref={sectionRef}>
            <div className="container">
                <div className="row">
                    <div className='col-md-12'>
                        <h2 className='text-center'>Counter Section</h2>
                    </div>
                    {[
                        { endValue: 515, duration: 3500, label: 'Web Designing' },
                        { endValue: 487, duration: 3500, label: 'Web Development' },
                        { endValue: 375, duration: 3300, label: 'Graphic Design' },
                        { endValue: 420, duration: 3300, label: 'SEO Services' },
                    ].map((counter, index) => (
                        <div key={index} className="col-6 col-md-3 col-sm-6">
                            <div className="counter">
                                <div className="counter-icon">
                                   <FontAwesomeIcon icon={faGlobe} aria-hidden="true" />
                                </div>
                                <h3>{counter.label}</h3>
                                <Counter endValue={counter.endValue} duration={counter.duration} isInView={isInView} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CounterSection;
