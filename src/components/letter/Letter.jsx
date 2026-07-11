import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Envelope from "./Envelope";
import LetterPaper from "./LetterPaper";
import Reveal from "../common/Reveal";

const Letter = ({ onComplete }) => {
  const [opened, setOpened] = useState(false);

  return (
    <Reveal>
    <section
      id="letter"
      className="
      relative
      overflow-visible
      min-h-screen
      py-40
      flex
      items-center
      justify-center
      px-6
      "
    >
      <AnimatePresence mode="wait">
        {!opened ? (
          <Envelope key="envelope" onOpen={() => setOpened(true)} />
        ) : (
          <LetterPaper key="paper" onComplete={onComplete} />
        )}
      </AnimatePresence>
    </section>
    </Reveal>
  );
};

export default Letter;
