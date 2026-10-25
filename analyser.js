
(() => {
  const images = [...document.images].map((img) => {
    const rect = img.getBoundingClientRect();

    return {
      src: img.currentSrc || img.src,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      displayedWidth: Math.round(rect.width),
      displayedHeight: Math.round(rect.height),
      loading: img.loading,
      complete: img.complete
    };
  });

  const findings = images.filter((img) =>
    img.naturalWidth > 0 &&
    img.displayedWidth > 0 &&
    img.naturalWidth > img.displayedWidth * 2
  );

  console.log("NetworkDiet image findings:", findings);
})();
