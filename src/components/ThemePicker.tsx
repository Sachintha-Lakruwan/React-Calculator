import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemePicker() {
  const [theme, setTheme] = useState<string>("theme1");

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className=" grid grid-cols-[2fr_3fr] gap-5 items-center ">
      <div className=" text-xs font-semibold  tracking-wider text-display-text">
        THEME
      </div>
      <div className=" relative">
        <div className=" h-[200%] absolute -top-full flex justify-between w-full font-semibold text-sm px-1 text-display-text">
          <p className=" px-1" onClick={() => setTheme("theme1")}>
            1
          </p>
          <p className=" px-1" onClick={() => setTheme("theme2")}>
            2
          </p>
          <p className=" px-1" onClick={() => setTheme("theme3")}>
            3
          </p>
        </div>
        <div
          className={`rounded-full bg-background-keypad h-5 p-1 flex ${
            theme === "theme1"
              ? "justify-start"
              : theme === "theme2"
              ? "justify-center"
              : "justify-end"
          }`}
        >
          <motion.div
            layout
            className=" h-full aspect-square bg-equal-key rounded-full"
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
