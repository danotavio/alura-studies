import { useState } from "react";
import Cronometer from "../components/cronometer";
import Form from "../components/form/index";
import List from "../components/list/index";
import { Iitem } from "../types/task";
import style from "./app.module.scss";

function App() {
  const [item, setItem] = useState<Iitem[]>([]);
  const [taskSelect, setTaskSelect] = useState<Iitem>();

  function selectTask(selectedTask: Iitem) {
    setTaskSelect(selectedTask);
    setItem((oldTasks) =>
      oldTasks.map((item) => ({
        ...item,
        selected: item.id === selectedTask.id ? true : false,
      }))
    );
  }
  function taskEnded() {
    if (taskSelect) {
      setTaskSelect(undefined);
      setItem((oldTasks) =>
        oldTasks.map((item) => {
          if (item.id === taskSelect.id) {
            return {
              ...item,
              selected: false,
              completed: true,
            };
          }
          return item;
        })
      );
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setItem={setItem} />
      <List item={item} taskSelect={selectTask} />
      <Cronometer taskSelect={taskSelect} taskEnded={taskEnded} />
    </div>
  );
}

export default App;
