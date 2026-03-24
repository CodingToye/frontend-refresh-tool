export function buildSparklinePoints(
  values: number[],
  width = 80,
  height = 24,
) {
  if (values.length === 0) return "";
  if (values.length === 1) return `0,${height / 2}`;

  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - (value / 3) * height;
      return `${x},${y}`;
    })
    .join(" ");
}
