import { useState } from "react";

import Intro from "../components/intro/Intro";

import Navbar from "../components/common/Navbar";
import MusicPlayer from "../components/common/MusicPlayer";

import Hero from "../components/hero/Hero";
import Story from "../components/story/Story";
import Gallery from "../components/gallery/Gallery";
import Memories from "../components/memories/Memories";
import Funny from "../components/funny/Funny";

import Background from "../components/background/Background";
import Letter from "../components/letter/Letter";
import Fireworks from "../components/ending/Fireworks";
import FinalMessage from "../components/ending/FinalMessage";

const Home = () => {
  const [started, setStarted] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Intro Screen */}
      {!started && (
        <Intro onStart={() => setStarted(true)} />
      )}

      {/* Background */}
      <Background />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <Hero />
      <Story />
      <Gallery />
      <Memories />
      <Funny />
      <Letter />
      <Fireworks />
      <FinalMessage />
      

      {/* Music Player */}
      <MusicPlayer />
    </main>
  );
};

export default Home;