import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,rain,precipitation,showers,snowfall,wind_speed_10m,wind_direction_10m,wind_gusts_10m";

function Main_Page() {
  useEffect(() => {
    fetch(API_URL)
      .then((Data) => Data.json())
      .then((object) => 
        console.log(object.latitude, object.longitude)
      );
  }, []);
  return (
    <MenuBar>
      {/* <Map>
          </Map> */}
    </MenuBar>
  );
}

function MenuBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// function Map() {
//   return (
//     //<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//       {/* <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={[51.505, -0.09]}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker> */}
//     //</MapContainer>
//   );
// }

export default Main_Page;
