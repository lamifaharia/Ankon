import AuroraGlow from "./AuroraGlow";
import FloatingStars from "./FloatingStars";
import FloatingHearts from "./FloatingHearts";
import ShootingStars from "./ShootingStars";
import Sparkles from "./Sparkles";
import CursorGlow from "./CursorGlow";
import MouseTrail from "./MouseTrail";

const Background = () => {
  return (
    <>
      {/* Galaxy Background */}
      <div
        className="
        fixed
        inset-0
        z-0
        overflow-hidden
        pointer-events-none
        "
      >
        <AuroraGlow />
        <FloatingStars />
        <Sparkles />
        <FloatingHearts />
        <ShootingStars />
      </div>

      {/* Cursor Effects */}
      <div
        className="
        fixed
        inset-0
        z-[999]
        pointer-events-none
        "
      >
        <CursorGlow />
        <MouseTrail />
      </div>
    </>
  );
};

export default Background;