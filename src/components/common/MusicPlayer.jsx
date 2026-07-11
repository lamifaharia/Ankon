import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }

      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Unable to play audio:", error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/birthday.mp3"
        loop
      />

      {/* Music Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full
        bg-gradient-to-r from-pink-500 to-purple-600
        shadow-2xl flex items-center justify-center
        hover:scale-110 duration-300"
      >
        {isPlaying ? (
          <FaPause className="text-white text-xl" />
        ) : (
          <FaPlay className="text-white text-xl ml-1" />
        )}
      </button>

      {/* Hint */}
      {!isPlaying && (
        <div
          className="fixed bottom-28 right-8 z-50
          backdrop-blur-xl
          bg-white/10
          border border-white/10
          rounded-2xl
          px-5 py-3
          text-sm
          text-white
          flex items-center gap-2"
        >
          <FaMusic />
          <span>Play the soundtrack 🎵</span>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;