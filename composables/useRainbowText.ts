export function useRainbowText(text: string) {
  const colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];
  return text.split('').map((char, index) => ({
    char,
    color: colors[index % colors.length]
  }))
}