import { useState, useEffect } from "react";

export default function TapGame() {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTarget, setShowTarget] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setShowTarget(true);
        setTimeout(() => setShowTarget(false), 700);
      }, Math.random() * 2000 + 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const startGame = () => {
    setScore(0);
    setIsPlaying(true);
  };

  const handleTap = () => {
    if (showTarget) {
      setScore(score + 1);
      setShowTarget(false);
    }
  };

  const sendScore = () => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.sendData(`score:${score}`);
    }
    setIsPlaying(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Тапай, пока видишь!</h1>
      {isPlaying ? (
        <div>
          {showTarget && (
            <div
              className="w-20 h-20 bg-red-500 rounded-full mt-5 cursor-pointer"
              onClick={handleTap}
            ></div>
          )}
        </div>
      ) : (
        <button className="mt-5 px-4 py-2 bg-blue-500 text-white rounded" onClick={startGame}>
          Начать игру
        </button>
      )}
      <p className="mt-4 text-lg">Очки: {score}</p>
      {isPlaying && (
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded" onClick={sendScore}>
          Завершить
        </button>
      )}
    </div>
  );
}
