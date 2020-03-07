import { createStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

export const useStyles = ({ palette, spacing, breakpoints }: Theme) =>
  createStyles({
    Container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    Header: {
      flexGrow: 1
    },
    AppBar_menuButton: {
      marginRight: spacing(2)
    },
    AppBar_title: {
      flexGrow: 1
    },
    Sidebar: {},
    Drawer__list: {
      width: 250
    },
    Icon: {
      maxWidth: 32,
      maxHeight: 24
    },
    Main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      backgroundColor: palette.secondary.light,
      height: "calc(100vh - 64px)",
      [breakpoints.up("sm")]: {
        minHeight: 500
      },
      [breakpoints.up("md")]: {
        minHeight: 650
      }
    },
    CardList: {
      display: "grid",
      gridTemplateColumns: "auto",
      gridTemplateRows: "repeat(10, auto)",
      justifyContent: "center",
      gridGap: "1em 2em",
      padding: "2em",
      [breakpoints.up("sm")]: {
        gridTemplateColumns: "repeat(5, auto)",
        gridTemplateRows: "repeat(2, auto)"
      }
    },
    Scene: {
      perspective: 600,
      height: 58,
      width: "95vw",
      overflow: "hidden",
      textAlign: "center",
      [breakpoints.up("sm")]: {
        height: 473 / 3,
        width: 296 / 3,
        overflow: "visible"
      },
      [breakpoints.up("md")]: {
        height: 473 / 2,
        width: 296 / 2
      }
    },
    Card: {
      width: "100%",
      height: "100%",
      position: "relative",
      transitionProperty: "transform",
      transitionDuration: "1s",
      transitionTimingFunction: "ease-in-out",
      transformStyle: "preserve-3d"
    },
    Card__face: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backfaceVisibility: "hidden"
    },
    Card__image: {
      borderRadius: 14,
      maxWidth: "296px",
      [breakpoints.up("sm")]: {
        maxHeight: "100%",
        maxWidth: "100"
      }
    },
    Card__face__back: {
      transform: "rotateY(180deg)"
    },
    Card__face__front: {},
    Card__flipped: {
      transform: "translateX(600px)",
      [breakpoints.up("sm")]: {
        transform: "rotateY(180deg)"
      }
    },
    RandomIcon: {
      marginLeft: "0.5em"
    }
  });
