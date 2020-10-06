import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, IconButton, Link, Toolbar, Typography} from '@material-ui/core';
import Logo from '../../../resources/icon-summonerswar-intelligence.png'
import GitHubIcon from '@material-ui/icons/GitHub';

import { GITHUB_LINK } from '../../constants/app';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    emptyTitle: {
      flexGrow: 1,
    },
    logo: {
      height: 68,
      margin: theme.spacing(1),
    },
  }),
);

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img className={classes.logo} src={Logo} alt="logo" />
          <Typography variant="h6" className={classes.emptyTitle}>
          
          </Typography>
          <IconButton href={GITHUB_LINK} target="_blank" color="inherit">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}