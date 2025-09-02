import { useColorScheme } from "@mui/material/styles";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import theme from "./theme";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event) => {
    const selectedMode = event.target.value;
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <LightModeIcon fontSize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <DarkModeOutlinedIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <SettingsBrightnessIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  return (
    <Container maxWidth={false} disableGutters sx={{ height: "100vh" }}>
      <hr />
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
    </Container>
  );
}

export default App;
