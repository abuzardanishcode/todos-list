import React from 'react'; // Add this line if it's missing
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import AddTodo from './MyComponents/AddTodo'; // Ensure this matches your component name
import Footer from "./MyComponents/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import About from './MyComponents/About';

import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todo');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todo) => {
    console.log("Delete karne ki koshish ki", todo);
    setTodos(todos.filter((e) => e !== todo));
  };

  const handleAddTodo = (title, desc) => {
    const newTodo = {
      sno: todos.length + 1,
      title: title,
      desc: desc
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header title="My Todo Website" searchForm={false} />
        <Routes>
      
          <Route path="/" element={
            <div className='content'>
              <AddTodo addkaro={handleAddTodo} />
              <Todos TodosApp={todos} DeleteKaro={handleDelete} />
            </div>
          } />
          <Route path='/about' element={<div className='content'><About /></div>}  />
        
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
