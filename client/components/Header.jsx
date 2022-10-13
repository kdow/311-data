import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appBar: {
    height: theme.header.height,
    backgroundColor: theme.palette.primary.main,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  button: {
    textTransform: 'none',
    fontFamily: 'Roboto',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: 'white',
    textDecoration: 'none',
  },
  title: {
    ...theme.typography.h1,
    flexGrow: 1,
    fontSize: '30px',
    fontWeight: 'bold',
    letterSpacing: '4px',
  },
  menuPaper: {
    backgroundColor: '#0F181F',
  },
}));

const activeStyle = {
  borderBottom: '1px solid #FFB100',
};

// TODO: links/routing, mobile
const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h1" className={classes.title}>
          <Link to="/" className={classes.link}>311DATA</Link>
        </Typography>
        <NavLink className={classes.link} to="/map" activeStyle={activeStyle}>
          <Button className={classes.button}>Map</Button>
        </NavLink>
        <Button
          id="report-anchor"
          onClick={handleClick}
          className={classes.button}
        >
          Reports
        </Button>
        <Menu
          id="report-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          classes={{ paper: classes.menuPaper }}
        >
          <Link to="/reports/dashboards/overview_combined" className={classes.link}>
            <MenuItem onClick={handleClose} button className={classes.button}>
              Overview
            </MenuItem>
          </Link>
          <Link to="/reports/dashboards/nc_summary_comparison" className={classes.link}>
            <MenuItem onClick={handleClose} button className={classes.button}>
              Compare Two Neighborhoods
            </MenuItem>
          </Link>
        </Menu>
        <NavLink to="/faqs" className={classes.link} activeStyle={activeStyle}>
          <Button className={classes.button}>FAQ</Button>
        </NavLink>
        <NavLink to="/about" className={classes.link} activeStyle={activeStyle}>
          <Button className={classes.button}>About</Button>
        </NavLink>
        <NavLink to="/blog" className={classes.link} activeStyle={activeStyle}>
          <Button className={classes.button}>Blog</Button>
        </NavLink>
        <NavLink to="/privacy" className={classes.link} activeStyle={activeStyle}>
          <Button className={classes.button}>Privacy</Button>
        </NavLink>
        <NavLink to="/contact" className={classes.link} activeStyle={activeStyle}>
          <Button className={classes.button}>Contact</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
