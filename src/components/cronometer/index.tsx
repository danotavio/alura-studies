import { useEffect, useState } from "react";
import { timeForSeconds } from "../../common/utils/time";
import { Iitem } from "../../types/task";
import Button from "../buttons";
import Clock from "./clock";
import style from "./cronometer.module.scss";

interface Props {
  taskSelect?: Iitem;
  taskEnded: () => void;
}

export default function Cronometer({ taskSelect, taskEnded }: Props) {
  const [timer, setTimer] = useState<number>();

  useEffect(() => {
    if (taskSelect?.time) {
      setTimer(timeForSeconds(taskSelect?.time));
    }
  }, [taskSelect]);

  function startClock(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTimer(count - 1);
        return startClock(count - 1);
      }
      taskEnded();
    }, 1000);
  }

  return (
    <div className={style.cronometer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock timer={timer} />
      </div>
      <div>
        <Button onClick={() => startClock(timer)}>Começar</Button>
      </div>
    </div>
  );
}
