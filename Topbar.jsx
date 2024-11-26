import { Box, IconButton, useTheme } from "@mui/material";
import * as React from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import './customButton.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TelegramIcon from '@mui/icons-material/Telegram';
import axios from "axios";

const Topbar = ({authToken, setAuthToken, isCollapsed}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [user, setUser] = useState('')
  const [userId, setUserId] = useState(''); // Replace with actual user identification
  const [token, setToken] = useState('');
  const [requestId, setRequestId] = useState('');
  const botUsername = "Login_Dashboard_bot";

  // handles login w telegram button, sets requestId through backend call
  const click = async () => {
    try {
      const response = await axios.post(`https://e5cc-27-6-213-111.ngrok-free.app/auth/telegram`);
      const reqId = response.data.reqId;
      console.log("Received requestId:", reqId);
      setRequestId(reqId); // Set the requestId state

    } catch (error) {
      console.log("error fetching requestId");
    }
  };

  // Use effect to check authentication status, once requestId is fetched
  useEffect(() => {
    console.log("useEffect triggered with requestId:", requestId, "and token:", token);
    if (!requestId || token) return;

    const checkAuthStatus = async () => {
      try {
        if (!requestId || token) return;
        console.log("try")
        const res = await axios.get(`https://e5cc-27-6-213-111.ngrok-free.app/auth/telegram/status/${requestId}`, {
          headers: {
            "ngrok-skip-browser-warning": "69420",
        }});
        console.log(res.data)
        if (res.data.status === 'authenticated') {
          console.log("User authenticated:", res.data);
          setToken(res.data.token);
          clearInterval(interval);
        }
      } catch (error) {
        console.error('User not authorized', error);
      }
    };

    const interval = setTimeout(checkAuthStatus, 13000); // Check every 5 seconds
    return () => clearInterval(interval);
  }, [requestId]);

  //useEffect to direct user to telegram, once requestId is fetched from backend
  useEffect(() => {
    if (requestId) {
      const url = `tg://resolve?domain=${botUsername}&start=${requestId}`;
      console.log("Redirect URL:", url);
      if (url && !(navigator.userAgent.indexOf("Firefox") > -1)) {
        // Trigger the login by opening the Telegram app (in most browsers)
        let anchor = document.createElement("a");
        anchor.href = url;
        anchor.target = "_blank";
        anchor.click();
        anchor.remove();
      }
    }
  }, [requestId]);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Box display="flex" justifyContent="space-between" p={2} >
      {/* SEARCH BAR */}
      <Box
        sx={{
          width: isCollapsed? "48px" : "200px"
        }}
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"

      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        {user.firstname === undefined ?
          (<IconButton onClick={handleClickOpen}> <PersonOutlinedIcon variant="outlined" /> </IconButton> ) :
          (<IconButton>{user.firstname + " " + user.lastname}</IconButton>)
        }
      </Box>
    </Box>
    <React.Fragment>


    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
          {"Login with Telegram"}
        </DialogTitle>
        <DialogContent>
          <div className="container">
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
            <span style={{ "--i": 4 }}></span>
            <span style={{ "--i": 5 }}></span>
            <span style={{ "--i": 6 }}></span>
            <span style={{ "--i": 7 }}></span>
            <span style={{ "--i": 8 }}></span>
            <span style={{ "--i": 9 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 11 }}></span>
            <span style={{ "--i": 12 }}></span>
            <span style={{ "--i": 13 }}></span>
            <span style={{ "--i": 14 }}></span>
            <span style={{ "--i": 15 }}></span>
            <span style={{ "--i": 16 }}></span>
            <span style={{ "--i": 17 }}></span>
            <span style={{ "--i": 18 }}></span>
            <span style={{ "--i": 19 }}></span>
            <span style={{ "--i": 20 }}></span>
            <span style={{ "--i": 21 }}></span>
            <span style={{ "--i": 22 }}></span>
            <span style={{ "--i": 23 }}></span>
            <span style={{ "--i": 24 }}></span>
            <span style={{ "--i": 25 }}></span>
            <span style={{ "--i": 26 }}></span>
            <span style={{ "--i": 27 }}></span>
            <span style={{ "--i": 28 }}></span>
            <span style={{ "--i": 29 }}></span>
            <span style={{ "--i": 30 }}></span>
            <span style={{ "--i": 31 }}></span>
            <span style={{ "--i": 32 }}></span>
            <span style={{ "--i": 33 }}></span>
            <span style={{ "--i": 34 }}></span>
            <span style={{ "--i": 35 }}></span>
            <span style={{ "--i": 36 }}></span>
            <span style={{ "--i": 37 }}></span>
            <span style={{ "--i": 38 }}></span>
            <span style={{ "--i": 39 }}></span>
            <span style={{ "--i": 40 }}></span>
            <span style={{ "--i": 41 }}></span>
            <span style={{ "--i": 42 }}></span>
            <span style={{ "--i": 43 }}></span>
            <span style={{ "--i": 44 }}></span>
            <span style={{ "--i": 45 }}></span>
            <span style={{ "--i": 46 }}></span>
            <span style={{ "--i": 47 }}></span>
            <span style={{ "--i": 48 }}></span>
            <span style={{ "--i": 49 }}></span>

            <div className="button-container">
              <Button
                onClick={click}
                className="login-button"
                variant="contained"
                size="large"
                style={{ color: "#ffffff", background: "#54a9eb" }}
              >
                <TelegramIcon /> Login with Telegram
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
    </div>
  );
};

export default Topbar;
