import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "../context/themeContext"

interface Props {
  themeModal: boolean
  setThemeModal: (themeModal: boolean) => void
}

const ThemeMenu = ({ themeModal, setThemeModal }: Props) => {
  const { theme, checkSystemTheme, setTheme } = useTheme()

  const changeTheme = (theme: string) => {
    if (theme === "System") {
      checkSystemTheme()
    } else {
      setTheme(theme)
    }
    setThemeModal(false)
  }

  return (
    <AnimatePresence>
      {themeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-10 left-[50%] translate-x-[-50%] z-50 border-[1px] py-1 px-4 rounded-lg bg-primary"
        >
          <ul className="flex flex-col">
            <li
              onClick={() => changeTheme("Dark")}
              className={`${theme === "Dark" ? "text-white" : "text-secondary"} text-secondary hover:text-white duration-300 cursor-pointer text-[16px]`}
            >
              Dark
            </li>
            <li
              onClick={() => changeTheme("Light")}
              className={`${theme === "Light" ? "text-white" : "text-secondary"} text-secondary hover:text-white duration-300 cursor-pointer text-[16px]`}
            >
              Light
            </li>
            <li
              onClick={() => changeTheme("System")}
              className={`text-secondary hover:text-white duration-300 cursor-pointer text-[16px]`}
            >
              System
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ThemeMenu