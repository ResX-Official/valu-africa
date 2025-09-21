import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ as: Comp = 'div', delay = 0, children, className = '', ...rest }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Comp
      ref={ref}
      className={[
        'transition-all duration-700 ease-warm will-change-transform',
        isVisible ? 'opacity-100 translate-y-0 animate-slide-up' : 'opacity-0 translate-y-6',
        className,
      ].join(' ')}
      style={{ animationDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export default Reveal;


