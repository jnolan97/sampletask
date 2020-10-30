import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import Logic from './Logic';
const Container = styled.div`
  display: flex;
`;

export default function App() {
  //const [data,setData] = useState([])

    

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
              element=  {<Logic />}
            />
          </Routes>
        </main>
      </div>
        </Container>
      <Footer />
    </>
  );
}
