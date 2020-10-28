import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Task from './Task';
import Column from './column';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import ReactDOM from 'react-dom';
import tasks from './db.json';
const Container = styled.div`
  display: flex;
`;

export default function App() {
  const [data,setData] = useState([])
  const json = tasks;


  return (
    <>
        <Container>
      <div className="content">

        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to sample Page!!</h1>} />
            <Route
              path="/task"
              element=      {json.columns.map((columnId,index) => {
                const column = json.columns[index];
                const names = json.tasks.filter(i => i.id === column.taskIds)
                console.log('col',column);
                console.log('tasks',tasks)
                 return <Column key={column.id} column={column.id} names={names} /> //onDelete={this.onDelete(this.state)}
                })}
            />
          </Routes>
        </main>
      </div>
        </Container>
      <Footer />
    </>
  );
}
