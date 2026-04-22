import { useEffect, useRef } from 'react';

const AnimatedSection = ({ children, animation = 'slide-in-bottom', className = '', threshold = 0.2 }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          if (entry.target.classList.contains('stagger-child')) {
            entry.target.classList.add('stagger-show');
          }
        } else {
          entry.target.classList.remove('show');
          if (entry.target.classList.contains('stagger-child')) {
            entry.target.classList.remove('stagger-show');
          }
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px'
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [threshold]);

  return (
    <div ref={sectionRef} className={`${animation} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
