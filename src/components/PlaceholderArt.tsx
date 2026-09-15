interface PlaceholderArtProps {
  seed?: number;
  className?: string;
}

/**
 * Abstract architectural line-art used as a stand-in for real photography
 * until project photos/renders are supplied. Deterministic per seed so
 * server and client render identically.
 */
export default function PlaceholderArt({ seed = 0, className = "" }: PlaceholderArtProps) {
  const offset = (seed % 5) * 37;
  const rects = [
    { x: 40 + offset * 0.6, y: 60, w: 120, h: 80 },
    { x: 190 + offset * 0.3, y: 40, w: 160, h: 140 },
    { x: 60 + offset * 0.4, y: 170, w: 90, h: 70 },
  ];

  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <rect width="400" height="300" fill="currentColor" opacity="0.06" />
      {Array.from({ length: 9 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 50}
          y1="0"
          x2={i * 50}
          y2="300"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.15"
        />
      ))}
      {Array.from({ length: 7 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * 50}
          x2="400"
          y2={i * 50}
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.15"
        />
      ))}
      {rects.map((r, i) => (
        <rect
          key={i}
          x={r.x}
          y={r.y}
          width={r.w}
          height={r.h}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
        />
      ))}
      <circle
        cx={200 + offset}
        cy="150"
        r="60"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.25"
      />
    </svg>
  );
}
