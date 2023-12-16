import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/actions/authSlice";
import HomeIcon from '@mui/icons-material/Home';
import { showToast } from "../../utils/toastUtil";
import logo from "../../assets/images/logo.png";



export default function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogoutClick = () => {
      dispatch(logout());
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      showToast("Logout successfully");
      navigate("/dashboard");
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"black"}}>
        <Toolbar>
          <div className="logo" style={{padding:"0px",backgroundColor:"white",borderRadius:"5px"}}>
              <Link to="/">
                <img src={logo} alt="Goru"  style={{width:"55px",height:"55px",borderRadius:"5px"}}/>
              </Link>
            </div>
          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={handleLogoutClick}>
              <LogoutIcon fontSize='large'/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Link to={"/"} style={{color:"white"}}>
            <HomeIcon fontSize='large'/>
            </Link>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Link to={"/profile"} style={{color:"white"}}>
            <AccountCircle fontSize='large'/>
            </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}