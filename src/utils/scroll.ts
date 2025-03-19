export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior,
  });
};

export const scrollToElement = (elementId: string, behavior: ScrollBehavior = 'smooth') => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior,
      block: 'start',
    });
  }
};
