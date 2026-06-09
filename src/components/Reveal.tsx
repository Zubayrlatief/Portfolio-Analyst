"use client";

import {
  Children,
  ElementType,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

export type RevealAnimation = "fade-up" | "fade-left" | "fade-right";

type RevealProps = {
  children: ReactNode;
  animation?: RevealAnimation;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  once?: boolean;
  threshold?: number;
};

function isInViewport(element: Element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight - 40 && rect.bottom > 0;
}

export function Reveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 650,
  className = "",
  as: Component = "div",
  once = true,
  threshold = 0.08,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const show = () => setVisible(true);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    if (isInViewport(element)) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -24px 0px" },
    );

    observer.observe(element);

    const fallback = window.setTimeout(show, 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [once, threshold]);

  return (
    <Component
      ref={ref}
      className={`reveal reveal-${animation} ${visible ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </Component>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  animation?: RevealAnimation;
  as?: ElementType;
};

export function Stagger({
  children,
  className = "",
  stagger = 90,
  animation = "fade-up",
  as: Component = "div",
}: StaggerProps) {
  return (
    <Component className={className}>
      {Children.map(children, (child, index) => {
        if (!child) return null;
        return (
          <Reveal
            key={(child as ReactElement).key ?? index}
            animation={animation}
            delay={index * stagger}
          >
            {child}
          </Reveal>
        );
      })}
    </Component>
  );
}
