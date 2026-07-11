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
      <AuroraGlow />
      <FloatingStars />
      <Sparkles />
      <FloatingHearts />
      <ShootingStars />
      <CursorGlow />
      <MouseTrail />
    </>
  );
};

export default Background;