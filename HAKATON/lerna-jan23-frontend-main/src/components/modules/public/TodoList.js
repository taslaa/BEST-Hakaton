import { observer } from "mobx-react-lite";
import todoStore from "../../../data/stores/TodoStore";

const TodoList = observer(() => {
  return (
    <>
      <div className="form-group">
        <table className="table table-striped">
          <thead>
            <th>To do</th>
          </thead>
          <tbody>
            {todoStore.todos.map((todo, i) => (
              <tr key={i}>
                <td>{todo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
});

export default TodoList;
