import { createStyles, makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() =>
  createStyles({
    menuItem: {
      fontWeight: 400,
      borderRadius: 6,
      margin: "3px 0px",
      color: "#615f58",
      backgroundColor: "#dedcd7",
      "&:hover": {
        backgroundColor: "#586ee00f",
      },
    },

    activeMenuItem: {
      backgroundColor: "#586ee01f",
      color: "#000",
      margin: "3px 0px",
      fontWeight: 400,
      borderRadius: 6,
      "&:hover": {
        backgroundColor: "#586ee01f",
      },
    },

    workflowTitle: {
      fontWeight: 600,
      fontSize: "0.8rem",
      padding: "5px 15px",
      color: "#969180",
      textTransform: "uppercase",
    },
    colPrimary: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "50px 10px 50px 10px",
      backgroundColor: "#dedcd7",
      maxHeight: "100vh",
      overflow: "auto",
      borderRight: `1px solid #615f58`,
    },

    colSecondary: {
      display: "flex",
      justifyContent: "left",
      padding: "50px 10px 50px 10px",
      backgroundColor: "#dedcd7",
      maxHeight: "100vh",
      overflow: "auto",
    },

    menu: {
      width: "200px",
      fontSize: "0.9rem",
    },

    content: {
      width: "100%",
    },
    image: {
      maxHeight: "40vh",
      maxWidth: "40vh",
      margin: "8px 5px",
      borderRadius: 5,
    },
    titleGrid: {
      padding: 10,
    },
    avalability: {
      backgroundColor: "#586ee03f",
      color: "#000",
      margin: "3px 0px",
      padding: "2px 3px",
      fontWeight: 400,
      borderRadius: 6,
      "&:hover": {
        backgroundColor: "#586ee05f",
      },
    },
    avalabilityGrid: {
      padding: "0px 40px 40px 0px",
    },
    facilities: {
      color: "#369e53",
    },
    paperstyle: {
      padding: 20,
      margin: "20px auto",
      backgroundColor: "#dedcd7",
      borderRadius: 6,
      marginBottom: 5,
    },
  })
);
export default styles;
