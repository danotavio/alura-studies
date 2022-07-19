import { useState } from "react";
import Cronometer from "../components/cronometer";
import Form from "../components/form/index";
import List from "../components/list/index";
import style from "./app.module.scss";
import { Iitem } from "../types/task";

function App() {
  const [item, setItem] = useState<Iitem[] | []>([]);
  const [selectedTask, setSelectedTask] = useState<Iitem>();

  function selectTask(selectedTask: Iitem) {
    setSelectedTask(selectedTask);
    setItem(oldTasks => oldTasks.map(item => ({
      ...item,
      selected: item.id === selectedTask.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form setItem={setItem} />
      <List item={item} selectTask={selectTask} />
      <Cronometer />
    </div>
  );
}

export default App;
