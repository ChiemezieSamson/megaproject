// import React from 'react'
import MegaProjectLogoLight from "./../../assets/Logo/megaproject_logo_Icon_No_bg.png"
import MegaProjectLogoDark from "./../../assets/Logo/megaproject_logo_Icon_white_bg.png"


const Navigation = () => {
  const savedMode = localStorage.getItem("darkMode");
  const useImage = savedMode ? MegaProjectLogoDark : MegaProjectLogoLight

  return (
    <header>
      <div>
        <div className="max-w-16 grid items-center justify-center m-5">
          <img src={useImage} alt="Mega project logo"/>
        </div>

      </div>
      
    </header>
  )
}

export default Navigation
