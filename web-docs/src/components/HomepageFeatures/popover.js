import React, {useState,useRef,useEffect} from 'react';

// Needs to be a button that can toggle a popover to display children
export default function Popover({ children, label = "Toggle Popover" }) {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  },[]);

  const togglePopover = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className="popover-root" style={styles.popoverRoot}>
      <button className="popover-button" onClick={togglePopover} style={styles.popoverButton}>
        {label}
      </button>
      {isVisible && (
        <div className="popover-backdrop" onClick={togglePopover} style={styles.popoverBackdrop}>
          <div className="popover-content" ref={popoverRef} style={styles.popoverContent} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  popoverRoot: {
    position: 'relative'
  },
  popoverButton: {
    cursor:'pointer',
  },
  popoverBackdrop: {
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9998,
  },
  popoverContent: {
    background: 'white',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    padding: '10px',
    borderRadius: '5px',
    maxWidth: '80%',
    maxHeight: '80%',
    zIndex: 'calc(inherit + 1)',
  }
}
