import React, { FC, ReactNode } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

// components
import { Header } from "../Header/Header";
// import Footer from "./Footer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flexGrow: 1,
      minHeight: `calc(100vh - 30px)`,
      maxWidth: '80%',
      padding: theme.spacing(3),
      margin: '0 auto',
      marginTop: '70px',
    },
    toolbar: {
      ...theme.mixins.toolbar,
    },
  })
);

interface Props {
  toggleTheme: () => void;
  useDefaultTheme: boolean;
  children?: ReactNode;
}

const Layout: FC<Props> = ({ toggleTheme, useDefaultTheme, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        toggleTheme={toggleTheme}
        useDefaultTheme={useDefaultTheme}
      />
      <main className={classes.content}>
        {children}
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </div>
  );
};

export default Layout;