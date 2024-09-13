import useQueryParams from "@/hooks/useQueryParams";
import { URL_PARAM_TAB } from "@/lib/constants";
import { Button } from "@headlessui/react";
import IconEnvelope from "../icons/IconEnvelope";
import IconEnvelopeOpen from "../icons/IconEnvelopeOpen";

export default function HomeInboxTab() {
  const { updateQueryParam, tab } = useQueryParams();

  return (
    <div className="space-y-5">
      <div className="relative z-0 flex text-center text-sm font-medium">
        <div
          className="absolute z-10 w-1/2 rounded-md bg-zinc-900 py-2 text-transparent transition-all duration-300 dark:bg-zinc-800"
          style={{
            left: tab === 2 ? "50%" : "0%",
          }}
        >
          .
        </div>

        <Button
          onClick={() => updateQueryParam(URL_PARAM_TAB, "1")}
          className={`relative flex basis-1/2 items-center justify-center gap-2 rounded-md py-2 transition-all duration-150 dark:hover:bg-zinc-700 ${tab === 1 ? "text-zinc-50" : "hover:bg-zinc-200"}`}
        >
          <IconEnvelope className="z-10 size-4" />
          <span className="z-10">Unread</span>
        </Button>

        <Button
          onClick={() => updateQueryParam(URL_PARAM_TAB, "2")}
          className={`relative flex basis-1/2 items-center justify-center gap-2 rounded-md py-2 transition-all duration-150 dark:hover:bg-zinc-700 ${tab === 2 ? "text-zinc-50" : "hover:bg-zinc-200"}`}
        >
          <IconEnvelopeOpen className="z-10 size-4" />
          <span className="z-10">Read</span>
        </Button>
      </div>
    </div>
  );
}
