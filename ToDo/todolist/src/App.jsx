import { useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <>
    <h1 style={{textAlign:"center",color:"rgb(170, 51, 106)"}}>React Todos</h1>
      <CssBaseline />
      <TodoList />
      
    </>
  );
}

export default App;
