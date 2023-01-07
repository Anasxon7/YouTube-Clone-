import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';


const Navbar = () => (
  <Stack direction="row" alignItems="center" className="navbar"  sx={{ position:  "sticky", background: '#0f0f0f', top: 0, zIndex: '5', justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={80} />
    </Link>
    <SearchBar />
    <div className="navbarIcons">
      <IconButton>
        <VideoCallIcon sx={{ p: '5px', fontSize: '1.8rem', color: '#fff', borderRadius: "25px"}} />
      </IconButton>
      <IconButton>
        <NotificationsNoneIcon sx={{ p: '5px', fontSize: '1.8rem', color: '#fff', borderRadius: "25px"}} />
      </IconButton>
      <IconButton>
        <AccountCircleIcon sx={{ p: '5px', fontSize: '1.8rem', color: '#fff', borderRadius: "25px"}} />
      </IconButton>
    </div>

  </Stack>
);

export default Navbar;
