import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  const min = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [dispatch]);

  return (
    <div className="timer">
      {min < 10 && sec < 10
        ? `0${min}:0${sec}`
        : min < 10
        ? `0${min}:${sec}`
        : `${min}:${sec}`}
    </div>
  );
}

export default Timer;
