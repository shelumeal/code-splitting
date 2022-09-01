import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
// import Profile from "./components/Profile";
// import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const LazyProfile = React.lazy(() => import("./components/Profile"));
const LazyDashboard = React.lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/dashboard"
          element={
            <React.Suspense fallback="Loading...">
              <LazyDashboard />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <React.Suspense fallback="Loading...">
              <LazyProfile />
            </React.Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
