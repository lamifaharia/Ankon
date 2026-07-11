import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Envelope from "./Envelope";
import LetterPaper from "./LetterPaper";

const Letter = () => {
  const [opened, setOpened] = useState(false);

  return (
    <section
      id="letter"
      className="relative min-h-screen py-40 flex items-center justify-center px-6"
    >

      <AnimatePresence mode="wait">

        {!opened ? (
          <Envelope
            key="envelope"
            onOpen={() => setOpened(true)}
          />
        ) : (

          <LetterPaper
            key="letter"
          />

        )}

      </AnimatePresence>

    </section>
  );
};

export default Letter;