import { useState } from "react";

import Intro from "../components/intro/Intro";
import Navbar from "../components/common/Navbar";
import Hero from "../components/hero/Hero";
import Story from "../components/story/Story";
import Gallery from "../components/gallery/Gallery";
import Memories from "../components/memories/Memories";
import Funny from "../components/funny/Funny";
import Background from "../components/background/Background";
import Letter from "../components/letter/Letter";
import FinalMessage from "../components/ending/FinalMessage";
import BackToTop from "../components/common/BackToTop";

const Home = () => {
  const [started, setStarted] = useState(false);
  const [showEnding, setShowEnding] = useState(false);

  return (
    <main className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">

      <Background />

      {!started && (
        <Intro onStart={() => setStarted(true)} />
      )}

      <div className="relative z-10">

        <Navbar />

        <Hero />

        <Story />

        <Gallery />

        <Memories />

        <Funny />

        <Letter onComplete={() => setShowEnding(true)} />

        {showEnding && <FinalMessage />}

        <BackToTop />

      </div>

    </main>
  );
};

export default Home;