import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  let [NewTodo, setNewTodo] = useState("");
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);

  //function to add the new input value to the todo list
  const addNewTask = () => {
    console.log("button was clicked");
    setTodos((prevTodos) => {
      return [...prevTodos, { task: NewTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  //function to control the input field
  const updateTodoValue = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setNewTodo(event.target.value);
  };

  const uppercase = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      }),
    );
  };

  const uppercaseOne = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      }),
    );
  };

  const markEverything = () => {
    setTodos((todos) =>
      todos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      }),
    );
  };

  const markDone = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      }),
    );
  };

  return (
    <div className="flex flex-col w-4/10 h-fit text-center m-auto mt-12 bg-white p-10  rounded-lg justify-center shadow-2xl shadow-gray-600 ">
      <div className="flex">
        <input
          type="text"
          placeholder="add a new task"
          value={NewTodo}
          onChange={updateTodoValue}
          className="bg-slate-200 py-2 px-5 text-lg rounded-lg w-7/10 mr-4 focus:outline-0 transition"
        />
        <br />
        <br />
        <button
          className="bg-indigo-600 hover:bg-indigo-900 rounded-lg py-2 px-4 text-white"
          type="submit"
          onClick={addNewTask}
        >
          Add Task
        </button>
      </div>

      <h3 className="text-2xl font-bold mb-4 mt-8">Tasks Todo :</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              className="text-lg font-semibold"
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>

            <button
              className="px-3 bg-amber-600 rounded-lg my-2 mr-2 ml-2 text-white"
              onClick={() => {
                uppercaseOne(todo.id);
              }}
            >
              Uppercase
            </button>
            <button
              className="px-3 bg-green-600 rounded-lg mr-2 text-white"
              onClick={() => {
                markDone(todo.id);
              }}
            >
              Mark Done
            </button>
            <button
              className="px-3 bg-red-500 rounded-lg text-white"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="flex justify-center box-border gap-2 mt-6 text-white font-semibold">
        <button className="bg-indigo-500 rounded-lg w-1/2" onClick={uppercase}>
          UpperCase All
        </button>
        <button
          className="bg-indigo-500 rounded-lg w-1/2 py-1 text-white font-semibold"
          onClick={markEverything}
        >
          Mark All Done
        </button>
      </div>
    </div>
  );
};

export default TodoList;
