"use client";

import IconMoon from "@/components/icons/IconMoon";
import IconPower from "@/components/icons/IconPower";
import IconSun from "@/components/icons/IconSun";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { useTheme } from "next-themes";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import useMounted from "./hooks/useMounted";

const mainFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  const { mounted } = useMounted();
  const { setTheme, theme } = useTheme();

  const switchTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("light");
  };

  if (!mounted)
    return (
      <>
        <div className="flex animate-pulse justify-between bg-zinc-200 p-5 dark:bg-zinc-800">
          <div className="size-10 bg-transparent"></div>
        </div>
      </>
    );

  return (
    <>
      <section className="flex justify-between bg-zinc-50 p-5 shadow-md dark:bg-zinc-900">
        <Link href={"/"} className="flex items-center gap-[5px]">
          <span className={`${mainFont.className} text-2xl font-semibold`}>
            Cypher.
          </span>
        </Link>
        <div>
          <Menu as={"div"} className={"relative flex"}>
            {({ open }) => (
              <>
                <MenuButton>
                  <Button className="size-10 rounded-full bg-zinc-200 outline outline-2 outline-offset-2 outline-transparent transition-all duration-150 hover:outline-zinc-900 dark:bg-zinc-800 dark:hover:outline-zinc-700"></Button>
                </MenuButton>

                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <MenuItems
                    className={
                      "absolute right-0 mt-12 flex w-36 flex-col overflow-hidden bg-zinc-100 text-sm font-semibold shadow-xl dark:bg-zinc-800"
                    }
                  >
                    <MenuItem>
                      <Button
                        onClick={switchTheme}
                        className={`group flex items-center gap-2 p-3 transition-all duration-150 hover:bg-zinc-800 hover:text-zinc-100 dark:hover:bg-yellow-500 dark:hover:text-zinc-900`}
                      >
                        {theme === "light" ? (
                          <IconMoon className="size-4 transition-all duration-75 group-hover:text-yellow-500" />
                        ) : (
                          <IconSun className="size-4 transition-all duration-75 group-hover:text-zinc-900" />
                        )}
                        <span>{theme === "light" ? "Dark" : "Light"} Mode</span>
                      </Button>
                    </MenuItem>
                    <MenuItem>
                      <Button
                        className={`group flex items-center gap-[9px] p-3 text-rose-500 transition-all duration-150 hover:bg-rose-500 hover:text-zinc-100`}
                      >
                        <IconPower className="size-4" />
                        <span>Logout</span>
                      </Button>
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </section>
    </>
  );
}
