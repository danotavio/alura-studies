import React from "react";
import Button from "../buttons/index";

class Form extends React.Component {
    render() {
        return(
            <form>
            <div>
              <label htmlFor="task">
                Adicione um novo estudo
                <input
                  type="text"
                  name="task"
                  id="task"
                  placeholder="O que você quer Estudar?"
                  required
                ></input>
              </label>
            </div>
            <div>
              <label htmlFor="time">
                Tempo
                <input
                  type="time"
                  step="1"
                  name="time"
                  id="time"
                  min="00:00:00"
                  max="01:30:00"
                  required
                ></input>
              </label>
            </div>
            <Button />
          </form>
        )
    }
}

export default Form;