import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import Link from "next/link";
import IconSun from "../icons/IconSun";
import IconHistory from "../icons/IconHistory";
import IconPower from "../icons/IconPower";
import { useTheme } from "next-themes";
import { spaceGrotesk } from "@/lib/fonts";
import IconMoon from "../icons/IconMoon";

export default function Navbar() {
  const { setTheme, theme } = useTheme();

  const switchTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("light");
  };

  return (
    <section className="flex items-center justify-between rounded-2xl bg-zinc-50 p-5 shadow-md dark:bg-zinc-900">
      <Link href={"/"} className="flex items-center gap-[5px]">
        <span className={`${spaceGrotesk.className} text-2xl font-semibold`}>
          Cypher.
        </span>
      </Link>
      <div className="flex items-center gap-4">
        <div>
          <Button
            onClick={switchTheme}
            className="flex size-10 items-center justify-center rounded-lg p-1 transition-all duration-150 hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            {theme === "light" ? (
              <IconMoon className="size-6 transition-all duration-75" />
            ) : (
              <IconSun className="size-7 transition-all duration-75" />
            )}
          </Button>
        </div>
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
                      "absolute right-0 mt-12 flex w-36 flex-col overflow-hidden rounded-xl bg-zinc-100 text-sm font-semibold shadow-xl dark:bg-zinc-800"
                    }
                  >
                    <MenuItem>
                      <Button
                        className={`group flex items-center gap-[9px] p-3 text-zinc-900 transition-all duration-150 hover:bg-zinc-200 dark:text-zinc-100 dark:hover:bg-zinc-700`}
                      >
                        <IconHistory className="size-4" />
                        <span>History</span>
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
      </div>
    </section>
  );
}
