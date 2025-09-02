import React from "react";
import { ReactComponent as TrelloIcon } from "~/assets/logo.svg";
import Box from "@mui/material/Box";
import theme from "~/theme";
import ModeSelect from "~/components/ModeSelect/ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Started from "./Menus/Started";
import Templates from "./Menus/Templates";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Profile from "./Menus/Profile";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: theme.trello.appBarHeight,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* App and Logo */}
        <AppsIcon sx={{ color: "primary.main" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: "primary.main" }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Trello
          </Typography>
        </Box>

        {/* Dropdown Menu and Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ml: 2,
          }}
        >
          <Workspaces />
          <Recent />
          <Started />
          <Templates />
          <Button variant="outlined" sx={{ ml: 2 }}>
            CREATED
          </Button>
        </Box>
      </Box>

      {/* Right box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* Search bar */}
        <TextField
          id="outlined-search"
          label="Search..."
          type="search"
          size="small"
          sx={{ width: 200 }}
        />

        {/* Mode selection */}
        <ModeSelect />

        {/* Notification and Help */}
        <Tooltip title="Notification">
          <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer", color: "primary.main" }} />
        </Tooltip>

        {/* Profile */}
        <Profile />
      </Box>
    </Box>
  );
}

export default AppBar;
