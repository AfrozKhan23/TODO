import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ToDo from "./ToDo";
import axios from "axios";
import { baseUrl } from "../url";

const Main = () => {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [toDoId, setToDoId] = useState(null);

  useEffect(() => {
    const getAllTodo = async () => {
      try {
        const response = await axios.get(`${baseUrl}`);
        setToDo(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    getAllTodo();
  }, [updateUI]);

  const addToDo = () => {
    if (text === "") return;
    axios
      .post(`${baseUrl}/post`, { text })
      .then((response) => {
        console.log(response.data);
        setUpdateUI((prevState) => !prevState);
        setText("");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  };

  const updateToDo = () => {
    axios
      .put(`${baseUrl}/update/${toDoId}`, { text })
      .then((response) => {
        console.log(response.data);
        setToDoId(null);
        setUpdateUI((prevState) => !prevState);
        setText("");
      })
      .catch((error) => {
        console.error("Error updating todo:", error);
      });
  };

  const updateMode = (id, text) => {
    setText(text);
    setToDoId(id);
  };

  let data = Array.from(toDo);
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Type here..."
        className="mt-16 ml-10 w-44 sm:w-72 sm:ml-24 md:w-[300px] md:ml-40 lg:w-[450px] xl:w-[550px] xl:ml-72 p-4 rounded-l-full outline-none border-none text-xl pl-10 relative lg:ml-60"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
      />
      <button
        type="submit"
        onClick={toDoId ? updateToDo : addToDo}
        className="absolute right-10vw sm:right-15vw md:right-20vw lg:right-25vw xl:right-30vw top-[140px] bg-yellow-500 outline-yellow-500 border-none w-20 h-[59px] rounded-r-full cursor-pointer"
      >
        {toDoId ? (
          <EditNoteIcon
            className="absolute top-3 left-5"
            sx={{ color: "white" }}
            fontSize="large"
          />
        ) : (
          <AddIcon
            className="absolute top-3 left-5  "
            sx={{ color: "white" }}
            fontSize="large"
          />
        )}
      </button>
      <ul className="flex gap-1 flex-wrap ml-10 lg:ml-28">
        {data.map((item) => (
          <ToDo
            key={item._id}
            id={item._id}
            text={item.text}
            setUpdateUI={setUpdateUI}
            updateMode={updateMode}
          />
        ))}
      </ul>
    </div>
  );
};

export default Main;
