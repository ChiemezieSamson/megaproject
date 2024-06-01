import { DarkModeToggleButton } from "../darkModeAction/DarkMode"
import { TopbarPropsData } from "./Data"


const TopbarProps = () => {
  return (
    <div className="Light_Color text-white">
      <div className="xs:grid grid-flow-col justify-between max-w-[1280px] mx-auto">
        {/* about, advertise ... links */}
        <ul className="grid-flow-col gap-x-3 text-xs px-4 py-1.5 hidden xs:grid">
          {TopbarPropsData.Links.map(prop => {
            return (
              <li key={prop.id} className="font-semibold capitalize">{prop.name}</li>
            )
          })}
        </ul>

        {/* Social media Links and Icons */}
        <div className="grid grid-flow-col max-w-64 mx-auto">
          <ul className="grid grid-flow-col gap-x-3 text-sm px-2 py-1.5 xs:hidden sm:grid">
            {TopbarPropsData.socialMedia.map(prop => {
              return (
                <li key={prop.id} title={prop.name} className="cursor-pointer">{prop.icon}</li>
              )
            })}
          </ul>

            {/* LogIn and theme change Button */}
          <div className="text-xs xx:px-4 py-1.5">
            <div className="border-0 sm:border-l Light_Border grid grid-flow-col items-center justify-center">
              <span className="text-sm px-1.5 cursor-pointer">{TopbarPropsData.Login.icon}</span>
              <span className="capitalize pr-2 cursor-pointer inline-block align-bottom pt-1">{TopbarPropsData.Login.name}</span>
              <span className="mx-1 px-2 cursor-pointer">
                <DarkModeToggleButton />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopbarProps
