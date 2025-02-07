"use client";
// Styles
import styles from "./showcase.module.scss";
// Public & Assets

// React/Next Functions
import { Children, cloneElement } from "react";
import { useEffect, useState, useRef } from "react";
// Context & Actions

// Componenets

/*
INSTRUCTIONS
  children                            children of showcase
  alwaysAnimate                       default false (if true showcase will always animate)
  paddingTopAndBottomOfShowcase       padding of showcase (just apply to top and bottom)
  gap                                 gap between items
  heightOfItem                        height of each item
  widthOfItem                         width of each item
  animationDuration                   duration of animation of showcase (default to 30s)
  stylesForShowcase                   additional styles apply to showcase component
  stylesForItem                       addotional styles apply to showcase items
*/

export const Showcase = ({
  children,
  alwaysAnimate = false,
  paddingTopAndBottomOfShowcase = "36px",
  gap = "4rem",
  heightOfItem = "var(--fontsize-h2)",
  widthOfItem = "auto",
  animationDuration = "30s",
  stylesForShowcase = {},
  stylesForItem = {},
}) => {
  const [isOverflow, setIsOverflow] = useState(false);
  const showcaseRef = useRef(null);

  useEffect(() => {
    const updateIsOverflow = () => {
      const isOverflowing =
        showcaseRef.current.parentElement.clientWidth <
        showcaseRef.current.clientWidth;
      setIsOverflow(isOverflowing);
    };
    updateIsOverflow();
    window.addEventListener("resize", updateIsOverflow);
    return () => {
      window.removeEventListener("resize", updateIsOverflow);
    };
  }, []);

  return (
    <div className={`${styles.showcaseImgContainer}`}>
      <div
        className={`${styles.showcaseImgGroup} ${
          alwaysAnimate || isOverflow ? styles.animated : ""
        }`}
        style={{
          padding: `${paddingTopAndBottomOfShowcase} 0px`,
          gap: `${gap}`,
          paddingRight: `${gap}`,
          "--animation-time": animationDuration,
          ...stylesForShowcase,
        }}
        ref={showcaseRef}
      >
        {Children.map(children, (child) => {
          return cloneElement(child, {
            heightOfItem: heightOfItem,
            widthOfItem: widthOfItem,
            stylesForItem: stylesForItem,
          });
        })}
      </div>
      {(alwaysAnimate || isOverflow) && (
        <div
          aria-hidden
          className={`${styles.showcaseImgGroup} ${
            alwaysAnimate || isOverflow ? styles.animated : ""
          }`}
          style={{
            padding: `${paddingTopAndBottomOfShowcase} 0px`,
            gap: `${gap}`,
            paddingRight: `${gap}`,
            "--animation-time": animationDuration,
            ...stylesForShowcase,
          }}
        >
          {Children.map(children, (child) => {
            return cloneElement(child, {
              heightOfItem: heightOfItem,
              widthOfItem: widthOfItem,
              stylesForItem: stylesForItem,
            });
          })}
        </div>
      )}
    </div>
  );
};

export const ShowcaseItem = ({ children, heightOfItem, widthOfItem, stylesForItem }) => {
  return (
    <div
      className={`${styles.showcaseItem}`}
      style={{
        height: `${heightOfItem}`,
        width: `${widthOfItem}`,
        ...stylesForItem 
      }}
    >
      {children}
    </div>
  );
};
