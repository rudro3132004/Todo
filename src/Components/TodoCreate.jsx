import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function TodoCreate(props) {
  const [todoList, setTodoList] = useState(() => {
    try {
      // ✅ Load saved todos safely
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Invalid localStorage data:", e);
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const textareaRef = useRef(null);


  // ✅ Save todos to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  // 🔹 Auto resize textarea height
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      const newHeight = Math.min(textarea.scrollHeight, 300);
      textarea.style.height = `${newHeight}px`;
    }
  }, [note]);

  // ✅ Add new todo
  const addTodo = () => {
    if (!title.trim() && !note.trim()) return;

    const newTodo = {
      id: Date.now(),
      title,
      note,
    };

    setTodoList((prev) => [...prev, newTodo]);
    setTitle("");
    setNote("");
    setIsOpen(false);
    props.setAutoReloade(Date.now())
  };

  return (
    <div className="sticky flex justify-center items-center py-10 mb-10 z-30">
      {/* Main Input Box */}
      <div className="bg-white border border-slate-300 p-2 rounded-lg w-80 md:w-[550px] flex justify-between items-center gap-4 shadow-lg relative dark:shadow-white/30">
        <p
          className="w-full pl-5 text-slate-500 cursor-text"
          onClick={() => setIsOpen(true)}
        >
          Take a Note
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="px-5 py-2 bg-amber-500 rounded-lg text-white"
        >
          Add
        </button>

        {/* Popup Form */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[-3px] left-[-3px] w-[330px] md:w-[560px] bg-white p-3 pl-5 rounded-lg border border-slate-400 content-box shadow-lg"
          >
            <input
              className="w-full text-xl md:text-2xl border-none outline-none mb-4"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              ref={textareaRef}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Take a note..."
              rows={1}
              className="w-full resize-none border-none outline-none mb-3 text-base overflow-y-auto transition-all duration-300"
              style={{ maxHeight: "300px" }}
            />

            <div className="w-full flex justify-end items-center gap-5 mt-2">
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer px-4 py-2 text-sm rounded-lg border border-slate-400 hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={addTodo}
                className="cursor-pointer px-4 py-2 text-sm text-white bg-amber-500 rounded-lg border border-slate-400 hover:bg-amber-600"
              >
                Add
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
