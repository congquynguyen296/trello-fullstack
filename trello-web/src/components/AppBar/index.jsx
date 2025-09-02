import React from "react";
import Box from "@mui/material/Box";
import theme from "../../theme";
import ModeSelect from "../ModeSelect";

function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "100%",
        height: theme.trello.appBarHeight,
        display: "flex",
        justifyContent: "flex",
        alignItems: "center",
      }}
    >
      <ModeSelect />
    </Box>
  );
}

export default AppBar;
