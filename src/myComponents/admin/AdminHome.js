import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ModalHandler } from "./ModalHandler";

export const AdminHome = () => {
  return (
    <>
      <Header />
      <ModalHandler />
      <Footer />
    </>
  );
};
export default AdminHome;
