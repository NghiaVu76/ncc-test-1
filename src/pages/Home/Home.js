import React from "react";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import Content from "../../../src/components/Content/Content";
const Home = () => {
  return (
    <div>
      <Sidebar />
      <div className="main">
        <Content />
      </div>
    </div>
  );
};

export default Home;
