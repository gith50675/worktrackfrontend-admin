// src/components/PlainSvgGraph.jsx
import React, { useRef, useState, useMemo } from "react";

const LINE_COLOR = "#717FFE";
const GRAD_TOP = "#E5B6F5";
const GRAD_MID = "#D4B3FF";

export default function PlainSvgGraph({
  data = [],
  labels = [],
  height = 320,
  padding = 50,
}) {
  const svgRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  if (!data.length) return null;

  const min = 0;
  const max = Math.max(...data, 1);
  const count = data.length;

  const viewW = 1000;
  const viewH = height;
  const innerW = viewW - padding * 2;
  const innerH = viewH - padding * 2;

  const points = useMemo(() => {
    return data.map((v, i) => {
      const x = padding + (i / (count - 1 || 1)) * innerW;
      const y =
        padding + (1 - (v - min) / (max - min || 1)) * innerH;
      return { x, y, v, label: labels[i] || "" };
    });
  }, [data, labels, count, padding, innerW, innerH, min, max]);

  function catmullRom2bezier(pts) {
    let d = `M ${pts[0].x},${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2] || p2;

      const bp1x = p1.x + (p2.x - p0.x) / 6;
      const bp1y = p1.y + (p2.y - p0.y) / 6;
      const bp2x = p2.x - (p3.x - p1.x) / 6;
      const bp2y = p2.y - (p3.y - p1.y) / 6;

      d += ` C ${bp1x},${bp1y} ${bp2x},${bp2y} ${p2.x},${p2.y}`;
    }
    return d;
  }

  const linePath = catmullRom2bezier(points);
  const areaPath = `${linePath} L ${points.at(-1).x},${
    viewH - padding
  } L ${points[0].x},${viewH - padding} Z`;

  const ySteps = Array.from({ length: 6 }, (_, i) =>
    Math.round((max / 5) * i)
  );

  return (
    <div style={{ width: "100%", maxWidth: 1000 }}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${viewW} ${viewH}`}
        width="100%"
        height={height}
      >
        <defs>
          <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor={GRAD_TOP} stopOpacity="0.9" />
            <stop offset="80%" stopColor={GRAD_MID} stopOpacity="0.35" />
            <stop offset="100%" stopColor="rgba(196,146,255,0)" />
          </linearGradient>
        </defs>

        {ySteps.map((val, i) => {
          const y = padding + (1 - val / max) * innerH;
          return (
            <g key={i}>
              <line
                x1={padding}
                x2={viewW - padding}
                y1={y}
                y2={y}
                stroke="#eee"
              />
              <text
                x={padding - 20}
                y={y + 4}
                fontSize="13"
                textAnchor="end"
                fill="#777"
              >
                {val}
              </text>
            </g>
          );
        })}

        <path d={areaPath} fill="url(#purpleGrad)" />
        <path
          d={linePath}
          fill="none"
          stroke={LINE_COLOR}
          strokeWidth={3}
          strokeLinecap="round"
        />

        {points.map((p, i) => (
          <g
            key={i}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <circle
              cx={p.x}
              cy={p.y}
              r={hoverIndex === i ? 8 : 5}
              fill="#fff"
              stroke={LINE_COLOR}
              strokeWidth={2}
            />
            {hoverIndex === i && (
              <text
                x={p.x}
                y={p.y - 12}
                textAnchor="middle"
                fontSize="12"
                fill="#333"
              >
                {p.label}: {p.v}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
