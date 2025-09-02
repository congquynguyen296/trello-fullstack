import React from "react";
import Box from "@mui/material/Box";
import theme from "~/theme";

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: theme.trello.boardContentHeight,
        display: "flex",
        justifyContent: "flex",
        alignItems: "center",
      }}
    >
      Board content
    </Box>
  );
}

export default BoardContent;
