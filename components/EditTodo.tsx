"use client";

import React, { useState } from "react";

function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div
        className="absolute inset-0 bg-gray-500 opacity-75"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg p-8 relative z-20">{children}</div>
    </div>
  );
}

export default function EditTodo({
  todo = {
    todo_id: 0,
    description: "",
  },
}: {
  todo?: { todo_id: number; description: string };
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [todoText, setTodoText] = useState("");
  const [description, setDescription] = useState(todo.description);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const updateDescription = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location.href = "/";
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpenModal}
      >
        Edit Todo
      </button>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <h2 className="text-xl font-bold mb-4">Edit Todo</h2>
        <input
          className="appearance-none bg-transparent border-b border-gray-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Edit Todo"
          aria-label="Edit Todo"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={(e) => updateDescription(e)}
          >
            Save
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
}
