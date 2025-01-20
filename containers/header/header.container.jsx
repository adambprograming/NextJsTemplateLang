"use client";
// Styles
import "./header.styles.scss";
// Public & Assets
import Logo from "@/components/svgs/logo.component.jsx";
// React/Next Functions
import Link from "next/link";
// Context & Actions

// Components
import { Menu, MenuItem } from "@/components/menu/menu.component.jsx";
import ColorThemeSwitch from "@/components/color-theme-switch/color-theme-switch.component";
import MenuLanguage from "@/components/menu-language/menu-language.component";

/*
INSTRUCTIONS
  variant           variant of menu (default is leftsettings-centerlogo-rightmenu)
            others: 
              leftlogo-rightmenu-rightsettings
              leftmenu-centerlogo-rightsettings
*/
const Header = ({ variant = "leftsettings-centerlogo-rightmenu" }) => {
  const renderMenu = (location) => {
    return (
      <Menu location={location} paddingOfEachLinkBlock="10px 20px">
        {/* <MenuItem content="‎ TEST ‎">
          <MenuItem content="TEST" href="/test"></MenuItem>
          <MenuItem content="TEST" href="/test"></MenuItem>
          <MenuItem content="TEST" href="/test"></MenuItem>
        </MenuItem> */}
        <MenuItem content="O mně" href="/o-mne" />
        {/* <MenuItem content="Portfolio" href="/portfolio" /> */}
        <MenuItem content="Služby" href="/sluzby" />
        <MenuItem content="Kontakt" href="/kontakt" />
      </Menu>
    );
  };

  const renderSettings = () => {
    return (
      <div className="header-settings">
        <ColorThemeSwitch variant="third" />
        <MenuLanguage languages={["cs", "en"]} variant="second" iconOnly />
      </div>
    );
  };

  const renderLogo = () => {
    return (
      <Link href="/">
        <Logo alt="Logo" id="logo-header" aria-label="Go to home page" />
      </Link>
    );
  };

  // returns based on variants
  if (variant === "leftsettings-centerlogo-rightmenu") {
    return (
      <header id="article-header" className={`${variant}`}>
        <div className="header-container-settings">
          {renderSettings("left")}
        </div>
        <div className="header-container-logo">{renderLogo()}</div>
        <div id="header-container-menu">{renderMenu("right")}</div>
      </header>
    );
  } else if (variant === "leftlogo-rightmenu-rightsettings") {
    return (
      <header id="article-header" className={`${variant}`}>
        <div className="header-container-logo">{renderLogo()}</div>
        <div id="header-container-menu">{renderMenu("right")}</div>
        <div className="header-container-settings">
          {renderSettings("right")}
        </div>
      </header>
    );
  } else if (variant === "leftmenu-centerlogo-rightsettings") {
    return (
      <header id="article-header" className={`${variant}`}>
        <div id="header-container-menu">{renderMenu("left")}</div>
        <div className="header-container-logo">{renderLogo()}</div>
        <div className="header-container-settings">
          {renderSettings("right")}
        </div>
      </header>
    );
  } else {
    return (
      <header id="article-header" className={`${variant}`}>
        <h1>INVALID variant of HEADER</h1>
      </header>
    );
  }
};

export default Header;
