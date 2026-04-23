import { useEffect, useRef } from 'react';

/**
 * Hook para disparar animación fade-in cuando un elemento entra en viewport
 * Utiliza Intersection Observer API
 * @param threshold - Porcentaje del elemento visible antes de disparar (0-1)
 */
export function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
