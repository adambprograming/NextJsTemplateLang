"use client";
// Styles
import styles from "./header.module.scss";
// Public & Assets
import Logo from "@/components/svgs/logo.component.jsx";
// React/Next Functions
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useRef, useEffect, useState } from "react";
// Context & Actions

// Components
import { Menu, MenuItem } from "@/components/menu/menu.component.jsx";
import ColorThemeSwitch from "@/components/color-theme-switch/color-theme-switch.component";
import MenuLanguage from "@/components/menu-language/menu-language.component";

/*
INSTRUCTIONS
  variant           variant of menu (default is leftsettingsCenterlogoRightmenu)
                    others: 
                      leftlogoRightmenuRightsettings
                      leftmenuCenterlogoRightsettings
  headerOption      define if and how header will act
                      0: header will be position static
                      1: header will be fixed and on scroll down dissapear
                      2: header will be fixed
  bgColor           color of background // MUST BE TRANSPARENT IF BACKDROPFILTER
  backdropFilter    backdropfilter apply to btnBg as var
  stylesForHeader   additional styles apply to header container
*/
const Header = ({
  variant = "leftsettingsCenterlogoRightmenu",
  headerOption = 0,
  bgColor = "rgb(from var(--color-background) r g b / 0.5)",
  backdropFilter = "blur(4px)",
  stylesForHeader = {},
}) => {
  const lang = useTranslations("header");
  const headerRef = useRef();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if ([1, 2].includes(headerOption)) {
      const heightOfHeader = headerRef.current.offsetHeight;
      document.body.style.paddingTop = `${heightOfHeader}px`;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (headerOption !== 1) return; // Only apply logic for option 1

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerOption]);

  const renderMenu = (location) => {
    return (
      <Menu
        location={location}
        menuOption={2}
        headerOption={headerOption}
        paddingOfEachLinkBlock="10px 20px"
        headerOriginalBgColor={bgColor}
      >
        {/* <MenuItem content="‎ TEST ‎">
          <MenuItem content="TEST" hr"/MenuItem>
          <MenuItem content="TEST" href="/test"></MenuItem>
          <MenuItem content="TEST" href="/test"></MenuItem>
        </MenuItem> */}
        {/* <MenuItem content="Portfolio" href="/portfolio" /> */}
        <MenuItem content={lang("menu.0")} href="/o-mne" />
        <MenuItem content={lang("menu.1")} href="/sluzby" />
        <MenuItem content={lang("menu.2")} href="/kontakt" />
      </Menu>
    );
  };

  const renderSettings = () => {
    return (
      <div className={`${styles.headerSettings}`}>
        <ColorThemeSwitch variant="third" />
        <MenuLanguage
          languages={["cs", "en"]}
          variant="second"
          iconOnly={false}
        />
      </div>
    );
  };

  const renderLogo = () => {
    return (
      <Link href="/" aria-label={lang("link.0.aria")}>
        <Logo
          alt={lang("img.0.alt")}
          id={`${styles.logoHeader}`}
          aria-label={lang("img.0.aria")}
        />
      </Link>
    );
  };

  // returns based on variants
  if (variant === "leftsettingsCenterlogoRightmenu") {
    return (
      <header
        id={`${styles.articleHeader}`}
        ref={headerRef}
        className={`${styles[variant]} ${
          styles[headerOption === 0
            ? ""
            : headerOption === 1
            ? `fixedOnScrollUp ${isVisible ? "visible" : "hidden"}`
            : headerOption === 2
            ? "fixedAllTime"
            : ""]
        }`}
        style={{
          backgroundColor: `${bgColor}`,
          "--localBackdropFilter": `${backdropFilter}`,
          ...stylesForHeader,
        }}
      >
        <div className={`${styles.headerContainerSettings}`}>
          {renderSettings("left")}
        </div>
        <div className={`${styles.headerContainerLogo}`}>{renderLogo()}</div>
        <div id={`${styles.headerContainerMenu}`}>{renderMenu("right")}</div>
      </header>
    );
  } else if (variant === "leftlogoRightmenuRightsettings") {
    return (
      <header
        id={`${styles.articleHeader}`}
        ref={headerRef}
        className={`${styles[variant]} ${
          styles[headerOption === 0
            ? ""
            : headerOption === 1
            ? `fixedOnScrollUp ${isVisible ? "visible" : "hidden"}`
            : headerOption === 2
            ? "fixedAllTime"
            : ""]
        }`}
        style={{
          backgroundColor: `${bgColor}`,
          "--localBackdropFilter": `${backdropFilter}`,
          ...stylesForHeader,
        }}
      >
        <div className={`${styles.headerContainerLogo}`}>{renderLogo()}</div>
        <div id={`${styles.headerContainerMenu}`}>{renderMenu("right")}</div>
        <div className={`${styles.headerContainerSettings}`}>
          {renderSettings("right")}
        </div>
      </header>
    );
  } else if (variant === "leftmenuCenterlogoRightsettings") {
    return (
      <header
        id={`${styles.articleHeader}`}
        ref={headerRef}
        className={`${styles[variant]} ${
          styles[headerOption === 0
            ? ""
            : headerOption === 1
            ? `fixedOnScrollUp ${isVisible ? "visible" : "hidden"}`
            : headerOption === 2
            ? "fixedAllTime"
            : ""]
        }`}
        style={{
          backgroundColor: `${bgColor}`,
          "--localBackdropFilter": `${backdropFilter}`,
          ...stylesForHeader,
        }}
      >
        <div id={`${styles.headerContainerMenu}`}>{renderMenu("left")}</div>
        <div className={`${styles.headerContainerLogo}`}>{renderLogo()}</div>
        <div className={`${styles.headerContainerSettings}`}>
          {renderSettings("right")}
        </div>
      </header>
    );
  } else {
    return (
      <header
        id={`${styles.articleHeader}`}
        ref={headerRef}
        className={`${styles[variant]} ${
         styles[ headerOption === 0
            ? ""
            : headerOption === 1
            ? `fixedOnScrollUp ${isVisible ? "visible" : "hidden"}`
            : headerOption === 2
            ? "fixedAllTime"
            : ""]
        }`}
        style={{
          backgroundColor: `${bgColor}`,
          "--localBackdropFilter": `${backdropFilter}`,
          ...stylesForHeader,
        }}
      >
        <h1>INVALID variant of HEADER</h1>
      </header>
    );
  }
};

export default Header;
