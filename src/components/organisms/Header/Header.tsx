import React from 'react';
import { 
  createStyles, 
  makeStyles, 
  Theme 
} from "@material-ui/core/styles";
import { 
  CssBaseline,
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton,
  Tooltip,
} from '@material-ui/core';
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness3Icon from "@material-ui/icons/Brightness3";

export interface Props {
  toggleTheme: () => void;
  useDefaultTheme: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    toolbar: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    title: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
  })
);

export const Header = (props: Props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <Typography variant="h6">CodeTest</Typography>
          </div>
          <IconButton onClick={props.toggleTheme}>
            {props.useDefaultTheme ? (
              <Tooltip title="Switch to dark mode" placement="bottom">
                <Brightness3Icon />
              </Tooltip>
            ) : (
              <Tooltip title="Switch to light mode" placement="bottom">
                <Brightness7Icon />
              </Tooltip>
            )}
            </IconButton>
          </Toolbar>
        </AppBar>
    </React.Fragment>
  );
};
