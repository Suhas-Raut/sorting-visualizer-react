export function animateSort(animations, setArray, speed) {
  animations.forEach(([i, j, swap], idx) => {
    setTimeout(() => {
      setArray(prev => {
        const arr = prev.map(b => ({ ...b }));

        // reset
        arr.forEach(b => {
          if (b.state !== "sorted") b.state = "";
        });

        arr[i].state = "compare";
        arr[j].state = "compare";

        if (swap) {
          arr[i].state = "swap";
          arr[j].state = "swap";
          [arr[i].value, arr[j].value] =
            [arr[j].value, arr[i].value];
        }

        // last frame → sorted wave
        if (idx === animations.length - 1) {
          arr.forEach((b, i) => {
            setTimeout(() => {
              setArray(p => {
                const c = p.map(x => ({ ...x }));
                c[i].state = "sorted";
                return c;
              });
            }, i * 10);
          });
        }

        return arr;
      });
    }, idx * speed);
  });
}
