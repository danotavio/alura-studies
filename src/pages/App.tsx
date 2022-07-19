import {useState} from "react";
import Cronometer from "../components/cronometer";
import Form from "../components/form/index";
import List from "../components/list/index";
import style from "./app.module.scss";
import { Iitem } from "../types/task";

function App() {
  const [item, setItem] = useState<Iitem[] | []> ([]);
  return (
    <div className={style.AppStyle}>
      <Form setItem={setItem}/>
      <List item={item}/>
      <Cronometer />
    </div>
  );
}

export default App;
