import { useEffect } from "react";

export function useScrollReveal(selectors: string, visibleClass: string) {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(selectors);
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add(visibleClass);
        } else {
          element.classList.remove(visibleClass);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectors, visibleClass]);
}