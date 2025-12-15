export function quickSort(arr) {
  const animations = [];
  quickSortHelper(arr, 0, arr.length - 1, animations);
  return animations;
}

function quickSortHelper(a, low, high, animations) {
  if (low < high) {
    const pi = partition(a, low, high, animations);
    quickSortHelper(a, low, pi - 1, animations);
    quickSortHelper(a, pi + 1, high, animations);
  }
}

function partition(a, low, high, animations) {
  const pivot = a[high];
  let i = low;

  for (let j = low; j < high; j++) {
    animations.push([j, high, false]); // compare

    if (a[j] < pivot) {
      animations.push([i, j, true]); // swap
      [a[i], a[j]] = [a[j], a[i]];
      i++;
    }
  }

  animations.push([i, high, true]); // pivot swap
  [a[i], a[high]] = [a[high], a[i]];

  return i;
}
