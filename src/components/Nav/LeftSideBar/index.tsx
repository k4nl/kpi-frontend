"use client";

import React from 'react';
import Image from 'next/image';
import { styled } from "@mui/material/styles";
import { Box, IconButton } from '@mui/material';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import ClearIcon from '@mui/icons-material/Clear';
import logo from '@/public/logo.svg';

const SidebarNav = styled("nav")(({ theme }) => ({
  background: '#fff',
  boxShadow: "0px 4px 20px rgba(47, 143, 232, 0.07)",
  width: '300px',
  padding: '15px 10px',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  transition: '350ms',
  zIndex: '10',
  overflowY: 'auto'
}));

const SidebarElements = styled("div")(({ theme }) => ({
  top: 45,
  position: 'relative',
}));

const SidebarWrap = styled("div")(({ theme }) => ({
  width: '100%'
}));


export default function Sidebar({ toogleActive }: { toogleActive: () => void }) {

  return (
    <>
    <SidebarNav className="LeftSidebarNav">
      <SidebarWrap>
      <Box 
          sx={{
            px: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >

          <Box display='flex' alignItems='center' gap={1}>
            <Image src={logo} alt="Logo" width={50} height={50} style={{ borderRadius: '50%'}} priority={true} />
            <h1>Key People Insights</h1>
          </Box>
          <IconButton 
            onClick={toogleActive} 
            color='primary'
            size="small"
            sx={{
              background: 'rgb(253, 237, 237)',
              display: { lg: 'none' }
            }}
          >
            <ClearIcon />
          </IconButton>
        </Box>

        <SidebarElements>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarElements>

      </SidebarWrap>
    </SidebarNav>
    </>
  )
}
