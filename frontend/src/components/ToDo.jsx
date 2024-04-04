import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { baseUrl } from "../url";

const ToDo = ({ id, text, setUpdateUI, updateMode }) => {
  const deleteToDo = () => {
    axios
      .delete(`${baseUrl}/delete/${id}`)
      .then(() => {
        setUpdateUI((prevState) => !prevState);
      })
      .catch((error) => {
        console.error("Error deleting todo:", error);
      });
  };

  return (
    <div>
      <li className="relative mt-5 top-20 list-none bg-white ml-5 w-72 h-16 p-2 text-slate-500">
        {text}

        <EditIcon
          className="absolute bottom-[-16px] right-20 bg-yellow-500 rounded-full p-2 cursor-pointer"
          sx={{ color: "white" }}
          fontSize="small"
          onClick={() => updateMode(id, text)}
        />
        <DeleteIcon
          className="absolute bottom-[-16px] right-5 bg-yellow-500 rounded-full p-2 cursor-pointer"
          sx={{ color: "white" }}
          fontSize="small"
          onClick={deleteToDo}
        />
      </li>
    </div>
  );
};

export default ToDo;
