'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import './CounterSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

// Counter Component
const Counter = ({ endValue, duration, isInView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const start = 0;
        const stepTime = Math.abs(Math.floor(duration / (endValue - start)));
        let current = start;

        const updateCount = () => {
            setCount((prevCount) => {
                if (prevCount < endValue) {
                    const newCount = prevCount + 1;
                    return newCount >= endValue ? endValue : newCount;
                }
                return prevCount;
            });
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

    const handleIntersection = useCallback((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.unobserve(entry.target); // Stop observing once in view
            }
        });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

        const currentSectionRef = sectionRef.current; // Capture ref in a variable

        if (currentSectionRef) {
            observer.observe(currentSectionRef);
        }

        return () => {
            if (currentSectionRef) {
                observer.unobserve(currentSectionRef);
            }
            observer.disconnect(); // Cleanup the observer
        };
    }, [handleIntersection]);

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
