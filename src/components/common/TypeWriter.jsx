import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
  return (
    <TypeAnimation
      sequence={[
        "My first university friend",
        2000,
        "My partner in crime",
        2000,
        "The most annoying person I know",
        2000,
        "The brother I chose",
        3000,
      ]}
      wrapper="span"
      speed={60}
      repeat={Infinity}
      className="text-xl md:text-3xl text-gray-300"
    />
  );
};

export default TypeWriter;