import { useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/birthday.mp3" type="audio/mp3" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed right-6 bottom-6 btn btn-circle btn-primary z-50"
      >
        {playing ? <FaPause /> : <FaPlay />}
      </button>
    </>
  );
};

export default MusicPlayer;