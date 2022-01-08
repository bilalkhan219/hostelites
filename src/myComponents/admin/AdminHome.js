import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { ModalHandler } from "./ModalHandler";
import useStyles from "./styles";
export const AdminHome = () => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <ModalHandler />
      <Footer />
    </>
  );
};
export default AdminHome;
