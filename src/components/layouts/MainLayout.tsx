import React from "react";
import Footer from "../modules/Footer";
import Navbar from "../modules/Navbar";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
