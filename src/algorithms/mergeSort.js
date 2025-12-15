export function mergeSort(arr) {
  const animations = [];
  const aux = arr.slice();

  mergeSortHelper(arr, 0, arr.length - 1, aux, animations);
  return animations;
}

function mergeSortHelper(main, start, end, aux, animations) {
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);
  mergeSortHelper(aux, start, mid, main, animations);
  mergeSortHelper(aux, mid + 1, end, main, animations);
  merge(main, start, mid, end, aux, animations);
}

function merge(main, start, mid, end, aux, animations) {
  let i = start;
  let j = mid + 1;
  let k = start;

  while (i <= mid && j <= end) {
    animations.push([i, j, false]); // compare

    if (aux[i] <= aux[j]) {
      animations.push([k, aux[i], true]); // overwrite
      main[k++] = aux[i++];
    } else {
      animations.push([k, aux[j], true]);
      main[k++] = aux[j++];
    }
  }

  while (i <= mid) {
    animations.push([k, aux[i], true]);
    main[k++] = aux[i++];
  }

  while (j <= end) {
    animations.push([k, aux[j], true]);
    main[k++] = aux[j++];
  }
}
