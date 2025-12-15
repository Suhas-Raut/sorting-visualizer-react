export function insertionSort(arr) {
  const animations = [];

  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      animations.push([j, j - 1, true]);
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }

  return animations;
}
