import { useEffect, useState } from "react";

const BirthdayCountdown = () => {
  const birthday = new Date("2026-12-10"); // <-- Change to Ankon's birthday
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = birthday - now;

      if (difference <= 0) {
        setTimeLeft(null);
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft)
    return (
      <h2 className="text-2xl font-bold text-pink-400 mt-8">
        🎉 Happy Birthday Bhai!
      </h2>
    );

  return (
    <div className="mt-8 flex justify-center gap-6 text-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key}>
          <h3 className="text-3xl font-bold">{value}</h3>
          <p className="capitalize text-gray-400">{key}</p>
        </div>
      ))}
    </div>
  );
};

export default BirthdayCountdown;