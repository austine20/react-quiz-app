import "./styles.css";
import { quiz } from "./constant";
import Quiz from "./components/Quiz/Quiz";

export default function App() {
  return (
    <div>
      <Quiz quizQuestion={quiz?.questions} />
    </div>
  );
}
