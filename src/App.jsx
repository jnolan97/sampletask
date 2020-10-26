import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Task from './Task';

export default function App() {

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to sample Page!!</h1>} />
            <Route
              path="/task"
              element={<Task />}
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
