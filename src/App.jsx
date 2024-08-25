import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import UpdateUser from "./pages/UpdateUser";
import AddUser from "./pages/AddUser";
import Home from "./pages/Home";
import { getRequest } from "./api/routerApi";

const App = () => {
  useEffect(() => {
    getRequest();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add" element={<AddUser />} />
        <Route path="update/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
};

export default App;
