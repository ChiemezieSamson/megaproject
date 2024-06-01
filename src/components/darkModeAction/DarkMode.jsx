import {useState, useEffect} from "react";
import { darkModeTitle } from "./Data";


export const DarkModeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // check and update the user theme using localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);


  // Toggle theme mood on button click
  const toggleDarkMode = () => {

    setIsDarkMode((prevMode) => {
      const newMode = !prevMode; // change to the opposite of the previous state
      
      if (newMode) {
        localStorage.setItem("darkMode", "true");
        document.documentElement.classList.add("dark");

      } else {
        localStorage.setItem("darkMode", "false");
        document.documentElement.classList.remove("dark");
      }
      
      return newMode;
    });
  };

  return (     
    <button
    className="inline-block"
    type="button"
    title={isDarkMode ?  darkModeTitle.dark.name :  darkModeTitle.Light.name}
    onClick={toggleDarkMode}
    >
      {isDarkMode ? darkModeTitle.dark.icon : darkModeTitle.Light.icon}
    </button>    
  )
}