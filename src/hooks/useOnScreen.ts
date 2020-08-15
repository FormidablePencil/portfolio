import { useState, useEffect } from "react";

const { innerWidth } = window
//Todo: if window reload components should not animated when scrolling up,
function useOnScreen(ref, whatSection, toggle?: Function | false, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  //* If intro and tech then hide tech. 
  //* If Bio and contacts are present then hide bio.

  useEffect(() => {
    if (innerWidth < 500) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        if (toggle) toggle(entry.isIntersecting)
        if (entry.isIntersecting) setIntersecting(entry.isIntersecting) //show anim but don't hide
      },
      {
        rootMargin
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      // eslint-disable-next-line
      observer.unobserve(ref.current);
    };
    // eslint-disable-next-line
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return { isIntersecting };
}

export default useOnScreen