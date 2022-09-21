import { Iitem } from "../../types/task";
import Item from "./item/item";
import style from "./list.module.scss";

interface Props {
  item: Iitem[];
  taskSelect: (taskSelect: Iitem) => void;
}

export default function List({ item, taskSelect }: Props) {
  return (
    <aside className={style.taskLists}>
      <h2>Estudos do dia</h2>
      <ul>
        {item.map((item) => (
          <Item taskSelect={taskSelect} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}
