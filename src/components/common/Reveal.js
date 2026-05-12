import { useEffect, useRef } from 'react';

export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('pp-visible');
                    observer.unobserve(el);
                }
            },
            { threshold: 0.08 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            className={`pp-reveal ${className}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
            {...rest}
        >
            {children}
        </Tag>
    );
}
