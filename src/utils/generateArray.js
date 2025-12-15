export function generateArray(size) {
  return Array.from({ length: size }, () => ({
    value: Math.floor(Math.random() * 300) + 20,
    state: ""   // 👈 REQUIRED
  }));
}
