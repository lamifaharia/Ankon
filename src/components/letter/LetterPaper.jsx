import { motion } from "framer-motion";
import TypingText from "../common/TypingText";

const letterText = `
Bhai,

I don't know where to start.

Four years ago, I didn't know that a random person I met in university would become someone so important in my life.

You are not just a friend to me.

You became family.

You annoyed me.
You made me laugh.
You protected me.
You listened to me.

And honestly...

Life at university would not have been the same without you.

Thank you for being my Bhai.

Happy Birthday ❤️
`;

const LetterPaper = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
        rotateX: -90,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotateX: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="
max-w-3xl
w-full
bg-white
text-gray-800
rounded-[35px]
p-10
md:p-16
shadow-2xl
"
    >
      <h2
        className="
font-heading
text-5xl
text-center
mb-10
text-pink-500
"
      >
        Dear Bhai,
      </h2>

      <p
        className="
text-lg
leading-10
whitespace-pre-line
"
      >
        <TypingText text={letterText} speed={35} />
      </p>
    </motion.div>
  );
};

export default LetterPaper;
