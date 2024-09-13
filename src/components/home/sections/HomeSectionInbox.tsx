import { useHomeInboxStore } from "@/store/homeInboxStore";
import CardInboxMessage from "../cards/CardInboxMessage";
import Pagination from "../../shared/Pagination";
import HomeInboxTab from "../tabs/HomeInboxTab";

export default function HomeSectionInbox() {
  const { currentTab, currentPage, setCurrentTab, setCurrentPage } =
    useHomeInboxStore((state) => state);

  return (
    <section className="space-y-5 rounded-2xl bg-zinc-50 p-5 shadow-md dark:bg-zinc-900">
      <h2 className="text-center text-xl font-bold">Inbox.</h2>
      <HomeInboxTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="space-y-2">
        {[...Array(5)].map((_, index) => (
          <CardInboxMessage key={index} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        maxPage={10}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
}
