import React from "react";
import Box from "@mui/material/Box";
import theme from "~/theme";

function BoardBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: "100%",
        height: theme.trello.boardBarHeight,
        display: "flex",
        justifyContent: "flex",
        alignItems: "center",
      }}
    >
      Board bar
    </Box>
  );
}

export default BoardBar;
