"use client";
// Styles
import styles from "./accordion.module.scss";
// Public & Assets

// React/Next Functions
import {  Children, cloneElement } from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
// Context & Actions

// Componenets

/*
INSTRUCTIONS
    children                            children of accordion
    stylesForAccordion                  additional styles apply to accordion component
    stylesForAccordionContents          addotional styles apply to accordion contents (content of accordion item that will be shown when clicked))
    stylesForAccordionHeaders           addotional styles apply to accordion headers (button that will be clicked)
    stylesForAccordionTitles            addotional styles apply to accordion titles (text inside header)
    imgIfPossible                       If true and there is eneugh width (not for mobile), next to accordion will be image that will flip for content of actual clicked accordion item
*/

export const Accordion = ({
  children,
  stylesForAccordion = {},
  stylesForAccordionContents = {},
  stylesForAccordionHeaders = {},
  stylesForAccordionTitles = {},
  imgIfPossible = false,
  imgSrc = {},
}) => {
  const [activeItem, setActiveItem] = useState(0);
  useEffect(() => {
    console.log(activeItem);
  }, [activeItem]);

  const handleItemClick = (index) => {
    if (activeItem === index) {
      setActiveItem(0);
    } else {
      setActiveItem(index);
    }
  };

  return (
    <div
      className={`${styles.accordion} ${
        imgIfPossible ? styles.imgAccordion : ""
      }`}
      style={{ ...stylesForAccordion }}
    >
      <div className={`${styles.accordionContainer}`}>
        {Children.map(children, (child, index) => {
          return cloneElement(child, {
            index: index + 1,
            stylesForAccordionContents: stylesForAccordionContents,
            stylesForAccordionHeaders: stylesForAccordionHeaders,
            stylesForAccordionTitles: stylesForAccordionTitles,
            imgIfPossible: imgIfPossible,
            handleItemClick: handleItemClick,
            activeItem: activeItem,
          });
        })}
      </div>
      <div
        className={`${styles.imgContainer} ${
          activeItem !== 0 ? styles.hasActiveContent : ""
        }`}
      >
        {imgIfPossible && (
          <Image
            src={imgSrc}
            alt="Accordion image"
            className={`${activeItem !== 0 ? styles.notActive : ""}`}
          />
        )}
        {Children.map(children, (child, index) => {
          return (
            <div
              className={`${styles.accordionContent} ${
                index + 1 === activeItem ? styles.active : ""
              }`}
            >
              {child.props.children}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const AccordionItem = ({
  title,
  children,
  index,
  stylesForAccordionContents,
  stylesForAccordionHeaders,
  stylesForAccordionTitles,
  imgIfPossible,
  handleItemClick,
  activeItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionContent = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <button
        className={`${styles.accordionHeader}`}
        onClick={() => {
          imgIfPossible ? handleItemClick(index) : toggleAccordion();
        }}
        style={{ ...stylesForAccordionHeaders }}
      >
        <span style={{ ...stylesForAccordionTitles }}>{title}</span>
        <div
          className={`${styles.plusIcon} ${
            imgIfPossible
              ? activeItem === index
                ? styles.open
                : ""
              : isOpen
              ? styles.open
              : ""
          }`}
        >
          <span className={styles.horizontalLine}></span>
          <span className={styles.verticalLine}></span>
        </div>
      </button>
      {!imgIfPossible && (
        <div
          className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}
          ref={accordionContent}
          style={{
            maxHeight: isOpen
              ? accordionContent.current.scrollHeight + "px"
              : 0,
            ...stylesForAccordionContents,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
