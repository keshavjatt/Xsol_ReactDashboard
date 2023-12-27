import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import OpenTicket from "./Pages/OpenTicket";
import MyAssets from "./Pages/MyAssets";
import AddAssets from "./Pages/AddAssets";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/OpenTicket" element={<OpenTicket />} />
        <Route path="/MyAssets" element={<MyAssets />} />
        <Route path="/AddAssets" element={<AddAssets />} />
      </Routes>
    </>
  );
}

export default App;