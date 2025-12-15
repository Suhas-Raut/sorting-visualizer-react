export function quickSort(arr) {
  const animations = [];

  function qs(l, r) {
    if (l >= r) return;
    let pivot = arr[r].value;
    let i = l;

    for (let j = l; j < r; j++) {
      animations.push({ type: "compare", i: j, j: r });
      if (arr[j].value < pivot) {
        animations.push({ type: "swap", i, j });
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    animations.push({ type: "swap", i, j: r });
    [arr[i], arr[r]] = [arr[r], arr[i]];

    qs(l, i - 1);
    qs(i + 1, r);
  }

  qs(0, arr.length - 1);
  animations.push({ type: "final" });
  return animations;
}
