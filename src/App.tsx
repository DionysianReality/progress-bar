import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function ProgressBar({
  prevProgress,
  progress,
}: {
  prevProgress: number;
  progress: number;
}) {
  return (
    <div>
      <h1>Progress Bar</h1>
      <div
        style={{
          width: "100%",
          borderRadius: "4px",
          backgroundColor: "#e0e0e0",
        }}
      >
        <motion.div
          style={{
            backgroundColor: "#007bff",
            height: "24px",
            borderRadius: "4px",
          }}
          animate={{ width: [`${prevProgress}%`, `${progress}%`] }}
        ></motion.div>
      </div>
      <p style={{ textAlign: "center" }}>
        {progress}% <em>Complete</em>
      </p>
    </div>
  );
}

function App() {
  const [progress, setProgress] = useState(0);

  const handleProgressIncrease = () => {
    if (progress === 100) {
      return;
    } else {
      setProgress((prevProgress) => {
        return prevProgress + 10;
      });
    }
  };

  return (
    <>
      <main>
        <ProgressBar prevProgress={progress - 10} progress={progress} />
        <button
          style={{
            backgroundColor: "#000080",
            borderRadius: 11,
            boxShadow: "0.11rem 0.1px #454545",
            color: "#FAF9F6",
            fontWeight: "722",
          }}
          onClick={handleProgressIncrease}
        >
          Increase Progress
        </button>
      </main>
    </>
  );
}

export default App;
