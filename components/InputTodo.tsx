"use client";

import React, { FormEvent, useState } from "react";

export default function InputTodo() {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!description) return;

      const body = { description };
      await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location.href = "/";
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <header className="flex flex-col items-center mt-20 px-4 sm:px-8">
      <h1 className="text-2xl font-bold mb-5">Pern Todo List</h1>
      <form
        className="flex flex-col sm:flex-row justify-center w-full max-w-lg mt-5"
        onSubmit={onSubmitForm}
      >
        <input
          type="text"
          className="border-2 bg-black dark:bg-white text-white dark:text-black border-gray-300 rounded-t sm:rounded-l sm:rounded-t-none py-2 px-4 focus:outline-none focus:border-blue-500 flex-grow"
          placeholder="Enter a todo..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-b sm:rounded-r sm:rounded-b-none mt-5 sm:mt-0 h-auto"
        >
          Add Todo
        </button>
      </form>
    </header>
  );
}
