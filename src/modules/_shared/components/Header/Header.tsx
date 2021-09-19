import {
  AppBar,
  Button,
  Divider,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer/Drawer";
import Typography from "@material-ui/core/Typography/Typography";
import {
  Favorite,
  HearingOutlined,
  LocationOnOutlined,
  Phone,
} from "@material-ui/icons";
// @ts-ignore
import Hamburger from "hamburger-react";
import React from "react";
import { useState } from "react";
import useStyles from "./styles";
// import { Link as ScrollLink } from "react-scroll";
// @ts-ignore
import logo from "../../../../assets/img/logo.png";
import classNames from "classnames";
import { Link } from "react-scroll";

const Header = () => {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState(!state);
  };

  const Links = () => {
    const headerLinks = ["Home", "About", "Categories", "Contact"];
    return (
      <Grid container justify="space-between" alignItems="center">
        {headerLinks.map((headerLink: string, index) => {
          return (
            <>
              <Link
                className={classes.link}
                spy={true}
                smooth="easeInOutQuart"
                duration={800}
                to=""
                key={index}
              >
                <Typography>{headerLink}</Typography>
              </Link>
              {index !== 3 && <Typography>|</Typography>}
            </>
          );
        })}
      </Grid>
    );
  };
  const TopBanner = () => {
    return (
      <Grid container justify="space-between" className={classes.topBanner}>
        <Grid container item xs={3} alignItems="center" justify="flex-start">
          <LocationOnOutlined
            color="primary"
            style={{ paddingRight: " 0.2rem" }}
          />
          <Typography color="textSecondary" variant="caption">
            Osu High-Street, Accra
          </Typography>
        </Grid>

        <Grid container item xs={6} alignItems="center" justify="flex-end">
          <Grid container item xs alignItems="center" justify="flex-end">
            <Phone color="primary" style={{ paddingRight: " 0.2rem" }} />
            <Typography color="textSecondary" variant="caption">
              +123 123-123-123
            </Typography>
          </Grid>

          <Grid container item xs alignItems="center" justify="flex-end">
            <Typography color="textSecondary" variant="caption">
              {" "}
              Made with
            </Typography>
            <Favorite style={{ color: "#FD3B3B", padding: "0rem 0.2rem" }} />
            <Typography color="textSecondary" variant="caption">
              in Ghana
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  const DesktopView = () => {
    const [addClass, setAddClass] = useState(false);
    return (
      <React.Fragment>
        <Grid direction="column" container>
          <TopBanner />
          <Grid container className={classes.headerLinksContainer}>
            <Grid container item xs={2} justify="flex-start" direction="column">
              <img src={logo} alt="logo" className={classes.logo} />
              <Typography>PigeonUltra™</Typography>
            </Grid>

            <Grid container item xs={7} justify="center">
              <Links />
            </Grid>

            <Grid container item xs={3} justify="flex-end" alignItems="center">
              <div className={classes.search}>
                <IconButton onClick={() => setAddClass(!addClass)}>
                  <span
                    className={classNames("iconify", classes.icon)}
                    data-inline="false"
                    data-icon="cil:search"
                  />
                </IconButton>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classNames(addClass && classes.inputInput),
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <Button
                color="primary"
                variant="contained"
                className={classes.btn}
                size="medium"
                endIcon={
                  <span
                    className="iconify"
                    data-inline="false"
                    data-icon="bx:bxs-log-in-circle"
                    style={{ color: "#fafafa", fontSize: "20px" }}
                  ></span>
                }
              >
                <Typography color="secondary">Login</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <div className="container">
        <AppBar elevation={1} className={classes.appBar} position="relative">
          <Toolbar className={classes.toolBar}>
            {isMediumScreen && <DesktopView />}
            {!isMediumScreen && (
              <IconButton
                edge="end"
                aria-label="menu"
                onClick={toggleDrawer}
                className={classes.hamburger}
              >
                <Hamburger size={20} color="#fafafa" />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="left"
          open={state}
          variant="persistent"
          onClose={toggleDrawer}
        >
          <div className={classes.drawerHeader}>
            <Typography variant="h4">Logo Here</Typography>
          </div>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>{<HearingOutlined />}</ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>{<HearingOutlined />}</ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>{<HearingOutlined />}</ListItemIcon>
              <ListItemText primary="Restaurants" />
            </ListItem>

            <ListItem button>
              <ListItemIcon>{<HearingOutlined />}</ListItemIcon>
              <ListItemText primary="Shops" />
            </ListItem>
          </List>

          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </React.Fragment>
  );
};

export default Header;
