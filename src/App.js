import Quiz from "./Quiz";
import "./styles.css";
import { quiz } from "./constant";

export default function App() {
  return (
    <div>
      <Quiz quizQuestion={quiz?.questions} />
    </div>
  );
}
