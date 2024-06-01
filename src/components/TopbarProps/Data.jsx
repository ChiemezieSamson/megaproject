import { FaFacebook, FaInstagram, FaLock, FaTwitter, FaYoutube } from "react-icons/fa"


export const TopbarPropsData = { 
    Links: [
    {
      id: 0,
      name: "About",
    },
    {
      id: 1,
      name: "Advertise",
    },
    {
      id: 2,
      name: "Privacy & Policy",
    },
    {
      id: 3,
      name: "Contact Us",
    },

  ],
  socialMedia: [
    {
      id: 0,
      name: "Facebook",
      icon: <FaFacebook className="inline-block"/>
    }, 
    {
      id: 1,
      name: "Twitter",
      icon: <FaTwitter className="inline-block"/>
    }, 
    {
      id: 2,
      name: "Instagram",
      icon: <FaInstagram className="inline-block"/>
    }, 
    {
      id: 3,
      name: "YouTube",
      icon: <FaYoutube className="inline-block"/>
    }, 
  ],
  Login: {
    icon: <FaLock className="inline-block text-xs"/>,
    name: "Login"
  },
}
