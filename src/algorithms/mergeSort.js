export function mergeSort(arr) {
  const animations = [];
  const a = arr.slice();
  mergeSortHelper(a, 0, a.length - 1, animations);
  return animations;
}

function mergeSortHelper(a, l, r, animations) {
  if (l >= r) return;

  const m = Math.floor((l + r) / 2);
  mergeSortHelper(a, l, m, animations);
  mergeSortHelper(a, m + 1, r, animations);
  mergeInPlace(a, l, m, r, animations);
}

function mergeInPlace(a, l, m, r, animations) {
  let i = l;
  let j = m + 1;

  while (i <= m && j <= r) {
    animations.push([i, j, false]); // compare

    if (a[i] <= a[j]) {
      i++;
    } else {
      // shift instead of overwrite
      let value = a[j];
      let index = j;

      while (index > i) {
        animations.push([index, index - 1, true]);
        a[index] = a[index - 1];
        index--;
      }

      a[i] = value;
      i++;
      m++;
      j++;
    }
  }
}
