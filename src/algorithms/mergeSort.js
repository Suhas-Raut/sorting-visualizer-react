export function mergeSort(arr) {
  const animations = [];

  function merge(l, m, r) {
    const left = arr.slice(l, m + 1);
    const right = arr.slice(m + 1, r + 1);

    let i = l, x = 0, y = 0;

    while (x < left.length && y < right.length) {
      animations.push({ type: "compare", i, j: i });
      if (left[x].value <= right[y].value) {
        arr[i++] = left[x++];
      } else {
        arr[i++] = right[y++];
      }
    }

    while (x < left.length) arr[i++] = left[x++];
    while (y < right.length) arr[i++] = right[y++];
  }

  function ms(l, r) {
    if (l >= r) return;
    const m = Math.floor((l + r) / 2);
    ms(l, m);
    ms(m + 1, r);
    merge(l, m, r);
  }

  ms(0, arr.length - 1);
  animations.push({ type: "final" });
  return animations;
}
