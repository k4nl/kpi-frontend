"use client";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import styles from "./SubMenu.module.css";
import { usePathname } from "next/navigation";

const SidebarLabel = styled("span")(({ theme }) => ({
  marginLeft: "10px",
  position: "relative",
  top: "-3px",
}));

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <>
      <Link
        href={item.path}
        onClick={item.subNav && showSubnav}
        className={`${styles.sidebarLink} ${
          currentPath == item.path && "sidebarLinkActive"
        }`}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link
              href={item.path}
              key={index}
              className={`${styles.sidebarLink2} ${
                currentPath == item.path && "sidebarLinkActive2"
              }`}
            >
              {item.icon}
              {item.title}
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;
