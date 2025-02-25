// Styles
import styles from "./popup.module.scss";
// Public & Assets

// React/Next Functions

// Context & Actions

// Components

const Popup = ({
  children,
  fontSize = "var(--fontsize-input)",
  state,
  top,
  right,
  bottom,
  left,
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
      }}
    >
      {children}
    </div>
  );
};

export default Popup;
