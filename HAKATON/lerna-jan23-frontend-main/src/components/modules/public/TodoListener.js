import { reaction, when } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import todoStore from "../../../data/stores/TodoStore";

const TodoListener = observer(() => {
  const [todaysTodosCount, setTodaysTodosCount] = useState(0);

  useEffect(() => {
    reaction(
      () => todoStore.total,
      () => {
        if (todoStore.latest.includes("today")) {
          setTodaysTodosCount((prev) => prev + 1);
        }
      }
    );

    when(
      () => todoStore.todos.length > 10,
      () => {
        alert("Unijeli ste preko 10 to-do stavki!");
        this.dispose();
      }
    );
  }, []);

  return (
    <>
      <span>Broj današnji to-do stavki: {todaysTodosCount}</span>
      <span>Ukupno to-do stavki: {todoStore.total}</span>
    </>
  );
});

export default TodoListener;
