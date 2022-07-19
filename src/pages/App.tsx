import React from "react";
import Form from "../components/form/index";
import List from "../components/list/index";
import style from "./app.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;
