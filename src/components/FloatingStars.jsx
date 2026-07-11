const stars = Array.from({ length: 120 });

const FloatingStars = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {stars.map((_, index) => (
        <span
          key={index}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
          }}
        />
      ))}
    </div>
  );
};

export default FloatingStars;