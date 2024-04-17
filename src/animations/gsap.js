import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const slideReveal = (bgRef, contentRef, delay) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: bgRef,
      start: "start 80%",
    },
  });

  tl.fromTo(
    bgRef,
    { width: "0%" },
    { duration: 2, width: "105%", ease: "power3.out", delay: delay }
  );
  if (contentRef) {
    tl.fromTo(contentRef, { opacity: 0 }, { opacity: 1 });
  }
};

export const workProcessAnimation = (textRef, isOpen) => {
  const tl = gsap.timeline();

  const width = isOpen ? "100%" : "0";

  tl.to(textRef, {
    width: width,
  });
};
