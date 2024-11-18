import React, { useState } from "react";
import "./App.css";
import { Tabs } from "antd";
import TodoList from "../../MFEB/src/TodoList";
import UserList from "../../MFEA/src/UserList";
import axios from 'axios'

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "MFEA",
    children: <UserList />,
  },
  {
    key: "2",
    label: "MFEB",
    children: <TodoList />,
  },
];

function App() {
  return (
    <>
      <div>
        <h1>Container Application</h1>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
      </div>
    </>
  );
}

export default App;
