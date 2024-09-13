import { Button, Input } from "@headlessui/react";
import IconChevronRight from "../icons/IconChevronRight";
import IconChevronDoubleRight from "../icons/IconChevronDoubleRight";
import IconChevronLeft from "../icons/IconChevronLeft";
import IconChevronDoubleLeft from "../icons/IconChevronDoubleLeft";

export default function Pagination() {
  return (
    <div className="flex items-center justify-between gap-5">
      <div>
        <Button className="w-fit rounded-lg p-2 text-zinc-500 transition-all duration-150 hover:bg-zinc-200 active:scale-95 dark:text-zinc-400 dark:hover:bg-zinc-700">
          <IconChevronDoubleLeft className="size-5" />
        </Button>
        <Button className="w-fit rounded-lg p-2 text-zinc-500 transition-all duration-150 hover:bg-zinc-200 active:scale-95 dark:text-zinc-400 dark:hover:bg-zinc-700">
          <IconChevronLeft className="size-5" />
        </Button>
      </div>

      <form className="flex items-center justify-center gap-2 font-medium">
        <Input
          min={1}
          defaultValue={1}
          className="w-10 rounded-lg bg-zinc-100 p-1 text-center outline-none focus:outline-zinc-800 dark:bg-zinc-800"
        />
        <span>/</span>
        <span>30</span>
      </form>

      <div>
        <Button className="w-fit rounded-lg p-2 text-zinc-500 transition-all duration-150 hover:bg-zinc-200 active:scale-95 dark:text-zinc-400 dark:hover:bg-zinc-700">
          <IconChevronRight className="size-5" />
        </Button>
        <Button className="w-fit rounded-lg p-2 text-zinc-500 transition-all duration-150 hover:bg-zinc-200 active:scale-95 dark:text-zinc-400 dark:hover:bg-zinc-700">
          <IconChevronDoubleRight className="size-5" />
        </Button>
      </div>
    </div>
  );
}
