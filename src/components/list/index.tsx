import style from "./list.module.scss";
import Item from "./item";
import { Iitem } from "../../types/task";

interface Props {
  item: Iitem[],
  selectTask: (selectedTask: Iitem) => void }

export default function List({item, selectTask,}: Props) {
  return (
    <aside className={style.taskLists}>
      <h2>
        Estudos do dia
      </h2>
      <ul>
        {item.map((item) => (
          <Item 
            selectTask={selectTask}
            key={item.id} 
            {
              ...item
            } />
        ))}
      </ul>
    </aside>
  );
};
