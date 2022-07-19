import Button from "../buttons";
import Clock from "./clock";
import style from './cronometer.module.scss';

export default function Cronometer(){
    return(
        <div className={style.cronometer}>
            <p className={style.title}>
                Escolha um card e inicie o cronômetro
            </p>
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <div>
                <Button>
                    Começar
                </Button>
            </div>
            
        </div>
    )
}