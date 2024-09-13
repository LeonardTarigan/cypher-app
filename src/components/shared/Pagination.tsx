import { Input } from "@headlessui/react";
import { useEffect, useState } from "react";
import IconChevronDoubleLeft from "../icons/IconChevronDoubleLeft";
import IconChevronDoubleRight from "../icons/IconChevronDoubleRight";
import IconChevronLeft from "../icons/IconChevronLeft";
import IconChevronRight from "../icons/IconChevronRight";
import ButtonPagination from "./buttons/ButtonPagination";

interface IPagination {
  currentPage: number;
  maxPage: number;
  setCurrentPage: (page: number) => void;
}

export default function Pagination({
  currentPage,
  maxPage,
  setCurrentPage,
}: IPagination) {
  const [inputPage, setInputPage] = useState<number | string>(currentPage);

  useEffect(() => {
    setInputPage(currentPage);
  }, [currentPage]);

  const handlePageChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPage = parseInt(inputPage.toString(), 10);

    if (!isNaN(newPage) && newPage >= 1 && newPage <= maxPage) {
      setCurrentPage(newPage);
    } else {
      setInputPage(currentPage);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInputPage(value);
    }
  };

  return (
    <div className="flex items-center justify-between gap-5">
      <div className="space-x-1">
        <ButtonPagination
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
        >
          <IconChevronDoubleLeft className="size-5" />
        </ButtonPagination>
        <ButtonPagination
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        >
          <IconChevronLeft className="size-5" />
        </ButtonPagination>
      </div>

      <form
        onSubmit={handlePageChange}
        className="flex items-center justify-center gap-2 font-medium"
      >
        <Input
          name="value"
          min={1}
          value={inputPage}
          onChange={handleInputChange}
          className="w-10 rounded-lg bg-zinc-100 p-1 text-center outline-none focus:outline-zinc-800 dark:bg-zinc-800"
        />
        <span>/</span>
        <span>{maxPage}</span>
      </form>

      <div className="space-x-1">
        <ButtonPagination
          disabled={currentPage === maxPage}
          onClick={() => setCurrentPage(Math.min(currentPage + 1, maxPage))}
        >
          <IconChevronRight className="size-5" />
        </ButtonPagination>
        <ButtonPagination
          disabled={currentPage === maxPage}
          onClick={() => setCurrentPage(maxPage)}
        >
          <IconChevronDoubleRight className="size-5" />
        </ButtonPagination>
      </div>
    </div>
  );
}
