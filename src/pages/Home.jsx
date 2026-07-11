import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FloatingStars from "../components/FloatingStars";
import FloatingHearts from "../components/FloatingHearts";
import MusicPlayer from "../components/MusicPlayer";
import BackgroundBlobs from "../components/BackgroundBlobs";

const Home = () => {
  return (
    <div className="relative bg-slate-950 min-h-screen overflow-hidden text-white">
      <BackgroundBlobs />
      <FloatingStars />
      <FloatingHearts />

      <FloatingStars />
      <FloatingHearts />

      <Navbar />

      <Hero />

      <MusicPlayer />
    </div>
  );
};

export default Home;
