(function removeOverlays() {
  const blockedElements = [];

  // Try to detect and hide common overlay patterns
  document.querySelectorAll('div, section, aside').forEach((el) => {
    const style = window.getComputedStyle(el);

    // Find full-screen elements with high z-index and fixed/absolute position
    const isFullScreen =
      (style.position === 'fixed' || style.position === 'absolute') &&
      parseInt(style.zIndex) > 999 &&
      (el.offsetHeight > window.innerHeight * 0.8 || el.offsetWidth > window.innerWidth * 0.8);

    if (isFullScreen) {
      blockedElements.push(el);
      el.style.display = 'none';
    }
  });

  // Restore scrolling if it was disabled
  document.body.style.overflow = 'auto';
  document.documentElement.style.overflow = 'auto';

  console.log(`Overlay Remover: Removed ${blockedElements.length} elements.`);
})();
