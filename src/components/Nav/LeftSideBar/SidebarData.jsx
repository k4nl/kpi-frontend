"use client";

import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Dashboard from "@mui/icons-material/Dashboard";
export const SidebarData = [
  {
    title: "DASHBOARD",
    path: "/dashboard",
    icon: <Dashboard />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,
  },
];
