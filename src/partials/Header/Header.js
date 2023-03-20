import { useState } from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home"
import PersonAddIcon from "@material-ui/icons/PersonAdd"
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(() => ({
  tittle: {
    flexGrow: 1,
    marginLeft: 10,
  },
}));



const Header = ({ user }) => {
  const classes = useStyles()
  const history = useHistory({forceRefresh: true})

  const [menuOpen, setMenuOpen] = useState(false)
  
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuClick = route => {
    history.push(route)
    handleToggleMenu()
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => handleToggleMenu()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" className={classes.tittle}>
            News
          </Typography>
          {
            user.logged
            ? <Typography variant="h6">{user.email}</Typography>
            : <Button color="inherit">Login</Button>
          }
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
        <List>
          <ListItem button onClick={() => handleMenuClick("/")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick("/customers")}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText>Lista de Clientes</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick("/customers/add")}>
            <ListItemIcon><PersonAddIcon /></ListItemIcon>
            <ListItemText>Cadastro de Clientes</ListItemText>
          </ListItem>
          </List>
      </Drawer>
    </>

  );
};

export default Header;
