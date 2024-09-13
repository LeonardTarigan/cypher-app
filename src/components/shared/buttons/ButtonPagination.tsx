import { Button, ButtonProps } from "@headlessui/react";

interface IButtonPaginationProps extends ButtonProps {
  children: React.ReactNode;
}

export default function ButtonPagination({
  children,
  ...resProps
}: IButtonPaginationProps) {
  return (
    <Button
      className="w-fit rounded-lg p-2 text-zinc-500 transition-all duration-150 active:scale-95 enabled:bg-zinc-100 enabled:hover:bg-zinc-200 disabled:text-zinc-300 dark:text-zinc-400 enabled:dark:bg-zinc-800 enabled:dark:hover:bg-zinc-700 disabled:dark:text-zinc-700"
      {...resProps}
    >
      {children}
    </Button>
  );
}
