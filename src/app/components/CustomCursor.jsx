
'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const mouseX = useRef(0);
    const mouseY = useRef(0);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        mouseX.current = e.clientX;
        mouseY.current = e.clientY;
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: () => {
          gsap.set(cursorRef.current, {
            css: {
              left: mouseX.current,
              top: mouseY.current,
            },
          });
        },
      });
  
      const handleMouseEnter = () => {
        cursorRef.current.classList.add('circle', 'grow');
      };
  
      const handleMouseLeave = () => {
        cursorRef.current.classList.remove('circle', 'grow');
      };
  
      const cursorScaleElements = document.querySelectorAll('.cursor-scale');
      cursorScaleElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        cursorScaleElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }, []);
  
    return <div ref={cursorRef} className="cursor"></div>;
  };

export default CustomCursor;
