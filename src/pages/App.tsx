import React from "react";
import Cronometer from "../components/cronometer";
import Form from "../components/form/index";
import List from "../components/list/index";
import style from "./app.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <Cronometer />
      <List />
    </div>
  );
}

export default App;
