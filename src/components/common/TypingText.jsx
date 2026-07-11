import { useEffect, useState } from "react";

const TypingText = ({ text, speed = 40 }) => {

  const [display, setDisplay] = useState("");

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {

      setDisplay(
        text.slice(0,index)
      );

      index++;

      if(index > text.length){
        clearInterval(interval);
      }

    }, speed);


    return () => clearInterval(interval);

  }, [text, speed]);


  return (
    <span>
      {display}
    </span>
  );
};


export default TypingText;