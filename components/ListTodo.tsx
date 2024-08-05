"use client";

import React, { useState, useEffect } from "react";
import EditTodo from "@/components/EditTodo";

export default function ListTodo() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`);
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(
        todos.filter((todo: { todo_id: number }) => todo.todo_id !== id)
      );
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="overflow-x-auto p-4 sm:p-8">
      <table className="mx-auto w-full max-w-4xl border-collapse">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2 border-b-2 border-gray-700 text-left">
              Description
            </th>
            <th className="px-4 py-2 border-b-2 border-gray-700 text-left">
              Edit
            </th>
            <th className="px-4 py-2 border-b-2 border-gray-700 text-left">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map((todo: { todo_id: number; description: string }) => (
              <tr
                key={todo.todo_id}
                className="dark:odd:bg-white dark:even:bg-gray-100 odd:bg-black even:bg-gray-800"
              >
                <td className="px-4 py-2 border-b border-gray-300 dark:text-black text-white">
                  {todo.description}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <EditTodo todo={todo} />
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300"
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}{" "}
          : (
          <tr>
            <td colSpan={3} className="text-center py-4">
              Fetching Data... Please Wait
            </td>
          </tr>
          )
        </tbody>
      </table>
    </div>
  );
}
