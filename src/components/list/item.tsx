import { Iitem } from "../../types/task";
import style from "./list.module.scss";

export default function Item({ task, time, selected,completed, id}: Iitem) {
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
