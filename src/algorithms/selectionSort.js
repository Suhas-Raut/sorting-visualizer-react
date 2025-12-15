export function selectionSort(arr) {
  const animations = [];

  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      animations.push([min, j, false]);
      if (arr[j] < arr[min]) min = j;
    }

    animations.push([i, min, true]);
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return animations;
}
