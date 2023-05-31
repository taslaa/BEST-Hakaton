import { makeObservable, observable, action, computed } from "mobx";

class TodoStore {
  todos = ["Test1", "Test2", "Test3"];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      latest: computed,
      total: computed,
    });
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  get latest() {
    return this.todos[this.todos.length - 1];
  }

  get total() {
    return this.todos.length;
  }
}

const todoStore = new TodoStore();
export default todoStore;
