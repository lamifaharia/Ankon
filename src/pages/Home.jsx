import Navbar from "../components/common/Navbar";
import BackgroundBlobs from "../components/common/BackgroundBlobs";
import FloatingStars from "../components/common/FloatingStars";
import FloatingHearts from "../components/common/FloatingHearts";
import MusicPlayer from "../components/common/MusicPlayer";

import Hero from "../components/hero/Hero";
import Story from "../components/story/Story";
import Gallery from "../components/gallery/Gallery";
import Memories from "../components/memories/Memories";
import Funny from "../components/funny/Funny";

import Background from "../components/background/Background";
const Home = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background Effects */}
      <BackgroundBlobs />
      <FloatingStars />
      <FloatingHearts />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <Hero />
      <Story />
      <Gallery />
      <Memories />
      <Funny />
      <MusicPlayer />
      <Background />

      {/* Music */}
      <MusicPlayer />
    </main>
  );
};

export default Home;