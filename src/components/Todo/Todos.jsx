import React, { useEffect, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Todo from "./Todo";
import { MdAutoFixHigh } from "react-icons/md";

const Todos = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const [editTodo, setEditTodo] = useState(null);

  // add emoji
  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setText(text + emoji);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todoList));
  }, [todoList]);

  // edit todos
  const updateTodo = (text, id, completed) => {
    const newTodo = todoList.map((todo) => {
      return todo.id === id ? { text, id, completed, time: new Date() } : todo;
    });
    setTodoList(newTodo);
    setEditTodo(null);
    setText("");
    setShowEmoji(false);
  };

  useEffect(() => {
    if (editTodo) {
      setText(editTodo.text);
    } else {
      setText("");
    }
  }, [editTodo]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!editTodo) {
      const id = Math.random(Math.round() * 10000000);
      const todo = {
        id,
        text,
        time: new Date(),
        completed: false,
      };
      setTodoList([...todoList, todo]);
      setText("");
      setShowEmoji(false);
    } else {
      updateTodo(text, editTodo.id, editTodo.completed);
    }
  };

  return (
    <div className="pt-3 w-[90%] sm:w-[50%] mx-auto">
      <h1 className="text-6xl font-medium text-center capitalize">
        REACT TEST
      </h1>
      {/* todo input  */}
      <div>
        <form className="flex items-start gap-2 pt-2rem">
          <div className="w-full flex items-end p-2 bg-gradient-to-r from-slate-700 to-slate-800 rounded-md relative">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write your text"
              className="w-full h-28 bg-transparent outline-none resize-none text-sm placeholder:italic"
              cols="30"
              rows="2"
            ></textarea>

            <span
              onClick={() => setShowEmoji(!showEmoji)}
              className="cursor-pointer hover:text-slate-500">
              <BsEmojiSmile />
            </span>

            {showEmoji && (
              <div className="absolute top-[100%] right-2">
                <Picker
                  data={data}
                  emojiSize={20}
                  emojiButtonSize={28}
                  onEmojiSelect={addEmoji}
                  maxFrequentRows={0}
                />
              </div>
            )}
          </div>

          <div className="flex gap-2 flex-col align-middle pt-1">
            <button
              onClick={addTodo} className="flex items-center capitalize gap-2 bg-green-500 text-black font-medium p-4 rounded-md hover:bg-green-300 outline -outline-offset-1 outline-white">
              <AiOutlinePlus />
              Add</button>
            <button
              className="flex items-center a capitalize gap-2 bg-yellow-500 text-black font-medium p-4 rounded-md hover:bg-yellow-300 outline -outline-offset-1 outline-white">
              <MdAutoFixHigh />
              Update</button>
          </div>
        </form>
        {/* print the todo lists  */}
        <div className="pt-2rem">
          <Todo
            todoList={todoList}
            setTodoList={setTodoList}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default Todos;