import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
} from "@material-ui/core";
import {
  Dashboard,
  ListAlt,
  DateRange,
  Settings,
  ExitToApp,
} from "@material-ui/icons";
import useStyles from "./Navbar.styles";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authActions";

const NavbarDrawer = (props) => {
  const styles = useStyles();
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    props.logoutUser();
  };

  const SideNav = () => {
    return (
      <div
        className={styles.list}
        role="presentation"
        onClick={props.close}
        onKeyDown={props.close}
      >
        <List>
          <ListItem button onClick={history.push("/dashboard")} key="Dashboard">
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button key="To-Dos">
            <ListItemIcon>
              <ListAlt />
            </ListItemIcon>
            <ListItemText primary="To-Dos" />
          </ListItem>
          <ListItem button key="Calendar">
            <ListItemIcon>
              <DateRange />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="Settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button onClick={handleLogout} key="Log Out">
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </div>
    );
  };

  return (
    <Drawer open={props.isOpen} onClose={props.close}>
      <SideNav />
    </Drawer>
  );
};

NavbarDrawer.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(NavbarDrawer);
