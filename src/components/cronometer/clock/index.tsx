import style from "./clock.module.scss";

interface Props {
  timer?: number;
}
export default function Clock({ timer = 0 }: Props) {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const [minutTen, minutUnit] = String(minutes).padStart(2, "0");
  const [secTen, secUnit] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.clockNumber}>{minutTen}</span>
      <span className={style.clockNumber}>{minutUnit}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secTen}</span>
      <span className={style.clockNumber}>{secUnit}</span>
    </>
  );
}
