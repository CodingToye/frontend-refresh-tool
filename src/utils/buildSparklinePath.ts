export function buildSparklinePath(values: number[], width = 80, height = 24) {
  if (values.length === 0) return "";
  if (values.length === 1) return `M 0 ${height / 2}`;

  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * width;
    const y = height - (value / 3) * height;

    return {x, y};
  });

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let i = 0; i < points.length - 1; i += 1) {
    const current = points[i];
    const next = points[i + 1];
    const controlX = (current.x + next.x) / 2;

    path += ` C ${controlX} ${current.y}, ${controlX} ${next.y}, ${next.x} ${next.y}`;
  }

  return path;
}
