/** A vintage rubber-stamp badge: "SINCE 2022 · Serving northern Ghana". */
export default function StampBadge({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      className={className}
      role="img"
      aria-label="Since 2022 — serving northern Ghana"
    >
      <g transform="rotate(-8 110 110)" fill="currentColor">
        {/* rings */}
        <circle cx="110" cy="110" r="105" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle
          cx="110"
          cy="110"
          r="96"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="1.5 7"
          strokeLinecap="round"
        />

        <defs>
          <path id="stamp-top" d="M 32 110 A 78 78 0 0 1 188 110" fill="none" />
          <path id="stamp-bottom" d="M 36 110 A 74 74 0 0 0 184 110" fill="none" />
        </defs>

        {/* arched text */}
        <text fontSize="11.5" fontWeight="700" letterSpacing="1.5" textAnchor="middle">
          <textPath href="#stamp-top" startOffset="50%">
            SERVING NORTHERN GHANA
          </textPath>
        </text>
        <text fontSize="12.5" fontWeight="600" letterSpacing="3" textAnchor="middle">
          <textPath href="#stamp-bottom" startOffset="50%">
            HUMANITY AT HEART
          </textPath>
        </text>

        {/* side stars */}
        <text x="15" y="116" fontSize="15" textAnchor="middle">
          ★
        </text>
        <text x="205" y="116" fontSize="15" textAnchor="middle">
          ★
        </text>

        {/* star rows */}
        <text x="110" y="64" fontSize="11" letterSpacing="5" textAnchor="middle">
          ★★★
        </text>
        <text x="110" y="166" fontSize="11" letterSpacing="5" textAnchor="middle">
          ★★★
        </text>

        {/* center banner */}
        <g transform="rotate(-7 110 110)">
          <rect x="16" y="95" width="188" height="31" fill="currentColor" />
          <text
            x="110"
            y="117"
            fontSize="20"
            fontWeight="800"
            letterSpacing="1.5"
            textAnchor="middle"
            fill="#fbf6f0"
          >
            SINCE 2022
          </text>
        </g>
      </g>
    </svg>
  );
}
