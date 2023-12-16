import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FeedIcon from "@mui/icons-material/Feed";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CategoryIcon from "@mui/icons-material/Category";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import NavBar from "./Navbar";
import Home from "../../components/Dashboard/Home/DashboardHome";
import PostsDashboard from "../../components/Dashboard/Posts/PostsDashboard";
import CategoriesDashboard from "../../components/Dashboard/Categories/CategoriesDashboard";
import UsersDashboard from "../../components/Dashboard/Users/UsersDashboard";
import ProductsDashboard from "../../components/Dashboard/Products/ProductsDashboard";
import OrdersDashboard from "../../components/Dashboard/Orders/OrdersDashboard";
import WeeklyDashboard from "../../components/Dashboard/WeeklyDeal/WeeklyDashboard";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ServicesDashboard from "../../components/Dashboard/Services/ServicesDashboard";

const drawerWidth = 170;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 10px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })
  (({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [selectedItem, setSelectedItem] = React.useState('Home'); // State to track the selected item

  const renderContent = () => {
    switch (selectedItem) {
        case 'Home':
        return (
            <Home/>
        );
        case 'Category':
        return (
            <CategoriesDashboard/>
        );
        case 'Products':
        return (
            <ProductsDashboard/>
        );
        case 'Feed':
        return (
            <PostsDashboard />
        );
        case 'Users':
        return (
            <UsersDashboard />
        );
        case 'Orders':
          return (
            <OrdersDashboard />
          );
        case 'Services':
          return (
            <ServicesDashboard />
          );
        case 'Weekly-Deal':
          return (
            <WeeklyDashboard />
          );
      default:
        return (
          <Typography>
            No Content to View
          </Typography>
        );
    }
  };

  return (
    <>
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} sx={{backgroundColor:"grey"}} >
        <DrawerHeader >
            <Typography>

            </Typography>
          <IconButton onClick={()=>setOpen(!open)}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Paper sx={{ height: '100vh', overflow: 'auto',color:"black",fontSize:"2rem"}}>
        <List>
          {['Home', 'Category', 'Products', 'Feed','Orders', 'Services','Weekly-Deal'].map((text) => (
            <ListItem
              sx={{color:"black"}}
              key={text}
              disablePadding
              onClick={() => setSelectedItem(text)} // Set selected item onClick
            >
              <ListItemButton style={{display:"flex",gap:"5px"}}>
                <ListItemIcon sx={{color:"black"}}>
                  {text === 'Home' && <HomeIcon fontSize="large"/>}
                  {text === 'Category' && <CategoryIcon fontSize="large"/>}
                  {text === 'Products' && <ProductionQuantityLimitsIcon fontSize="large"/>}
                  {text === 'Feed' && <FeedIcon fontSize="large"/>}
                  {text === 'Orders' && <ReceiptLongIcon fontSize="large"/>}
                  {text === "Services" && <WorkOutlineIcon fontSize="large"/>}
                  {text === "Weekly-Deal" && <LocalOfferIcon fontSize="large"/>}
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body1" style={{ fontSize: '14px',fontWeight:"600" }}>
                    {text}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Users'].map((text) => (
            <ListItem
              sx={{color:"black"}}
              key={text}
              disablePadding
              onClick={() => setSelectedItem(text)} // Set selected item onClick
            >
              <ListItemButton style={{display:"flex",gap:"5px"}}>
                <ListItemIcon sx={{color:"black"}}>
                  {text === 'Users' && <GroupIcon fontSize="large"/>}
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body1" style={{ fontSize: '14px',fontWeight:"600" }}>
                    {text}
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        </Paper>
      </Drawer>
      <div style={{display:"flex",flexDirection:"column",height:"100%",width:"100%"}}>
      <NavBar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 , top:"0px"}}>
        {renderContent()}
      </Box></div>
    </Box>
    </>
  );
}
