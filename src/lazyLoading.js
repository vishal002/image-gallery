import { useEffect } from "react";

let observer;
const options = {
  rootMargin: "200px",
  threshold: "0.50"
};

function intersectionCallback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      observer.unobserve(entry.target);
      entry.target.src = entry.target.dataset.src;
    }
  });
}

function getIntersectionObserver() {
  if (observer === undefined) {
    observer = new IntersectionObserver(intersectionCallback, options);
  }

  return observer;
}

export function useIntersection(ref) {
  useEffect(() => {
    let target = ref.current;
    let observer = getIntersectionObserver();

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);
}
