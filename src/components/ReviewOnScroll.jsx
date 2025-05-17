import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0.01, rootMargin: "0px" } // <-- UPDATED HERE
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []); // <-- Also make sure to include the empty dependency array
         // to avoid running this on every render
         
  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};
