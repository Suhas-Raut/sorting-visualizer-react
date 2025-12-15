export function animateSort(animations, setArray) {
  animations.forEach(([i, j, swap], idx) => {
    setTimeout(() => {
      setArray(prev => {
        const copy = [...prev];
        if (swap) {
          [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
      });
    }, idx * 5);
  });
}
