// Styles
import styles from "./popup.module.scss";
// Public & Assets

// React/Next Functions

// Context & Actions

// Components

/*
INSTRUCTIONS
  children                      children of popup
  fontSize                      font size of popup
  state                         state of popup
  top                           top of popup
  right                         right of popup
  bottom                        bottom of popup
  left                          left of popup
  stylesForPopup                additional styles apply to popup component
*/

const Popup = ({
  children,
  fontSize = "var(--fontsize-input)",
  state,
  top,
  right,
  bottom,
  left,
  stylesForPopup = {},
}) => {
  return (
    <div
      className={`${styles.popup}`}
      style={{
        fontSize: `${fontSize}`,
        display: `${state ? "inherit" : "none"}`,
        top: `${top}`,
        right: `${right}`,
        bottom: `${bottom}`,
        left: `${left}`,
        ...stylesForPopup,
      }}
    >
      {children}
    </div>
  );
};

export default Popup;
