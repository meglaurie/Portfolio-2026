
interface TimelinePoint {
  id: string;
  label: string;
  icon: string;
  colorClass: string;
}

const points: TimelinePoint[] = [
  { id: "background", label: "Background", icon: "🗂", colorClass: "gem-purple" },
  { id: "role",       label: "Role",       icon: "👤", colorClass: "gem-blue"   },
  { id: "design",     label: "Design",     icon: "✏️", colorClass: "gem-lavender"},
  { id: "challenges", label: "Challenges", icon: "⚡", colorClass: "gem-pink"   },
  { id: "impact",     label: "Impact",     icon: "🎯", colorClass: "gem-violet" },
];

function CaseStudyTimeline() {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="tl-wrap">
      <svg className="tl-stars" viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <polygon points="30,18 32,24 38,24 33,28 35,34 30,30 25,34 27,28 22,24 28,24" fill="#7F77DD" opacity="0.35"/>
        <polygon points="650,20 652,26 658,26 653,30 655,36 650,32 645,36 647,30 642,26 648,26" fill="#D4537E" opacity="0.3"/>
        <polygon points="80,140 81,143 84,143 82,145 83,148 80,146 77,148 78,145 76,143 79,143" fill="#534AB7" opacity="0.25"/>
        <polygon points="600,130 601,133 604,133 602,135 603,138 600,136 597,138 598,135 596,133 599,133" fill="#7F77DD" opacity="0.3"/>
        <circle cx="660" cy="80" r="3" fill="#AFA9EC" opacity="0.4"/>
        <circle cx="20" cy="80" r="2" fill="#D4537E" opacity="0.3"/>
        <circle cx="340" cy="10" r="2.5" fill="#7F77DD" opacity="0.3"/>
        <polygon points="560,160 562,166 568,166 563,170 565,176 560,172 555,176 557,170 552,166 558,166" fill="#AFA9EC" opacity="0.2"/>
        <polygon points="120,30 121,33 124,33 122,35 123,38 120,36 117,38 118,35 116,33 119,33" fill="#534AB7" opacity="0.2"/>
      </svg>

      <div className="tl-line-wrap">
        <div className="tl-track" />

        {points.map((point) => (
          <button
            key={point.id}
            className="tl-node"
            onClick={() => handleClick(point.id)}
            aria-label={`Jump to ${point.label} section`}
          >
            <div className={`tl-gem ${point.colorClass}`}>
              <div className="tl-shine" />
              <span className="tl-icon">{point.icon}</span>
            </div>
            <div className="tl-label">{point.label}</div>
          </button>
        ))}
      </div>

      <p className="tl-hint">✦ click to jump to that section ✦</p>
    </div>
  );
}

export default CaseStudyTimeline;
