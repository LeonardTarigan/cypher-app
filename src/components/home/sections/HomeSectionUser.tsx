import { Button, Input } from "@headlessui/react";
import IconCopy from "../../icons/IconCopy";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import IconCheckBadge from "../../icons/IconCheckBadge";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function HomeSectionUser() {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [hasCopiedText, setHasCopiedText] = useState(Boolean(copiedText));

  const url =
    "https://faceless-message.vercel.app/HbldzkkBbcP1rTeGhURSoUgLX273";

  const handleCopy = () => {
    copyToClipboard(url);
    setHasCopiedText(true);

    toast.success("Copied to clipboard!", {
      iconTheme: {
        primary: "#84cc16",
        secondary: "#f0fdf4",
      },
      position: "top-right",
    });
  };

  useEffect(() => {
    if (hasCopiedText) {
      const timer = setTimeout(() => {
        setHasCopiedText(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [hasCopiedText]);

  return (
    <section className="rounded-2xl bg-zinc-50 p-5 shadow-md transition-colors duration-150 dark:bg-zinc-900">
      <h2 className="text-lg font-semibold">Good Morning, User</h2>
      <p>Share the link below to receive messages</p>

      <div className="mt-4 flex justify-between gap-2 rounded-xl bg-zinc-200 p-2 dark:bg-zinc-800">
        <Input
          disabled
          value={url}
          className="w-full rounded-lg border-zinc-200 bg-transparent px-1 font-medium text-zinc-700 dark:text-zinc-100"
        />
        <Button
          disabled={hasCopiedText}
          onClick={handleCopy}
          className="flex size-10 items-center justify-center rounded-lg bg-zinc-900 p-2 text-zinc-50 transition-all duration-150 hover:bg-zinc-700 active:scale-95 dark:bg-zinc-900 dark:hover:bg-zinc-700"
        >
          {hasCopiedText ? (
            <IconCheckBadge className="size-6" />
          ) : (
            <IconCopy className="size-6" />
          )}
        </Button>
      </div>
    </section>
  );
}
