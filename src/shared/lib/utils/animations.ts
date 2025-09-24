export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: customDelay },
  }),
};

export const cinematicFadeInDown = {
  hidden: { opacity: 0, y: -100, scaleY: 0.5 }, 
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { duration: 1, delay: customDelay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};
