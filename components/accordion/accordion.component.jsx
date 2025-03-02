"use client";
// Styles
import styles from "./accordion.module.scss";
// Public & Assets

// React/Next Functions
import { Children, cloneElement } from "react";
import { useState, useRef } from "react";
// Context & Actions

// Componenets

/*
EXAMPLE
  <Accordion>
    <AccordionItem title="Social Media Management">
      <p>
        Comprehensive management of your social media presence across
        platforms. We handle content creation, scheduling, community
        engagement, and analytics to grow your brand{"'"}s online presence
        and engage with your target audience effectively.
      </p>
    </AccordionItem>
  </Accordion>
*/

/*
INSTRUCTIONS
    children                            children of accordion
    stylesForAccordion                  additional styles apply to accordion component
    stylesForAccordionContents          addotional styles apply to accordion contents (content of accordion item that will be shown when clicked))
    stylesForAccordionHeaders           addotional styles apply to accordion headers (button that will be clicked)
    stylesForAccordionTitles            addotional styles apply to accordion titles (text inside header)
*/

export const Accordion = ({
  children,
  stylesForAccordion = {},
  stylesForAccordionContents = {},
  stylesForAccordionHeaders = {},
  stylesForAccordionTitles = {},
}) => {
  return (
    <div className={styles.accordion} style={{ ...stylesForAccordion }}>
      {Children.map(children, (child) => {
        return cloneElement(child, {
          stylesForAccordionContents: stylesForAccordionContents,
          stylesForAccordionHeaders: stylesForAccordionHeaders,
          stylesForAccordionTitles: stylesForAccordionTitles,
        });
      })}
    </div>
  );
};

export const AccordionItem = ({ title, children, stylesForAccordionContents, stylesForAccordionHeaders, stylesForAccordionTitles }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionContent = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <button
        className={`${styles.accordionHeader} ${isOpen ? styles.active : ""}`}
        onClick={toggleAccordion}
        style={{ ...stylesForAccordionHeaders }}
      >
        <span style={{...stylesForAccordionTitles}}>{title}</span>
        <div className={`${styles.plusIcon} ${isOpen ? styles.open : ""}`}>
          <span className={styles.horizontalLine}></span>
          <span className={styles.verticalLine}></span>
        </div>
      </button>
      <div
        className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}
        ref={accordionContent}
        style={{
          maxHeight: isOpen ? accordionContent.current.scrollHeight + "px" : 0,
          ...stylesForAccordionContents
        }}
      >
        {children}
      </div>
    </div>
  );
};
