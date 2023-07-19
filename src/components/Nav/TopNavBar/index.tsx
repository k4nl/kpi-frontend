"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/icons-material/Menu";
import { getCookiesFromDocument } from "@/utils/Cookies";

const TopNavbar = ({ toogleActive }: { toogleActive: () => void }) => {
  const userdata = getCookiesFromDocument();
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  return (
    <>
      <AppBar
        color="inherit"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0px 4px 20px rgba(47, 143, 232, 0.07)",
          py: "0px",
          mb: "30px",
          padding: '30px 20px',
          position: "sticky",
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          {
            width < 600 ? (
              <Toolbar>
                <Tooltip title="Hide/Show" arrow>
                  <Menu onClick={toogleActive} className="greyText"/>
                </Tooltip>
              </Toolbar>
            ) : null
          }


          <Typography variant="h5" className='greyText' sx={{ flexGrow: 1, ml: 2 }}>
            { ` Bem vindo, ${userdata.nome}!`}
          </Typography>
        </div>

      </AppBar>
    </>
  );
};

export default TopNavbar;
