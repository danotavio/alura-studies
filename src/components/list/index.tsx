import style from "./list.module.scss";
import Item from "./item";
import { Iitem } from "../../types/task";


export default function List({item}: {item: Iitem[]}) {


  return (
    <aside className={style.taskLists}>
      <h2>
        Estudos do dia
      </h2>
      <ul>
        {item.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
};
