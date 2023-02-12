import { IToDo } from "./atoms";

function ToDo({ text }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      <button>Done</button>
      <button>Doing</button>
      <button>Done</button>
    </li>
  );
}

export default ToDo;
