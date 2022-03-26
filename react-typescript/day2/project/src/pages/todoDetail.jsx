import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const TodoDetail = () => {
  const [list, setList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );

      setList(result.data);
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };
  return (
    <div>{list.completed ? `${list.title} done` : `${list.title} not yet`}</div>
  );
};

export default TodoDetail;
