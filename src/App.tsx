import ProgressBar from "./ProgressBar";

function App() {
  const progressBars = [0, 5, 10, 60, 70, 85, 100];
  return (
    <>
      <div className="flex justify-center flex-col items-center text-4xl">
        <p className="font-bold text-gray-800">Progress Bars</p>
      </div>
      {progressBars.map((bar) => (
        <ProgressBar key={bar} progress={bar} />
      ))}
    </>
  );
}

export default App;
