export const waitForScroll = () =>
    new Promise((resolve) => {
      const checkScroll = () =>
        window.scrollY === 0 ? resolve() : requestAnimationFrame(checkScroll);
      checkScroll();
    });