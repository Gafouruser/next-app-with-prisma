"use client";
import React, { useRef } from "react";
import { addTodo } from "../actions/addTodo";
import BoutonSubmit from "./BoutonSubmit";

export default function FormTodo() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      className="flex gap-3 mt-3 items-center"
      action={async (data) => {
        addTodo(data);
        formRef.current?.reset();
      }}
      ref={formRef}
    >
      <div className="flex flex-col">
        <label htmlFor="todo" className="text-sm">
          Ajouter une tâche
        </label>
        <input
          type="text"
          name="todoItem"
          id="todoItem"
          required
          className="border border-gray-300 rounded p-2"
          placeholder="Entrez votre tâche ici"
        />
      </div>

      <BoutonSubmit />
      
    </form>
  );
}
