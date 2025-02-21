import { useEffect, useState } from "react";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 2000);
  }, [progress]);
  return (
    <div className="h-8 border-2 border-gray-950 rounded-full flex font-sans font-semibold mt-10 w-4/5 m-auto overflow-hidden text-white">
      <div
        className={`h-full bg-yellow-950 flex font-white rounded-s-full overflow-hidden`}
        style={{
          transform: `translateX(${animatedProgress - 100}%)`,
          transition: "2s ease-in",
          width: "100%",
        }}
      >
        <span className="flex w-full justify-end pr-1">{animatedProgress}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
