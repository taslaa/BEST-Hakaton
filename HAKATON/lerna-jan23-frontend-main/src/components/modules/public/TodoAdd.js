import { useState } from "react";
import notificationsStore from "../../../data/stores/NotificationsStore";
import todoStore from "../../../data/stores/TodoStore";

const TodoAdd = () => {
  const [userInput, setUserInput] = useState();

  const addNewTodo = () => {
    todoStore.addTodo(userInput);
    notificationsStore.notify("New to-do added!", "You have added a to-do task '" + userInput + "'.");
  };
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <input className="form-control" type="text" onChange={(e) => setUserInput(e.target.value)} placeholder="Enter new to do..."></input>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={addNewTodo}>
            + Add
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoAdd;
