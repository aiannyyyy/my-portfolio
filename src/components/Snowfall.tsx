// Snowfall.tsx - Self-contained snowfall effect component
// Simply import and add <Snowfall /> to your app, remove when season ends

import { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  opacity: number;
  size: number;
  delay: number;
}

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: Math.random() * 3 + 2,
      opacity: Math.random() * 0.6 + 0.4,
      size: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <>
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10px) translateX(0);
          }
          50% {
            transform: translateY(50vh) translateX(20px);
          }
          100% {
            transform: translateY(100vh) translateX(0);
          }
        }
        .snowflake {
          animation: snowfall linear infinite;
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute snowflake"
            style={{
              left: `${flake.left}%`,
              animationDuration: `${flake.animationDuration}s`,
              animationDelay: `${flake.delay}s`,
              opacity: flake.opacity,
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              top: '-10px',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500 dark:text-white drop-shadow-lg"
            >
              <path d="M12 2v20M2 12h20M5.64 5.64l12.72 12.72M5.64 18.36L18.36 5.64M12 2L9 5l3 3 3-3-3-3zM12 22l-3-3 3-3 3 3-3 3zM2 12l3-3 3 3-3 3-3-3zM22 12l-3 3-3-3 3-3 3 3z" />
            </svg>
          </div>
        ))}
      </div>
    </>
  );
};

export default Snowfall;