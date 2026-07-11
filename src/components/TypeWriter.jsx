import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
  return (
    <TypeAnimation
      sequence={[
        "To my favorite human ❤️",
        2000,
        "To my brother ❤️",
        2000,
        "To the person who never left my side ❤️",
        2000,
      ]}
      wrapper="h2"
      speed={45}
      repeat={Infinity}
      className="text-2xl md:text-4xl font-semibold text-pink-300"
    />
  );
};

export default TypeWriter;