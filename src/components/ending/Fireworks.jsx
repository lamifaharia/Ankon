import { useEffect } from "react";
import confetti from "canvas-confetti";

const Fireworks = () => {

  useEffect(() => {

    const duration = 8 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {

      const timeLeft = animationEnd - Date.now();

      if(timeLeft <= 0){
        clearInterval(interval);
        return;
      }


      confetti({

        particleCount: 80,

        spread: 100,

        startVelocity: 45,

        origin:{
          x: Math.random(),
          y: Math.random() * .5
        }

      });


    },700);


    return () => clearInterval(interval);

  },[]);


  return null;
};


export default Fireworks;