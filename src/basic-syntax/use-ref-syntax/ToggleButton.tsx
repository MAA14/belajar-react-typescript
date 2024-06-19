import { useRef } from "react";
import "./ToggleButton.css";

export function ToggleButton() {
  // <Type> bukan React.LegacyRef<HTMLButtonElement> | undefined, tapiii cukup <HTMLButtonElement | null>
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null); // kenapa null bukan undefined? karena React secara otomatis ganti jadi null kalo kosong

  function handleClick() {
    const toggleElement = toggleButtonRef.current;

    if (toggleElement) {
      if (toggleElement.classList.contains("no-active")) {
        toggleElement.classList.remove("no-active");
        toggleElement.classList.add("active");
      } else if (toggleElement.classList.contains("active")) {
        toggleElement.classList.remove("active");
        toggleElement.classList.add("no-active");
      }
    }
  }

  return (
    <div className="container toggle">
      <button
        id="button-toggle"
        ref={toggleButtonRef}
        className="no-active"
        onClick={() => handleClick()}
      >
        <div className="circle-toggle"></div>
      </button>
    </div>
  );
}
