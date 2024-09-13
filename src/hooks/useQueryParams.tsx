import { URL_PARAM_CURRENT_PAGE, URL_PARAM_TAB } from "@/lib/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useQueryParams() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      value ? params.set(name, value) : params.delete(name);

      return params.toString();
    },
    [searchParams],
  );

  const updateQueryParam = (name: string, value: string | null) =>
    router.push(pathname + "?" + createQueryString(name, value));

  const tab = parseInt(searchParams.get(URL_PARAM_TAB) ?? "1");
  const currentPage = parseInt(searchParams.get(URL_PARAM_CURRENT_PAGE) ?? "1");

  return {
    updateQueryParam,
    tab,
    currentPage,
  };
}
