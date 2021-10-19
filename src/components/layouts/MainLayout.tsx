import React from "react";
import Footer from "../modules/Footer";
import Navbar from "../modules/Navbar";

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
