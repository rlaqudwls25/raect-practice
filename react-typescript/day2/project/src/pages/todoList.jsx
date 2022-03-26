import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet, Link, useNavigate } from "react-router-dom";

const TodoList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      setList(result.data);
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };
  return (
    <div>
      <ul>
        {list?.map((item) => (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
