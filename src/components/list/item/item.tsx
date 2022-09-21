import { Iitem } from "../../../types/task";
import style from "./item.module.scss";

interface Props extends Iitem {
  taskSelect: (selectedTask: Iitem) => void;
}

export default function Item({
  task,
  time,
  selected,
  completed,
  id,
  taskSelect,
}: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.selectedItem : ""} ${
        completed ? style.itemCompleted : ""
      }`}
      onClick={() =>
        !completed &&
        taskSelect({
          task,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.finish} aria-label="Item concluído"></span>
      )}
    </li>
  );
}
